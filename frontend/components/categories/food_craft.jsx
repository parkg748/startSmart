import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';

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
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(foodCraftProjects.length > 1 ? foodCraftProjects.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={foodCraftProjects.length > 0 ? foodCraftProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{foodCraftProjects.length > 0 ? foodCraftProjects.slice(-1)[0].title : ''}</h1>
                <p>{foodCraftProjects.length > 0 ? foodCraftProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersFoodCraftsProjects.length > 0 ? usersFoodCraftsProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img src={foodCraftProjects.length > 0 ? foodCraftProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{foodCraftProjects.length > 0 ? foodCraftProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFoodCraftsProjects.length > 0 ? usersFoodCraftsProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                      {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={foodCraftProjects.length > 0 ? foodCraftProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{foodCraftProjects.length > 0 ? foodCraftProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFoodCraftsProjects.length > 0 ? usersFoodCraftsProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                      {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={foodCraftProjects.length > 0 ? foodCraftProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{foodCraftProjects.length > 0 ? foodCraftProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFoodCraftsProjects.length > 0 ? usersFoodCraftsProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(foodCraftProjects.length > 0 ? foodCraftProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
                      {this.state.thirdHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                </ul>
                <div className='feature-project-recommended-view-more'>View more projects</div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>FOOD PROJECTS WE LOVE</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFood[0] && foodUsersProjects[0] ? `/users/$ foodUsersProjects[0].id}/projects/${projectFood[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFood[0] ? projectFood[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFood[0] && foodUsersProjects[0] ? `/users/$ foodUsersProjects[0].id}/projects/${projectFood[0].id}` : '/'}><h1>{projectFood[0] ? projectFood[0].title : ''}</h1></Link>
                    <p>{projectFood[0] ? projectFood[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{foodUsersProjects[0] ? foodUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFood[1] && foodUsersProjects[1] ? `/users/$ foodUsersProjects[1].id}/projects/${projectFood[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFood[1] ? projectFood[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFood[1] && foodUsersProjects[1] ? `/users/$ foodUsersProjects[1].id}/projects/${projectFood[1].id}` : '/'}><h1>{projectFood[1] ? projectFood[1].title : ''}</h1></Link>
                    <p>{projectFood[1] ? projectFood[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{foodUsersProjects[1] ? foodUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFood[2] && foodUsersProjects[2] ? `/users/$ foodUsersProjects[2].id}/projects/${projectFood[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFood[2] ? projectFood[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFood[2] && foodUsersProjects[2] ? `/users/$ foodUsersProjects[2].id}/projects/${projectFood[2].id}` : '/'}><h1>{projectFood[2] ? projectFood[2].title : ''}</h1></Link>
                    <p>{projectFood[2] ? projectFood[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{foodUsersProjects[2] ? foodUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFood[3] && foodUsersProjects[3] ? `/users/$ foodUsersProjects[3].id}/projects/${projectFood[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFood[3] ? projectFood[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFood[3] && foodUsersProjects[3] ? `/users/$ foodUsersProjects[3].id}/projects/${projectFood[3].id}` : '/'}><h1>{projectFood[3] ? projectFood[3].title : ''}</h1></Link>
                    <p>{projectFood[3] ? projectFood[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{foodUsersProjects[3] ? foodUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>FASHION PROJECTS WE LOVE</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFashion[0] && fashionUsersProjects[0] ? `/users/${fashionUsersProjects[0].id}/projects/${projectFashion[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFashion[0] ? projectFashion[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFashion[0] && fashionUsersProjects[0] ? `/users/${fashionUsersProjects[0].id}/projects/${projectFashion[0].id}` : '/'}><h1>{projectFashion[0] ? projectFashion[0].title : ''}</h1></Link>
                    <p>{projectFashion[0] ? projectFashion[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{fashionUsersProjects[0] ? fashionUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFashion[1] && fashionUsersProjects[1] ? `/users/${fashionUsersProjects[1].id}/projects/${projectFashion[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFashion[1] ? projectFashion[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFashion[1] && fashionUsersProjects[1] ? `/users/${fashionUsersProjects[1].id}/projects/${projectFashion[1].id}` : '/'}><h1>{projectFashion[1] ? projectFashion[1].title : ''}</h1></Link>
                    <p>{projectFashion[1] ? projectFashion[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{fashionUsersProjects[1] ? fashionUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFashion[2] && fashionUsersProjects[2] ? `/users/${fashionUsersProjects[2].id}/projects/${projectFashion[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFashion[2] ? projectFashion[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFashion[2] && fashionUsersProjects[2] ? `/users/${fashionUsersProjects[2].id}/projects/${projectFashion[2].id}` : '/'}><h1>{projectFashion[2] ? projectFashion[2].title : ''}</h1></Link>
                    <p>{projectFashion[2] ? projectFashion[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{fashionUsersProjects[2] ? fashionUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectFashion[3] && fashionUsersProjects[3] ? `/users/${fashionUsersProjects[3].id}/projects/${projectFashion[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectFashion[3] ? projectFashion[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectFashion[3] && fashionUsersProjects[3] ? `/users/${fashionUsersProjects[3].id}/projects/${projectFashion[3].id}` : '/'}><h1>{projectFashion[3] ? projectFashion[3].title : ''}</h1></Link>
                    <p>{projectFashion[3] ? projectFashion[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{fashionUsersProjects[3] ? fashionUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>POPULAR IN FOOD & CRAFT</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectCrafts[0] && craftsUsersProjects[0] ? `/users/${craftsUsersProjects[0].id}/projects/${projectCrafts[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectCrafts[0] ? projectCrafts[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectCrafts[0] && craftsUsersProjects[0] ? `/users/${craftsUsersProjects[0].id}/projects/${projectCrafts[0].id}` : '/'}><h1>{projectCrafts[0] ? projectCrafts[0].title : ''}</h1></Link>
                    <p>{projectCrafts[0] ? projectCrafts[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{craftsUsersProjects[0] ? craftsUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectCrafts[1] && craftsUsersProjects[1] ? `/users/${craftsUsersProjects[1].id}/projects/${projectCrafts[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectCrafts[1] ? projectCrafts[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectCrafts[1] && craftsUsersProjects[1] ? `/users/${craftsUsersProjects[1].id}/projects/${projectCrafts[1].id}` : '/'}><h1>{projectCrafts[1] ? projectCrafts[1].title : ''}</h1></Link>
                    <p>{projectCrafts[1] ? projectCrafts[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{craftsUsersProjects[1] ? craftsUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectCrafts[2] && craftsUsersProjects[2] ? `/users/${craftsUsersProjects[2].id}/projects/${projectCrafts[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectCrafts[2] ? projectCrafts[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectCrafts[2] && craftsUsersProjects[2] ? `/users/${craftsUsersProjects[2].id}/projects/${projectCrafts[2].id}` : '/'}><h1>{projectCrafts[2] ? projectCrafts[2].title : ''}</h1></Link>
                    <p>{projectCrafts[2] ? projectCrafts[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{craftsUsersProjects[2] ? craftsUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectCrafts[3] && craftsUsersProjects[3] ? `/users/${craftsUsersProjects[3].id}/projects/${projectCrafts[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectCrafts[3] ? projectCrafts[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectCrafts[3] && craftsUsersProjects[3] ? `/users/${craftsUsersProjects[3].id}/projects/${projectCrafts[3].id}` : '/'}><h1>{projectCrafts[3] ? projectCrafts[3].title : ''}</h1></Link>
                    <p>{projectCrafts[3] ? projectCrafts[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{craftsUsersProjects[3] ? craftsUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
