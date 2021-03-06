import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  name: '',
                  biography: '',
                  websiteGreenBorder: '',
                  vanityUrlGreenBorder: '',
                  biographyBlackBorder: '',
                  nameGreenBorder: '',
                  locationGreenBorder: '',
                  website: '',
                  websites: [],
                  vanityUrl: '',
                  profileUrl: "",
                  profileFile: "",
                  profileUpload: 'close',
                  searchBar: 'search-bar-close'};
    this.addGreenBorder = this.addGreenBorder.bind(this);
    this.addWebsite = this.addWebsite.bind(this);
    this.deleteWebsite = this.deleteWebsite.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(getState().session.id);
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({profileFile: file, profileUrl: fileReader.result, profileUpload: "open"});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  addGreenBorder(section) {
    if (section === 'website') {
      this.setState({websiteGreenBorder: 'green-support-border', vanityUrlGreenBorder: '', biographyBlackBorder: '', nameGreenBorder: '', locationGreenBorder: ''});
    } else if (section === 'vanity-url') {
      this.setState({websiteGreenBorder: '', vanityUrlGreenBorder: 'green-support-border', biographyBlackBorder: '', nameGreenBorder: '', locationGreenBorder: ''});
    } else if (section === 'biography') {
      this.setState({websiteGreenBorder: '', vanityUrlGreenBorder: '', biographyBlackBorder: 'black-border', nameGreenBorder: '', locationGreenBorder: ''});
    } else if (section === 'name') {
      this.setState({websiteGreenBorder: '', vanityUrlGreenBorder: '', biographyBlackBorder: '', nameGreenBorder: 'green-support-border', locationGreenBorder: ''});
    } else if (section === 'location') {
      this.setState({websiteGreenBorder: '', vanityUrlGreenBorder: '', biographyBlackBorder: '', nameGreenBorder: '', locationGreenBorder: 'green-support-border'});
    }
  }

  addWebsite() {
    let websites = this.state.websites;
    websites.push(this.state.website);
    this.setState({websites: [...loggedInUser[0].websites, ...websites]});
  }

  deleteWebsite(idx) {
    let websites = this.state.websites;
    websites = [...websites.slice(0, idx), ...websites.slice(idx + 1)];
    this.setState({websites});
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  saveSettings(e) {
    e.preventDefault();
    const formData = new FormData();

    if(this.state.profileFile){
        formData.append('user[profile_url]', this.state.profileFile);
        $.ajax({
          url: `/api/users/${getState().session.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false
        });
    }
    let user = loggedInUser[0];
    this.props.updateUser({id: getState().session.id,
                          name: this.state.name === '' ? user.name : this.state.name,
                          biography: this.state.biography === '' ? user.biography : this.state.biography,
                          websites: this.state.websites.length === 0 ? user.websites : this.state.websites})
              .then(() => window.location.reload());
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let loggedInUser = Object.values(this.props.user);
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && loggedInUser[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={loggedInUser[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : loggedInUser[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (loggedInUser[0].projects != null) {
      loggedInUser[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    let pictureUploadContainer = '';
    if (loggedInUser[0].profileUrl === '') {
      pictureUploadContainer = <strong>Choose an image from your computer</strong>;
    } else {
      pictureUploadContainer = <div className='edit-profile-choose-image-inner'>
        <img src={`${loggedInUser[0].profileUrl}`}/>
        <strong>Choose an image from your computer</strong>
      </div>;
    }
    let websites = [];
    if (loggedInUser[0].length > 0 && this.state.websites.length === 0) {
      for (let i = 0; i < loggedInUser[0].length; i++) {
        websites.push(<div className='url-list'>
          {this.state.websites[i]}
          <div onClick={() => this.deleteWebsite(i)} className='url-list-times-box'>
            <i className="url-list-times fas fa-times"></i>
          </div>
        </div>);
      }
    } else {
      for (let i = 0; i < this.state.websites.length; i++) {
        websites.push(<div className='url-list'>
          {this.state.websites[i]}
          <div onClick={() => this.deleteWebsite(i)} className='url-list-times-box'>
            <i className="url-list-times fas fa-times"></i>
          </div>
        </div>);
      }
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()} />
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='edit-profile-container'>
          <div className='account-container-header'>
            <div className='account-container-header-one'>
              <h1>Settings</h1>
              <div className='account-container-navbar'>
                <div className='edit-profile-blue-bar'></div>
                <ul>
                  <li className='inactive'><Link to='/settings/account'>Account</Link></li>
                  <li>Edit Profile</li>
                  <li className='inactive'><Link to='/settings/notifications'>Notifications</Link></li>
                  <li className='inactive'><Link to='/'>Payment methods</Link></li>
                  <li className='inactive'><Link to='/profile/following/find_creators'>Following</Link></li>
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
                      <input onChange={this.update('name')} className={`${this.state.nameGreenBorder}`} onClick={() => this.addGreenBorder('name')} type='text' defaultValue={this.state.name === '' ? loggedInUser[0].name : this.state.name} />
                      <span>Heads up: Once you launch a project, you cannot make changes to your name on StartSmart.</span>
                    </li>
                    <li>
                      <span><strong>Picture</strong></span>
                        <div className='edit-profile-choose-image'>
                          <label htmlFor='profile-upload'>
                            <input id='profile-upload' onChange={(e) => this.handleFile(e)} type='file' />
                            {pictureUploadContainer}
                          </label>
                        </div>
                      <span>JPEG, PNG, GIF, or BMP • 200MB file limit</span>
                    </li>
                    <li>
                      <span><strong>Biography</strong></span>
                      <textarea onChange={this.update('biography')} value={loggedInUser[0].biography === '' ? this.state.biography : loggedInUser[0].biography} className={`${this.state.biographyBlackBorder}`} onClick={() => this.addGreenBorder('biography')}></textarea>
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
                        <input className={`${this.state.locationGreenBorder}`} onClick={() => this.addGreenBorder('location')} type='text' placeholder='E.g. Brooklyn, NY' />
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
                      <strong>https:&#47;&#47;www.startsmart.com/profile/</strong>
                      <input onChange={this.update('vanityUrl')} className={`vanity-url-input ${this.state.vanityUrlGreenBorder}`} type='text' onClick={() => this.addGreenBorder('vanity-url')}/>
                      <span>For example, if you'd like your URL to be www.startsmart.com/profile/polarbear, just type polarbear! Choose wisely though, once you set your vanity URL, it can't be reset.</span>
                    </li>
                    <li>
                      <span><strong>Websites</strong></span>
                      <div className='edit-profile-add-websites'>
                        <input onChange={this.update('website')} className={`${this.state.websiteGreenBorder}`} type='text' onClick={() => this.addGreenBorder('website')} />
                        <button onClick={() => this.addWebsite()}>Add</button>
                      </div>
                      {websites}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='edit-profile-divider'></div>
            <div className='edit-profile-footer'>
              <div className='save-settings-two'>
                <input onClick={(e) => this.saveSettings(e)} type='submit' value='Save settings' />
                <span><Link to={`/profile/${getState().session.id}`}>View profile</Link></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default EditProfile;
