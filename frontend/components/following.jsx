import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
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

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
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
                {currentUserProjects.slice(0, 5).map((project, id) => {
                  if (project.title === '') {
                    return <li key={id}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'></div>
                        <span>Untitled</span>
                      </div>
                    </li>
                  } else {
                    return <li key={id}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'></div>
                        <span>{project.title}</span>
                      </div>
                    </li>
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='following-header'>
          <div className='following-header-inner'>
            <div className='following-header-content'>
              <div className='following-header-content-inner'>
                <div className='following-header-one'>
                  <h1>Following</h1>
                  <p>Follow creators and Facebook friends and we'll notify you whenever they launch or back a new project. <Link className='policy-link' to='/'>Learn more.</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-two'>
            <div className='following-header-two-inner'>
              <div className='following-header-three'>
                <div className='following-header-four'>
                  <div className='following-header-five'>
                    <div className='green-find-creators-bar'></div>
                    <ul>
                      <li>Find Facebook friends</li>
                      <li>Find creators</li>
                      <li className='divider'></li>
                      <li>Following <span>0</span></li>
                      <li>Followers <span>0</span></li>
                      <li>Blocked</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-six'>
            <div className='following-header-seven'>
              <div className='following-header-eight'>
                <p>
                  <button>Explore projects</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Following
