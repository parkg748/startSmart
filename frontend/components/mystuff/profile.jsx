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
    this.state = {displayProfileMenu: 'js-modal-close',
                  searchBar: 'search-bar-close',
                  artLeft: '', artTop: '', artDisplay: 'none',
                  comicsLeft: '', comicsTop: '', comicsDisplay: 'none',
                  craftsLeft: '', craftsTop: '', craftsDisplay: 'none',
                  danceLeft: '', danceTop: '', danceDisplay: 'none',
                  designLeft: '', designTop: '', designDisplay: 'none',
                  fashionLeft: '', fashionTop: '', fashionDisplay: 'none',
                  filmLeft: '', filmTop: '', filmDisplay: 'none',
                  foodLeft: '', foodTop: '', foodDisplay: 'none',
                  gamesLeft: '', gamesTop: '', gamesDisplay: 'none',
                  journalismLeft: '', journalismTop: '', journalismDisplay: 'none',
                  musicLeft: '', musicTop: '', musicDisplay: 'none',
                  photographyLeft: '', photographyTop: '', photographyDisplay: 'none',
                  publishingLeft: '', publishingTop: '', publishingDisplay: 'none',
                  technologyLeft: '', technologyTop: '', technologyDisplay: 'none',
                  theaterLeft: '', theaterTop: '', theaterDisplay: 'none',
                  profileView: 'about',
                  about: '',
                  backed: 'inactive',
                  created: 'inactive',
                  comments: 'inactive',
                  greenBar: 'profile-container-green-bar-about'};
    this.clickSearchBar = this.clickSearchBar.bind(this);
    this.displayCategoryMouseMove = this.displayCategoryMouseMove.bind(this);
    this.displayCategoryMouseLeave = this.displayCategoryMouseLeave.bind(this);
    this.displayProfileSection = this.displayProfileSection.bind(this);
    this.art = React.createRef();
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchAllUsers();
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

  displayCategoryMouseMove(e, category) {
    if (category === 'art') {
      this.setState({artLeft: e.pageX, artTop: e.pageY - 24, artDisplay: ''});
    } else if (category === 'comics') {
      this.setState({comicsLeft: e.pageX, comicsTop: e.pageY - 24, comicsDisplay: ''});
    } else if (category === 'crafts') {
      this.setState({craftsLeft: e.pageX, craftsTop: e.pageY - 24, craftsDisplay: ''});
    } else if (category === 'dance') {
      this.setState({danceLeft: e.pageX, danceTop: e.pageY - 24, danceDisplay: ''});
    } else if (category === 'design') {
      this.setState({designLeft: e.pageX, designTop: e.pageY - 24, designDisplay: ''});
    } else if (category === 'fashion') {
      this.setState({fashionLeft: e.pageX, fashionTop: e.pageY - 24, fashionDisplay: ''});
    } else if (category === 'film') {
      this.setState({filmLeft: e.pageX, filmTop: e.pageY - 24, filmDisplay: ''});
    } else if (category === 'food') {
      this.setState({foodLeft: e.pageX, foodTop: e.pageY - 24, foodDisplay: ''});
    } else if (category === 'games') {
      this.setState({gamesLeft: e.pageX, gamesTop: e.pageY - 24, gamesDisplay: ''});
    } else if (category === 'journalism') {
      this.setState({journalismLeft: e.pageX, journalismTop: e.pageY - 24, journalismDisplay: ''});
    } else if (category === 'music') {
      this.setState({musicLeft: e.pageX, musicTop: e.pageY - 24, musicDisplay: ''});
    } else if (category === 'photography') {
      this.setState({photographyLeft: e.pageX, photographyTop: e.pageY - 24, photographyDisplay: ''});
    } else if (category === 'publishing') {
      this.setState({publishingLeft: e.pageX, publishingTop: e.pageY - 24, publishingDisplay: ''});
    } else if (category === 'technology') {
      this.setState({technologyLeft: e.pageX, technologyTop: e.pageY - 24, technologyDisplay: ''});
    } else if (category === 'theater') {
      this.setState({theaterLeft: e.pageX, theaterTop: e.pageY - 24, theaterDisplay: ''});
    }
  }

  displayCategoryMouseLeave(e, category) {
    if (category === 'art') {
      this.setState({artLeft: e.pageX, artTop: e.pageY - 24, artDisplay: 'none'});
    } else if (category === 'comics') {
      this.setState({comicsLeft: e.pageX, comicsTop: e.pageY - 24, comicsDisplay: 'none'});
    } else if (category === 'crafts') {
      this.setState({craftsLeft: e.pageX, craftsTop: e.pageY - 24, craftsDisplay: 'none'});
    } else if (category === 'dance') {
      this.setState({danceLeft: e.pageX, danceTop: e.pageY - 24, danceDisplay: 'none'});
    } else if (category === 'design') {
      this.setState({designLeft: e.pageX, designTop: e.pageY - 24, designDisplay: 'none'});
    } else if (category === 'fashion') {
      this.setState({fashionLeft: e.pageX, fashionTop: e.pageY - 24, fashionDisplay: 'none'});
    } else if (category === 'film') {
      this.setState({filmLeft: e.pageX, filmTop: e.pageY - 24, filmDisplay: 'none'});
    } else if (category === 'food') {
      this.setState({foodLeft: e.pageX, foodTop: e.pageY - 24, foodDisplay: 'none'});
    } else if (category === 'games') {
      this.setState({gamesLeft: e.pageX, gamesTop: e.pageY - 24, gamesDisplay: 'none'});
    } else if (category === 'journalism') {
      this.setState({journalismLeft: e.pageX, journalismTop: e.pageY - 24, journalismDisplay: 'none'});
    } else if (category === 'music') {
      this.setState({musicLeft: e.pageX, musicTop: e.pageY - 24, musicDisplay: 'none'});
    } else if (category === 'photography') {
      this.setState({photographyLeft: e.pageX, photographyTop: e.pageY - 24, photographyDisplay: 'none'});
    } else if (category === 'publishing') {
      this.setState({publishingLeft: e.pageX, publishingTop: e.pageY - 24, publishingDisplay: 'none'});
    } else if (category === 'technology') {
      this.setState({technologyLeft: e.pageX, technologyTop: e.pageY - 24, technologyDisplay: 'none'});
    } else if (category === 'theater') {
      this.setState({theaterLeft: e.pageX, theaterTop: e.pageY - 24, theaterDisplay: 'none'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  displayProfileSection(section) {
    if (section === 'about') {
      this.setState({about: '', backed: 'inactive', created: 'inactive', comments: 'inactive', greenBar: 'profile-container-green-bar-about', profileView: 'about'});
    } else if (section === 'backed') {
      this.setState({about: 'inactive', backed: '', created: 'inactive', comments: 'inactive', greenBar: 'profile-container-green-bar-backed', profileView: 'backed'});
    } else if (section === 'created') {
      this.setState({about: 'inactive', backed: 'inactive', created: '', comments: 'inactive', greenBar: 'profile-container-green-bar-created', profileView: 'created'});
    } else if (section === 'comments') {
      this.setState({about: 'inactive', backed: 'inactive', created: 'inactive', comments: '', greenBar: 'profile-container-green-bar-comments', profileView: 'comments'});
    }
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profileUser = Object.values(this.props.user).filter(el => el.id == this.props.match.params.userId)[0];
    let loggedInUser = Object.values(this.props.user).filter(el => el.id === this.props.sessionId)[0];
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={loggedInUser === undefined || loggedInUser.profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : loggedInUser.profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(this.props.user)[0].projects != null) {
      Object.values(this.props.user)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
      const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let userCreated = profileUser.createdAt.split('-');
      var userCreatedYear = userCreated[0];
      var userCreatedMonth = month[userCreated[1] - 1];
    }
    let currentProfileBody = '';
    if (this.state.profileView === 'about') {
      currentProfileBody = <ProfileAbout biography={profileUser != undefined ? profileUser.biography : ''} websites={profileUser != undefined ? profileUser.websites : []}/>;
    } else if (this.state.profileView === 'backed') {
      currentProfileBody = <ProfileBacked backedProjects={profileUser != undefined ? profileUser.backedProjects : []} />;
    } else if (this.state.profileView === 'created') {
      currentProfileBody = <ProfileCreated projects={Object.values(this.props.projects).filter(el => el.userId == this.props.match.params.userId)} user={profileUser} />;
    } //else if (this.state.profileView === 'comments') {
      // currentProfileBody = <Comments content={content} styles={styles} onClick={this.state.onClick} />;
    // }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={this.props.sessionId} sessionId={this.props.sessionId} logoutUser={(e) => this.logoutUser(e)}/>
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
                    <img src={profileUser != undefined ? profileUser.profileUrl : 'https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=80&h=80&fit=crop&v=&auto=format&frame=1&q=92&s=bef8e9f35b956ef44fafa5156ee21f03'}/>
                  </div>
                  <div className='profile-container-seven'>
                    <h2>{profileUser != undefined ? profileUser.name : ''}</h2>
                    <p>Backed 0 projects · <Link className='preparing-for-project-link' to='/'>{Object.values(this.props.projects).length != 0 && Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0] != undefined ? `${Object.values(this.props.projects).filter(el => el.userId == this.props.match.params.userId)[0].city}, ${Object.values(this.props.projects).filter(el => el.userId == this.props.match.params.userId)[0].state}` : ''}</Link> · Joined {Object.values(this.props.user)[0].projects != null ? userCreatedMonth : ''} {Object.values(this.props.user)[0].projects != null ? userCreatedYear : ''}</p>
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
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'art')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'art')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'art')} ref={art => {this.art = art}} className='slice-contents'></div>
                    </li>
                    <li className='slice-two'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'comics')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'comics')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'comics')} ref={comics => {this.comics = comics}} className='slice-contents'></div>
                    </li>
                    <li className='slice-three'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'crafts')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'crafts')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'crafts')} ref={crafts => {this.crafts = crafts}} className='slice-contents'></div>
                    </li>
                    <li className='slice-four'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'dance')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'dance')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'dance')} ref={dance => {this.dance = dance}} className='slice-contents'></div>
                    </li>
                    <li className='slice-five'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'design')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'design')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'design')} ref={design => {this.design = design}} className='slice-contents'></div>
                    </li>
                    <li className='slice-six'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'fashion')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'fashion')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'fashion')} ref={fashion => {this.fashion = fashion}} className='slice-contents'></div>
                    </li>
                    <li className='slice-seven'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'film')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'film')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'film')} ref={film => {this.film = film}} className='slice-contents'></div>
                    </li>
                    <li className='slice-eight'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'food')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'food')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'food')} ref={food => {this.food = food}} className='slice-contents'></div>
                    </li>
                    <li className='slice-nine'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'games')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'games')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'games')} ref={games => {this.games = games}} className='slice-contents'></div>
                    </li>
                    <li className='slice-ten'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'journalism')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'journalism')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'journalism')} ref={journalism => {this.journalism = journalism}} className='slice-contents'></div>
                    </li>
                    <li className='slice-eleven'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'music')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'music')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'music')} ref={music => {this.music = music}} className='slice-contents'></div>
                    </li>
                    <li className='slice-twelve'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'photography')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'photography')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'photography')} ref={photography => {this.photography = photography}} className='slice-contents'></div>
                    </li>
                    <li className='slice-thirteen'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'publishing')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'publishing')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'publishing')} ref={publishing => {this.publishing = publishing}} className='slice-contents'></div>
                    </li>
                    <li className='slice-fourteen'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'technology')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'technology')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'technology')} ref={technology => {this.technology = technology}} className='slice-contents'></div>
                    </li>
                    <li className='slice-fifteen'>
                      <div onMouseEnter={(e) => this.displayCategoryMouseMove(e, 'theater')} onMouseMove={(e) => this.displayCategoryMouseMove(e, 'theater')} onMouseLeave={(e) => this.displayCategoryMouseLeave(e, 'theater')} ref={theater => {this.theater = theater}} className='slice-contents'></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='profile-container-eight'>
              <div className='profile-container-nine'>
                <div className='profile-container-ten'>
                  <div className='profile-container-eleven'>
                    <div className={`${this.state.greenBar}`}></div>
                    <ul>
                      <li onClick={() => this.displayProfileSection('about')} className={`${this.state.about}`}>About</li>
                      <li onClick={() => this.displayProfileSection('backed')} className={`${this.state.backed}`}>Backed<span>0</span></li>
                      <li onClick={() => this.displayProfileSection('created')} className={`${this.state.created}`}>Created<span>6</span></li>
                      <li onClick={() => this.displayProfileSection('comments')} className={`${this.state.comments}`}>Comments<span className='three-hundred-digits'>204</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`, display: `${this.state.artDisplay}`}} className='drag-indicator'>Art</div>
            <div style={{top: `${this.state.comicsTop}px`, left: `${this.state.comicsLeft}px`, display: `${this.state.comicsDisplay}`}} className='drag-indicator'>Comics</div>
            <div style={{top: `${this.state.craftsTop}px`, left: `${this.state.craftsLeft}px`, display: `${this.state.craftsDisplay}`}} className='drag-indicator'>Crafts</div>
            <div style={{top: `${this.state.danceTop}px`, left: `${this.state.danceLeft}px`, display: `${this.state.danceDisplay}`}} className='drag-indicator'>Dance</div>
            <div style={{top: `${this.state.designTop}px`, left: `${this.state.designLeft}px`, display: `${this.state.designDisplay}`}} className='drag-indicator'>Design</div>
            <div style={{top: `${this.state.fashionTop}px`, left: `${this.state.fashionLeft}px`, display: `${this.state.fashionDisplay}`}} className='drag-indicator'>Fashion</div>
            <div style={{top: `${this.state.filmTop}px`, left: `${this.state.filmLeft}px`, display: `${this.state.filmDisplay}`}} className='drag-indicator'>Film & Video</div>
            <div style={{top: `${this.state.foodTop}px`, left: `${this.state.foodLeft}px`, display: `${this.state.foodDisplay}`}} className='drag-indicator'>Food</div>
            <div style={{top: `${this.state.gamesTop}px`, left: `${this.state.gamesLeft}px`, display: `${this.state.gamesDisplay}`}} className='drag-indicator'>Games</div>
            <div style={{top: `${this.state.journalismTop}px`, left: `${this.state.journalismLeft}px`, display: `${this.state.journalismDisplay}`}} className='drag-indicator'>Journalism</div>
            <div style={{top: `${this.state.musicTop}px`, left: `${this.state.musicLeft}px`, display: `${this.state.musicDisplay}`}} className='drag-indicator'>Music</div>
            <div style={{top: `${this.state.photographyTop}px`, left: `${this.state.photographyLeft}px`, display: `${this.state.photographyDisplay}`}} className='drag-indicator'>Photography</div>
            <div style={{top: `${this.state.publishingTop}px`, left: `${this.state.publishingLeft}px`, display: `${this.state.publishingDisplay}`}} className='drag-indicator'>Publishing</div>
            <div style={{top: `${this.state.technologyTop}px`, left: `${this.state.technologyLeft}px`, display: `${this.state.technologyDisplay}`}} className='drag-indicator'>Technology</div>
            <div style={{top: `${this.state.theaterTop}px`, left: `${this.state.theaterLeft}px`, display: `${this.state.theaterDisplay}`}} className='drag-indicator'>Theater</div>
          </div>
          {currentProfileBody}
        </div>
      </div>
    );
  }
}

export default Profile;
