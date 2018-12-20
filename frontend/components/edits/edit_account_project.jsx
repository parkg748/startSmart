import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageFooter from './edit_page_footer';
import EditPageNav from './edit_page_nav';

class EditAccountProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
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

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
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
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
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
      <div>
        <div className='edit-account-background'>
          <EditPageNav navbarWidth={navbarWidth} profile={profile} />
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
          <ul>
            <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
            <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
            <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
          </ul>
          <div className='edit-page-content'>
            <EditPageNavbar buttonHighlight={'account-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
            <div className='edit-form'>
              <div className='edit-form-title'>
                <div className='edit-form-title-inner'>
                  <h2>Confirm your identity and link a bank account.</h2>
                  <p>Provide additional details about yourself and where funds should be sent.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='account-box'>
                          <div className='account-box-inner'>
                            <div className='account-box-inner-inner'>Contact details</div>
                            <div className='account-box-content'>
                              <div className='account-box-input'>
                                <div className='account-box-input-title'>
                                  <div className='account-box-input-title-inner'>Email</div>
                                  <div className='account-box-input-info'>
                                    <div className='account-box-input-info-header'>
                                      <span>{Object.values(this.props.user)[0].email}</span>
                                      <div className='account-box-input-info-verification'>Unverified</div>
                                    </div>
                                    <div className='account-box-input-info-desc'>
                                      <p>In order to create a project you’ll need to verify your email. Send a verification email to yourself using the button below, then use the link in the email to verify your email address.</p>
                                      <button className='send-verification-email'>Send verification email</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Funds recipient</div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Bank account</div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Payment source</div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='account-side-bar'>
                    <h5>Eligibility requirements</h5>
                    <p>To be eligible to start a StartSmart project as a creator in Belgium, you need to meet the following requirements:</p>
                    <ul>
                      <li>You are 18 years of age or older.</li>
                      <li>You are a permanent resident of Belgium.</li>
                      <li>You are creating a project in your own name, or on behalf of a registered legal entity with which you are affiliated.</li>
                      <li>You have a bank account, address, and government-issued ID from Belgium. An EU-issued ID is also acceptable.</li>
                      <li>If running your project as an individual, the linked bank account must belong to the person who verified their identity for your project.</li>
                      <li>You have a major credit or debit card.</li>
                    </ul>
                    <h5>Questions about taxes?</h5>
                    <p>Check out <Link className='policy-link' to='/help/taxes'>StartSmart and Taxes</Link></p>
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

export default EditAccountProject;
