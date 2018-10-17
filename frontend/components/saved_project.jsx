import React from 'react';
import {Link} from 'react-router-dom';

class SavedProject extends React.Component {
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
