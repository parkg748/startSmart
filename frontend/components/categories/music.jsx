import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

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
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Music</h3>
            <p>Discover new albums, performances, and independent venues from creators using StartSmart to shape the future of sound.</p>
            <Link className='subcategories-links' to='/discover/categories/music'>Explore Music</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(musicProjects.length > 1 ? musicProjects.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={musicProjects.length > 0 ? musicProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{musicProjects.length > 0 ? musicProjects.slice(-1)[0].title : ''}</h1>
                <p>{musicProjects.length > 0 ? musicProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersMusicProjects.length > 0 ? usersMusicProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                    {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={musicProjects.length > 0 ? musicProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{musicProjects.length > 0 ? musicProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersMusicProjects.length > 0 ? usersMusicProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                    {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={musicProjects.length > 0 ? musicProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{musicProjects.length > 0 ? musicProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersMusicProjects.length > 0 ? usersMusicProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(musicProjects.length > 0 ? musicProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
                    {this.state.thirdHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={musicProjects.length > 0 ? musicProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{musicProjects.length > 0 ? musicProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersMusicProjects.length > 0 ? usersMusicProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                  </li>
                </ul>
                <div className='feature-project-recommended-view-more'>View more projects</div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>LIVE FROM NEW YORK</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectNewYork[0] && newYorkUsersProjects[0] ? `/users/${newYorkUsersProjects[0].id}/projects/${projectNewYork[0].id}` : '/'}><img src={projectNewYork[0] ? projectNewYork[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectNewYork[0] && newYorkUsersProjects[0] ? `/users/${newYorkUsersProjects[0].id}/projects/${projectNewYork[0].id}` : '/'}><h1>{projectNewYork[0] ? projectNewYork[0].title : ''}</h1></Link>
                    <p>{projectNewYork[0] ? projectNewYork[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{newYorkUsersProjects[0] ? newYorkUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectNewYork[1] && newYorkUsersProjects[1] ? `/users/${newYorkUsersProjects[1].id}/projects/${projectNewYork[1].id}` : '/'}><img src={projectNewYork[1] ? projectNewYork[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectNewYork[1] && newYorkUsersProjects[1] ? `/users/${newYorkUsersProjects[1].id}/projects/${projectNewYork[1].id}` : '/'}><h1>{projectNewYork[1] ? projectNewYork[1].title : ''}</h1></Link>
                    <p>{projectNewYork[1] ? projectNewYork[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{newYorkUsersProjects[1] ? newYorkUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectNewYork[2] && newYorkUsersProjects[2] ? `/users/${newYorkUsersProjects[2].id}/projects/${projectNewYork[2].id}` : '/'}><img src={projectNewYork[2] ? projectNewYork[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectNewYork[2] && newYorkUsersProjects[2] ? `/users/${newYorkUsersProjects[2].id}/projects/${projectNewYork[2].id}` : '/'}><h1>{projectNewYork[2] ? projectNewYork[2].title : ''}</h1></Link>
                    <p>{projectNewYork[2] ? projectNewYork[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{newYorkUsersProjects[2] ? newYorkUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectNewYork[3] && newYorkUsersProjects[3] ? `/users/${newYorkUsersProjects[3].id}/projects/${projectNewYork[3].id}` : '/'}><img src={projectNewYork[3] ? projectNewYork[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectNewYork[3] && newYorkUsersProjects[3] ? `/users/${newYorkUsersProjects[3].id}/projects/${projectNewYork[3].id}` : '/'}><h1>{projectNewYork[3] ? projectNewYork[3].title : ''}</h1></Link>
                    <p>{projectNewYork[3] ? projectNewYork[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{newYorkUsersProjects[3] ? newYorkUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXTREMELY METAL</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMetal[0] && metalUsersProjects[0] ? `/users/${metalUsersProjects[0].id}/projects/${projectMetal[0].id}` : '/'}><img src={projectMetal[0] ? projectMetal[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMetal[0] && metalUsersProjects[0] ? `/users/${metalUsersProjects[0].id}/projects/${projectMetal[0].id}` : '/'}><h1>{projectMetal[0] ? projectMetal[0].title : ''}</h1></Link>
                    <p>{projectMetal[0] ? projectMetal[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{metalUsersProjects[0] ? metalUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMetal[1] && metalUsersProjects[1] ? `/users/${metalUsersProjects[1].id}/projects/${projectMetal[1].id}` : '/'}><img src={projectMetal[1] ? projectMetal[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMetal[1] && metalUsersProjects[1] ? `/users/${metalUsersProjects[1].id}/projects/${projectMetal[1].id}` : '/'}><h1>{projectMetal[1] ? projectMetal[1].title : ''}</h1></Link>
                    <p>{projectMetal[1] ? projectMetal[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{metalUsersProjects[1] ? metalUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMetal[2] && metalUsersProjects[2] ? `/users/${metalUsersProjects[2].id}/projects/${projectMetal[2].id}` : '/'}><img src={projectMetal[2] ? projectMetal[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMetal[2] && metalUsersProjects[2] ? `/users/${metalUsersProjects[2].id}/projects/${projectMetal[2].id}` : '/'}><h1>{projectMetal[2] ? projectMetal[2].title : ''}</h1></Link>
                    <p>{projectMetal[2] ? projectMetal[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{metalUsersProjects[2] ? metalUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMetal[3] && metalUsersProjects[3] ? `/users/${metalUsersProjects[3].id}/projects/${projectMetal[3].id}` : '/'}><img src={projectMetal[3] ? projectMetal[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMetal[3] && metalUsersProjects[3] ? `/users/${metalUsersProjects[3].id}/projects/${projectMetal[3].id}` : '/'}><h1>{projectMetal[3] ? projectMetal[3].title : ''}</h1></Link>
                    <p>{projectMetal[3] ? projectMetal[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{metalUsersProjects[3] ? metalUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>WITCHSTARTER</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMusic[4] && musicUsersProjects[4] ? `/users/${musicUsersProjects[4].id}/projects/${projectMusic[4].id}` : '/'}><img src={projectMusic[4] ? projectMusic[4].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMusic[4] && musicUsersProjects[4] ? `/users/${musicUsersProjects[4].id}/projects/${projectMusic[4].id}` : '/'}><h1>{projectMusic[4] ? projectMusic[4].title : ''}</h1></Link>
                    <p>{projectMusic[4] ? projectMusic[4].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{musicUsersProjects[4] ? musicUsersProjects[4].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMusic[5] && musicUsersProjects[5] ? `/users/${musicUsersProjects[5].id}/projects/${projectMusic[5].id}` : '/'}><img src={projectMusic[5] ? projectMusic[5].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMusic[5] && musicUsersProjects[5] ? `/users/${musicUsersProjects[5].id}/projects/${projectMusic[5].id}` : '/'}><h1>{projectMusic[5] ? projectMusic[5].title : ''}</h1></Link>
                    <p>{projectMusic[5] ? projectMusic[5].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{musicUsersProjects[5] ? musicUsersProjects[5].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMusic[6] && musicUsersProjects[6] ? `/users/${musicUsersProjects[6].id}/projects/${projectMusic[6].id}` : '/'}><img src={projectMusic[6] ? projectMusic[6].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMusic[6] && musicUsersProjects[6] ? `/users/${musicUsersProjects[6].id}/projects/${projectMusic[6].id}` : '/'}><h1>{projectMusic[6] ? projectMusic[6].title : ''}</h1></Link>
                    <p>{projectMusic[6] ? projectMusic[6].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{musicUsersProjects[6] ? musicUsersProjects[6].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectMusic[7] && musicUsersProjects[7] ? `/users/${musicUsersProjects[7].id}/projects/${projectMusic[7].id}` : '/'}><img src={projectMusic[7] ? projectMusic[7].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectMusic[7] && musicUsersProjects[7] ? `/users/${musicUsersProjects[7].id}/projects/${projectMusic[7].id}` : '/'}><h1>{projectMusic[7] ? projectMusic[7].title : ''}</h1></Link>
                    <p>{projectMusic[7] ? projectMusic[7].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{musicUsersProjects[7] ? musicUsersProjects[7].name : ''}</span></div>
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

export default Music;
