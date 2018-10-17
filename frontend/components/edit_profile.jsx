import React from 'react';
import {Link} from 'react-router-dom';

class EditProfile extends React.Component {
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
                <div className='edit-profile-blue-bar'></div>
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
              <div className='edit-profile-body-two'>
                <form>
                  <ul>
                    <li>
                      <span><strong>Name</strong></span>
                      <input type='text' defaultValue='Grace' />
                      <span>Heads up: Once you launch a project, you cannot make changes to your name on StartSmart.</span>
                    </li>
                    <li>
                      <span><strong>Picture</strong></span>
                      <div className='edit-profile-choose-image'>
                        <strong>Choose an image from your computer</strong>
                      </div>
                      <span>JPEG, PNG, GIF, or BMP • 200MB file limit</span>
                    </li>
                    <li>
                      <span><strong>Biography</strong></span>
                      <textarea></textarea>
                      <span>We suggest a short bio. If it's 300 characters or less it'll look great on your profile.</span>
                    </li>
                    <li>
                      <span><strong>Privacy</strong></span>
                      <div className='private-profile-checkbox'><input type='checkbox' /><span>Private profile</span></div>
                      <div className='privacy-description'>
                        <p>If your profile is private, others can see your name and picture.</p>
                        <p>If your profile is not private, others can also see the projects you’ve backed, your bio, and websites.</p>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
              <div className='edit-profile-right'>
                <div className='edit-profile-right-one'>
                  <ul>
                    <li>
                      <span><strong>Location</strong></span>
                      <div className='edit-profile-location-input'>
                        <i className="edit-profile-search-icon fas fa-search"></i>
                        <input type='text' placeholder='E.g. Brooklyn, NY' />
                      </div>
                    </li>
                    <li>
                      <span><strong>Time zone</strong></span>
                      <div className='time-zone-select'>
                        <select>
                          <option>(GMT-10:00) America/Adak</option>
                          <option>(GMT-10:00) Hawaii</option>
                          <option>(GMT-09:00) Alaska</option>
                          <option>(GMT-09:00) America/Anchorage</option>
                          <option>(GMT-09:00) America/Metlakatla</option>
                          <option>(GMT-09:00) America/Nome</option>
                          <option>(GMT-09:00) America/Sitka</option>
                          <option>(GMT-09:00) America/Yakutat</option>
                          <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                          <option>(GMT-07:00) America/Boise</option>
                          <option>(GMT-07:00) Arizona</option>
                          <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                          <option>(GMT-06:00) America/Indiana/Knox</option>
                          <option>(GMT-06:00) America/Indiana/Tell_City</option>
                          <option>(GMT-06:00) America/Menominee</option>
                          <option>(GMT-06:00) America/North_Dakota/Beulah</option>
                          <option>(GMT-06:00) America/North Dakota/Center</option>
                          <option>(GMT-06:00) America/North Dakota/New_Salem</option>
                          <option>(GMT-06:00) Central Time (US & Canada)</option>
                          <option>(GMT-05:00) America/Detroit</option>
                          <option>(GMT-05:00) America/Indiana/Marengo</option>
                          <option>(GMT-05:00) America/Indiana/Petersburg</option>
                          <option>(GMT-05:00) America/Indiana/Vevay</option>
                          <option>(GMT-05:00) America/Indiana/Vincennes</option>
                          <option>(GMT-05:00) America/Indiana/Winamac</option>
                          <option>(GMT-05:00) America/Kentucky/Louisville</option>
                          <option>(GMT-05:00) America/Kentucky/Monticello</option>
                          <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                          <option>(GMT-05:00) Indiana (East)</option>
                          <option disabled>-----------</option>
                          <option>(GMT-11:00) American Samoa</option>
                          <option>(GMT-11:00) International Date Line West</option>
                          <option>(GMT-11:00) Midway Island</option>
                          <option>(GMT-08:00) Tijuana</option>
                          <option>(GMT-07:00) Chihuahua</option>
                          <option>(GMT-07:00) Mazatlan</option>
                          <option>(GMT-06:00) Central America</option>
                          <option>(GMT-06:00) Guadalajara</option>
                          <option>(GMT-06:00) Mexico City</option>
                          <option>(GMT-06:00) Monterrey</option>
                          <option>(GMT-06:00) Saskatchewan</option>
                          <option>(GMT-05:00) Bogota</option>
                          <option>(GMT-05:00) Lima</option>
                          <option>(GMT-05:00) Quito</option>
                          <option>(GMT-04:00) Atlantic Time (Canada)</option>
                          <option>(GMT-04:00) Caracas</option>
                          <option>(GMT-04:00) Georgetown</option>
                          <option>(GMT-04:00) La Paz</option>
                          <option>(GMT-04:00) Caracas</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <span><strong>Security</strong></span>
                      <ul>
                        <li className='add-line-height policy-link'>Verify your email to enable two-factor authentication</li>
                        <li className='no-padding policy-link'>Log me out on all other devices</li>
                      </ul>
                    </li>
                    <li>
                      <span><strong>Delete Account</strong></span>
                      <ul>
                        <li className='no-padding policy-link'>Delete my StartSmart account</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='account-container-login-history'>
              <div className='account-container-login-history-one'>
                <h3>Login History</h3>
                <p>This feature provides information about your account usage and other related changes. If you see any suspicious activity, change your password immediately.</p>
                <div className='login-history-header'>
                  <div className='login-history-activity'>
                    <h5>Activity</h5>
                  </div>
                  <div className='login-history-time'>
                    <h5>Time</h5>
                  </div>
                  <div className='login-history-location'>
                    <h5>Location</h5>
                  </div>
                  <div className='login-history-ip-address'>
                    <h5>IP Address</h5>
                  </div>
                </div>
                <div className='login-history-header-info'>
                  <ul>
                    <li>
                      <div className='login-history-header-info-one'>
                        <div className='login-history-header-info-two'>
                          <div className='login-history-header-login-successful'>Login successful</div>
                          <div className='login-history-header-time-info'>Tue, October 16 2018 9:49 AM PDT</div>
                          <div className='login-history-header-location-info'>San Francisco, 94133, US</div>
                          <div className='login-history-header-ipaddress-info'>12.23.56.98</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='login-history-load-more'>
                    <button>Load more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='save-settings'>
          <input type='submit' value='Save settings '/>
        </div>
      </div>
    );
  }
}

export default EditProfile;
