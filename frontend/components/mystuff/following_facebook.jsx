import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';

class FollowingFacebook extends React.Component {
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
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='facebook-friends'>
          <div className='facebook-friends-left'>
            <div className='facebook-friends-left-one'>
              <div className='facebook-friends-left-two'>
                <h2>Follow creators and Facebook friends to discover more projects.</h2>
                <div className='facebook-friends-left-three'>
                  <button>Find creators</button>
                </div>
              </div>
              <div className='facebook-friends-left-four'>
                <div className='facebook-friends-facebook-button'>
                  <button><i className="facebook-friends-logo fab fa-facebook"></i>Connect with Facebook</button>
                </div>
              </div>
              <h5>If you connect with Facebook, we’ll import your name and profile photo. We&#39;ll also access your friend list so you can follow your Facebook friends on StartSmart. We will never post anything on Facebook without your permission.</h5>
            </div>
          </div>
          <div className='facebook-friends-right'>
            <div className='facebook-friends-right-one'>
              <div className='facebook-friends-right-two'>
                <h2>Following</h2>
                <p>When you follow creators and your Facebook friends on Kickstarter, you’ll be notified when they back or launch a project. And while you’re exploring, we’ll show you whom has backed each project you find. (You can manage your notification settings <Link className='policy-link' to='/'>here</Link>.)</p>
                <div className='facebook-friends-right-three'>
                  <h5>Heads up: We don’t display your pledge amount, just the fact that you’re a proud backer. You can opt out of this feature <Link className='policy-link' to='/'>here</Link>.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowingFacebook;
