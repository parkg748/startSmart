import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close'};
  }

  componentDidMount() {
    this.props.fetchUser(getState().session.id);
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
    return (
      <div>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} />
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(getState().entities.users)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='edit-profile-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='notifications-blue-bar'></div>
                <ul>
                  <li className='inactive'><Link to='/settings/account'>Account</Link></li>
                  <li className='inactive'><Link to='/settings/profile'>Edit Profile</Link></li>
                  <li>Notifications</li>
                  <li className='inactive'><Link to='/'>Payment methods</Link></li>
                  <li className='inactive'><Link to='/profile/following/find_creators'>Following</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='notifications-container'>
            <div className='notifications-left'>
              <a>Account Notifications</a>
              <a>Newsletters</a>
            </div>
            <div className='notifications-right'>
              <h3>Account Notifications</h3>
              <label>Projects you've backed</label>
              <div className='notifications-section'>
                <div className='email-phone'>
                  <div className='email-icon'>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className='email-icon'>
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                </div>
                <span>Project updates</span>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
