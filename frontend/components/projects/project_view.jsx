import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import Campaign from './campaign';
import UserInfo from './user_info';
import FAQ from './faq';
import Updates from './updates';
import Comments from './comments';
import Community from './community';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  addBackground: '',
                  userInfoModal: 'js-modal-close',
                  onClick: 'make-a-pledge',
                  projectView: 'campaign',
                  greenBorder: '',
                  currencyGreenBorder: '',
                  blackBorder: ''};
    this.currentTimeNum = 0;
    this.currentTime = 'days';
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.changeBorder = this.changeBorder.bind(this);
    this.calculate = this.calculate.bind(this);
    this.viewProjectBody = this.viewProjectBody.bind(this);
    this.addGreenBorder = this.addGreenBorder.bind(this);
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
    if (project.eta === null) {
      this.currentTime = 'second';
      return
    };
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
    } else if (seconds <= 1) {
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

  convertSecondsToTime() {
    let seconds = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0].time;
    if (seconds === 0) return "12:00 AM";
    let hours = 0;
    let mins = 0;
    let daylightTime = 'AM';
    while (seconds > 0) {
      if (seconds >= 3600) {
        hours++;
        seconds -= 3600;
      } else {
        mins++;
        seconds -= 60;
      }
    }
    if (hours === 12) { daylightTime = 'PM'; }
    else if (hours === 24) {
      hours = 12;
      daylightTime = 'AM';
    } else if (hours > 12) {
      hours -= 12;
      daylightTime = 'PM';
    }
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins + ' ' + daylightTime;
  }

  viewProjectBody(tab) {
    this.setState({projectView: tab});
  }

  addGreenBorder() {
    this.setState({greenBorder: 'green-support-border', currencyGreenBorder: 'green-currency-support-border', blackBorder: 'black-border'});
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
    const monthFullName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let lastLoggedIn = Object.values(getState().entities.users)[0].updatedAt.split('-');
    let lastLoggedInYear = lastLoggedIn[0];
    let lastLoggedInMonth = month[lastLoggedIn[1] - 1];
    let day = lastLoggedIn[2].indexOf('T');
    let lastLoggedInDay = lastLoggedIn[2].slice(0, day);
    let projectCreated = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0].createdAt.split('-');
    let projectCreatedYear = projectCreated[0];
    let projectCreatedMonth = monthFullName[projectCreated[1] - 1];
    let projectCreatedDay = projectCreated[2].slice(0, projectCreated[2].indexOf('T'));
    const content = currentProject === '' ? '' : currentProject.editorHtml;
    const styles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'];
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    let endDate = project.eta === null ? new Date().toString().split('-')[0] : new Date(project.eta.split('-')).toString().split('-')[0];
    let currentProjectBody = '';
    if (this.state.projectView === 'campaign') {
      currentProjectBody = <Campaign content={content} styles={styles} onClick={this.state.onClick} addGreenBorder={() => this.addGreenBorder()} greenBorder={this.state.greenBorder} currencyGreenBorder={this.state.currencyGreenBorder} blackBorder={this.state.blackBorder} />;
    } else if (this.state.projectView === 'faq') {
      currentProjectBody = <FAQ content={content} styles={styles} onClick={this.state.onClick} />;
    } else if (this.state.projectView === 'updates') {
      currentProjectBody = <Updates projectCreatedYear={projectCreatedYear} projectCreatedMonth={projectCreatedMonth} projectCreatedDay={projectCreatedDay} />;
    } else if (this.state.projectView === 'comments') {
      currentProjectBody = <Comments content={content} styles={styles} onClick={this.state.onClick} />;
    } else if (this.state.projectView === 'community') {
      currentProjectBody = <Community content={content} styles={styles} onClick={this.state.onClick} />;
    }
    let bar = '';
    if (currentProject.fundingGoal === null) {
      bar = 0;
    } else {
      bar = Math.floor((currentProject.pledgeAmt / currentProject.fundingGoal) * 100);
      if (bar > 100) bar = 100;
    }
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
                        <div className='preview-gray-border'></div>
                        <div className='preview-green-border' style={{width: `${bar}%`}}></div>
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
                          <span><p>All or nothing.</p> This project will only be funded if it reaches its goal by {endDate.split(' ')[0]}, {monthFullName[month.indexOf(endDate.split(' ')[1])]} {endDate.split(' ')[2]} {endDate.split(' ')[3]} {this.convertSecondsToTime()} PST.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='project-front-navbar'>
                  <div className='project-front-navbar-inner'>
                    <div className='project-front-navbar-inner-inner'>
                      <div className='project-front-navbar-left'>
                        <a className={this.state.projectView === 'campaign' ? 'font-weight-500' : ''} onClick={() => this.viewProjectBody('campaign')}>Campaign</a>
                        <div className={this.state.projectView === 'campaign' ? 'black-bar-campaign' : 'js-modal-close'}></div>
                        <a className={this.state.projectView === 'faq' ? 'font-weight-500' : ''} onClick={() => this.viewProjectBody('faq')}>FAQ</a>
                        <div className={this.state.projectView === 'faq' ? 'black-bar-faq' : 'js-modal-close'}></div>
                        <a className={this.state.projectView === 'updates' ? 'font-weight-500' : ''} onClick={() => this.viewProjectBody('updates')}>Updates<p>2</p></a>
                        <div className={this.state.projectView === 'updates' ? 'black-bar-updates' : 'js-modal-close'}></div>
                        <a className={this.state.projectView === 'comments' ? 'font-weight-500' : ''} onClick={() => this.viewProjectBody('comments')}>Comments<p>15</p></a>
                        <div className={this.state.projectView === 'comments' ? 'black-bar-comments' : 'js-modal-close'}></div>
                        <a className={this.state.projectView === 'community' ? 'font-weight-500' : ''} onClick={() => this.viewProjectBody('community')}>Community</a>
                        <div className={this.state.projectView === 'community' ? 'black-bar-community' : 'js-modal-close'}></div>
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
                {currentProjectBody}
              </div>
            </div>
          </div>
        </div>
        <UserInfo userInfoModal={this.state.userInfoModal} closeUserBio={() => this.showUserBio('off')} name={Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 ? '' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].name} biography={Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId).length === 0 ? '' : Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0].biography} city={currentProject === '' ? '' : currentProject.city} state={currentProject === '' ? '' : currentProject.state} lastLoggedInMonth={lastLoggedInMonth} lastLoggedInDay={lastLoggedInDay} lastLoggedInYear={lastLoggedInYear} />
      </div>
    );
  }
}

export default ProjectView;
