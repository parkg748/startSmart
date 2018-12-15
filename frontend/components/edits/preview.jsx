import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageNav from './edit_page_nav';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  addBackground: '',
                  userInfoModal: 'js-modal-close'};
    this.currentTimeNum = 0;
    this.currentTime = 'days';
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchCategories();
    this.props.fetchUser(this.props.match.params.userId);
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

  showUserBio(status) {
    if (status === 'on') {
      this.setState({addBackground: 'is-open', userInfoModal: 'preview-user-info'});
    } else if (status === 'off') {
      this.setState({addBackground: '', userInfoModal: 'js-modal-close'});
    }
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

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  calculate() {
    if (Object.values(this.props.project)[0] === undefined) return;
    let endDate = new Date(Object.values(this.props.project)[0].eta.split('-'));
    let seconds = Math.ceil((endDate.getTime() + Object.values(this.props.project)[0].time - new Date().getTime()) / 1000);
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

  render() {
    if (Object.values(this.props.project).length === 0) return null;
    if (Object.values(this.props.category).length === 0) return null;
    this.calculate();
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
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
    let mainImage = '';
    if (Object.values(this.props.project)[0].imageUrl === null || Object.values(this.props.project)[0].imageUrl === undefined) {
      mainImage = (<img src='https://i.imgur.com/s5GppRq.png' />);
    } else {
      mainImage = (<img src={Object.values(this.props.project)[0].imageUrl} />);
    }
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastLoggedIn = Object.values(getState().entities.users)[0].updatedAt.split('-');
    let lastLoggedInYear = lastLoggedIn[0];
    let lastLoggedInMonth = month[lastLoggedIn[1] - 1];
    let day = lastLoggedIn[2].indexOf('T');
    let lastLoggedInDay = lastLoggedIn[2].slice(0, day);
    return (
      <div className='preview-project-body'>
        <div className='edit-story-background'>
          <EditPageNav navbarWidth={navbarWidth} profile={profile} />
          <div className={this.state.addBackground}>
            <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
            <ul>
              <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
              <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
            </ul>
            <div className='preview-page-content'>
            <EditPageNavbar buttonHighlight={'preview-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} />
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
                            <img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} onClick={() => this.showUserBio('on')} />
                          </div>
                          <span>By <p>{Object.values(this.props.user)[0].name}</p></span>
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
                          <span className='pledge-goal-of'>pledged of {Object.values(getState().entities.project)[0].fundingGoal === null ? '$0' : Object.values(getState().entities.project)[0].fundingGoal} goal</span>
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
                        <button className='back-this-project-button'>Back this project</button>
                        <div className='back-this-project-one'>
                          <button className='remind-me-button'><i className="remind-me-heart fas fa-heart"></i>Remind me</button>
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
                      </div>
                      </div>
                    </div>
                  </div>
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
                  <h3>{Object.values(this.props.user)[0].name}</h3>
                  <span>{Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].city}, {Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].state}</span>
                </div>
                <div className='preview-user-info-biography'>
                  <span>{Object.values(this.props.user)[0].biography}</span>
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

export default Preview;
