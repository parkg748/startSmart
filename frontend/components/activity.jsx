import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchProjectsByCurrentUser(this.props.match.params.userId);
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
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    Object.values(getState().entities.project).forEach(project => {
      if (project.userId === getState().session.id) {
        currentUserProjects.push(project);
      };
    });
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
        <div className='activity-container'>
          <div className='activity-container-one'>
            <div className='activity-container-two'>
              <div className='activity-container-three'>
                <div className='activity-container-four'>
                  <ul>
                    <li><Link to='/'>Profile (public)</Link></li>
                    <li><Link to='/'>Settings</Link></li>
                    <li><Link to='/'>Created projects</Link></li>
                    <li><Link to='/'>Backed projects</Link></li>
                    <li><Link to='/'>Activity</Link></li>
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
