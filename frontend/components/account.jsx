import React from 'react';
import {Link} from 'react-router-dom';

class Account extends React.Component {
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
        <div className='account-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='account-container-blue-bar'></div>
                <ul>
                  <li>Account</li>
                  <li>Edit Profile</li>
                  <li>Notifications</li>
                  <li>Payment methods</li>
                  <li>Following</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='account-container-body'>
            <div className='account-container-body-one'>
              <div className='account-container-body-two'>
                <form>
                  <ul>
                    <li>
                      <span><strong>Email</strong></span>
                      <input type='text' />
                      <span><strong>Unverified</strong> <Link className='policy-link thin-font' to='/'>Re-send verification-email</Link></span>
                    </li>
                    <li>
                      <span><strong>Password</strong></span>
                      <button className='change-password'>Change password</button>
                    </li>
                    <li>
                      <span><strong>Current Password</strong></span>
                      <input type='text' />
                      <span className='thin-font'>Enter your current password to save these changes.</span>
                    </li>
                  </ul>
                  <div className='save-settings'>
                    <input type='submit' value='Save settings '/>
                  </div>
                </form>
              </div>
              <div className='account-container-body-three'>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
