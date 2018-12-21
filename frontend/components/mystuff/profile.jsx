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
                  theaterLeft: '', theaterTop: '', theaterDisplay: 'none'};
    this.clickSearchBar = this.clickSearchBar.bind(this);
    this.displayCategoryMouseMove = this.displayCategoryMouseMove.bind(this);
    this.displayCategoryMouseLeave = this.displayCategoryMouseLeave.bind(this);
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

  displayCategoryMouseMove(e, category) {
    if (category === 'art') {
      this.setState({artLeft: e.pageX - 400, artTop: e.pageY - 500, artDisplay: 'block'});
    } else if (category === 'comics') {
      this.setState({comicsLeft: e.pageX - 400, comicsTop: e.pageY - 500, comicsDisplay: 'block'});
    } else if (category === 'crafts') {
      this.setState({craftsLeft: e.pageX - 400, craftsTop: e.pageY - 500, craftsDisplay: 'block'});
    } else if (category === 'dance') {
      this.setState({danceLeft: e.pageX - 400, danceTop: e.pageY - 500, danceDisplay: 'block'});
    } else if (category === 'design') {
      this.setState({designLeft: e.pageX - 400, designTop: e.pageY - 500, designDisplay: 'block'});
    } else if (category === 'fashion') {
      this.setState({fashionLeft: e.pageX - 400, fashionTop: e.pageY - 500, fashionDisplay: 'block'});
    } else if (category === 'film') {
      this.setState({filmLeft: e.pageX - 400, filmTop: e.pageY - 500, filmDisplay: 'block'});
    } else if (category === 'food') {
      this.setState({foodLeft: e.pageX - 400, foodTop: e.pageY - 500, foodDisplay: 'block'});
    } else if (category === 'games') {
      this.setState({gamesLeft: e.pageX - 400, gamesTop: e.pageY - 500, gamesDisplay: 'block'});
    } else if (category === 'journalism') {
      this.setState({journalismLeft: e.pageX - 400, journalismTop: e.pageY - 500, journalismDisplay: 'block'});
    } else if (category === 'music') {
      this.setState({musicLeft: e.pageX - 400, musicTop: e.pageY - 500, musicDisplay: 'block'});
    } else if (category === 'photography') {
      this.setState({photographyLeft: e.pageX - 400, photographyTop: e.pageY - 500, photographyDisplay: 'block'});
    } else if (category === 'publishing') {
      this.setState({publishingLeft: e.pageX - 400, publishingTop: e.pageY - 500, publishingDisplay: 'block'});
    } else if (category === 'technology') {
      this.setState({technologyLeft: e.pageX - 400, technologyTop: e.pageY - 500, technologyDisplay: 'block'});
    } else if (category === 'theater') {
      this.setState({theaterLeft: e.pageX - 400, theaterTop: e.pageY - 500, theaterDisplay: 'block'});
    }
  }

  displayCategoryMouseLeave(e, category) {
    if (category === 'art') {
      this.setState({artLeft: e.pageX - 400, artTop: e.pageY - 500, artDisplay: 'none'});
    } else if (category === 'comics') {
      this.setState({comicsLeft: e.pageX - 400, comicsTop: e.pageY - 500, comicsDisplay: 'none'});
    } else if (category === 'crafts') {
      this.setState({craftsLeft: e.pageX - 400, craftsTop: e.pageY - 500, craftsDisplay: 'none'});
    } else if (category === 'dance') {
      this.setState({danceLeft: e.pageX - 400, danceTop: e.pageY - 500, danceDisplay: 'none'});
    } else if (category === 'design') {
      this.setState({designLeft: e.pageX - 400, designTop: e.pageY - 500, designDisplay: 'none'});
    } else if (category === 'fashion') {
      this.setState({fashionLeft: e.pageX - 400, fashionTop: e.pageY - 500, fashionDisplay: 'none'});
    } else if (category === 'film') {
      this.setState({filmLeft: e.pageX - 400, filmTop: e.pageY - 500, filmDisplay: 'none'});
    } else if (category === 'food') {
      this.setState({foodLeft: e.pageX - 400, foodTop: e.pageY - 500, foodDisplay: 'none'});
    } else if (category === 'games') {
      this.setState({gamesLeft: e.pageX - 400, gamesTop: e.pageY - 500, gamesDisplay: 'none'});
    } else if (category === 'journalism') {
      this.setState({journalismLeft: e.pageX - 400, journalismTop: e.pageY - 500, journalismDisplay: 'none'});
    } else if (category === 'music') {
      this.setState({musicLeft: e.pageX - 400, musicTop: e.pageY - 500, musicDisplay: 'none'});
    } else if (category === 'photography') {
      this.setState({photographyLeft: e.pageX - 400, photographyTop: e.pageY - 500, photographyDisplay: 'none'});
    } else if (category === 'publishing') {
      this.setState({publishingLeft: e.pageX - 400, publishingTop: e.pageY - 500, publishingDisplay: 'none'});
    } else if (category === 'technology') {
      this.setState({technologyLeft: e.pageX - 400, technologyTop: e.pageY - 500, technologyDisplay: 'none'});
    } else if (category === 'theater') {
      this.setState({theaterLeft: e.pageX - 400, theaterTop: e.pageY - 500, theaterDisplay: 'none'});
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
    if (Object.values(this.props.user)[0].projects != null) {
      Object.values(this.props.user)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
      const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let userCreated = Object.values(this.props.user)[0].createdAt.split('-');
      var userCreatedYear = userCreated[0];
      var userCreatedMonth = month[userCreated[1] - 1];
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={Object.values(this.props.user)[0].id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
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
                    <p>Backed 0 projects · <Link className='preparing-for-project-link' to='/'>{Object.values(this.props.projects).length != 0 && Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0] != undefined ? `${Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0].city}, ${Object.values(this.props.projects).filter(el => el.userId === this.props.sessionId)[0].state}` : ''}</Link> · Joined {Object.values(this.props.user)[0].projects != null ? userCreatedMonth : ''} {Object.values(this.props.user)[0].projects != null ? userCreatedYear : ''}</p>
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
                      <div onMouseEnter={{}} onMouseMove={(e) => this.displayCategoryMouseMove(e, '')} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-two'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-three'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-four'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-five'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-six'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-seven'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-eight'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-nine'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-ten'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-eleven'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-twelve'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-thirteen'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-fourteen'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
                    <li className='slice-fifteen'>
                      <div onMouseOver={(e) => console.log(e.pageX)} className='slice-contents'></div>
                    </li>
                    <div style={{top: `${this.state.artTop}px`, left: `${this.state.artLeft}px`}} className='drag-indicator'>DRAG INDICATOR</div>
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
