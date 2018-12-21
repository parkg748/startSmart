import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';
import ProfileBacked from './profile_backed';
import ProfileAbout from './profile_about';
import ProfileCreated from './profile_created';
import InfiniteScroll from 'react-infinite-scroller';

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

  displayCategory(e) {
    console.log(e.pageX)
    console.log(e.pageY)
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  _onMouseOver(e) {
    console.log('here')
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
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let userCreated = Object.values(this.props.user)[0].createdAt.split('-');
    let userCreatedYear = userCreated[0];
    let userCreatedMonth = month[userCreated[1] - 1];
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
                    <img src={Object.values(this.props.user)[0].profileUrl ? Object.values(this.props.user)[0].profileUrl : 'https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=80&h=80&fit=crop&v=&auto=format&frame=1&q=92&s=bef8e9f35b956ef44fafa5156ee21f03'}/>
                  </div>
                  <div className='profile-container-seven'>
                    <h2>{Object.values(this.props.user)[0].name}</h2>
                    <p>Backed 0 projects · <Link className='preparing-for-project-link' to='/'>{Object.values(this.props.projects).length != 0 && Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0] != undefined ? `${Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0].city}, ${Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0].state}` : ''}</Link> · Joined {userCreatedMonth} {userCreatedYear}</p>
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
                  <ul className='slice-pie'>
                    <li className='slice-one'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-two'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-three'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-four'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-five'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-six'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-seven'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-eight'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-nine'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-ten'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-eleven'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-twelve'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-thirteen'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-fourteen'>
                      <div className='slice-contents'></div>
                    </li>
                    <li className='slice-fifteen'>
                      <div className='slice-contents'></div>
                    </li>
                  </ul>
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
                      <li>Created<span>6</span></li>
                      <li>Comments<span className='three-hundred-digits'>204</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
