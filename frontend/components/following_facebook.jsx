import React from 'react';
import {Link} from 'react-router-dom';

class FollowingFacebook extends React.Component {
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
        <div className='facebook-friends'>
          <div className='facebook-friends-left'>
            <div className='facebook-friends-left-one'>
              <div className='facebook-friends-left-two'>
                <h2>Follow creators and Facebook friends to discover more projects.</h2>
                <div className='facebook-friends-left-three'>
                  <button>Find creators</button>
                </div>
              </div>
              <div className='facebook-friends-left-four'>
                <div className='facebook-friends-facebook-button'>
                  <button><i className="facebook-friends-logo fab fa-facebook"></i>Connect with Facebook</button>
                </div>
              </div>
              <h5>If you connect with Facebook, we’ll import your name and profile photo. We&#39;ll also access your friend list so you can follow your Facebook friends on StartSmart. We will never post anything on Facebook without your permission.</h5>
            </div>
          </div>
          <div className='facebook-friends-right'>
            <div className='facebook-friends-right-one'>
              <div className='facebook-friends-right-two'>
                <h2>Following</h2>
                <p>When you follow creators and your Facebook friends on Kickstarter, you’ll be notified when they back or launch a project. And while you’re exploring, we’ll show you whom has backed each project you find. (You can manage your notification settings <Link className='policy-link' to='/'>here</Link>.)</p>
                <div className='facebook-friends-right-three'>
                  <h5>Heads up: We don’t display your pledge amount, just the fact that you’re a proud backer. You can opt out of this feature <Link className='policy-link' to='/'>here</Link>.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowingFacebook;
