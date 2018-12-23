import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';

class Film extends React.Component {
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
    let filmVideoId = [];
    let categoryName = [];
    let idFilm = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Film') {
          filmVideoId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Film') { idFilm.push(el.id); }
        }
      });
    }
    let filmProjects = [];
    let projectFilm = [];
    let projectDocumentary = [];
    let projectUK = [];
    let projectShorts = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (filmVideoId.includes(project.categoryId)) {
          category = categoryName[filmVideoId.indexOf(project.categoryId)];
          if (category === 'Film' && project.subcategory === 'Documentary') {
            filmProjects.push(project);
            projectDocumentary.push(project);
          } else if (category === 'Film' && project.subcategory === 'Shorts') {
            filmProjects.push(project);
            projectShorts.push(project);
          } else if (category === 'Film' && project.country === 'the United Kingdom') {
            filmProjects.push(project);
            projectUK.push(project);
          } else if (category === 'Film') {
            filmProjects.push(project);
            projectFilm.push(project);
          }
        }
      });
    }
    let usersFilmProjects = [];
    let filmUsersProjects = [];
    let documentaryUsersProjects = [];
    let ukUsersProjects = [];
    let shortsUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersFilmProjects = filmProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      filmUsersProjects = projectFilm.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      documentaryUsersProjects = projectDocumentary.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      ukUsersProjects = projectUK.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      shortsUsersProjects = projectShorts.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Film'} subcategories={['film-video']} subcategoriesUppercase={['Film & Video']} description={'Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.'}/>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(filmProjects.length > 1 ? filmProjects.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={filmProjects.length > 0 ? filmProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{filmProjects.length > 0 ? filmProjects.slice(-1)[0].title : ''}</h1>
                <p>{filmProjects.length > 0 ? filmProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersFilmProjects.length > 0 ? usersFilmProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img src={filmProjects.length > 0 ? filmProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{filmProjects.length > 0 ? filmProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFilmProjects.length > 0 ? usersFilmProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(filmProjects.length > 0 ? filmProjects.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                      {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={filmProjects.length > 0 ? filmProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{filmProjects.length > 0 ? filmProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFilmProjects.length > 0 ? usersFilmProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(filmProjects.length > 0 ? filmProjects.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                      {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={filmProjects.length > 0 ? filmProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{filmProjects.length > 0 ? filmProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersFilmProjects.length > 0 ? usersFilmProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(filmProjects.length > 0 ? filmProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
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
                  <h3>DOCUMENTARY PROJECTS WE LOVE</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDocumentary[0] && documentaryUsersProjects[0] ? `/users/${documentaryUsersProjects[0].id}/projects/${projectDocumentary[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDocumentary[0] ? projectDocumentary[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDocumentary[0] && documentaryUsersProjects[0] ? `/users/${documentaryUsersProjects[0].id}/projects/${projectDocumentary[0].id}` : '/'}><h1>{projectDocumentary[0] ? projectDocumentary[0].title : ''}</h1></Link>
                    <p>{projectDocumentary[0] ? projectDocumentary[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{documentaryUsersProjects[0] ? documentaryUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDocumentary[1] && documentaryUsersProjects[1] ? `/users/${documentaryUsersProjects[1].id}/projects/${projectDocumentary[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDocumentary[1] ? projectDocumentary[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDocumentary[1] && documentaryUsersProjects[1] ? `/users/${documentaryUsersProjects[1].id}/projects/${projectDocumentary[1].id}` : '/'}><h1>{projectDocumentary[1] ? projectDocumentary[1].title : ''}</h1></Link>
                    <p>{projectDocumentary[1] ? projectDocumentary[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{documentaryUsersProjects[1] ? documentaryUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDocumentary[2] && documentaryUsersProjects[2] ? `/users/${documentaryUsersProjects[2].id}/projects/${projectDocumentary[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDocumentary[2] ? projectDocumentary[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDocumentary[2] && documentaryUsersProjects[2] ? `/users/${documentaryUsersProjects[2].id}/projects/${projectDocumentary[2].id}` : '/'}><h1>{projectDocumentary[2] ? projectDocumentary[2].title : ''}</h1></Link>
                    <p>{projectDocumentary[2] ? projectDocumentary[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{documentaryUsersProjects[2] ? documentaryUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDocumentary[3] && documentaryUsersProjects[3] ? `/users/${documentaryUsersProjects[3].id}/projects/${projectDocumentary[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDocumentary[3] ? projectDocumentary[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDocumentary[3] && documentaryUsersProjects[3] ? `/users/${documentaryUsersProjects[3].id}/projects/${projectDocumentary[3].id}` : '/'}><h1>{projectDocumentary[3] ? projectDocumentary[3].title : ''}</h1></Link>
                    <p>{projectDocumentary[3] ? projectDocumentary[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{documentaryUsersProjects[3] ? documentaryUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/6LyAklk.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>How to stay sane while making a film</h3>
                      <p>A filmmaker's guide to protecting your mental, emotional, and financial health.</p>
                    </div>
                    <div className='postcommodity-readmore'>Read on The Creative Independent</div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/JoCiUiZ.jpg'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>Love film? We do, too.</h3>
                      <p>Sign up to receive StartSmart's Film newsletter, delivered twice a month.</p>
                    </div>
                    <div className='postcommodity-readmore'>Subscribe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>PROJECTS FROM THE UK</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectUK[0] && ukUsersProjects[0] ? `/users/${ukUsersProjects[0].id}/projects/${projectUK[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectUK[0] ? projectUK[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectUK[0] && ukUsersProjects[0] ? `/users/${ukUsersProjects[0].id}/projects/${projectUK[0].id}` : '/'}><h1>{projectUK[0] ? projectUK[0].title : ''}</h1></Link>
                    <p>{projectUK[0] ? projectUK[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{ukUsersProjects[0] ? ukUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectUK[1] && ukUsersProjects[1] ? `/users/${ukUsersProjects[1].id}/projects/${projectUK[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectUK[1] ? projectUK[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectUK[1] && ukUsersProjects[1] ? `/users/${ukUsersProjects[1].id}/projects/${projectUK[1].id}` : '/'}><h1>{projectUK[1] ? projectUK[1].title : ''}</h1></Link>
                    <p>{projectUK[1] ? projectUK[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{ukUsersProjects[1] ? ukUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectUK[2] && ukUsersProjects[2] ? `/users/${ukUsersProjects[2].id}/projects/${projectUK[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectUK[2] ? projectUK[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectUK[2] && ukUsersProjects[2] ? `/users/${ukUsersProjects[2].id}/projects/${projectUK[2].id}` : '/'}><h1>{projectUK[2] ? projectUK[2].title : ''}</h1></Link>
                    <p>{projectUK[2] ? projectUK[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{ukUsersProjects[2] ? ukUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectUK[3] && ukUsersProjects[3] ? `/users/${ukUsersProjects[3].id}/projects/${projectUK[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectUK[3] ? projectUK[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectUK[3] && ukUsersProjects[3] ? `/users/${ukUsersProjects[3].id}/projects/${projectUK[3].id}` : '/'}><h1>{projectUK[3] ? projectUK[3].title : ''}</h1></Link>
                    <p>{projectUK[3] ? projectUK[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{ukUsersProjects[3] ? ukUsersProjects[3].name : ''}</span></div>
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
                      <img src='https://i.imgur.com/IAjtEgq.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>'Clara's Ghost' conjures fictional dysfunction with a real family of actors</h1>
                    <span>StartSmart Magazine</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/peVYmon.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Art over here, science over there: thoughts on a messy border</h1>
                    <span>Sundance</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/27nDieJ.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>On learning how to make a film as you make it</h1>
                    <span>The Creative Independent</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/P9TpGvW.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Firelight Media Documentary Lab reveals its 2018-20 fellows</h1>
                    <span>Deadline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>SHORTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectShorts[0] && shortsUsersProjects[0] ? `/users/${shortsUsersProjects[0].id}/projects/${projectShorts[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectShorts[0] ? projectShorts[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectShorts[0] && shortsUsersProjects[0] ? `/users/${shortsUsersProjects[0].id}/projects/${projectShorts[0].id}` : '/'}><h1>{projectShorts[0] ? projectShorts[0].title : ''}</h1></Link>
                    <p>{projectShorts[0] ? projectShorts[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{shortsUsersProjects[0] ? shortsUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectShorts[1] && shortsUsersProjects[1] ? `/users/${shortsUsersProjects[1].id}/projects/${projectShorts[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectShorts[1] ? projectShorts[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectShorts[1] && shortsUsersProjects[1] ? `/users/${shortsUsersProjects[1].id}/projects/${projectShorts[1].id}` : '/'}><h1>{projectShorts[1] ? projectShorts[1].title : ''}</h1></Link>
                    <p>{projectShorts[1] ? projectShorts[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{shortsUsersProjects[1] ? shortsUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectShorts[2] && shortsUsersProjects[2] ? `/users/${shortsUsersProjects[2].id}/projects/${projectShorts[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectShorts[2] ? projectShorts[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectShorts[2] && shortsUsersProjects[2] ? `/users/${shortsUsersProjects[2].id}/projects/${projectShorts[2].id}` : '/'}><h1>{projectShorts[2] ? projectShorts[2].title : ''}</h1></Link>
                    <p>{projectShorts[2] ? projectShorts[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{shortsUsersProjects[2] ? shortsUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectShorts[3] && shortsUsersProjects[3] ? `/users/${shortsUsersProjects[3].id}/projects/${projectShorts[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectShorts[3] ? projectShorts[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectShorts[3] && shortsUsersProjects[3] ? `/users/${shortsUsersProjects[3].id}/projects/${projectShorts[3].id}` : '/'}><h1>{projectShorts[3] ? projectShorts[3].title : ''}</h1></Link>
                    <p>{projectShorts[3] ? projectShorts[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{shortsUsersProjects[3] ? shortsUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to Film, our Film newsletter</h2>
                <p>Love film? We do, too.</p>
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

export default Film;
