import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
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

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='profile-container'>
          <div className='profile-container-one'>
            <div className='profile-container-two'>
              <div className='profile-container-three'>
                <div className='profile-container-four'>
                  <div className='profile-only-visible'>
                    <div className='profile-only-visible-one'>
                      <div className='profile-only-visible-two'>
                        <i className="profile-only-visible-eye fas fa-eye"></i>
                        This profile page is only visible to you.
                      </div>
                      <button>Manage your privacy settings</button>
                    </div>
                  </div>
                  <div className='profile-container-five'>
                    <img src='https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=80&h=80&fit=crop&v=&auto=format&frame=1&q=92&s=bef8e9f35b956ef44fafa5156ee21f03'/>
                  </div>
                  <div className='profile-container-seven'>
                    <h2>Grace</h2>
                    <p>Backed 0 projects · Joined Oct 2018</p>
                  </div>
                </div>
                <div className="pieBackground">
                  <div className='circle'></div>
                  <div className='under-circle'></div>
                  <div className="hand1"></div>
                  <div className="hand2"></div>
                  <div className="hand3"></div>
                  <div className="hand4"></div>
                  <div className="hand5"></div>
                  <div className="hand6"></div>
                  <div className="hand7"></div>
                  <div className="hand8"></div>
                  <div className="hand9"></div>
                  <div className="hand10"></div>
                  <div className="hand11"></div>
                  <div className="hand12"></div>
                  <div className="hand13"></div>
                  <div className="hand14"></div>
                  <div className="hand15"></div>
                  <div id="pieSlice1" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice2" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice3" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice4" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice5" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice6" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice7" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice8" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice9" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice10" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice11" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice12" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice13" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice14" className="hold"><div className="pie"></div></div>
                  <div id="pieSlice15" className="hold"><div className="pie"></div></div>
                </div>
              </div>
            </div>
            <div className='profile-container-eight'>
              <div className='profile-container-nine'>
                <div className='profile-container-ten'>
                  <div className='profile-container-eleven'>
                    <div className='profile-container-green-bar'></div>
                    <ul>
                      <li>About</li>
                      <li>Backed<span>0</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='profile-container-footer'>
              <div className='profile-container-footer-one'>
                <p>
                  <strong>You haven't backed any projects. </strong>
                  Let's change that!
                  <span className='discover-projects'><Link className='policy-link' to='/'>Discover projects</Link></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
