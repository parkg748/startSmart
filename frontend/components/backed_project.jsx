import React from 'react';
import {Link} from 'react-router-dom';

class BackedProject extends React.Component {
  constructor(props) {
    super(props);
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
        <div className='backed-project'>
          <div className='backed-project-one'>
            <div className='backed-project-two'>
              <div className='backed-project-navbar'>
                <ul>
                  <li>Profile (public)</li>
                  <li>Settings</li>
                  <li>Created projects</li>
                  <li>Backed projects</li>
                  <li>Activity</li>
                </ul>
              </div>
              <div className='backed-project-header'>
                <h1>Backed projects</h1>
                <p>A place to keep track of all your backed projects</p>
              </div>
              <p className='backed-project-content'>
                You haven't backed any projects! Check out our <Link className='policy-link' to='/'>Project of the Day</Link>. We like it and think you might too.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackedProject;
