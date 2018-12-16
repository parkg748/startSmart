import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(getState().session.id);
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
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='following-header'>
          <div className='following-header-inner'>
            <div className='following-header-content'>
              <div className='following-header-content-inner'>
                <div className='following-header-one'>
                  <h1>Following</h1>
                  <p>Follow creators and Facebook friends and we'll notify you whenever they launch or back a new project. <Link className='policy-link' to='/'>Learn more.</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-two'>
            <div className='following-header-two-inner'>
              <div className='following-header-three'>
                <div className='following-header-four'>
                  <div className='following-header-five'>
                    <div className='green-find-creators-bar'></div>
                    <ul>
                      <li>Find Facebook friends</li>
                      <li>Find creators</li>
                      <li className='divider'></li>
                      <li>Following <span>0</span></li>
                      <li>Followers <span>0</span></li>
                      <li>Blocked</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-six'>
            <div className='following-header-seven'>
              <div className='following-header-eight'>
                <p>
                  <button>Explore projects</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Following
