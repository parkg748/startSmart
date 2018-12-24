import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  email: '',
                  searchBar: 'search-bar-close'};
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(getState().session.id);
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  saveSettings() {
    let user = loggedInUser[0];
    this.props.updateUser({id: getState().session.id,
                          email: this.state.email === '' ? user.email : this.state.email})
              .then(() => window.location.reload());
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
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let loggedInUser = Object.values(this.props.user);
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && loggedInUser[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={loggedInUser[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : loggedInUser[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (loggedInUser[0].projects != null) {
      loggedInUser[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    const monthFullName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let lastLoggedIn = loggedInUser[0].updatedAt.split('-');
    let lastLoggedInYear = lastLoggedIn[0];
    let lastLoggedInMonth = monthFullName[lastLoggedIn[1] - 1];
    let day = lastLoggedIn[2].indexOf('T');
    let lastLoggedInDay = lastLoggedIn[2].slice(0, day);
    let lastLoggedInDayOfWeek = new Date(loggedInUser[0].updatedAt).toString();
    lastLoggedInDayOfWeek = lastLoggedInDayOfWeek.split(' ')[0];
    let time = lastLoggedIn[2].split('T')[1].split(':');
    let lastLoggedInHour = 0;
    let lastLoggedInMin = time[1];
    let daylightTime = 'AM';
    if (parseInt(time[0]) > 12) {
      daylightTime = 'PM';
      lastLoggedInHour = parseInt(time[0]) - 12;
    } else if (parseInt(time[0]) === 0) {
      lastLoggedInHour = 12;
    } else if (parseInt(time[0]) === 12) {
      daylightTime = 'PM';
      lastLoggedInHour = 12;
    } else {
      lastLoggedInHour = time[0];
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={loggedInUser.filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='account-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='account-container-blue-bar'></div>
                <ul>
                  <li>Account</li>
                  <li className='inactive'><Link to='/settings/profile'>Edit Profile</Link></li>
                  <li className='inactive'><Link to='/settings/notifications'>Notifications</Link></li>
                  <li className='inactive'><Link to='/'>Payment methods</Link></li>
                  <li className='inactive'><Link to='/profile/following/find_creators'>Following</Link></li>
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
                      <input type='text' onChange={this.update('email')} value={this.state.email === '' ? loggedInUser[0].email : this.state.email}/>
                      <span><strong>Unverified</strong> <Link className='policy-link thin-font' to='/'>Re-send verification-email</Link></span>
                    </li>
                    <li>
                      <span><strong>Password</strong></span>
                      <button className='change-password'>Change password</button>
                    </li>
                    <li>
                      <span><strong>Current Password</strong></span>
                      <input type='password' />
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
                          <div className='login-history-header-time-info'>{lastLoggedInDayOfWeek}, {lastLoggedInMonth} {lastLoggedInDay} {lastLoggedInYear} {lastLoggedInHour}:{lastLoggedInMin} {daylightTime} PDT</div>
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
