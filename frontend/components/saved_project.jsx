import React from 'react';
import {Link} from 'react-router-dom';

class SavedProject extends React.Component {
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
        <div className='saved-project'>
          <div className='saved-project-one'>
            <div className='saved-project-two'>
              <h1>Saved projects</h1>
              <div className='saved-project-three'>
                <h3>Looks like you haven't saved any projects yet.</h3>
                <p>Save projects that catch your eye to <strong>get a reminder</strong> before they end.</p>
                <button>Save Project of the Day</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedProject;