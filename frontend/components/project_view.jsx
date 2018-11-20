import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.changeBorder = this.changeBorder.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchCategories();
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  changeBorder() {
    this.setState({onClick: 'make-a-pledge-click'});
  }

  showUserBio(status) {
    if (status === 'on') {
      this.setState({addBackground: 'is-open', userInfoModal: 'preview-user-info'});
    } else if (status === 'off') {
      this.setState({addBackground: '', userInfoModal: 'js-modal-close'});
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (Object.values(this.props.project).length === 0) return null;
    if (Object.values(this.props.category).length === 0) return null;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
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
        <div className='edit-story-background-front'>
          <nav>
            <section className='explore-project'>
              <Link to='/explore' className='explore'>Explore</Link>
              <Link to='/learn' className='project'>Start a project</Link>
            </section>
            <Link to='/'><img className='center-logo-position-front logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
            <section className={`search-signin ${navbarWidth}`}>
              <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
              {profile}
            </section>
          </nav>
          <div className={this.state.addBackground}>
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
                    {currentUserProjects.slice(0, 5).map((project, id) => {
                      if (project.title === '') {
                        return <li key={id}>
                          <div className='profile-menu-projects'>
                            <div className='profile-menu-projects-image'>
                              <img src='https://i.imgur.com/s5GppRq.png'/>
                            </div>
                            <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>Untitled</Link></span>
                          </div>
                        </li>
                      } else {
                        return <li key={id}>
                          <div className='profile-menu-projects'>
                            <div className='profile-menu-projects-image'>
                              <img src='' />
                            </div>
                            <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>{project.title}</Link></span>
                          </div>
                        </li>
                      }
                    })}
                  </ul>
                </div>
              </div>
              <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
            </div>
            <div className='preview-page-content-front'>
              <div className='preview-form-front'>
                <div className='preview-form-body'>
                  <div className='preview-form-body-one'>
                    <div className='preview-form-body-header-front'>
                      <div className='preview-form-body-header-one'>
                        <div className='preview-form-body-header-two'>
                          <div className='preview-form-body-header-three'>
                            <div className='preview-form-profile-icon'>
                              <img src='https://i.imgur.com/jyZdRza.png' onClick={() => this.showUserBio('on')} />
                            </div>
                            <span>By {Object.values(this.props.user)[0].name}</span>
                            <div className='preview-created'>7 created</div>
                            <button>Follow Creator</button>
                          </div>
                          <div className='preview-form-body-header-four-front'>
                            <p>{this.props.project === null || this.props.project === undefined ? '' : Object.values(this.props.project)[0].title}</p>
                            <h2>{Object.values(this.props.project)[0].description}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='preview-body-content'>
                      <div className='preview-body-content-one'>
                        <div className='preview-body-content-picture'>
                          <img src='https://i.imgur.com/s5GppRq.png' />
                        </div>
                        <div className='preview-body-content-two'>
                          <div className='preview-body-content-two-inner'>
                            <i className="fab fa-stripe-s"></i> <span>Project we love</span>
                          </div>
                          <div className='preview-body-content-two-inner'>
                            <i className="far fa-compass"></i> <span>{Object.values(this.props.category).length === 0 ? '' : this.props.category[Object.values(this.props.project)[0].categoryId].name}</span>
                          </div>
                          <div className='preview-body-content-two-inner'>
                            <i className="map-front fas fa-map-marker-alt"></i> <span>{Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].city}, {Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].state}</span>
                          </div>
                        </div>
                      </div>
                      <div className='preview-body-content-three'>
                        <div className='preview-green-border'></div>
                        <div className='preview-body-content-four'>
                          <div className='preview-body-content-five-front'>
                            <span>$0 <i className="black fas fa-hand-holding-usd"></i></span>
                            <span className='pledge-goal-of'>pledged of {Object.values(this.props.project)[0].fundingGoal === null ? '$0' : Object.values(this.props.project)[0].fundingGoal} goal</span>
                          </div>
                          <div className='preview-body-content-six'>
                            <span>0</span>
                            <span className='pledge-goal-of'>backers</span>
                          </div>
                          <div className='preview-body-content-six'>
                            <span>0</span>
                            <span className='pledge-goal-of'>seconds to go</span>
                          </div>
                        </div>
                        <div className='back-this-project'>
                          <button>Back this project</button>
                          <div className='back-this-project-one'>
                            <i className="remind-me-heart fas fa-heart"></i><button className='remind-me-button'>Remind me</button>
                            <div className='back-this-project-social-media'>
                              <i className="preview-facebook fab fa-facebook"></i>
                              <i className="preview-twitter fab fa-twitter"></i>
                              <i className="preview-mail fas fa-envelope"></i>
                              <span>&#60;/&#62;</span>
                            </div>
                          </div>
                        </div>
                        <div className='project-not-live-front'>
                          <span><p>All or nothing.</p> This project will only be funded if it reaches its goal by Thu, November 29 2018 6:05 AM PST.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='project-front-navbar'>
                  <div className='project-front-navbar-inner'>
                    <div className='project-front-navbar-inner-inner'>
                      <div className='project-front-navbar-left'>
                        <a>Campaign</a>
                        <a>FAQ</a>
                        <a>Updates<p>2</p></a>
                        <a>Comments<p>15</p></a>
                        <a>Community</a>
                      </div>
                      <div className='project-front-navbar-right'>
                        <button>Back this project</button>
                        <div className='remind-me-project-front'>
                          <i className="remind-me-heart-project-front fas fa-heart"></i>
                          <span>Remind Me</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='preview-bottom-front'>
                  <div className='project-front-body'>
                    <div className='project-front-body-inner'>
                      <div className='project-front-body-inner-inner'>
                        <div className='project-front-body-left'>
                          <h3>About</h3>
                          <h3>Risks and challenges</h3>
                          <a>Learn about accountability on StartSmart</a>
                          <div className='question-about-project'>
                            <p>Questions about this project? <a>Check out the FAQ</a></p>
                          </div>
                          <div className='report-this-project'>
                            <button>Report this project to StartSmart</button>
                          </div>
                        </div>
                        <div className='project-front-body-right'>
                          <h3>Support</h3>
                          <ul>
                            <li className={this.state.onClick}>
                              <div className='make-a-pledge-inner'>Make a pledge without a reward</div>
                              <div className='make-a-pledge-inner-inner'>
                                <div className='make-a-pledge-input'>
                                  <div className='make-a-pledge-input-inner'>
                                    <div className='make-a-pledge-input-inner-inner'>
                                      <div className='make-a-pledge-currency'>£</div>
                                      <input type='text' value='10' />
                                    </div>
                                    <div className='make-a-pledge-currency-disclaimer'>ABOUT $13</div>
                                  </div>
                                  <button>Continue</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.userInfoModal}>
          <i className="preview-user-info-close fas fa-times" onClick={() => this.showUserBio('off')}></i>
          <div className='preview-user-info-one'>
            <div className='preview-user-info-two'>
              <h1>About the creator</h1>
              <div className='preview-user-info-three'>
                <div className='preview-user-info-four'>
                  <h3>Grace</h3>
                  <span>San Francisco, CA</span>
                </div>
                <div className='preview-user-info-five'>
                  <div className='preview-user-info-list'>
                    <i className="preview-close fas fa-times"></i>
                    <span>Identity not verified</span>
                  </div>
                  <div className='preview-user-info-list'>
                    <i className="fas fa-lock"></i>
                    <span>Last login Oct 28 2018</span>
                  </div>
                  <div className='preview-user-info-list'>
                    <i className="preview-facebook-user-info fab fa-facebook"></i>
                    <span>Not connected</span>
                  </div>
                  <div className='preview-user-info-list'>
                    <i className="preview-user-info-s fab fa-stripe-s"></i>
                    <span><a>7 created</a> · <a>0 backed</a></span>
                  </div>
                </div>
                <button>Contact me</button>
              </div>
            </div>
          </div>
          <p onClick={() => this.showUserBio('off')}>Close</p>
        </div>
      </div>
    );
  }
}

export default ProjectView;