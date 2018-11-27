import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

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
    this.props.history.push(`/users/${getState().session.id}/projects/${idx}`);
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
      <div>
        <div className='edit-account-background'>
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
                      <li className='edit-option-story'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                      <li className='edit-option-about-you'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                      <li className='edit-option-account current-page-button-highlight'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                      <li className='preview'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/edit`}>Preview</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
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
        <div className='edit-page-footer'>
          <div className='edit-page-footer-changes'>
            <a onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`)}>Discard changes</a>
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAccountProject;
