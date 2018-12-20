import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageFooter from './edit_page_footer';
import EditPageNav from './edit_page_nav';

class EditAboutYouProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  name: '',
                  biography: '',
                  websites: [],
                  website: '',
                  google_analytics: '',
                  profileUrl: "",
                  profileFile: "",
                  profileUpload: 'close',
                  nameBorder: '',
                  biographyBorder: '',
                  yourLocationBorder: '',
                  websitesBorder: '',
                  googleAnalyticsBorder: ''};
    this.handleFile = this.handleFile.bind(this);
    this.addBlackBorder = this.addBlackBorder.bind(this);
    this.addWebsite = this.addWebsite.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  addBlackBorder(type) {
    if (type === 'name') {
      this.setState({nameBorder: 'black-border', biographyBorder: '', yourLocationBorder: '', websitesBorder: '', googleAnalyticsBorder: ''});
    } else if (type === 'biography') {
      this.setState({nameBorder: '', biographyBorder: 'black-border', yourLocationBorder: '', websitesBorder: '', googleAnalyticsBorder: ''});
    } else if (type === 'your-location') {
      this.setState({nameBorder: '', biographyBorder: '', yourLocationBorder: 'black-border', websitesBorder: '', googleAnalyticsBorder: ''});
    } else if (type === 'websites') {
      this.setState({nameBorder: '', biographyBorder: '', yourLocationBorder: '', websitesBorder: 'black-border', googleAnalyticsBorder: ''});
    } else if (type === 'google-analytics') {
      this.setState({nameBorder: '', biographyBorder: '', yourLocationBorder: '', websitesBorder: '', googleAnalyticsBorder: 'black-border'});
    }
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
    const params = {id: this.props.match.params.userId,
                      name: this.props.user ? Object.values(this.props.user)[0].name : this.state.name,
                      biography: this.state.biography === '' ? Object.values(this.props.user)[0].biography : this.state.biography,
                      websites: this.props.user ? Object.values(this.props.user)[0].websites : this.state.websites,
                      googleAnalytics: this.props.user ? Object.values(this.props.user)[0].google_analytics : this.state.google_analytics};
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

  addWebsite() {
    let websites = this.state.websites;
    websites.push(this.state.website);
    this.setState({websites});
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
    let basicsProgress = 7;
    let rewardsProgress = 5;
    let storyProgress = 3;
    let aboutYouProgress = 6;
    let accountProgress = 1;
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    let user = Object.values(this.props.user)[0];
    let completed = [];
    if (project != undefined) {
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
    }
    if (basicsProgress === 0) { completed.push('basic'); }
    if (rewardsProgress === 0) { completed.push('reward'); }
    if (storyProgress === 0) { completed.push('story'); }
    if (aboutYouProgress === 0) { completed.push('aboutyou'); }
    if (accountProgress === 0) { completed.push('account'); }
    return (
      <div>
        <div className='edit-about-you-background'>
          <EditPageNav navbarWidth={navbarWidth} profile={profile} />
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
          <ul>
            <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
            <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
            <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
          </ul>
          <div className='edit-page-content'>
            <EditPageNavbar buttonHighlight={'aboutyou-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
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
                              <div className={`name-input ${this.state.nameBorder}`}>
                                <input onClick={() => this.addBlackBorder('name')} onChange={this.update('name')} type='text' value={Object.values(this.props.user)[0].name} />
                              </div>
                              <div className='name-description'>
                                <p>Heads up: Once you launch a project, you cannot make changes to your name on StartSmart.</p>
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
                                <div className={`biography-input ${this.state.biographyBorder}`}>
                                  <textarea onClick={() => this.addBlackBorder('biography')} onChange={this.update('biography')} value={this.state.biography === '' ? Object.values(getState().entities.users)[0].biography : this.state.biography}></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='your-location'>
                            <div className='your-location-content'>
                              <div className='profile-photo-title'>Your location</div>
                              <div className='your-location-dropdown'>
                                <span>{project != undefined ? project.city : ''}, {project != undefined ? project.state : ''}</span>
                                <div className='your-location-dropdown-close'>
                                  <i className="your-location-button fas fa-times"></i>
                                </div>
                              </div>
                              <input className={`${this.state.yourLocationBorder}`} onClick={() => this.addBlackBorder('your-location')} type='text' />
                              <i className="location-search-aboutyou fas fa-search"></i>
                            </div>
                          </div>
                          <div className='websites'>
                            <div className='websites-content'>
                              <div className='profile-photo-title'>Websites</div>
                              <div className='websites-content-inner'>
                                <div className='websites-content-inner-input'>
                                  <div className={`websites-input ${this.state.websitesBorder}`}>
                                    <input onClick={() => this.addBlackBorder('websites')} onChange={this.update('website')} type='text' defaultValue={this.state.websites[0]} />
                                  </div>
                                  <button onClick={() => this.addWebsite()} className='websites-add-button'>Add</button>
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
                                <div className={`google-analytics-content-input ${this.state.googleAnalytics}`}>
                                  <input onClick={() => this.addBlackBorder('google-analytics')} onChange={this.update('google_analytics')} type='text' placeholder='UA-XXXXXXXX-X' value={this.state.google_analytics} />
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
          <EditPageFooter handleSubmit={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}

export default EditAboutYouProject;
