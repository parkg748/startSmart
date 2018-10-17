import React from 'react';
import {Link} from 'react-router-dom';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  render() {
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
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
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='messages-inbox'>
          <div className='messages-inbox-one'>
            <div className='messages-inbox-two'>
              <div className='messages-inbox-header'>
                <div className='messages-inbox-header-one'>
                  <h2>Messages</h2>
                </div>
              </div>
              <div className='messages-inbox-header-content'>
                <div className='messages-inbox-three'>
                  <p>Note: We do not endorse third-party services. Please report spam messages or unsolicited offers.</p>
                </div>
              </div>
            </div>
            <div className='messages-inbox-four'>
              <div className='messages-inbox-five'>
                <div className='messages-inbox-six'>
                  <div className='messages-inbox-seven'>
                    <div className='messages-search-messages'>
                      <i className="messages-search-icon fas fa-search"></i>
                      <input type='text' placeholder='Search messages'/>
                    </div>
                    <div className='messages-dropdpown'>
                      <div className='messages-dropdown-one'>
                        <i className="messages-dropdown-caret fas fa-caret-down"></i>
                        <select className='messages-dropdown-select' defaultValue='inbox'>
                          <option defaultValue='inbox'>Inbox</option>
                          <option defaultValue='sent'>Sent</option>
                          <option defaultValue='unread'>Unread</option>
                          <option defaultValue='archive'>Archive</option>
                          <option defaultValue='all'>All</option>
                          <option defaultValue='spam'>Spam</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='messages-inbox-eight'>
                <div className='messages-inbox-nine'>
                  <div className='messages-inbox-ten'>
                    <div className='messages-inbox-eleven'>
                      <p>Nothing to see here.</p>
                      <img src='https://d3mlfyygrfdi2i.cloudfront.net/world-500px.gif'/>
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

export default Messages;