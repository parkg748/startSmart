import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchCategories();
    this.props.fetchProjectsByCurrentUser(this.props.match.params.userId);
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
    let mainImage = '';
    if (Object.values(this.props.project)[0].imageUrl === null || Object.values(this.props.project)[0].imageUrl === undefined) {
      mainImage = (<img src='https://i.imgur.com/s5GppRq.png' />);
    } else {
      mainImage = (<img src={Object.values(this.props.project)[0].imageUrl} />);
    }
    return (
      <div>
        <div className='edit-story-background'>
          <nav>
            <section className='explore-project'>
              <Link to='/help/handbook' className='creator-handbook-navbar'>Creator Handbook</Link>
              <Link to='/campus' className='campus-navbar'>Campus</Link>
              <Link to='/help' className='help-navbar'>Help</Link>
              <Link to='/rules' className='rules-navbar'>Project Rules</Link>
            </section>
            <Link to='/'><img className='center-logo-position logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
            <section className={`search-signin ${navbarWidth}`}>
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
            <ul>
              <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
              <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
            </ul>
            <div className='preview-page-content'>
            <div className='edit-page-navbar'>
              <div className='edit-page-navbar-inner'>
                <ul>
                  <li className='exit-editor'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`}><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                  <li className='edit-options'>
                    <ul>
                      <li className='edit-option-basics'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/basics`}><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                      <li className='edit-option-rewards'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`}><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                      <li className='edit-option-story'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                      <li className='edit-option-about-you'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                      <li className='edit-option-account'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                      <li className='preview current-page-button-highlight'><Link to='/'>Preview</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='preview-form'>
              <div className='preview-form-alert'>
                <div className='preview-form-alert-one'><Link className='policy-link' to='/'>Share a preview of your project with friends</Link>. Once you launch, the preview link will redirect to your live project page.</div>
              </div>
              <div className='preview-form-divider'></div>
              <div className='preview-form-body'>
                <div className='preview-form-body-one'>
                  <div className='preview-form-body-header'>
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
                        <div className='preview-form-body-header-four'>
                          <h2></h2>
                          <p>{this.props.project === null || this.props.project === undefined ? '' : Object.values(this.props.project)[0].title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-body-content'>
                    <div className='preview-body-content-one'>
                      <div className='preview-body-content-picture'>
                        <div className='preview-body-content-picture-inner'>
                          {mainImage}
                        </div>
                      </div>
                      <div className='preview-body-content-two'><i className="far fa-compass"></i> <span>{Object.values(this.props.category).length === 0 ? '' : this.props.category[Object.values(this.props.project)[0].categoryId].name}</span></div>
                    </div>
                    <div className='preview-body-content-three'>
                      <div className='preview-grey-border'></div>
                      <div className='preview-body-content-four'>
                        <div className='preview-body-content-five'>
                          <span>$0 <i className="fas fa-hand-holding-usd"></i></span>
                          <span className='pledge-goal-of'>pledged of $0 goal</span>
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
                      <div className='project-not-live'>
                        <span>This project is not live</span>
                        <p>This is only a draft that the creator has chosen to share</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='preview-bottom'>
                <div className='preview-bottom-one'>
                  <div className='preview-bottom-two'>
                    <div className='preview-bottom-three'>
                      <div className='preview-bottom-four'>
                        <div className='preview-bottom-left'>
                          <span>About</span>
                          <p>Questions about this project? <strong>Check out the FAQ</strong></p>
                        </div>
                        <div className='preview-bottom-right'>
                          <span>Support</span>
                        </div>
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

export default Preview;
