import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';
import ExploreProjects from './explore_projects';

class DesignTech extends React.Component {
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
    let designTechId = [];
    let categoryName = [];
    let idDesign = [];
    let idTech = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Design' || el.name === 'Technology') {
          designTechId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Design') { idDesign.push(el.id); }
          else if (el.name === 'Technology') { idTech.push(el.id); }
        }
      });
    }
    let designTechProjects = [];
    let projectProductDesign = [];
    let project3D = [];
    let projectDesign = [];
    let projectTechnology = [];
    let projectDIYElectronics = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (designTechId.includes(project.categoryId)) {
          category = categoryName[designTechId.indexOf(project.categoryId)];
          if (category === 'Design' && project.subcategory === 'Product Design') {
            designTechProjects.push(project);
            projectProductDesign.push(project);
          } else if (category === 'Technology' && project.subcategory === '3D Printing') {
            designTechProjects.push(project);
            project3D.push(project);
          } else if (category === 'Technology' && project.subcategory === 'DIY Electronics') {
            designTechProjects.push(project);
            projectDIYElectronics.push(project);
          } else if (category === 'Design') {
            designTechProjects.push(project);
            projectDesign.push(project);
          } else if (category === 'Technology') {
            designTechProjects.push(project);
            projectTechnology.push(project);
          }
        }
      });
    }
    let usersDesignTechProjects = [];
    let productDesignUsersProjects = [];
    let threeDUsersProjects = [];
    let designUsersProjects = [];
    let technologyUsersProjects = [];
    let diyElectronicsUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersDesignTechProjects = designTechProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      designUsersProjects = projectDesign.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      technologyUsersProjects = projectTechnology.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      productDesignUsersProjects = projectProductDesign.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      threeDUsersProjects = project3D.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      diyElectronicsUsersProjects = projectDIYElectronics.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Design & Tech'} subcategories={['design', 'technology']} subcategoriesUppercase={['Design', 'Technology']} description={'From fine design to innovative tech, discover projects from creators working to build a more beautiful, sustainable future.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart}
                            mainHeartFill={this.state.mainHeartFill}
                            projects={designTechProjects}
                            users={usersDesignTechProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(designTechProjects.length > 1 ? designTechProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to Invent, our Design & Tech newsletter</h2>
                <p>Discover the future of Design and Tech.</p>
                <div className='comics-illustrion-subscribe-newsletter-inner-inner-inner'>
                  <button>Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'PROJECTS FEATURED IN OUR INVENT NEWSLETTER'}
                           viewmore={'dance'}
                           project={projectTechnology.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={technologyUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='postcommodity-newsletter'>
            <div className='postcommodity-newsletter-inner'>
              <div className='postcommodity-newsletter-inner-inner'>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/1n1DzsE.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>In a sea of screens, apps, and gadgets, mui's smart home tech offers calm</h3>
                      <p>The Japanese team's silent wooden interface promotes a healthier relationship with technology.</p>
                    </div>
                    <div className='postcommodity-readmore'>Read more</div>
                  </div>
                </div>
                <div className='postcommodity'>
                  <img src='https://i.imgur.com/bZLqB3C.png'/>
                  <div className='postcommodity-content'>
                    <div className='postcommodity-content-inner'>
                      <h3>"I tried to play the shark--it didn't work."</h3>
                      <p>Starting a StartSmart campaign and the prestigious Techstars accelerator program at the same time taught these entrepreneurs that you don't need to put up a flashy front to be successful in tech.</p>
                    </div>
                    <div className='postcommodity-readmore'>Read more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'PRODUCT DESIGN PROJECTS'}
                           viewmore={'theater'}
                           project={projectProductDesign.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={productDesignUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='improving-our-community'>
            <div className='improving-our-community-inner'>
              <div className='improving-our-community-inner-inner'>
                <img src='https://i.imgur.com/Vvu8QcD.png'/>
                <div className='improving-our-community-inner-inner-inner'>
                  <div className='improving-our-community-inner-inner-inner-header'>
                    <h3>Improving our 3D printer community</h3>
                    <p>We partnered with Autodesk to create a test file that shows how well various 3D printers work.</p>
                  </div>
                  <div className='improving-our-community-readmore'>Read more</div>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'3D PRINTING PROJECTS'}
                           viewmore={'art'}
                           project={project3D.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={threeDUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'GO GREEN PROJECTS'}
                           viewmore={'photography'}
                           project={projectDesign.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={designUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>DIY PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDIYElectronics[0] && diyElectronicsUsersProjects[0] ? `/users/${diyElectronicsUsersProjects[0].id}/projects/${projectDIYElectronics[0].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDIYElectronics[0] ? projectDIYElectronics[0].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDIYElectronics[0] && diyElectronicsUsersProjects[0] ? `/users/${diyElectronicsUsersProjects[0].id}/projects/${projectDIYElectronics[0].id}` : '/'}><h1>{projectDIYElectronics[0] ? projectDIYElectronics[0].title : ''}</h1></Link>
                    <p>{projectDIYElectronics[0] ? projectDIYElectronics[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{diyElectronicsUsersProjects[0] ? diyElectronicsUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDIYElectronics[1] && diyElectronicsUsersProjects[1] ? `/users/${diyElectronicsUsersProjects[1].id}/projects/${projectDIYElectronics[1].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDIYElectronics[1] ? projectDIYElectronics[1].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDIYElectronics[1] && diyElectronicsUsersProjects[1] ? `/users/${diyElectronicsUsersProjects[1].id}/projects/${projectDIYElectronics[1].id}` : '/'}><h1>{projectDIYElectronics[1] ? projectDIYElectronics[1].title : ''}</h1></Link>
                    <p>{projectDIYElectronics[1] ? projectDIYElectronics[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{diyElectronicsUsersProjects[1] ? diyElectronicsUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDIYElectronics[2] && diyElectronicsUsersProjects[2] ? `/users/${diyElectronicsUsersProjects[2].id}/projects/${projectDIYElectronics[2].id}` : '/'}>
                      <div id={`${this.state.firstProject}`} className='explore-project-main-heart' onClick={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}>
                        <i className={`${this.state.firstProjectFill} fa-heart`}></i>
                      </div>
                      <div id='explore-project-remind-me-first'>Remind Me</div>
                      <img src={projectDIYElectronics[2] ? projectDIYElectronics[2].imageUrl : ''}/>
                    </Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDIYElectronics[2] && diyElectronicsUsersProjects[2] ? `/users/${diyElectronicsUsersProjects[2].id}/projects/${projectDIYElectronics[2].id}` : '/'}><h1>{projectDIYElectronics[2] ? projectDIYElectronics[2].title : ''}</h1></Link>
                    <p>{projectDIYElectronics[2] ? projectDIYElectronics[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{diyElectronicsUsersProjects[2] ? diyElectronicsUsersProjects[2].name : ''}</span></div>
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

export default DesignTech;
