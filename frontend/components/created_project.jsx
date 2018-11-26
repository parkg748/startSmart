import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class CreatedProject extends React.Component {
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
        <div className='created-project'>
          <div className='created-project-one'>
            <div className='created-project-navbar'>
              <ul>
                <li>Profile (public)</li>
                <li>Settings</li>
                <li>Created projects</li>
                <li>Backed projects</li>
                <li>Activity</li>
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
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='created-project-section'>
                          <img src='https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=&auto=format&frame=1&q=92&s=54e77c822a7765d5b7243a3794d5edba'/>
                          <div className='created-project-information'>
                            <div className='created-project-information-one'>
                              <div className='created-project-information-two'>
                                <div className='created-project-information-three'><strong>/projects/437271183/1088503561</strong></div>
                                <div className='created-project-information-four'>fhiewofhwf</div>
                              </div>
                            </div>
                          </div>
                          <div className='continue-editing'>
                            <div className='continue-editing-one'>
                              <Link className='policy-link' to='/'>Continue editing</Link>
                            </div>
                          </div>
                        </div>
                      </li>
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
