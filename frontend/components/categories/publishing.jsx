import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class Publishing extends React.Component {
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
    let publishingJournalismId = [];
    let categoryName = [];
    let idPublishing = [];
    let idJournalism = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Publishing' || el.name === 'Journalism') {
          publishingJournalismId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Publishing') { idPublishing.push(el.id); }
          else if (el.name === 'Journalism') { idJournalism.push(el.id); }
        }
      });
    }
    let publishingJournalismProjects = [];
    let projectPublishing = [];
    let projectJournalism = [];
    let projectChildrensBooks = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (publishingJournalismId.includes(project.categoryId)) {
          category = categoryName[publishingJournalismId.indexOf(project.categoryId)];
          if (category === 'Publishing' && project.subcategory === "Children's Books") {
            publishingJournalismProjects.push(project);
            projectChildrensBooks.push(project);
          } else if (category === 'Publishing') {
            publishingJournalismProjects.push(project);
            projectPublishing.push(project);
          } else if (category === 'Journalism') {
            publishingJournalismProjects.push(project);
            projectJournalism.push(project);
          }
        }
      });
    }
    let usersPublishingJournalismProjects = [];
    let publishingUsersProjects = [];
    let journalismUsersProjects = [];
    let childrensBooksUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersPublishingJournalismProjects = publishingJournalismProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      publishingUsersProjects = projectPublishing.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      journalismUsersProjects = projectJournalism.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      childrensBooksUsersProjects = projectChildrensBooks.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Publishing</h3>
            <p>Explore how writers and publishers are using StartSmart to bring new literature, periodicals, podcasts, and more to life.</p>
            <Link className='subcategories-links' to='/discover/categories/journalism'>Explore Journalism</Link>
            <Link className='subcategories-links' to='/discover/categories/publishing'>Explore Publishing</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(publishingJournalismProjects.length > 1 ? publishingJournalismProjects.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-1)[0].title : ''}</h1>
                <p>{publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersPublishingJournalismProjects.length > 0 ? usersPublishingJournalismProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img src={publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersPublishingJournalismProjects.length > 0 ? usersPublishingJournalismProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                      {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersPublishingJournalismProjects.length > 0 ? usersPublishingJournalismProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                      {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    </div>
                  </li>
                  <li>
                    <img src={publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersPublishingJournalismProjects.length > 0 ? usersPublishingJournalismProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                    <div className='feature-project-recommended-heart-container'>
                      <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
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
                  <h3>CIVIC-MINDED PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[0] && publishingUsersProjects[0] ? `/users/${publishingUsersProjects[0].id}/projects/${projectPublishing[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[0] ? projectPublishing[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[0] && publishingUsersProjects[0] ? `/users/${publishingUsersProjects[0].id}/projects/${projectPublishing[0].id}` : '/'}><h1>{projectPublishing[0] ? projectPublishing[0].title : ''}</h1></Link>
                    <p>{projectPublishing[0] ? projectPublishing[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[0] ? publishingUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[1] && publishingUsersProjects[1] ? `/users/${publishingUsersProjects[1].id}/projects/${projectPublishing[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[1] ? projectPublishing[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[1] && publishingUsersProjects[1] ? `/users/${publishingUsersProjects[1].id}/projects/${projectPublishing[1].id}` : '/'}><h1>{projectPublishing[1] ? projectPublishing[1].title : ''}</h1></Link>
                    <p>{projectPublishing[1] ? projectPublishing[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[1] ? publishingUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[2] && publishingUsersProjects[2] ? `/users/${publishingUsersProjects[2].id}/projects/${projectPublishing[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[2] ? projectPublishing[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[2] && publishingUsersProjects[2] ? `/users/${publishingUsersProjects[2].id}/projects/${projectPublishing[2].id}` : '/'}><h1>{projectPublishing[2] ? projectPublishing[2].title : ''}</h1></Link>
                    <p>{projectPublishing[2] ? projectPublishing[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[2] ? publishingUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[3] && publishingUsersProjects[3] ? `/users/${publishingUsersProjects[3].id}/projects/${projectPublishing[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[3] ? projectPublishing[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[3] && publishingUsersProjects[3] ? `/users/${publishingUsersProjects[3].id}/projects/${projectPublishing[3].id}` : '/'}><h1>{projectPublishing[3] ? projectPublishing[3].title : ''}</h1></Link>
                    <p>{projectPublishing[3] ? projectPublishing[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[3] ? publishingUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXPLORE OTHER WORLDS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectJournalism[0] && journalismUsersProjects[0] ? `/users/${journalismUsersProjects[0].id}/projects/${projectJournalism[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectJournalism[0] ? projectJournalism[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectJournalism[0] && journalismUsersProjects[0] ? `/users/${journalismUsersProjects[0].id}/projects/${projectJournalism[0].id}` : '/'}><h1>{projectJournalism[0] ? projectJournalism[0].title : ''}</h1></Link>
                    <p>{projectJournalism[0] ? projectJournalism[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{journalismUsersProjects[0] ? journalismUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectJournalism[1] && journalismUsersProjects[1] ? `/users/${journalismUsersProjects[1].id}/projects/${projectJournalism[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectJournalism[1] ? projectJournalism[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectJournalism[1] && journalismUsersProjects[1] ? `/users/${journalismUsersProjects[1].id}/projects/${projectJournalism[1].id}` : '/'}><h1>{projectJournalism[1] ? projectJournalism[1].title : ''}</h1></Link>
                    <p>{projectJournalism[1] ? projectJournalism[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{journalismUsersProjects[1] ? journalismUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectJournalism[2] && journalismUsersProjects[2] ? `/users/${journalismUsersProjects[2].id}/projects/${projectJournalism[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectJournalism[2] ? projectJournalism[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectJournalism[2] && journalismUsersProjects[2] ? `/users/${journalismUsersProjects[2].id}/projects/${projectJournalism[2].id}` : '/'}><h1>{projectJournalism[2] ? projectJournalism[2].title : ''}</h1></Link>
                    <p>{projectJournalism[2] ? projectJournalism[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{journalismUsersProjects[2] ? journalismUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectJournalism[3] && journalismUsersProjects[3] ? `/users/${journalismUsersProjects[3].id}/projects/${projectJournalism[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectJournalism[3] ? projectJournalism[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectJournalism[3] && journalismUsersProjects[3] ? `/users/${journalismUsersProjects[3].id}/projects/${projectJournalism[3].id}` : '/'}><h1>{projectJournalism[3] ? projectJournalism[3].title : ''}</h1></Link>
                    <p>{projectJournalism[3] ? projectJournalism[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{journalismUsersProjects[3] ? journalismUsersProjects[3].name : ''}</span></div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>POPULAR IN PUBLISHING</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[0] && publishingUsersProjects[0] ? `/users/${publishingUsersProjects[0].id}/projects/${projectPublishing[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[0] ? projectPublishing[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[4] && publishingUsersProjects[4] ? `/users/${publishingUsersProjects[4].id}/projects/${projectPublishing[4].id}` : '/'}><h1>{projectPublishing[4] ? projectPublishing[4].title : ''}</h1></Link>
                    <p>{projectPublishing[4] ? projectPublishing[4].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[4] ? publishingUsersProjects[4].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[5] && publishingUsersProjects[5] ? `/users/${publishingUsersProjects[5].id}/projects/${projectPublishing[5].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[5] ? projectPublishing[5].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[5] && publishingUsersProjects[5] ? `/users/${publishingUsersProjects[5].id}/projects/${projectPublishing[5].id}` : '/'}><h1>{projectPublishing[5] ? projectPublishing[5].title : ''}</h1></Link>
                    <p>{projectPublishing[5] ? projectPublishing[5].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[5] ? publishingUsersProjects[5].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[6] && publishingUsersProjects[6] ? `/users/${publishingUsersProjects[6].id}/projects/${projectPublishing[6].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[6] ? projectPublishing[6].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[6] && publishingUsersProjects[6] ? `/users/${publishingUsersProjects[6].id}/projects/${projectPublishing[6].id}` : '/'}><h1>{projectPublishing[6] ? projectPublishing[6].title : ''}</h1></Link>
                    <p>{projectPublishing[6] ? projectPublishing[6].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[6] ? publishingUsersProjects[6].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPublishing[7] && publishingUsersProjects[7] ? `/users/${publishingUsersProjects[7].id}/projects/${projectPublishing[7].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPublishing[7] ? projectPublishing[7].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPublishing[7] && publishingUsersProjects[7] ? `/users/${publishingUsersProjects[7].id}/projects/${projectPublishing[7].id}` : '/'}><h1>{projectPublishing[7] ? projectPublishing[7].title : ''}</h1></Link>
                    <p>{projectPublishing[7] ? projectPublishing[7].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{publishingUsersProjects[7] ? publishingUsersProjects[7].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>GREAT BOOKS FOR KIDS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectChildrensBooks[0] && childrensBooksUsersProjects[0] ? `/users/${childrensBooksUsersProjects[0].id}/projects/${projectChildrensBooks[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectChildrensBooks[0] ? projectChildrensBooks[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectChildrensBooks[0] && childrensBooksUsersProjects[0] ? `/users/${childrensBooksUsersProjects[0].id}/projects/${projectChildrensBooks[0].id}` : '/'}><h1>{projectChildrensBooks[0] ? projectChildrensBooks[0].title : ''}</h1></Link>
                    <p>{projectChildrensBooks[0] ? projectChildrensBooks[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{childrensBooksUsersProjects[0] ? childrensBooksUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectChildrensBooks[1] && childrensBooksUsersProjects[1] ? `/users/${childrensBooksUsersProjects[1].id}/projects/${projectChildrensBooks[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectChildrensBooks[1] ? projectChildrensBooks[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectChildrensBooks[1] && childrensBooksUsersProjects[1] ? `/users/${childrensBooksUsersProjects[1].id}/projects/${projectChildrensBooks[1].id}` : '/'}><h1>{projectChildrensBooks[1] ? projectChildrensBooks[1].title : ''}</h1></Link>
                    <p>{projectChildrensBooks[1] ? projectChildrensBooks[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{childrensBooksUsersProjects[1] ? childrensBooksUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectChildrensBooks[2] && childrensBooksUsersProjects[2] ? `/users/${childrensBooksUsersProjects[2].id}/projects/${projectChildrensBooks[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectChildrensBooks[2] ? projectChildrensBooks[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectChildrensBooks[2] && childrensBooksUsersProjects[2] ? `/users/${childrensBooksUsersProjects[2].id}/projects/${projectChildrensBooks[2].id}` : '/'}><h1>{projectChildrensBooks[2] ? projectChildrensBooks[2].title : ''}</h1></Link>
                    <p>{projectChildrensBooks[2] ? projectChildrensBooks[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{childrensBooksUsersProjects[2] ? childrensBooksUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectChildrensBooks[3] && childrensBooksUsersProjects[3] ? `/users/${childrensBooksUsersProjects[3].id}/projects/${projectChildrensBooks[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectChildrensBooks[3] ? projectChildrensBooks[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectChildrensBooks[3] && childrensBooksUsersProjects[3] ? `/users/${childrensBooksUsersProjects[3].id}/projects/${projectChildrensBooks[3].id}` : '/'}><h1>{projectChildrensBooks[3] ? projectChildrensBooks[3].title : ''}</h1></Link>
                    <p>{projectChildrensBooks[3] ? projectChildrensBooks[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{childrensBooksUsersProjects[3] ? childrensBooksUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>GUIDES FROM THE CREATIVE INDEPENDENT</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/NTiRjjK.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>How to write a book proposal: a guide by Joanna Ebenstein</h1>
                    <span>The Creative Independent</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/8RLtiXy.gif'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Fusty old scientific texts get a gorgeous, pricey makeover</h1>
                    <span>Wired</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/bKlxu5x.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>How a failed project made Elly Blue a better StartSmart creator</h1>
                    <span>StartSmart Magazine</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/6mKOtkL.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>2018 has been a record-breaking year for journalism on StartSmart</h1>
                    <span>Nieman Lab</span>
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

export default Publishing;
