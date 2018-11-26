import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
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

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png"/></button></div>;
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
            <Link to='/explore' className='explore'>Explore</Link>
            <Link to='/learn' className='project'>Start a project</Link>
          </section>
          <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className={`search-signin ${navbarWidth}`}>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div className={`profile-icon-menu ${this.state.displayProfileMenu}`}>
          <div className='profile-menu-header'>Grace</div>
          <div className='profile-menu-body'>
            <div className='profile-menu-body-left'>
              <div className='profile-menu-body-left-header'>MY STUFF</div>
              <ul>
                <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                <li><Link to='/recommendations'>Recommended for you</Link></li>
                <li><Link to='/messages/inbox'>Messages</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to={`/profile/${Object.values(this.props.user)[0].id}`}>Profile</Link></li>
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
                {currentUserProjects.slice(0, 5).map((project, idx) => {
                  if (project.title === '') {
                    return <li key={idx}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src='https://i.imgur.com/s5GppRq.png'/>
                        </div>
                        <span><a onClick={() => this.changeProjectPage(project.id)}>Untitled</a></span>
                      </div>
                    </li>
                  } else {
                    return <li key={idx}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src={project.imageUrl} />
                        </div>
                        <span><a onClick={() => this.changeProjectPage(project.id)}>{project.title}</a></span>
                      </div>
                    </li>
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='account-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='account-container-blue-bar'></div>
                <ul>
                  <li>Account</li>
                  <li>Edit Profile</li>
                  <li>Notifications</li>
                  <li>Payment methods</li>
                  <li>Following</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='account-container-body'>
            <div className='account-container-body-one'>
              <div className='account-container-body-two'>
                <form>
                  <ul>
                    <li>
                      <span><strong>Email</strong></span>
                      <input type='text' />
                      <span><strong>Unverified</strong> <Link className='policy-link thin-font' to='/'>Re-send verification-email</Link></span>
                    </li>
                    <li>
                      <span><strong>Password</strong></span>
                      <button className='change-password'>Change password</button>
                    </li>
                    <li>
                      <span><strong>Current Password</strong></span>
                      <input type='text' />
                      <span className='thin-font'>Enter your current password to save these changes.</span>
                    </li>
                  </ul>
                  <div className='save-settings'>
                    <input type='submit' value='Save settings '/>
                  </div>
                </form>
              </div>
              <div className='account-container-body-three'>
                <div className='account-container-body-four'>
                  <ul>
                    <li>
                      <span><strong>Privacy</strong></span>
                      <ul>
                        <li className='no-padding policy-link'>Opt out of Following</li>
                        <li className='no-padding policy-link'>Turn off recommendations</li>
                        <li className='no-padding policy-link'>Request my personal data</li>
                      </ul>
                    </li>
                    <li>
                      <span><strong>Facebook</strong></span>
                      <button><i className="fab fa-facebook"></i> Log in with Facebook</button>
                    </li>
                    <li>
                      <span><strong>Security</strong></span>
                      <ul>
                        <li className='add-line-height policy-link'>Verify your email to enable two-factor authentication</li>
                        <li className='no-padding policy-link'>Log me out on all other devices</li>
                      </ul>
                    </li>
                    <li>
                      <span><strong>Delete Account</strong></span>
                      <ul>
                        <li className='no-padding policy-link'>Delete my StartSmart account</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='account-container-login-history'>
              <div className='account-container-login-history-one'>
                <h3>Login History</h3>
                <p>This feature provides information about your account usage and other related changes. If you see any suspicious activity, change your password immediately.</p>
                <div className='login-history-header'>
                  <div className='login-history-activity'>
                    <h5>Activity</h5>
                  </div>
                  <div className='login-history-time'>
                    <h5>Time</h5>
                  </div>
                  <div className='login-history-location'>
                    <h5>Location</h5>
                  </div>
                  <div className='login-history-ip-address'>
                    <h5>IP Address</h5>
                  </div>
                </div>
                <div className='login-history-header-info'>
                  <ul>
                    <li>
                      <div className='login-history-header-info-one'>
                        <div className='login-history-header-info-two'>
                          <div className='login-history-header-login-successful'>Login successful</div>
                          <div className='login-history-header-time-info'>Tue, October 16 2018 9:49 AM PDT</div>
                          <div className='login-history-header-location-info'>San Francisco, 94133, US</div>
                          <div className='login-history-header-ipaddress-info'>12.23.56.98</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='login-history-load-more'>
                    <button>Load more</button>
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

export default Account;
