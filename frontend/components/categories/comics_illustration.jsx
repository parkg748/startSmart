import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class ComicsIllustration extends React.Component {
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
    let comicsIllustrationId = [];
    let categoryName = [];
    let idComics = [];
    let idIllustration = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Comics' || el.name === 'Art') {
          comicsIllustrationId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Comics') { idComics.push(el.id); }
          else if (el.name === 'Art') { idIllustration.push(el.id); }
        }
      });
    }
    let comicsIllustrationsProject = [];
    let projectComics = [];
    let projectIllustration = [];
    let projectLGBTQ = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (comicsIllustrationId.includes(project.categoryId)) {
          category = categoryName[comicsIllustrationId.indexOf(project.categoryId)];
          if (category === 'Art' && project.subcategory === 'Illustration') {
            comicsIllustrationsProject.push(project);
            projectIllustration.push(project);
          } else if (category === 'Comics' && (project.subcategory === 'Anthologies' || project.subcategory === 'Graphic Novels')) {
            comicsIllustrationsProject.push(project);
            projectLGBTQ.push(project);
          } else if (category === 'Comics') {
            comicsIllustrationsProject.push(project);
            projectComics.push(project);
          }
        }
      });
    }
    let usersComicsIllustrationProjects = [];
    let comicsUsersProjects = [];
    let illustrationUsersProjects = [];
    let lgbtqUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersComicsIllustrationProjects = comicsIllustrationsProject.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      comicsUsersProjects = projectComics.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      illustrationUsersProjects = projectIllustration.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      lgbtqUsersProjects = projectLGBTQ.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Comics & Illustration</h3>
            <p>Explore fantastical worlds and original characters from StartSmart's community of comics creators and illustrators.</p>
            <Link className='subcategories-links' to='/discover/categories/comics'>Explore Comics</Link>
            <Link className='subcategories-links' to='/discover/categories/art/illustration'>Explore Illustration</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(comicsIllustrationsProject.length > 1 ? comicsIllustrationsProject.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-1)[0].title : ''}</h1>
                <p>{comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersComicsIllustrationProjects.length > 0 ? usersComicsIllustrationProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img src={comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersComicsIllustrationProjects.length > 0 ? usersComicsIllustrationProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                      {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersComicsIllustrationProjects.length > 0 ? usersComicsIllustrationProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                      {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{comicsIllustrationsProject.length > 0 ? comicsIllustrationsProject.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersComicsIllustrationProjects.length > 0 ? usersComicsIllustrationProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(comicsIllustrationsProjects.length > 0 ? comicsIllustrationsProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
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
                  <h3>PROJECTS WE LOVE</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectComics[0] && comicsUsersProjects[0] ? `/users/${comicsUsersProjects[0].id}/projects/${projectComics[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectComics[0] ? projectComics[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectComics[0] && comicsUsersProjects[0] ? `/users/${comicsUsersProjects[0].id}/projects/${projectComics[0].id}` : '/'}><h1>{projectComics[0] ? projectComics[0].title : ''}</h1></Link>
                    <p>{projectComics[0] ? projectComics[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{comicsUsersProjects[0] ? comicsUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectComics[1] && comicsUsersProjects[1] ? `/users/${comicsUsersProjects[1].id}/projects/${projectComics[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectComics[1] ? projectComics[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectComics[1] && comicsUsersProjects[1] ? `/users/${comicsUsersProjects[1].id}/projects/${projectComics[1].id}` : '/'}><h1>{projectComics[1] ? projectComics[1].title : ''}</h1></Link>
                    <p>{projectComics[1] ? projectComics[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{comicsUsersProjects[1] ? comicsUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectComics[2] && comicsUsersProjects[2] ? `/users/${comicsUsersProjects[2].id}/projects/${projectComics[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectComics[2] ? projectComics[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectComics[2] && comicsUsersProjects[2] ? `/users/${comicsUsersProjects[2].id}/projects/${projectComics[2].id}` : '/'}><h1>{projectComics[2] ? projectComics[2].title : ''}</h1></Link>
                    <p>{projectComics[2] ? projectComics[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{comicsUsersProjects[2] ? comicsUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectComics[3] && comicsUsersProjects[3] ? `/users/${comicsUsersProjects[3].id}/projects/${projectComics[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectComics[3] ? projectComics[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectComics[3] && comicsUsersProjects[3] ? `/users/${comicsUsersProjects[3].id}/projects/${projectComics[3].id}` : '/'}><h1>{projectComics[3] ? projectComics[3].title : ''}</h1></Link>
                    <p>{projectComics[3] ? projectComics[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{comicsUsersProjects[3] ? comicsUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>LGBTQIA+ PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[0] && lgbtqUsersProjects[0] ? `/users/${lgbtqUsersProjects[0].id}/projects/${projectLGBTQ[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[0] ? projectLGBTQ[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[0] && lgbtqUsersProjects[0] ? `/users/${lgbtqUsersProjects[0].id}/projects/${projectLGBTQ[0].id}` : '/'}><h1>{projectLGBTQ[0] ? projectLGBTQ[0].title : ''}</h1></Link>
                    <p>{projectLGBTQ[0] ? projectLGBTQ[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[0] ? lgbtqUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[1] && lgbtqUsersProjects[1] ? `/users/${lgbtqUsersProjects[1].id}/projects/${projectLGBTQ[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[1] ? projectLGBTQ[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[1] && lgbtqUsersProjects[1] ? `/users/${lgbtqUsersProjects[1].id}/projects/${projectLGBTQ[1].id}` : '/'}><h1>{projectLGBTQ[1] ? projectLGBTQ[1].title : ''}</h1></Link>
                    <p>{projectLGBTQ[1] ? projectLGBTQ[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[1] ? lgbtqUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[2] && lgbtqUsersProjects[2] ? `/users/${lgbtqUsersProjects[2].id}/projects/${projectLGBTQ[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[2] ? projectLGBTQ[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[2] && lgbtqUsersProjects[2] ? `/users/${lgbtqUsersProjects[2].id}/projects/${projectLGBTQ[2].id}` : '/'}><h1>{projectLGBTQ[2] ? projectLGBTQ[2].title : ''}</h1></Link>
                    <p>{projectLGBTQ[2] ? projectLGBTQ[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[2] ? lgbtqUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[3] && lgbtqUsersProjects[3] ? `/users/${lgbtqUsersProjects[3].id}/projects/${projectLGBTQ[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[3] ? projectLGBTQ[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[3] && lgbtqUsersProjects[3] ? `/users/${lgbtqUsersProjects[3].id}/projects/${projectLGBTQ[3].id}` : '/'}><h1>{projectLGBTQ[3] ? projectLGBTQ[3].title : ''}</h1></Link>
                    <p>{projectLGBTQ[3] ? projectLGBTQ[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[3] ? lgbtqUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>POPULAR IN COMICS & ILLUSTRATION</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectIllustration[0] && illustrationUsersProjects[0] ? `/users/${illustrationUsersProjects[0].id}/projects/${projectIllustration[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectIllustration[0] ? projectIllustration[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectIllustration[0] && illustrationUsersProjects[0] ? `/users/${illustrationUsersProjects[0].id}/projects/${projectIllustration[0].id}` : '/'}><h1>{projectIllustration[0] ? projectIllustration[0].title : ''}</h1></Link>
                    <p>{projectIllustration[0] ? projectIllustration[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{illustrationUsersProjects[0] ? illustrationUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectIllustration[1] && illustrationUsersProjects[1] ? `/users/${illustrationUsersProjects[1].id}/projects/${projectIllustration[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectIllustration[1] ? projectIllustration[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectIllustration[1] && illustrationUsersProjects[1] ? `/users/${illustrationUsersProjects[1].id}/projects/${projectIllustration[1].id}` : '/'}><h1>{projectIllustration[1] ? projectIllustration[1].title : ''}</h1></Link>
                    <p>{projectIllustration[1] ? projectIllustration[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{illustrationUsersProjects[1] ? illustrationUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectIllustration[2] && illustrationUsersProjects[2] ? `/users/${illustrationUsersProjects[2].id}/projects/${projectIllustration[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectIllustration[2] ? projectIllustration[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectIllustration[2] && illustrationUsersProjects[2] ? `/users/${illustrationUsersProjects[2].id}/projects/${projectIllustration[2].id}` : '/'}><h1>{projectIllustration[2] ? projectIllustration[2].title : ''}</h1></Link>
                    <p>{projectIllustration[2] ? projectIllustration[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{illustrationUsersProjects[2] ? illustrationUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectIllustration[3] && illustrationUsersProjects[3] ? `/users/${illustrationUsersProjects[3].id}/projects/${projectIllustration[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectIllustration[3] ? projectIllustration[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectIllustration[3] && illustrationUsersProjects[3] ? `/users/${illustrationUsersProjects[3].id}/projects/${projectIllustration[3].id}` : '/'}><h1>{projectIllustration[3] ? projectIllustration[3].title : ''}</h1></Link>
                    <p>{projectIllustration[3] ? projectIllustration[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{illustrationUsersProjects[3] ? illustrationUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>SPOOKY, SCARY, AND SUPERNATURAL</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectComics[4] && comicsUsersProjects[4] ? `/users/${comicsUsersProjects[4].id}/projects/${projectComics[4].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectComics[4] ? projectComics[4].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[4] && lgbtqUsersProjects[4] ? `/users/${lgbtqUsersProjects[4].id}/projects/${projectLGBTQ[4].id}` : '/'}><h1>{projectLGBTQ[4] ? projectLGBTQ[4].title : ''}</h1></Link>
                    <p>{projectLGBTQ[4] ? projectLGBTQ[4].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[4] ? lgbtqUsersProjects[4].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[5] && lgbtqUsersProjects[5] ? `/users/${lgbtqUsersProjects[5].id}/projects/${projectLGBTQ[5].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[5] ? projectLGBTQ[5].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[5] && lgbtqUsersProjects[5] ? `/users/${lgbtqUsersProjects[5].id}/projects/${projectLGBTQ[5].id}` : '/'}><h1>{projectLGBTQ[5] ? projectLGBTQ[5].title : ''}</h1></Link>
                    <p>{projectLGBTQ[5] ? projectLGBTQ[5].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[5] ? lgbtqUsersProjects[5].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[6] && lgbtqUsersProjects[6] ? `/users/${lgbtqUsersProjects[6].id}/projects/${projectLGBTQ[6].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[6] ? projectLGBTQ[6].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[6] && lgbtqUsersProjects[6] ? `/users/${lgbtqUsersProjects[6].id}/projects/${projectLGBTQ[6].id}` : '/'}><h1>{projectLGBTQ[6] ? projectLGBTQ[6].title : ''}</h1></Link>
                    <p>{projectLGBTQ[6] ? projectLGBTQ[6].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[6] ? lgbtqUsersProjects[6].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectLGBTQ[7] && lgbtqUsersProjects[7] ? `/users/${lgbtqUsersProjects[7].id}/projects/${projectLGBTQ[7].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectLGBTQ[7] ? projectLGBTQ[7].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectLGBTQ[7] && lgbtqUsersProjects[7] ? `/users/${lgbtqUsersProjects[7].id}/projects/${projectLGBTQ[7].id}` : '/'}><h1>{projectLGBTQ[7] ? projectLGBTQ[7].title : ''}</h1></Link>
                    <p>{projectLGBTQ[7] ? projectLGBTQ[7].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{lgbtqUsersProjects[7] ? lgbtqUsersProjects[7].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to StartSmart Reads, StartSmart's new Publishing newsletter</h2>
                <p>Welcome to our library. Peruse the stacks with us.</p>
                <div className='comics-illustrion-subscribe-newsletter-inner-inner-inner'>
                  <button>Subscribe now</button>
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
                      <img src='https://i.imgur.com/eSuDhq5.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>In his 'LAAB' experiment, Ronald Wimberly plays with dynamite</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/ShxpJbo.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>FTL, Y'ALL: Tales from the age of the $200 warp drive</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/Uk5bnbr.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>'Corpus' offers new and vulnerable perspectives on diverse illnesses</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/asKffCI.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>In conversation: comics creators Ngozi Ukazu and Taneka Stotts</h1>
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

export default ComicsIllustration;
