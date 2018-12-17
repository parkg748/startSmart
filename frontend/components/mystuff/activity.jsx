import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
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
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()} />
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='activity-container'>
          <div className='activity-container-one'>
            <div className='activity-container-two'>
              <div className='activity-container-three'>
                <div className='activity-container-four'>
                  <ul>
                    <li><Link to={`/profile/${getState().session.id}`}>Profile (public)</Link></li>
                    <li><Link to='/settings/profile'>Settings</Link></li>
                    <li><Link to='/profile/projects'>Created projects</Link></li>
                    <li><Link to='/profile/backings'>Backed projects</Link></li>
                    <li><Link to='/activity'>Activity</Link></li>
                  </ul>
                </div>
                <div className='activity-container-five'>
                  <h1>Activity</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='activity-container-six'>
            <div className='activity-container-seven'>
              <div className='activity-container-eight'>
                <p>You haven't backed any projects! Check out our <Link className='policy-link' to='/'>Project of the Day</Link>. We like it and think you might too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
