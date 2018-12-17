import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';

class CreatedProject extends React.Component {
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
    let projectList = [];
    if (Object.values(getState().entities.project).length > 0) {
      let projects = Object.values(getState().entities.project).filter(el => el.userId === getState().session.id);
      for (let i = 0; i < projects.length; i++) {
        projectList.push(<li>
          <div className='created-project-section'>
            <img src={projects[i].imageUrl === '' ? 'https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba' : projects[i].imageUrl} />
            <div className='created-project-information'>
              <div className='created-project-information-one'>
                <div className='created-project-information-two'>
                  <div className='created-project-information-three'><strong>/projects/{projects[i].id}</strong></div>
                  <div className='created-project-information-four'>{projects[i].title}</div>
                </div>
              </div>
            </div>
            <div className='continue-editing'>
              <div className='continue-editing-one'>
                <Link className='policy-link' to={`/users/${getState().session.id}/projects/${projects[i].id}`}>Continue editing</Link>
              </div>
            </div>
          </div>
        </li>);
      }
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='created-project'>
          <div className='created-project-one'>
            <div className='created-project-navbar'>
              <ul>
                <li><Link to={`/profile/${getState().session.id}`}>Profile (public)</Link></li>
                <li><Link to='/settings/profile'>Settings</Link></li>
                <li><Link to='/profile/projects'>Created projects</Link></li>
                <li><Link to='/profile/backings'>Backed projects</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
              </ul>
            </div>
            <div className='created-project-header'>
              <div className='created-project-header-one'>
                <h1>Created projects</h1>
                <p>A place to keep track of all your created projects</p>
                <section>
                  <h2><strong>Started</strong></h2>
                  <div className='created-project-body'>
                    <ul>
                      {projectList}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatedProject;
