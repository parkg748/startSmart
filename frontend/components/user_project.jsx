import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close'};
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  render() {
    if (this.props.user === null || this.props.user === undefined) return null;
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    if (Object.values(this.props.category).length === 0 || Object.values(this.props.project).length === 0) return null;
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
    let basicsRightHalf = 0;
    let basicsLeftHalf = 0;
    let rewardsRightHalf = 0;
    let rewardsLeftHalf = 0;
    let storyRightHalf = 0;
    let storyLeftHalf = 0;
    let aboutYouRightHalf = 0;
    let aboutYouLeftHalf = 0;
    let accountRightHalf = 0;
    let accountLeftHalf = 0;
    let basicsProgress = 7;
    let rewardsProgress = 5;
    let storyProgress = 3;
    let aboutYouProgress = 6;
    let accountProgress = 1;
    let basicsInnerCircle = 'white';
    let rewardsInnerCircle = 'white';
    let storyInnerCircle = 'white';
    let aboutYouInnerCircle = 'white';
    let accountInnerCircle = 'white';
    let basicsCheck = '#DCDEDD';
    let rewardsCheck = '#DCDEDD';
    let storyCheck = '#DCDEDD';
    let aboutYouCheck = '#DCDEDD';
    let accountCheck = '#DCDEDD';
    let project = Object.values(this.props.project)[0];
    let user = Object.values(this.props.user).filter(el => el.id == this.props.session.id)[0];
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
    let basicsPercentage = Math.floor((basicsProgress / 7) * 100);
    let basicsDegree = 360 * (basicsPercentage / 100);
    let rewardsPercentage = Math.floor((rewardsProgress / 5) * 100);
    let rewardsDegree = 360 * (rewardsPercentage / 100);
    let storyPercentage = Math.floor((storyProgress / 3) * 100);
    let storyDegree = 360 * (storyPercentage / 100);
    let aboutYouPercentage = Math.floor((aboutYouProgress / 6) * 100);
    let aboutYouDegree = 360 * (aboutYouPercentage / 100);
    let accountPercentage = Math.floor((accountProgress / 1) * 100);
    let accountDegree = 360 * (accountPercentage / 100);
    if (basicsProgress === 0) {
      basicsInnerCircle = '#027363';
      basicsCheck = 'white';
    } else if (basicsDegree > 180) {
      basicsRightHalf = 180;
      basicsLeftHalf = 360 - basicsDegree;
    } else { basicsRightHalf = basicsDegree; }
    if (rewardsProgress === 0) {
      rewardsInnerCircle = '#027363';
      rewardsCheck = 'white';
    } else if (rewardsDegree > 180) {
      rewardsRightHalf = 180;
      rewardsLeftHalf = 360 - rewardsDegree;
    } else { rewardsRightHalf = rewardsDegree; }
    if (storyProgress === 0) {
      storyInnerCircle = '#027363';
      storyCheck = 'white';
    } else if (storyDegree > 180) {
      storyRightHalf = 180;
      storyLeftHalf = 360 - storyDegree;
    } else { storyRightHalf = storyDegree; }
    if (aboutYouProgress === 0) {
      aboutYouInnerCircle = '#027363';
      aboutYouCheck = 'white';
    } else if (aboutYouDegree > 180) {
      aboutYouRightHalf = 180;
      aboutYouLeftHalf = 360 - aboutYouDegree;
    } else { aboutYouRightHalf = aboutYouDegree; }
    if (accountProgress === 0) {
      accountInnerCircle = '#027363';
      accountCheck = 'white';
    } else if (accountDegree > 180) {
      accountRightHalf = 180;
      accountLeftHalf = 360 - accountDegree;
    } else { accountRightHalf = accountDegree; }
    let totalComplete = [basicsProgress, rewardsProgress, storyProgress, aboutYouProgress, accountProgress].filter(el => el === 0).length;
    return (
      <div>
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
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='project-front-header'>
          <div className='project-front-header-inner'>
            <div className='project-front-header-title'>
              <h2>{this.props.category[Object.values(this.props.project).slice(-1)[0].categoryId].name} Project</h2>
              <h3>by {Object.values(this.props.user)[0].name}</h3>
            </div>
            <div className='project-preview'>
              <div className='project-preview-inner'>
                <Link className='project-preview-link' to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/edit`}><i className="fas fa-eye"></i>Preview</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='project-front-margin'></div>
        <div className='edit-project-page'>
          <div className='edit-project-page-inner'>
            <div className='edit-project-page-inner-inner'>
              <div className='edit-project-page-inner-inner-inner'>
                <div className='edit-project-page-inner-inner-inner-inner'>
                  <div className='edit-project-form-container'>
                    <h3>Project overview</h3>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/basics`}>
                      <div className='basics'>
                        <div className="edit-page-progress-circle">
                          <div id="progress-circle-basic" className="hold"><div style={{transform: `rotate(${basicsRightHalf}deg)`}} className="pie"></div></div>
                          <div id="progress-circle-basic-other-half" className="hold"><div style={{transform: `rotate(${basicsLeftHalf}deg)`}} className="pie"></div></div>
                          <i style={{color: `${basicsCheck}`}} className="edit-page-progress-circle-check fas fa-check"></i>
                          <div style={{backgroundColor: `${basicsInnerCircle}`}} className="innerCircle"></div>
                        </div>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Basics</div>
                          <div className='basics-content-desc'>Add an image, set your funding goal, and more.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`}>
                      <div className='rewards'>
                        <div className="edit-page-progress-circle-reward">
                          <div id="progress-circle-reward" className="hold"><div style={{transform: `rotate(${rewardsRightHalf}deg)`}} className="pie"></div></div>
                          <div id="progress-circle-reward-other-half" className="hold"><div style={{transform: `rotate(${rewardsLeftHalf}deg)`}} className="pie"></div></div>
                          <i style={{color: `${rewardsCheck}`}} className="edit-page-progress-circle-check fas fa-check"></i>
                          <div style={{backgroundColor: `${rewardsInnerCircle}`}} className="innerCircle"></div>
                        </div>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Rewards</div>
                          <div className='basics-content-desc'>Set your rewards and shipping costs.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}>
                      <div className='rewards'>
                        <div className="edit-page-progress-circle-reward">
                          <div id="progress-circle-story" className="hold"><div style={{transform: `rotate(${storyRightHalf}deg)`}} className="pie"></div></div>
                          <div id="progress-circle-story-other-half" className="hold"><div style={{transform: `rotate(${storyLeftHalf}deg)`}} className="pie"></div></div>
                          <i style={{color: `${storyCheck}`}} className="edit-page-progress-circle-check fas fa-check"></i>
                          <div style={{backgroundColor: `${storyInnerCircle}`}} className="innerCircle"></div>
                        </div>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Story</div>
                          <div className='basics-content-desc'>Add a video and detailed project description.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}>
                      <div className='rewards'>
                        <div className="edit-page-progress-circle-reward">
                          <div id="progress-circle-aboutyou" className="hold"><div style={{transform: `rotate(${aboutYouRightHalf}deg)`}} className="pie"></div></div>
                          <div id="progress-circle-aboutyou-other-half" className="hold"><div style={{transform: `rotate(${aboutYouLeftHalf}deg)`}} className="pie"></div></div>
                          <i style={{color: `${aboutYouCheck}`}} className="edit-page-progress-circle-check fas fa-check"></i>
                          <div style={{backgroundColor: `${aboutYouInnerCircle}`}} className="innerCircle"></div>
                        </div>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Profile</div>
                          <div className='basics-content-desc'>Please add your profile photo, biography, and location.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}>
                      <div className='account'>
                        <div className="edit-page-progress-circle-account">
                          <div id="progress-circle-account" className="hold"><div style={{transform: `rotate(${accountRightHalf}deg)`}} className="pie"></div></div>
                          <div id="progress-circle-account-other-half" className="hold"><div style={{transform: `rotate(${accountLeftHalf}deg)`}} className="pie"></div></div>
                          <i style={{color: `${accountCheck}`}} className="edit-page-progress-circle-check fas fa-check"></i>
                          <div style={{backgroundColor: `${accountInnerCircle}`}} className="innerCircle"></div>
                        </div>
                        <div className='account-content'>
                          <div className='basics-content-title'>Account</div>
                          <div className='basics-content-desc'>Confirm your identity and link a bank account.</div>
                          <div className='account-content-disclaimer'>Please allow up to three business days for this to be completed.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='completed-list'>
                  <div className='completed-list-content'>
                    <div className='completed-list-content-inner'>
                      <p className='completed-list-num'>{totalComplete} of 5 complete</p>
                      <p className='completed-list-num-desc'>When everything is done, you'll submit your project for review. Review of your project may take up to five business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='support-section'>
          <div className='support-section-inner'>
            <div className='support-section-inner-inner'>
              <div className='support-section-inner-content'>
                <div className='support-section-inner-content-inner'>
                  <div className='support-section-content'>
                    <h3>Support</h3>
                    <div className='support-content'>
                      <Link to='/'>
                        <div className='creator-handbook'>
                          <h5>Creator Handbook<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Learn about everything from shipping to communicating with backers.</span>
                        </div>
                      </Link>
                      <Link to='/'>
                        <div className='campus'>
                          <h5>Campus<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Ask questions and find answers from other creators.</span>
                        </div>
                      </Link>
                      <Link to='/'>
                        <div className='creator-questions'>
                          <h5>Creator Questions<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Get more help with any step of the process.</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='support-section-delete-section'>
            <div className='support-section-delete-section-one'>
              <div className='support-section-delete-section-two'>
                <div className='support-section-delete-section-three'>
                  <div className='support-section-delete-section-four'>
                    <button onClick={() => this.deleteCurrentProject()}><i className="fas fa-trash"></i> Delete project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default UserProject;
