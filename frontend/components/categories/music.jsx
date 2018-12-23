import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';
import ExploreProjects from './explore_projects';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  displayNone: 'error-email-msg',
                  searchBar: 'search-bar-close',
                  firstHeart: 'category-recommended-right-heart far',
                  secondHeart: 'category-recommended-right-heart far',
                  thirdHeart: 'category-recommended-right-heart far',
                  mainHeart: 'category-recommended-right-heart-id-first',
                  mainHeartFill: 'featured-project-recommended-left-main-heart-icon far',
                  firstProject: 'explore-project-heart-id-first',
                  firstProjectFill: 'explore-project-heart-icon far'};
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.clickSearchBar = this.clickSearchBar.bind(this);
    this.addToSavedProjects = this.addToSavedProjects.bind(this);
    this.removeFromSavedProjects = this.removeFromSavedProjects.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
  }

  addToSavedProjects(idx, heart) {
    if (idx === '') return;
    let savedProjects = getState().entities.users.filter(el => el.id === getState().session.id)[0].savedProjects;
    savedProjects.push(idx);
    if (heart === 'first-heart' && this.state.firstHeart === 'category-recommended-right-heart far') {
      this.setState({firstHeart: 'category-recommended-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'second-heart' && this.state.secondHeart === 'category-recommended-right-heart far') {
      this.setState({secondHeart: 'category-recommended-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'third-heart' && this.state.thirdHeart === 'category-recommended-right-heart far') {
      this.setState({thirdHeart: 'category-recommended-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'main-heart' && this.state.mainHeart === 'category-recommended-right-heart-id-first') {
      this.setState({mainHeart: 'category-recommended-right-heart-id-first-red', mainHeartFill: 'featured-project-recommended-left-main-heart-icon-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'first-project' && this.state.firstProject === 'explore-project-heart-id-first') {
      this.setState({firstProject: 'explore-project-heart-id-first-red', firstProjectFill: 'explore-project-heart-id-first-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if ((this.state.firstHeart === 'category-recommended-right-heart-red fas') ||
               (this.state.secondHeart === 'category-recommended-right-heart-red fas') ||
               (this.state.thirdHeart === 'category-recommended-right-heart-red fas') ||
               (this.state.mainHeart === 'category-recommended-right-heart-id-first-red')) {
      this.removeFromSavedProjects(idx, heart);
    }
  }

  removeFromSavedProjects(idx, heart) {
    let savedProjects = getState().entities.users.filter(el => el.id === getState().session.id)[0].savedProjects;
    savedProjects = savedProjects.filter(el => el != idx);
    if (heart === 'first-heart') {
      this.setState({firstHeart: 'category-recommended-right-heart far'});
    } else if (heart === 'second-heart') {
      this.setState({secondHeart: 'category-recommended-right-heart far'});
    } else if (heart === 'third-heart') {
      this.setState({thirdHeart: 'category-recommended-right-heart far'});
    } else if (heart === 'main-heart') {
      this.setState({mainHeart: 'category-recommended-right-heart-id-first', mainHeartFill: 'featured-project-recommended-left-main-heart-icon far'});
    } else if (heart === 'first-project') {
      this.setState({mainHeart: 'explore-project-heart-id-first', mainHeartFill: 'explore-project-heart-icon far'});
    }
    this.props.updateUser({id: getState().session.id, saved_projects: savedProjects});
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

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  render() {
    if (Object.values(getState().entities.users)[0] == null) return null;
    if (this.props.category === null || this.props.category === undefined) return null;
    if (this.props.session.session === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    let currentProfileIcon = Object.values(getState().entities.users)[0] == null || getState().session.session === null ? '' : Object.values(getState().entities.users).filter(el => el.id === getState().session.id)[0].profileUrl;
    if (getState().session.id) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={currentProfileIcon === '' ? 'https://i.imgur.com/jyZdRza.png' : currentProfileIcon} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let musicId = [];
    let categoryName = [];
    let idMusic = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Music') {
          musicId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Music') { idMusic.push(el.id); }
        }
      });
    }
    let musicProjects = [];
    let projectMusic = [];
    let projectMetal = [];
    let projectNewYork = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (musicId.includes(project.categoryId)) {
          category = categoryName[musicId.indexOf(project.categoryId)];
          if (category === 'Music' && project.subcategory === 'Metal') {
            musicProjects.push(project);
            projectMetal.push(project);
          } else if (category === 'Music' && project.state === 'NY') {
            musicProjects.push(project);
            projectNewYork.push(project);
          } else if (category === 'Music') {
            musicProjects.push(project);
            projectMusic.push(project);
          }
        }
      });
    }
    let usersMusicProjects = [];
    let musicUsersProjects = [];
    let metalUsersProjects = [];
    let newYorkUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersMusicProjects = musicProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      musicUsersProjects = projectMusic.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      metalUsersProjects = projectMetal.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      newYorkUsersProjects = projectNewYork.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Music'} subcategories={['music']} subcategoriesUppercase={['Music']} description={'Discover new albums, performances, and independent venues from creators using StartSmart to shape the future of sound.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart}
                            mainHeartFill={this.state.mainHeartFill}
                            projects={musicProjects}
                            users={usersMusicProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(musicProjects.length > 1 ? musicProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to our Music newsletter</h2>
                <p>It's like the radio but nothing sucks and also it’s a newsletter.</p>
                <div className='comics-illustrion-subscribe-newsletter-inner-inner-inner'>
                  <button>Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/DAp1ZxO.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>Ojalá Systems/PSYPIRITUAL: Time Your Drugs</h3>
                      <p>Listen to 2018's greatest independent hip-hop album, straight outta Tucson and made here on StartSmart!</p>
                    </div>
                    <div className='postcommodity-readmore'>Listen now</div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/AljwqPJ.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>How to balance full-time work with creative projects</h3>
                      <p>A new and fantastic guide from The Creative Independent.</p>
                    </div>
                    <div className='postcommodity-readmore'>Read more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'LIVE FROM NEW YORK'}
                           viewmore={'music'}
                           project={projectNewYork.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={newYorkUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src={projectMusic[0] ? projectMusic[0].imageUrl : ''}/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>{projectMusic[0] ? projectMusic[0].title : ''}</h3>
                      <p>{projectMusic[0] ? projectMusic[0].description : ''}</p>
                    </div>
                    <div className='postcommodity-readmore'>View project</div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src={projectMusic[1] ? projectMusic[1].imageUrl : ''}/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>{projectMusic[1] ? projectMusic[1].title : ''}</h3>
                      <p>{projectMusic[1] ? projectMusic[1].description : ''}</p>
                    </div>
                    <div className='postcommodity-readmore'>View project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'EXTREMELY METAL'}
                           viewmore={'music'}
                           project={projectMetal.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={metalUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src={projectMusic[2] ? projectMusic[2].imageUrl : ''}/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>{projectMusic[2] ? projectMusic[2].title : ''}</h3>
                      <p>{projectMusic[2] ? projectMusic[2].description : ''}</p>
                    </div>
                    <div className='postcommodity-readmore'>View project</div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src={projectMusic[3] ? projectMusic[3].imageUrl : ''}/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>{projectMusic[3] ? projectMusic[3].title : ''}</h3>
                      <p>{projectMusic[3] ? projectMusic[3].description : ''}</p>
                    </div>
                    <div className='postcommodity-readmore'>View project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'WITCHSTARTER'}
                           viewmore={'music'}
                           project={projectMusic.slice(4, 8)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={musicUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
        </div>
      </div>
    );
  }
}

export default Music;
