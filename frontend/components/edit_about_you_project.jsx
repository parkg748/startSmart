import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

class EditAboutYouProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  name: '',
                  biography: '',
                  websites: '',
                  google_analytics: '',
                  profileUrl: "",
                  profileFile: "",
                  profileUpload: 'close'};
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({profileFile: file, profileUrl: fileReader.result, profileUpload: "open"});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if(this.state.profileFile){
        formData.append('user[profile_url]', this.state.profileFile);
        $.ajax({
          url: `/api/users/${this.props.match.params.userId}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false
        });
    }
    const params = {id: this.props.match.params.userId, name: this.props.user ? Object.values(this.props.user)[0].name : this.state.name, biography: this.state.biography === '' ? Object.values(this.props.user)[0].biography : this.state.biography, websites: this.props.user ? Object.values(this.props.user)[0].websites : this.state.websites, googleAnalytics: this.props.user ? Object.values(this.props.user)[0].google_analytics : this.state.google_analytics};
    this.props.updateUser(params).then(() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`));
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
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
    if (this.props.user === null || this.props.user === undefined) return null;
    if (this.props.project === null || this.props.project === undefined) return null;
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    const imagePreview = this.state.profileUrl ? <img src={this.state.profileUrl}/> : null;
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
    let currentProjectImage = '';
    if (this.state.profileUpload === 'close') {
      currentProjectImage = (<div className='profile-photo-upload'>
        <label htmlFor='profile-upload'>
          <input id='profile-upload' onChange={(e) => this.handleFile(e)} type='file' />
          <div className='profile-photo-upload-inner'>
            <span className='choose-an-image'>Choose an image from your computer</span>
          </div>
          <div className='profile-photo-description'>
            <p>JPEG, PNG, GIF, or BMP • 200MB file limit</p>
          </div>
        </label>
      </div>);
    } else {
      currentProjectImage = (<div className='profile-photo-upload'>
        <label htmlFor='profile-upload'>
          <input id='profile-upload' onChange={(e) => this.handleFile(e)} type='file' />
          {imagePreview}
          <div className='profile-photo-upload-inner-upload'>
            <span className='choose-an-image'>Choose an image from your computer</span>
          </div>
          <div className='profile-photo-description'>
            <p>JPEG, PNG, GIF, or BMP • 200MB file limit</p>
          </div>
        </label>
      </div>);
    }
    return (
      <div>
        <div className='edit-about-you-background'>
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
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
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
                      <li className='edit-option-story'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                      <li className='edit-option-about-you current-page-button-highlight'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
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
                  <h2>Tell us more about yourself.</h2>
                  <p>Add a bio and links to your website and social media profiles. Think of it as your creative resume.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='profile-photo'>
                          <div className='profile-photo-inner'>
                            <div className='profile-photo-title'>Profile photo</div>
                            <div className='profile-photo-inner-content'>
                              {currentProjectImage}
                            </div>
                          </div>
                        </div>
                        <div className='name-box'>
                          <div className='name-box-content'>
                            <div className='profile-photo-title'>Name</div>
                            <div className='name-content-inner'>
                              <div className='name-input'>
                                <input onChange={this.update('name')} type='text' value={Object.values(this.props.user)[0].name} />
                              </div>
                              <div className='name-description'>
                                <p>Heads up: Once you launch a project, you cannot make changes to your name on Kickstarter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='facebook-connect'>
                          <div className='facebook-connect-content'>
                            <div className='profile-photo-title'>Facebook Connect</div>
                            <div className='facebook-connect-content-inner'>
                              <div className='facebook-connect-description'>
                                <p>Build trust with potential backers by showing there's a real person behind the project. Your name and number of friends will be displayed.</p>
                                <button className='facebook-connect-button'>
                                  <i className="fab fa-facebook"></i>Log in with Facebook
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='biography-box'>
                            <div className='biography-content'>
                              <div className='profile-photo-title'>Biography</div>
                              <div className='biography-content-inner'>
                                <div className='biography-input'>
                                  <textarea onChange={this.update('biography')} value={this.state.biography === '' ? Object.values(getState().entities.users)[0].biography : this.state.biography}></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='your-location'>
                            <div className='your-location-content'>
                              <div className='profile-photo-title'>Your location</div>
                              <div className='your-location-dropdown'>
                                <span>San Francisco, CA</span>
                                <i className="your-location-button fas fa-times"></i>
                              </div>
                            </div>
                          </div>
                          <div className='websites'>
                            <div className='websites-content'>
                              <div className='profile-photo-title'>Websites</div>
                              <div className='websites-content-inner'>
                                <div className='websites-content-inner-input'>
                                  <div className='websites-input'>
                                    <input onChange={this.update('websites')} type='text' defaultValue={this.state.websites} />
                                  </div>
                                  <button className='websites-add-button'>Add</button>
                                </div>
                                <div className='websites-description'>
                                  <p>Some suggestions: Link to your blog, portfolio, Twitter, Instagram, etc.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='google-analytics'>
                            <div className='google-analytics-content'>
                              <div className='profile-photo-title'>Google Analytics</div>
                              <div className='google-analytics-content-inner'>
                                <div className='google-analytics-content-input'>
                                  <input onChange={this.update('google_analytics')} type='text' placeholder='UA-XXXXXXXX-X' value={this.state.google_analytics} />
                                </div>
                                <div className='google-analytics-description'>
                                  <p>Enter your tracking ID to enable Google Analytics for your project. <Link className='creator-faq policy-link' to='/hc/en-us/articles/115005138613'>Check out our FAQ for more info</Link>.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='about-you-side-bar'>
                      <h5>Important notes on accountability</h5>
                      <p>Part of every creator’s job is earning their backers’ trust, especially backers who don’t personally know them. It’s up to you to make the case that you can successfully bring your project to life. Present your qualifications and share links that help reinforce them.</p>
                      <h5>Returning creators</h5>
                      <p>Launching another project? Awesome! For the sake of transparency, just be sure all of them are under the same account. In special circumstances where this won't work (this project’s a solo album, the last one was with your mariachi band) just be sure to link to any previous projects in your bio.</p>
                    </div>
                  </div>
                  <div className='delete-project'>
                    <i className="fas fa-times"></i>
                    <span onClick={() => this.deleteCurrentProject()}>Delete project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='edit-page-footer'>
            <div className='edit-page-footer-changes'>
              <a onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`)}>Discard changes</a>
              <button onClick={(e) => this.handleSubmit(e)}>Save</button>
            </div>
          </div>
      </div>
    );
  }
}

export default EditAboutYouProject;
