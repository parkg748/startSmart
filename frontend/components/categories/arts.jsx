import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';

class Arts extends React.Component {
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
    let artId = [];
    let categoryName = [];
    let idArt = [];
    let idDance = [];
    let idPhotography = [];
    let idTheater = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Art' || el.name === 'Dance' || el.name === 'Photography' || el.name === 'Theater') {
          artId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Art') { idArt.push(el.id); }
          else if (el.name === 'Dance') { idDance.push(el.id); }
          else if (el.name === 'Photography') { idPhotography.push(el.id); }
          else if (el.name === 'Theater') { idTheater.push(el.id); }
        }
      });
    }
    let artsProjects = [];
    let projectArt = [];
    let projectDance = [];
    let projectPhotography = [];
    let projectTheater = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (artId.includes(project.categoryId)) {
          artsProjects.push(project);
          category = categoryName[artId.indexOf(project.categoryId)];
          if (category === 'Art') { projectArt.push(project); }
          else if (category === 'Dance') { projectDance.push(project); }
          else if (category === 'Photography') { projectPhotography.push(project); }
          else if (category === 'Theater') { projectTheater.push(project); }
        }
      });
    }
    let usersArtsProjects = [];
    let artsUsersProjects = [];
    let danceUsersProjects = [];
    let photographyUsersProjects = [];
    let theaterUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersArtsProjects = artsProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      artsUsersProjects = projectArt.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      danceUsersProjects = projectDance.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      photographyUsersProjects = projectPhotography.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      theaterUsersProjects = projectTheater.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Art'} subcategories={['art', 'dance', 'photography', 'theater']} subcategoriesUppercase={['Art', 'Dance', 'Photography', 'Theater']} description={'Discover the artists and organizations using StartSmart to realize ambitious projects in visual art, dance, and performance.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart} 
                            mainHeartFill={this.state.mainHeartFill}
                            projects={artsProjects}
                            users={usersArtsProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(artsProjects.length > 0 ? artsProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(artsProjects.length > 0 ? artsProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(artsProjects.length > 0 ? artsProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>GUIDES FROM THE CREATIVE INDEPENDENT</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/oVarCJr.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <span>Jeffrey Silverstein</span>
                    <h1>How to balance full-time work with creative projects</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/n5NgX1o.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <span>Volunteer Lawyers for the Arts</span>
                    <h1>An artist's guide to copyrights</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/7kbQaoy.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <span>Sarah Hotchkiss</span>
                    <h1>How to write an artist statement</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/vq6Q64Y.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <span>Kathryn Jaller</span>
                    <h1>A creative person's guide to thoughtful promotion</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXPLORE THEATER</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTheater[0] && theaterUsersProjects[0] ? `/users/${theaterUsersProjects[0].id}/projects/${projectTheater[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectTheater[0] ? projectTheater[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTheater[0] && theaterUsersProjects[0] ? `/users/${theaterUsersProjects[0].id}/projects/${projectTheater[0].id}` : '/'}><h1>{projectTheater[0] ? projectTheater[0].title : ''}</h1></Link>
                    <p>{projectTheater[0] ? projectTheater[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{theaterUsersProjects[0] ? theaterUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTheater[1] && theaterUsersProjects[1] ? `/users/${theaterUsersProjects[1].id}/projects/${projectTheater[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectTheater[1] ? projectTheater[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTheater[1] && theaterUsersProjects[1] ? `/users/${theaterUsersProjects[1].id}/projects/${projectTheater[1].id}` : '/'}><h1>{projectTheater[1] ? projectTheater[1].title : ''}</h1></Link>
                    <p>{projectTheater[1] ? projectTheater[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{theaterUsersProjects[1] ? theaterUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTheater[2] && theaterUsersProjects[2] ? `/users/${theaterUsersProjects[2].id}/projects/${projectTheater[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectTheater[2] ? projectTheater[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTheater[2] && theaterUsersProjects[2] ? `/users/${theaterUsersProjects[2].id}/projects/${projectTheater[2].id}` : '/'}><h1>{projectTheater[2] ? projectTheater[2].title : ''}</h1></Link>
                    <p>{projectTheater[2] ? projectTheater[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{theaterUsersProjects[2] ? theaterUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTheater[3] && theaterUsersProjects[3] ? `/users/${theaterUsersProjects[3].id}/projects/${projectTheater[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectTheater[3] ? projectTheater[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTheater[3] && theaterUsersProjects[3] ? `/users/${theaterUsersProjects[3].id}/projects/${projectTheater[3].id}` : '/'}><h1>{projectTheater[3] ? projectTheater[3].title : ''}</h1></Link>
                    <p>{projectTheater[3] ? projectTheater[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{theaterUsersProjects[3] ? theaterUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/ptaoPkO.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>Meet Postcommodity</h3>
                      <p>Bridging Communities with art.</p>
                    </div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/Dj9UoEd.jpg'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>Get our newsletter</h3>
                      <p>Handpicked projects--spam not included.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXPLORE VISUAL ART</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectArt[0] && artsUsersProjects[0] ? `/users/${artsUsersProjects[0].id}/projects/${projectArt[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectArt[0] ? projectArt[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectArt[0] && artsUsersProjects[0] ? `/users/${artsUsersProjects[0].id}/projects/${projectArt[0].id}` : '/'}><h1>{projectArt[0] ? projectArt[0].title : ''}</h1></Link>
                    <p>{projectArt[0] ? projectArt[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{artsUsersProjects[0] ? artsUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectArt[1] && artsUsersProjects[1] ? `/users/${artsUsersProjects[1].id}/projects/${projectArt[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectArt[1] ? projectArt[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectArt[1] && artsUsersProjects[1] ? `/users/${artsUsersProjects[1].id}/projects/${projectArt[1].id}` : '/'}><h1>{projectArt[1] ? projectArt[1].title : ''}</h1></Link>
                    <p>{projectArt[1] ? projectArt[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{artsUsersProjects[1] ? artsUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectArt[2] && artsUsersProjects[2] ? `/users/${artsUsersProjects[2].id}/projects/${projectArt[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectArt[2] ? projectArt[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectArt[2] && artsUsersProjects[2] ? `/users/${artsUsersProjects[2].id}/projects/${projectArt[2].id}` : '/'}><h1>{projectArt[2] ? projectArt[2].title : ''}</h1></Link>
                    <p>{projectArt[2] ? projectArt[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{artsUsersProjects[2] ? artsUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectArt[3] && artsUsersProjects[3] ? `/users/${artsUsersProjects[3].id}/projects/${projectArt[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectArt[3] ? projectArt[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectArt[3] && artsUsersProjects[3] ? `/users/${artsUsersProjects[3].id}/projects/${projectArt[3].id}` : '/'}><h1>{projectArt[3] ? projectArt[3].title : ''}</h1></Link>
                    <p>{projectArt[3] ? projectArt[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{artsUsersProjects[3] ? artsUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>WHAT WE'RE READING</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/RdumQDE.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>We tell ourselves stories: Didion's 'White Album' takes to the stage</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/K3zipWb.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Excited for Amazon's arrival in Long Island City? The results for New York's art community won't be pretty</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/UdLOp7u.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Review: rage and ritual in 'What to Send up When It Goes Down'</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/EVuTWDv.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Women land artists get their day in the museum</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXPLORE DANCE</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDance[0] && danceUsersProjects[0] ? `/users/${danceUsersProjects[0].id}/projects/${projectDance[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDance[0] ? projectDance[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDance[0] && danceUsersProjects[0] ? `/users/${danceUsersProjects[0].id}/projects/${projectDance[0].id}` : '/'}><h1>{projectDance[0] ? projectDance[0].title : ''}</h1></Link>
                    <p>{projectDance[0] ? projectDance[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{danceUsersProjects[0] ? danceUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDance[1] && danceUsersProjects[1] ? `/users/${danceUsersProjects[1].id}/projects/${projectDance[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDance[1] ? projectDance[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDance[1] && danceUsersProjects[1] ? `/users/${danceUsersProjects[1].id}/projects/${projectDance[1].id}` : '/'}><h1>{projectDance[1] ? projectDance[1].title : ''}</h1></Link>
                    <p>{projectDance[1] ? projectDance[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{danceUsersProjects[1] ? danceUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDance[2] && danceUsersProjects[2] ? `/users/${danceUsersProjects[2].id}/projects/${projectDance[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDance[2] ? projectDance[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDance[2] && danceUsersProjects[2] ? `/users/${danceUsersProjects[2].id}/projects/${projectDance[2].id}` : '/'}><h1>{projectDance[2] ? projectDance[2].title : ''}</h1></Link>
                    <p>{projectDance[2] ? projectDance[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{danceUsersProjects[2] ? danceUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDance[3] && danceUsersProjects[3] ? `/users/${danceUsersProjects[3].id}/projects/${projectDance[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDance[3] ? projectDance[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDance[3] && danceUsersProjects[3] ? `/users/${danceUsersProjects[3].id}/projects/${projectDance[3].id}` : '/'}><h1>{projectDance[3] ? projectDance[3].title : ''}</h1></Link>
                    <p>{projectDance[3] ? projectDance[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{danceUsersProjects[3] ? danceUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/jakjhvH.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>StartSmart's 2017 PBC Statement</h3>
                      <p>A year of impact in review.</p>
                    </div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/ITMsvl3.jpg'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>Meet Lucy Sparrow</h3>
                      <p>Filling corner stores, stitch by stitch.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>EXPLORE PHOTOGRAPHY</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPhotography[0] && photographyUsersProjects[0] ? `/users/${photographyUsersProjects[0].id}/projects/${projectPhotography[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPhotography[0] ? projectPhotography[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPhotography[0] && photographyUsersProjects[0] ? `/users/${photographyUsersProjects[0].id}/projects/${projectPhotography[0].id}` : '/'}><h1>{projectPhotography[0] ? projectPhotography[0].title : ''}</h1></Link>
                    <p>{projectPhotography[0] ? projectPhotography[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{photographyUsersProjects[0] ? photographyUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPhotography[1] && photographyUsersProjects[1] ? `/users/${photographyUsersProjects[1].id}/projects/${projectPhotography[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPhotography[1] ? projectPhotography[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPhotography[1] && photographyUsersProjects[1] ? `/users/${photographyUsersProjects[1].id}/projects/${projectPhotography[1].id}` : '/'}><h1>{projectPhotography[1] ? projectPhotography[1].title : ''}</h1></Link>
                    <p>{projectPhotography[1] ? projectPhotography[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{photographyUsersProjects[1] ? photographyUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPhotography[2] && photographyUsersProjects[2] ? `/users/${photographyUsersProjects[2].id}/projects/${projectPhotography[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPhotography[2] ? projectPhotography[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPhotography[2] && photographyUsersProjects[2] ? `/users/${photographyUsersProjects[2].id}/projects/${projectPhotography[2].id}` : '/'}><h1>{projectPhotography[2] ? projectPhotography[2].title : ''}</h1></Link>
                    <p>{projectPhotography[2] ? projectPhotography[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{photographyUsersProjects[2] ? photographyUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectPhotography[3] && photographyUsersProjects[3] ? `/users/${photographyUsersProjects[3].id}/projects/${projectPhotography[3].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectPhotography[3] ? projectPhotography[3].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectPhotography[3] && photographyUsersProjects[3] ? `/users/${photographyUsersProjects[3].id}/projects/${projectPhotography[3].id}` : '/'}><h1>{projectPhotography[3] ? projectPhotography[3].title : ''}</h1></Link>
                    <p>{projectPhotography[3] ? projectPhotography[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{photographyUsersProjects[3] ? photographyUsersProjects[3].name : ''}</span></div>
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

export default Arts;
