import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  accountNotification: '#037362',
                  accountNotificationBar: '#037362',
                  newsletters: 'black',
                  newslettersBar: 'transparent',
                  searchBar: 'search-bar-close'};
    this.handleScroll = this.handleScroll.bind(this);
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(getState().session.id);
    window.addEventListener('scroll', this.handleScroll);
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  handleScroll() {
    if (window.scrollY < 1502) {
      this.setState({accountNotification: '#037362', newsletters: 'black', accountNotificationBar: '#037362', newslettersBar: 'transparent'});
    } else {
      this.setState({accountNotification: 'black', newsletters: '#037362', accountNotificationBar: 'transparent', newslettersBar: '#037362'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id}/projects/${idx}`);
    window.location.reload();
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let loggedInUser = Object.values(this.props.user);
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && loggedInUser[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={loggedInUser[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : loggedInUser[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (loggedInUser[0].projects != null) {
      loggedInUser[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={loggedInUser.filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div onScroll={this.handleScroll} className='edit-profile-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='notifications-blue-bar'></div>
                <ul>
                  <li className='inactive'><Link to='/settings/account'>Account</Link></li>
                  <li className='inactive'><Link to='/settings/profile'>Edit Profile</Link></li>
                  <li>Notifications</li>
                  <li className='inactive'><Link to='/'>Payment methods</Link></li>
                  <li className='inactive'><Link to='/profile/following/find_creators'>Following</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='notifications-container'>
            <div className='notifications-left'>
              <a style={{color: `${this.state.accountNotification}`, borderLeft: `2px solid ${this.state.accountNotificationBar}`}}>Account Notifications</a>
              <a style={{color: `${this.state.newsletters}`, borderLeft: `2px solid ${this.state.newslettersBar}`}}>Newsletters</a>
            </div>
            <div className='notifications-right'>
              <h3>Account Notifications</h3>
              <label>Projects you've backed</label>
              <div className='notifications-section'>
                <div className='email-phone'>
                  <div className='email-icon'>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className='email-icon'>
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                </div>
                <span>Project updates</span>
              </div>
              <hr></hr>
              <label>Following</label>
              <div className='following-notifications-section'>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                  </div>
                  <span>Someone you follow has backed or launched a project</span>
                </div>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                  </div>
                  <span>Someone has followed you</span>
                </div>
              </div>
              <hr></hr>
              <label>Campus</label>
              <div className='following-notifications-section'>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <span>A new answer has been posted on a question you follow</span>
                </div>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <span>A daily digest of any follows or upvotes on your posts</span>
                </div>
              </div>
              <hr></hr>
              <label>Projects you've launched</label>
              <div className='following-notifications-section'>
                <div className='new-pledge-activity'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <div>
                    <span>New pledge activity (backings, adjustments, cancellations)</span>
                    <div className='notification-frequency'>
                      <label>Notification frequency:</label>
                      <div className='notification-frequency-inner'>
                        <select value='daily-digest'>
                          <option value='individual-emails'>Individual Emails</option>
                          <option value='daily-digest'>Daily Digest</option>
                        </select>
                        <i className="notification-frequency-sort-up fas fa-sort-up"></i>
                        <i className="notification-frequency-sort-down fas fa-sort-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <span>New comments</span>
                </div>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <span>New likes</span>
                </div>
              </div>
              <hr></hr>
              <label>Tips for creators</label>
              <div className='following-notifications-section'>
                <div className='following-notifications-section-inner'>
                  <div className='email-phone'>
                    <div className='email-icon'>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className='email-icon'>
                    </div>
                  </div>
                  <span>Advice and guidance to help you run your project</span>
                </div>
              </div>
              <div className='newsletters-notifications'>
                <div className='newsletters-notifications-one'>
                  <h3>Newsletters</h3>
                  <p>Stay up to date with our favorite projects, and any news and events that are on our radar.</p>
                  <button>Subscribe to all</button>
                </div>
              </div>
              <div className='notifications-boxes'>
                <div className='notifications-boxes-left'>
                  <div className='notifications-boxes-left-inner'>
                    <img src='https://i.imgur.com/dwu4CRj.jpg'/>
                    <div className='notifications-boxes-left-inner-content'>
                      <h1>Projects We Love</h1>
                      <p>A weekly roundup of the best and brightest projects on StartSmart, handpicked by our team.</p>
                    </div>
                    <div className='notifications-boxes-left-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/I1O2kFw.jpg'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>Happening</h1>
                      <p>The zeitgeist delivered to your inbox, via new projects and buzzworthy stories.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='notifications-boxes'>
                <div className='notifications-boxes-left'>
                  <div className='notifications-boxes-left-inner'>
                    <img src='https://i.imgur.com/zPpgW0O.jpg'/>
                    <div className='notifications-boxes-left-inner-content'>
                      <h1>News & Events</h1>
                      <p>Big StartSmart news and events near you, delivered just a few times a year.</p>
                    </div>
                    <div className='notifications-boxes-left-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/nsIodFO.jpg'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>StartSmart Loves Games</h1>
                      <p>Join our secret society.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='notifications-boxes'>
                <div className='notifications-boxes-left'>
                  <div className='notifications-boxes-left-inner'>
                    <img src='https://i.imgur.com/SAMrBaY.jpg'/>
                    <div className='notifications-boxes-left-inner-content'>
                      <h1>Invent</h1>
                      <p>Discover the future of Design and Tech.</p>
                    </div>
                    <div className='notifications-boxes-left-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/1RIcQuk.jpg'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>Arts News</h1>
                      <p>New work and big ideas from established and emerging artists.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='notifications-boxes'>
                <div className='notifications-boxes-left'>
                  <div className='notifications-boxes-left-inner'>
                    <img src='https://i.imgur.com/bEGYqsY.jpg'/>
                    <div className='notifications-boxes-left-inner-content'>
                      <h1>StartSmart Films</h1>
                      <p>Love film? We do, too.</p>
                    </div>
                    <div className='notifications-boxes-left-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/MGpNIVD.jpg'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>StartSmart Music</h1>
                      <p>It's like the radio but nothing sucks and also it’s a newsletter.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='reads-notifications-boxes'>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/14Z7hOC.jpg'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>StartSmart Reads</h1>
                      <p>Welcome to our library. Peruse the stacks with us.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='notifications-boxes'>
                <div className='notifications-boxes-left'>
                  <div className='notifications-boxes-left-inner'>
                    <img src='https://i.imgur.com/E58gwCz.jpg'/>
                    <div className='notifications-boxes-left-inner-content'>
                      <h1>StartSmart Alumni</h1>
                      <p>Keep in touch after your campaign and plan your next project.</p>
                    </div>
                    <div className='notifications-boxes-left-bottom'>
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='notifications-boxes-right'>
                  <div className='notifications-boxes-right-inner'>
                    <img src='https://i.imgur.com/9Z0IydJ.png'/>
                    <div className='notifications-boxes-right-inner-content'>
                      <h1>The Creative Independent</h1>
                      <p>Learn to forge your own creative path with wisdom and insights from working artists.</p>
                    </div>
                    <div className='notifications-boxes-right-bottom-weekly-daily'>
                      <button>Subscribe to Weekly</button>
                      <button>Subscribe to Daily</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
