import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';
import ExploreProjects from './explore_projects';

class FoodCraft extends React.Component {
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
    let foodCraftId = [];
    let categoryName = [];
    let idFood = [];
    let idCraft = [];
    let idFashion = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Food' || el.name === 'Crafts' || el.name === 'Fashion') {
          foodCraftId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Food') { idFood.push(el.id); }
          else if (el.name === 'Crafts') { idCraft.push(el.id); }
          else if (el.name === 'Fashion') { idFashion.push(el.id); }
        }
      });
    }
    let foodCraftProjects = [];
    let projectFood = [];
    let projectCrafts = [];
    let projectFashion = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (foodCraftId.includes(project.categoryId)) {
          foodCraftProjects.push(project);
          category = categoryName[foodCraftId.indexOf(project.categoryId)];
          if (category === 'Food') { projectFood.push(project); }
          else if (category === 'Crafts') { projectCrafts.push(project); }
          else if (category === 'Fashion') { projectFashion.push(project); }
        }
      });
    }
    let usersFoodCraftsProjects = [];
    let foodUsersProjects = [];
    let craftsUsersProjects = [];
    let fashionUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersFoodCraftsProjects = foodCraftProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      foodUsersProjects = projectFood.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      craftsUsersProjects = projectCrafts.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      fashionUsersProjects = projectFashion.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Food & Craft'} subcategories={['crafts', 'fashion', 'food']} subcategoriesUppercase={['Crafts', 'Fashion', 'Food']} description={'See how artisans and entrepreneurs are using StartSmart to break new ground in food, fashion, and crafts.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart}
                            mainHeartFill={this.state.mainHeartFill}
                            projects={foodCraftProjects}
                            users={usersFoodCraftsProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(foodCraftProjects.length > 1 ? foodCraftProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <ExploreProjects title={'FOOD PROJECTS WE LOVE'}
                           viewmore={'food'}
                           project={projectFood.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={foodUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'FASHION PROJECTS WE LOVE'}
                           viewmore={'fashion'}
                           project={projectFashion.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={fashionUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'POPULAR IN FOOD & CRAFT'}
                           viewmore={'crafts'}
                           project={projectCrafts.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={craftsUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>MORE TO EXPLORE</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/tFrCjIL.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Jenny Gao: what I learned from making hot sauce at scale</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/daRnRU8.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Justin P. Moore shares recipes from his new vegan Ethiopian cookbook</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/LoMcUvy.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>A Cambodian refugee cooks from memory at StartSmart-funded Nyum Bai</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/DhSD6P3.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Dina Nur Satti explores identity, femininity, and community through ceramics</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to our Happening newsletter</h2>
                <p>The zeitgeist delivered to your inbox, via new projects and buzzworthy stories.</p>
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

export default FoodCraft;
