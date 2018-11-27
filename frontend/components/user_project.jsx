import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
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
    this.props.history.push(`/users/${getState().session.id}/projects/${idx}`);
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
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Basics</div>
                          <div className='basics-content-desc'>Add an image, set your funding goal, and more.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`}>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Rewards</div>
                          <div className='basics-content-desc'>Set your rewards and shipping costs.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Story</div>
                          <div className='basics-content-desc'>Add a video and detailed project description.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Profile</div>
                          <div className='basics-content-desc'>Please add your profile photo, biography, and location.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}>
                      <div className='account'>
                        <i className="far fa-check-circle"></i>
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
                      <p className='completed-list-num'>0 of 5 complete</p>
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
