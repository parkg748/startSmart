import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageNav from './edit_page_nav';
import Campaign from '../projects/campaign';
import FAQ from '../projects/faq';
import Updates from '../projects/updates';
import Comments from '../projects/comments';
import Community from '../projects/community';
import UserInfo from '../projects/user_info';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  addBackground: '',
                  userInfoModal: 'js-modal-close',
                  projectView: 'campaign',
                  onClick: 'make-a-pledge',
                  greenBorder: '',
                  currencyGreenBorder: '',
                  blackBorder: ''};
    this.currentTimeNum = 0;
    this.currentTime = 'days';
    this.showUserBio = this.showUserBio.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.calculate = this.calculate.bind(this);
    this.viewProjectBody = this.viewProjectBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchCategories();
    this.props.fetchUser(this.props.match.params.userId);
    this.interval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addGreenBorder() {
    this.setState({greenBorder: 'green-support-border', currencyGreenBorder: 'green-currency-support-border', blackBorder: 'black-border'});
  }

  viewProjectBody(tab) {
    this.setState({projectView: tab});
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

  addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  calculate() {
    if (Object.values(this.props.project)[0] === undefined) return;
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    if (project != null) {
      let endDate = new Date(`${project.eta} ${project.time}`);
      let seconds = Math.floor((endDate.getTime() - new Date().getTime()) / 1000);
      if (seconds > 86400) {
        this.currentTimeNum = Math.ceil(seconds / 86400);
        this.currentTime = 'days';
      } else if (seconds > 82800) {
        this.currentTimeNum = 1;
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
      } else if (seconds === 1) {
        this.currentTimeNum = seconds / 1;
        this.currentTime = 'second';
      } else if (seconds <= 0) {
        this.currentTimeNum = 0;
        this.currentTime = 'seconds';
      }
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
    let basicsProgress = 7;
    let rewardsProgress = 5;
    let storyProgress = 3;
    let aboutYouProgress = 6;
    let accountProgress = 1;
    let project = Object.values(this.props.project)[0];
    let user = Object.values(this.props.user)[0];
    let completed = [];
    if (project != undefined) {
      if (project.imageUrl != '') basicsProgress--;
      if (project.title != '') basicsProgress--;
      if (project.subcategory != '') basicsProgress--;
      if (project.city != '') basicsProgress--; aboutYouProgress--;
      if (project.description != '') basicsProgress--;
      if (project.fundingGoal != null) basicsProgress--;
      if (project.eta != null) basicsProgress--;
      if (project.editorHtml != '') storyProgress--;
      if (project.challenges != '') storyProgress--;
      if (user.profileUrl != '') aboutYouProgress--;
      if (user.name != '') aboutYouProgress--;
      if (user.biography != '') aboutYouProgress--;
      if (user.websites.length != 0) aboutYouProgress--;
      if (user.googleAnalytics != null) aboutYouProgress--;
      if (user.email != '') accountProgress--;
    }
    if (basicsProgress === 0) { completed.push('basic'); }
    if (rewardsProgress === 0) { completed.push('reward'); }
    if (storyProgress === 0) { completed.push('story'); }
    if (aboutYouProgress === 0) { completed.push('aboutyou'); }
    if (accountProgress === 0) { completed.push('account'); }
    let currentProject = '';
    if (Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId).length != 0) {
      currentProject = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    }
    const monthFullName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let projectCreated = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0].createdAt.split('-');
    let projectCreatedYear = projectCreated[0];
    let projectCreatedMonth = monthFullName[projectCreated[1] - 1];
    let projectCreatedDay = projectCreated[2].slice(0, projectCreated[2].indexOf('T'));
    const content = currentProject === '' ? '' : currentProject.editorHtml;
    const styles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'];
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
    return (
      <div className='preview-project-body'>
        <div className='edit-story-background'>
          <EditPageNav navbarWidth={navbarWidth} profile={profile} />
          <div className={this.state.addBackground}>
            <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
            <ul>
              <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
              <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
            </ul>
            <div className='preview-page-content'>
            <EditPageNavbar buttonHighlight={'preview-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
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
                          <span className='pledge-goal-of'>pledged of {Object.values(getState().entities.project)[0].fundingGoal === null ? '$0' : '$' + this.addCommasToNumber(Object.values(getState().entities.project)[0].fundingGoal)} goal</span>
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
                      </div>
                      </div>
                    </div>
                  </div>
                  {currentProjectBody}
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserInfo id={this.props.match.params.userId} userInfoModal={this.state.userInfoModal} closeUserBio={() => this.showUserBio('off')} name={Object.values(this.props.user)[0].name} biography={Object.values(this.props.user)[0].biography} city={Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].city} state={Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].state} lastLoggedInMonth={lastLoggedInMonth} lastLoggedInDay={lastLoggedInDay} lastLoggedInYear={lastLoggedInYear} />
      </div>
    );
  }
}

export default Preview;
