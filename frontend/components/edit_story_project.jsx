import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Editor from './text_editor';
import Modal from './modal';

class EditStoryProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProfileMenu: 'js-modal-close',
      challenges: ''
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id}/projects/${idx}`);
    window.location.reload();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProject({challenges: this.state.challenges}).then(() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`));
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    return (
      <div className='edit-story-background'>
        <nav>
          <section className='explore-project'>
            <Link to='/help/handbook' className='creator-handbook-navbar'>Creator Handbook</Link>
            <Link to='/campus' className='campus-navbar'>Campus</Link>
            <Link to='/help' className='help-navbar'>Help</Link>
            <Link to='/rules' className='rules-navbar'>Project Rules</Link>
          </section>
          <Link to='/'><img className='center-logo-position logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className={`search-signin ${navbarWidth}`}>
            {profile}
          </section>
        </nav>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <ul>
          <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
          <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
          <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
        </ul>
        <div className='edit-page-content'>
          <div className='edit-page-navbar'>
            <div className='edit-page-navbar-inner'>
              <ul>
                <li className='exit-editor'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`}><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                <li className='edit-options'>
                  <ul>
                    <li className='edit-option-basics'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/basics`}><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                    <li className='edit-option-rewards'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`}><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                    <li className='edit-option-story current-page-button-highlight'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                    <li className='edit-option-about-you'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                    <li className='edit-option-account'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                    <li className='preview'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/edit`}>Preview</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='edit-form'>
            <div className='edit-form-title'>
              <div className='edit-form-title-inner'>
                <h2>Tell us about your project.</h2>
                <p>Use images, video, and a compelling description to describe what you’re making. Be sure to get specific about why people should be excited about your project.</p>
              </div>
            </div>
            <div className='edit-form-box'>
              <div className='edit-form-box-inner'>
                <div className='edit-form-input'>
                  <div className='edit-form-input-inner'>
                    <form>
                      <div className='project-video'>
                        <div className='project-video-inner'>
                          <div className='project-video-inner-title'>Project video</div>
                          <div className='project-video-inner-content'>
                            <div className='project-video-upload'>
                              <div className='project-video-upload-inner'>
                                <span className='choose-an-image'>Choose a video from your computer</span>
                                <span className='choose-an-image-description'>MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV • 5GB file limit</span>
                              </div>
                              <div className='project-video-content'>
                                <p>Have fun – add a video! Projects with a video have a much higher chance of success. For a dose of inspiration, check out the <Link className='project-video-content-link policy-link' to='/help/handbook/your_story'>Creator Handbook</Link>. Need some help? Visit our <Link className='creator-faq policy-link' to='/hc/en-us/articles/115005128494'>Creator FAQ</Link>.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='project-description'>
                        <div className='project-description-content'>
                          <div className='project-description-inner-title'>Project description</div>
                          <div className='project-description-content-inner'>
                            <div className='project-description-description'>
                              <span>Use your project description to share more about what you’re raising funds to do and how you plan to pull it off. It’s up to you to make the case for your project.</span>
                            </div>
                            <Editor/>
                          </div>
                        </div>
                      </div>
                      <div className='risks-challenges'>
                        <div className='risks-challenges-content'>
                          <div className='risks-challenges-title'>Risks and challenges</div>
                          <div className='risks-challenges-body'>
                            <div className='risks-challenges-description'>
                              <p className='risks-challenges-description-question'>What are the risks and challenges that come with completing your project, and how are you qualified to overcome them?</p>
                              <p>Every project comes with its own unique risks and challenges. Let your backers know how you’re prepared to overcome these challenges by setting proper expectations and communicating anything that could cause delays or changes in your production plan.</p>
                              <p>Please mention if you’re still in the process of completing any past projects or if your project requires approval or premarket review from an outside company or agency before you can distribute rewards.</p>
                              <p>Being fully transparent and addressing these potential challenges from the start will help backers understand that your project is a work in progress, and that you’ve thought through all of the possible outcomes.</p>
                              <div className='risks-challenges-input'>
                                <textarea onChange={this.update('challenges')}></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='project-faq'>
                        <div className='project-faq-content'>
                          <div className='project-faq-title'>Project FAQs</div>
                          <div className='project-faq-description'>
                            <div className='project-faq-description-text'>
                              <p>You can add frequently asked questions to the FAQ tab on your project page once it goes live. <Link className='creator-faq policy-link' to='/hc/en-us/categories/115000492154-Creator-questions'>Learn more</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='story-side-bar'>
                  <div className='story-video'>
                    <div className='story-video-play'>
                      <div className='play-button'>
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className='how-to-make-video'>
                      <i className="far fa-lightbulb"></i>
                      <span>How to:</span>
                      <span>Make an awesome video</span>
                    </div>
                    <h5>Looking for advice?</h5>
                    <p>Visit Campus to read about <Link className='preparing-for-project-link' to='/campus/questions/what-tips-do-you-have-for-making-a-great-project-video-on-a-limited-budget'>making great videos</Link> and more.</p>
                    <h5>Important reminder</h5>
                    <p>Kickstarter is a global community, and including translations of your description and rewards, or using our <Link className='creator-faq policy-link' to='/blog/introducing-subtitles-and-captions'>Captions & Subtitles</Link> to make your videos more accessible, will help your project have a wider appeal. If you're including text or audio in a language outside of those that we currently support (English, French, German, and Spanish), we also ask that you include English translations or subtitles.</p>
                    <p>Don't use music, images, video, or other content that you don't have the rights to. Reusing copyrighted material is almost always against the law and can lead to <strong>expensive lawsuits</strong> down the road. The easiest way to avoid copyright troubles is to create all the content yourself or use content that is free for public use.</p>
                    <p>For legal, mostly free alternatives, check out some of these great resources: <a className='creator-faq policy-link' href='https://soundcloud.com/'>SoundCloud</a>, <a className='creator-faq policy-link' href='https://help.vimeo.com/hc/en-us/articles/236022047-Music-Store'>Vimeo Music Store</a>, <a className='creator-faq policy-link' href='http://freemusicarchive.org/'>Free Music Archive</a>, and <a className='creator-faq policy-link' href='http://ccmixter.org/'>ccMixter</a>.</p>
                  </div>
                </div>
              </div>
              <div className='delete-project'>
                <i className="fas fa-times"></i>
                <span onClick={() => this.deleteCurrentProject()}>Delete project</span>
              </div>
            </div>
          </div>
        </div>
        <div className='story-edit-page-footer'>
          <div className='story-edit-page-footer-changes'>
            <a onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`)}>Discard changes</a>
            <button onClick={(e) => this.handleSubmit(e)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditStoryProject;
