import React from 'react';
import {Link} from 'react-router-dom';

class EditProfile extends React.Component {
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
        <div className='edit-profile-container'>
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
            <div className='edit-profile-body-one'>
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
                        <i className="time-zone-select-arrow fas fa-sort-down"></i>
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
                          <option>(GMT-04:00) Santiago</option>
                          <option>(GMT-03:30) Newfoundland</option>
                          <option>(GMT-03:00) Brasilia</option>
                          <option>(GMT-03:00) Buenos Aires</option>
                          <option>(GMT-03:00) Greenland</option>
                          <option>(GMT-03:00) Montevideo</option>
                          <option>(GMT-02:00) Mid-Atlantic</option>
                          <option>(GMT-01:00) Azores</option>
                          <option>(GMT-01:00) Cape Verde Is.</option>
                          <option>(GMT+00:00) Casablanca</option>
                          <option>(GMT+00:00) Edinburgh</option>
                        </select>
                      </div>
                      <span>Most time zones are automatically adjusted for you. We&#39;ll use this setting for emails.</span>
                    </li>
                    <li>
                      <span><strong>Vanity URL</strong></span>
                      <strong>https:&#47;&#47;startsmart.com/profile/</strong>
                      <input className='vanity-url-input' type='text' />
                      <span>For example, if you'd like your URL to be www.startsmart.com/profile/polarbear, just type polarbear! Choose wisely though, once you set your vanity URL, it can't be reset.</span>
                    </li>
                    <li>
                      <span><strong>Websites</strong></span>
                      <div className='edit-profile-add-websites'>
                        <input type='text' />
                        <button>Add</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='edit-profile-divider'></div>
            <div className='edit-profile-footer'>
              <div className='save-settings-two'>
                <input type='submit' value='Save settings' />
                <span>View profile</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default EditProfile;
