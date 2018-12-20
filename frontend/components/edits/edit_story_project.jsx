import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageFooter from './edit_page_footer';
import EditPageNav from './edit_page_nav';

class EditStoryProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProfileMenu: 'js-modal-close',
      challenges: '',
      editor_html: '',
      theme: 'snow'
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = {id: this.props.match.params.projectId,
                              challenges: this.state.challenges === '' ? Object.values(getState().entities.project).filter(el => el.id == this.props.match.params.projectId)[0].challenges : this.state.challenges,
                              editor_html: this.state.editor_html === '' ? Object.values(getState().entities.project).filter(el => el.id == this.props.match.params.projectId)[0].editorHtml : this.state.editor_html};
    this.props.updateProject(params).then(() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`));
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

  handleChange (html) {
  	this.setState({ editor_html: html });
  }

  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (getState().session.session === null || getState().session.id === null) return <Redirect to='/login' />;
    if (this.props.project === undefined || this.props.project === null) return null;
    if (this.props.user === undefined || this.props.user === null) return null;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
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
    let basicsProgress = 7;
    let rewardsProgress = 5;
    let storyProgress = 3;
    let aboutYouProgress = 6;
    let accountProgress = 1;
    let project = Object.values(this.props.project).filter(el => el.id === this.props.match.params.projectId)[0];
    let user = Object.values(this.props.user)[0];
    let completed = [];
    if (project.imageUrl != '') basicsProgress--;
    if (project.title != '') basicsProgress--;
    if (project.subcategory != '') basicsProgress--;
    if (project.city != '') basicsProgress--; aboutYouProgress--;
    if (project.description != '') basicsProgress--;
    if (project.fundingGoal != null) basicsProgress--;
    if (project.eta != null) basicsProgress--;
    if (project.editorHtml != '') storyProgress--;
    if (project.challenges != '') storyProgress--;
    if (user.profileUrl != '') aboutYouProgress--;
    if (user.name != '') aboutYouProgress--;
    if (user.biography != '') aboutYouProgress--;
    if (user.websites.length != 0) aboutYouProgress--;
    if (user.googleAnalytics != null) aboutYouProgress--;
    if (user.email != '') accountProgress--;
    if (basicsProgress === 0) { completed.push('basic'); }
    if (rewardsProgress === 0) { completed.push('reward'); }
    if (storyProgress === 0) { completed.push('story'); }
    if (aboutYouProgress === 0) { completed.push('aboutyou'); }
    if (accountProgress === 0) { completed.push('account'); }
    return (
      <div className='edit-story-background'>
        <EditPageNav navbarWidth={navbarWidth} profile={profile} />
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
        <ul>
          <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
          <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
          <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
        </ul>
        <div className='edit-page-content'>
          <EditPageNavbar buttonHighlight={'story-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
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
                                <label htmlFor='video-upload'>
                                  <input id='video-upload' onChange={(e) => this.handleFile(e)} type='file' accept="video/*" capture />
                                  <span className='choose-an-image'>Choose a video from your computer</span>
                                  <span className='choose-an-image-description'>MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV • 5GB file limit</span>
                                </label>
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
                            <ReactQuill
                              theme={this.state.theme}
                              onChange={this.handleChange}
                              value={this.state.editor_html === '' && Object.values(getState().entities.project).length > 0 ? getState().entities.project[this.props.match.params.projectId].editorHtml : this.state.editor_html}
                              modules={EditStoryProject.modules}
                              formats={EditStoryProject.formats}
                              bounds={'.app'}
                              placeholder={this.props.placeholder}
                             />
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
                                <textarea onChange={this.update('challenges')} value={Object.values(getState().entities.project).filter(el => el.id == this.props.match.params.projectId)[0] != undefined ? Object.values(getState().entities.project).filter(el => el.id == this.props.match.params.projectId)[0].challenges : this.state.challenges}></textarea>
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
                    <p>StartSmart is a global community, and including translations of your description and rewards, or using our <Link className='creator-faq policy-link' to='/blog/introducing-subtitles-and-captions'>Captions & Subtitles</Link> to make your videos more accessible, will help your project have a wider appeal. If you're including text or audio in a language outside of those that we currently support (English, French, German, and Spanish), we also ask that you include English translations or subtitles.</p>
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
        <EditPageFooter handleSubmit={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}

EditStoryProject.modules = {
  toolbar: [
    ['bold', 'italic'],
    [{'header': '2'}],
    [{'list': 'bullet'}],
    ['link', 'video', 'image']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
EditStoryProject.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default EditStoryProject;
