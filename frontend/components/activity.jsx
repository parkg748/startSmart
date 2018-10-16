import React from 'react';
import {Link} from 'react-router-dom';

class Activity extends React.Component {
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
        <div className='activity-container'>
          <div className='activity-container-one'>
            <div className='activity-container-two'>
              <div className='activity-container-three'>
                <div className='activity-container-four'>
                  <ul>
                    <li><Link to='/'>Profile (public)</Link></li>
                    <li><Link to='/'>Settings</Link></li>
                    <li><Link to='/'>Created projects</Link></li>
                    <li><Link to='/'>Backed projects</Link></li>
                    <li><Link to='/'>Activity</Link></li>
                  </ul>
                </div>
                <div className='activity-container-five'>
                  <h1>Activity</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='activity-container-six'>
            <div className='activity-container-seven'>
              <div className='activity-container-eight'>
                <p>You haven't backed any projects! Check out our <Link className='policy-link' to='/'>Project of the Day</Link>. We like it and think you might too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
