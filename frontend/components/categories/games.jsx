import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';
import ExploreProjects from './explore_projects';

class Games extends React.Component {
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
    let gamesId = [];
    let categoryName = [];
    let idGames = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Games') {
          gamesId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Games') { idGames.push(el.id); }
        }
      });
    }
    let gamesProjects = [];
    let projectGames = [];
    let projectGamingHardware = [];
    let projectVideoGames = [];
    let projectTabletop = [];
    let projectLiveGames = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (gamesId.includes(project.categoryId)) {
          category = categoryName[gamesId.indexOf(project.categoryId)];
          if (category === 'Games' && project.subcategory === 'Gaming Hardware') {
            gamesProjects.push(project);
            projectGamingHardware.push(project);
          } else if (category === 'Games' && project.subcategory === 'Tabletop Games') {
            gamesProjects.push(project);
            projectTabletop.push(project);
          } else if (category === 'Games' && project.subcategory === 'Video Games') {
            gamesProjects.push(project);
            projectVideoGames.push(project);
          } else if (category === 'Games' && project.subcategory === 'Live Games') {
            gamesProjects.push(project);
            projectLiveGames.push(project);
          } else if (category === 'Games') {
            gamesProjects.push(project);
            projectGames.push(project);
          }
        }
      });
    }
    let usersGamesProjects = [];
    let gamesUsersProjects = [];
    let gamingHardwareUsersProjects = [];
    let videoGamesUsersProjects = [];
    let tabletopUsersProjects = [];
    let liveGamesUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersGamesProjects = gamesProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      gamesUsersProjects = projectGames.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      gamingHardwareUsersProjects = projectGamingHardware.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      videoGamesUsersProjects = projectVideoGames.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      tabletopUsersProjects = projectTabletop.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      liveGamesUsersProjects = projectLiveGames.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Games'} subcategories={['games']} subcategoriesUppercase={['Games']} description={'From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart}
                            mainHeartFill={this.state.mainHeartFill}
                            projects={gamesProjects}
                            users={usersGamesProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(gamesProjects.length > 1 ? gamesProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(gamesProjects.length > 0 ? gamesProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(gamesProjects.length > 0 ? gamesProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(gamesProjects.length > 0 ? gamesProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <div className='improving-our-community'>
            <div className='improving-our-community-inner'>
              <div className='podcast-for-nerds'>
                <img src='https://i.imgur.com/D8MgFon.gif'/>
                <div className='improving-our-community-inner-inner-inner'>
                  <div className='podcast-for-nerds-content'>
                    <h3>A podcast for nerds like you</h3>
                    <p>Join the StartSmart Games team as they attempt to make two games industry weirdos become friends.</p>
                  </div>
                  <div className='improving-our-community-readmore'>Check it out</div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'RPGS'}
                           viewmore={'photography'}
                           project={projectVideoGames.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={videoGamesUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'CONSOLE GAMES'}
                           viewmore={'photography'}
                           project={projectGamingHardware.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={gamingHardwareUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'PC GAMES'}
                           viewmore={'photography'}
                           project={projectGames.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={gamesUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'STRATEGY GAMES'}
                           viewmore={'photography'}
                           project={projectTabletop.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={tabletopUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'VISUAL NOVELS'}
                           viewmore={'photography'}
                           project={projectLiveGames.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={liveGamesUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to our Games newsletter</h2>
                <p>Join our secret society.</p>
                <div className='comics-illustrion-subscribe-newsletter-inner-inner-inner'>
                  <button>Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
