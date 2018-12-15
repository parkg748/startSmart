import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';
import IFrame from './iframe';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  addBackground: '',
                  userInfoModal: 'js-modal-close',
                  onClick: 'make-a-pledge'};
    this.currentTimeNum = 0;
    this.currentTime = 'days';
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.changeBorder = this.changeBorder.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
  }

  // startTimer() {
  //   if (this.state.currentTimeNum > 0) {
  //     this.currentTimeNum = setInterval(function() {
  //       this.countDown();
  //       this.calculate();
  //     }, 1000);
  //   }
  // }
  //
  // countDown() {
  //   let seconds = this.state.currentTimeNum - 1 < 0 ? 0 : this.state.currentTimeNum - 1;
  //   this.currentTimeNum = seconds;
  //   if (seconds == 0) {
  //     clearInterval(this.currentTimeNum);
  //   }
  // }

  calculate() {
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    if (project.eta === null) return;
    let endDate = new Date(project.eta.split('-'));
    let seconds = Math.ceil((endDate.getTime() + project.time - new Date().getTime()) / 1000);
    if (seconds > 86400) {
      this.currentTimeNum = Math.ceil(seconds / 86400);
      this.currentTime = 'days';
    } else if (seconds > 82800) {
      this.currentTimeNum = 1
      this.currentTime = 'day';
    } else if (seconds > 7200) {
      this.currentTimeNum = Math.ceil(seconds / 3600);
      this.currentTime = 'hours';
    } else if (seconds > 3600) {
      this.currentTimeNum = 1;
      this.currentTime = 'hour';
    } else if (seconds > 120) {
      this.currentTimeNum = Math.ceil(seconds / 60);
      this.currentTime = 'minutes';
    } else if (seconds > 60) {
      this.currentTimeNum = 1;
      this.currentTime = 'minute';
    } else if (seconds > 1) {
      this.currentTimeNum = seconds;
      this.currentTime = 'seconds';
    } else if (second === 1) {
      this.currentTimeNum = seconds / 1;
      this.currentTime = 'second';
    }
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
    if (Object.values(getState().entities.users)[0] === null || getState().session.id === null || getState().session.id === undefined) return <Redirect to='/login' />;
    if (Object.values(this.props.project).length === 0) return null;
    if (Object.values(this.props.category).length === 0) return null;
    this.calculate();
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(this.props.user).filter(el => el.id == getState().session.id).length === 0 || Object.values(this.props.user).filter(el => el.id == getState().session.id)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(this.props.user).filter(el => el.id == getState().session.id)[0].profileUrl} /></button></div>;
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
    let currentProject = '';
    if (Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId).length != 0) {
      currentProject = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    }
    let mainImage = '';
    if (Object.values(this.props.project)[0].imageUrl === null || Object.values(this.props.project)[0].imageUrl === undefined) {
      mainImage = (<img src='https://i.imgur.com/s5GppRq.png' />);
    } else {
      mainImage = (<img src={currentProject === '' || currentProject.imageUrl === '' ? '' : currentProject.imageUrl} />);
    }
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastLoggedIn = Object.values(getState().entities.users)[0].updatedAt.split('-');
    let lastLoggedInYear = lastLoggedIn[0];
    let lastLoggedInMonth = month[lastLoggedIn[1] - 1];
    let day = lastLoggedIn[2].indexOf('T');
    let lastLoggedInDay = lastLoggedIn[2].slice(0, day);
    const content = currentProject === '' ? '' : currentProject.editorHtml;
    const styles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'];
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
            <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id == getState().session.id)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
            <div className='preview-page-content-front'>
              <div className='preview-form-front'>
                <div className='preview-form-body'>
                  <div className='preview-form-body-one'>
                    <div className='preview-form-body-header-front'>
                      <div className='preview-form-body-header-one'>
                        <div className='preview-form-body-header-two'>
                          <div className='preview-form-body-header-three'>
                            <div className='preview-form-profile-icon'>
                              <img src={Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 || Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].profileUrl} onClick={() => this.showUserBio('on')} />
                            </div>
                            <span>By <p>{Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 ? '' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].name}</p></span>
                            <div className='preview-created'>7 created</div>
                            <button>Follow Creator</button>
                          </div>
                          <div className='preview-form-body-header-four-front'>
                            <p>{currentProject === '' || currentProject.title === '' ? '' : currentProject.title}</p>
                            <h2>{currentProject === '' || currentProject.description === '' ? '' : currentProject.description}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='preview-body-content'>
                      <div className='preview-body-content-one'>
                        <div className='preview-body-content-picture'>
                          {mainImage}
                        </div>
                        <div className='preview-body-content-two'>
                          <div className='preview-body-content-two-inner'>
                            <i className="fab fa-stripe-s"></i> <span>Project we love</span>
                          </div>
                          <div className='preview-body-content-two-inner'>
                            <i className="far fa-compass"></i> <span>{Object.values(this.props.category).length === 0 || currentProject === '' ? '' : this.props.category[currentProject.categoryId].name}</span>
                          </div>
                          <div className='preview-body-content-two-inner'>
                            <i className="map-front fas fa-map-marker-alt"></i> <span>{currentProject === '' ? '' : currentProject.city}, {currentProject === '' ? '' : currentProject.state}</span>
                          </div>
                        </div>
                      </div>
                      <div className='preview-body-content-three'>
                        <div className='preview-green-border'></div>
                        <div className='preview-body-content-four'>
                          <div className='preview-body-content-five-front'>
                            <span>$0 <i className="black fas fa-hand-holding-usd"></i></span>
                            <span className='pledge-goal-of'>pledged of {currentProject === '' || currentProject.fundingGoal === null ? '$0' : currentProject.fundingGoal} goal</span>
                          </div>
                          <div className='preview-body-content-six'>
                            <span>0</span>
                            <span className='pledge-goal-of'>backers</span>
                          </div>
                          <div className='preview-body-content-six'>
                            <span>{this.currentTimeNum}</span>
                            <span className='pledge-goal-of'>{this.currentTime} to go</span>
                          </div>
                        </div>
                        <div className='back-this-project'>
                          <button className='back-this-project-button' onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/pledge`)}>Back this project</button>
                          <div className='back-this-project-one'>
                            <i className="remind-me-heart-front fas fa-heart"></i><button className='remind-me-button'>Remind me</button>
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
                          <h1><IFrame content={content} stylesheets={styles}/></h1>
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
                  <h3>{Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 ? '' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].name}</h3>
                  <span>{currentProject === '' ? '' : currentProject.city}, {currentProject === '' ? '' : currentProject.state}</span>
                </div>
                <div className='preview-user-info-biography'>
                  <span>{Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 ? '' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].biography}</span>
                </div>
                <div className='preview-user-info-five'>
                  <div className='preview-user-info-list'>
                    <i className="preview-close fas fa-times"></i>
                    <span>Identity not verified</span>
                  </div>
                  <div className='preview-user-info-list'>
                    <i className="fas fa-lock"></i>
                    <span>Last login {lastLoggedInMonth} {lastLoggedInDay} {lastLoggedInYear}</span>
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
