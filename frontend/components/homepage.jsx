import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let profile = undefined;
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
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
          <section className='search-signin'>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div className='edit-background'>
          <ul>
            <li><Link className='edit-button' to='/'>Our Rules</Link></li>
            <li><Link className='edit-button' to='/'>Help</Link></li>
            <li><Link className='edit-button' to='/'>Creator Handbook</Link></li>
          </ul>
          <div className='edit-page-content'>
            <div className='edit-page-navbar'>
              <div className='edit-page-navbar-inner'>
                <ul>
                  <li className='exit-editor'><Link to='/'><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                  <li className='edit-options'>
                    <ul>
                      <li className='edit-option-basics'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                      <li className='edit-option-rewards'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                      <li className='edit-option-story'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                      <li className='edit-option-about-you'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                      <li className='edit-option-account'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                      <li className='preview'><Link to='/'>Preview</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='edit-form'>
              <div className='edit-form-title'>
                <div className='edit-form-title-inner'>
                  <h2>Let's get started.</h2>
                  <p>Make a great first impression with your project's title and image, and set your funding goal, campaign duration, and project category.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
