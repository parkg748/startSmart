import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchProjects();
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

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    if (Object.values(this.props.category).length === 0 || Object.values(this.props.project).length === 0) return null;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
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
        <div className={`profile-icon-menu ${this.state.displayProfileMenu}`}>
          <div className='profile-menu-header'>{Object.values(this.props.user)[0].name}</div>
          <div className='profile-menu-body'>
            <div className='profile-menu-body-left'>
              <div className='profile-menu-body-left-header'>MY STUFF</div>
              <ul>
                <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                <li><Link to='/recommendations'>Recommended for you</Link></li>
                <li><Link to='/messages/inbox'>Messages</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to={`/profile/${this.props.user.id}`}>Profile</Link></li>
                <li><Link to='/profile/backings'>Backed projects</Link></li>
                <li><Link to='/profile/projects'>My projects</Link></li>
                <li><Link to='/profile/starred'>Saved projects</Link></li>
              </ul>
            </div>
            <div className='profile-menu-body-middle'>
              <div className='profile-menu-body-left-header'>SETTINGS</div>
              <ul>
                <li><Link to='/settings/account'>Account</Link></li>
                <li><Link to='/settings/profile'>Edit profile</Link></li>
                <li>Notifications</li>
              </ul>
            </div>
            <div className='profile-menu-body-right'>
              <div className='profile-menu-body-left-header'>MY PROJECTS</div>
              <ul>
                {currentUserProjects.slice(0, 5).map(project => {
                  if (project.title === '') {
                    return <li>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'></div>
                        <span>Untitled</span>
                      </div>
                    </li>
                  } else {
                    return <li>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'></div>
                        <span>{project.title}</span>
                      </div>
                    </li>
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='project-front-header'>
          <div className='project-front-header-inner'>
            <div className='project-front-header-title'>
              <h2>{this.props.category[Object.values(this.props.project).slice(-1)[0].categoryId].name} Project</h2>
              <h3>by {this.props.user.name}</h3>
            </div>
            <div className='project-preview'>
              <div className='project-preview-inner'>
                <Link className='project-preview-link' to='/'><i className="fas fa-eye"></i>Preview</Link>
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
                    <button><i className="fas fa-trash"></i> Delete project</button>
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
