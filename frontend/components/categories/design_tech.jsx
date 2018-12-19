import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

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
    if (Object.values(this.props.user).length > 1) {
      usersDesignTechProjects = designTechProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      designUsersProjects = projectDesign.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      technologyUsersProjects = projectTechnology.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      productDesignUsersProjects = projectProductDesign.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      threeDUsersProjects = project3D.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Design & Tech</h3>
            <p>From fine design to innovative tech, discover projects from creators working to build a more beautiful, sustainable future.</p>
            <Link className='subcategories-links' to='/discover/categories/design'>Explore Design</Link>
            <Link className='subcategories-links' to='/discover/categories/technology'>Explore Technology</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div id={`${this.state.mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={() => this.addToSavedProjects(designTechProjects.length > 1 ? designTechProjects.slice(-1)[0].id : '', 'main-heart')}>
                  <i className={`${this.state.mainHeartFill} fa-heart`}></i>
                </div>
                <div id='category-recommended-remind-me-first'>Remind Me</div>
                <img src={designTechProjects.length > 0 ? designTechProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{designTechProjects.length > 0 ? designTechProjects.slice(-1)[0].title : ''}</h1>
                <p>{designTechProjects.length > 0 ? designTechProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersDesignTechProjects.length > 0 ? usersDesignTechProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-2)[0].id : '', 'first-heart')}><i className={`${this.state.firstHeart} fa-heart`}></i></div>
                    {this.state.firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={designTechProjects.length > 0 ? designTechProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{designTechProjects.length > 0 ? designTechProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersDesignTechProjects.length > 0 ? usersDesignTechProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-3)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
                    {this.state.secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={designTechProjects.length > 0 ? designTechProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{designTechProjects.length > 0 ? designTechProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersDesignTechProjects.length > 0 ? usersDesignTechProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <div id="category-recommended-heart-id" onClick={() => this.addToSavedProjects(designTechProjects.length > 0 ? designTechProjects.slice(-4)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
                    {this.state.thirdHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
                    <img src={designTechProjects.length > 0 ? designTechProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{designTechProjects.length > 0 ? designTechProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersDesignTechProjects.length > 0 ? usersDesignTechProjects.slice(-4)[0].name : ''}</a></div>
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
                <h2>Subscribe to Invent, our Design & Tech newsletter</h2>
                <p>Discover the future of Design and Tech.</p>
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
                  <h3>PROJECTS FEATURED IN OUR INVENT NEWSLETTER</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[0] && technologyUsersProjects[0] ? `/users/${technologyUsersProjects[0].id}/projects/${projectTechnology[0].id}` : '/'}><img src={projectTechnology[0] ? projectTechnology[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[0] && technologyUsersProjects[0] ? `/users/${technologyUsersProjects[0].id}/projects/${projectTechnology[0].id}` : '/'}><h1>{projectTechnology[0] ? projectTechnology[0].title : ''}</h1></Link>
                    <p>{projectTechnology[0] ? projectTechnology[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[0] ? technologyUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[1] && technologyUsersProjects[1] ? `/users/${technologyUsersProjects[1].id}/projects/${projectTechnology[1].id}` : '/'}><img src={projectTechnology[1] ? projectTechnology[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[1] && technologyUsersProjects[1] ? `/users/${technologyUsersProjects[1].id}/projects/${projectTechnology[1].id}` : '/'}><h1>{projectTechnology[1] ? projectTechnology[1].title : ''}</h1></Link>
                    <p>{projectTechnology[1] ? projectTechnology[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[1] ? technologyUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[2] && technologyUsersProjects[2] ? `/users/${technologyUsersProjects[2].id}/projects/${projectTechnology[2].id}` : '/'}><img src={projectTechnology[2] ? projectTechnology[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[2] && technologyUsersProjects[2] ? `/users/${technologyUsersProjects[2].id}/projects/${projectTechnology[2].id}` : '/'}><h1>{projectTechnology[2] ? projectTechnology[2].title : ''}</h1></Link>
                    <p>{projectTechnology[2] ? projectTechnology[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[2] ? technologyUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[3] && technologyUsersProjects[3] ? `/users/${technologyUsersProjects[3].id}/projects/${projectTechnology[3].id}` : '/'}><img src={projectTechnology[3] ? projectTechnology[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[3] && technologyUsersProjects[3] ? `/users/${technologyUsersProjects[3].id}/projects/${projectTechnology[3].id}` : '/'}><h1>{projectTechnology[3] ? projectTechnology[3].title : ''}</h1></Link>
                    <p>{projectTechnology[3] ? projectTechnology[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[3] ? technologyUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>PRODUCT DESIGN PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectProductDesign[0] && productDesignUsersProjects[0] ? `/users/${productDesignUsersProjects[0].id}/projects/${projectProductDesign[0].id}` : '/'}><img src={projectProductDesign[0] ? projectProductDesign[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectProductDesign[0] && productDesignUsersProjects[0] ? `/users/${productDesignUsersProjects[0].id}/projects/${projectProductDesign[0].id}` : '/'}><h1>{projectProductDesign[0] ? projectProductDesign[0].title : ''}</h1></Link>
                    <p>{projectProductDesign[0] ? projectProductDesign[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{productDesignUsersProjects[0] ? productDesignUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectProductDesign[1] && productDesignUsersProjects[1] ? `/users/${productDesignUsersProjects[1].id}/projects/${projectProductDesign[1].id}` : '/'}><img src={projectProductDesign[1] ? projectProductDesign[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectProductDesign[1] && productDesignUsersProjects[1] ? `/users/${productDesignUsersProjects[1].id}/projects/${projectProductDesign[1].id}` : '/'}><h1>{projectProductDesign[1] ? projectProductDesign[1].title : ''}</h1></Link>
                    <p>{projectProductDesign[1] ? projectProductDesign[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{productDesignUsersProjects[1] ? productDesignUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectProductDesign[2] && productDesignUsersProjects[2] ? `/users/${productDesignUsersProjects[2].id}/projects/${projectProductDesign[2].id}` : '/'}><img src={projectProductDesign[2] ? projectProductDesign[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectProductDesign[2] && productDesignUsersProjects[2] ? `/users/${productDesignUsersProjects[2].id}/projects/${projectProductDesign[2].id}` : '/'}><h1>{projectProductDesign[2] ? projectProductDesign[2].title : ''}</h1></Link>
                    <p>{projectProductDesign[2] ? projectProductDesign[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{productDesignUsersProjects[2] ? productDesignUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectProductDesign[3] && productDesignUsersProjects[3] ? `/users/${productDesignUsersProjects[3].id}/projects/${projectProductDesign[3].id}` : '/'}><img src={projectProductDesign[3] ? projectProductDesign[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectProductDesign[3] && productDesignUsersProjects[3] ? `/users/${productDesignUsersProjects[3].id}/projects/${projectProductDesign[3].id}` : '/'}><h1>{projectProductDesign[3] ? projectProductDesign[3].title : ''}</h1></Link>
                    <p>{projectProductDesign[3] ? projectProductDesign[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{productDesignUsersProjects[3] ? productDesignUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>3D PRINTING PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={project3D[0] && threeDUsersProjects[0] ? `/users/${threeDUsersProjects[0].id}/projects/${project3D[0].id}` : '/'}><img src={project3D[0] ? project3D[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={project3D[0] && threeDUsersProjects[0] ? `/users/${threeDUsersProjects[0].id}/projects/${project3D[0].id}` : '/'}><h1>{project3D[0] ? project3D[0].title : ''}</h1></Link>
                    <p>{project3D[0] ? project3D[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{threeDUsersProjects[0] ? threeDUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={project3D[1] && threeDUsersProjects[1] ? `/users/${threeDUsersProjects[1].id}/projects/${project3D[1].id}` : '/'}><img src={project3D[1] ? project3D[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={project3D[1] && threeDUsersProjects[1] ? `/users/${threeDUsersProjects[1].id}/projects/${project3D[1].id}` : '/'}><h1>{project3D[1] ? project3D[1].title : ''}</h1></Link>
                    <p>{project3D[1] ? project3D[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{threeDUsersProjects[1] ? threeDUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={project3D[2] && threeDUsersProjects[2] ? `/users/${threeDUsersProjects[2].id}/projects/${project3D[2].id}` : '/'}><img src={project3D[2] ? project3D[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={project3D[2] && threeDUsersProjects[2] ? `/users/${threeDUsersProjects[2].id}/projects/${project3D[2].id}` : '/'}><h1>{project3D[2] ? project3D[2].title : ''}</h1></Link>
                    <p>{project3D[2] ? project3D[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{threeDUsersProjects[2] ? threeDUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={project3D[3] && threeDUsersProjects[3] ? `/users/${threeDUsersProjects[3].id}/projects/${project3D[3].id}` : '/'}><img src={project3D[3] ? project3D[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={project3D[3] && threeDUsersProjects[3] ? `/users/${threeDUsersProjects[3].id}/projects/${project3D[3].id}` : '/'}><h1>{project3D[3] ? project3D[3].title : ''}</h1></Link>
                    <p>{project3D[3] ? project3D[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{threeDUsersProjects[3] ? threeDUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>GO GREEN PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDesign[0] && designUsersProjects[0] ? `/users/${designUsersProjects[0].id}/projects/${projectDesign[0].id}` : '/'}><img src={projectDesign[0] ? projectDesign[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDesign[0] && designUsersProjects[0] ? `/users/${designUsersProjects[0].id}/projects/${projectDesign[0].id}` : '/'}><h1>{projectDesign[0] ? projectDesign[0].title : ''}</h1></Link>
                    <p>{projectDesign[0] ? projectDesign[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{designUsersProjects[0] ? designUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDesign[1] && designUsersProjects[1] ? `/users/${designUsersProjects[1].id}/projects/${projectDesign[1].id}` : '/'}><img src={projectDesign[1] ? projectDesign[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDesign[1] && designUsersProjects[1] ? `/users/${designUsersProjects[1].id}/projects/${projectDesign[1].id}` : '/'}><h1>{projectDesign[1] ? projectDesign[1].title : ''}</h1></Link>
                    <p>{projectDesign[1] ? projectDesign[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{designUsersProjects[1] ? designUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDesign[2] && designUsersProjects[2] ? `/users/${designUsersProjects[2].id}/projects/${projectDesign[2].id}` : '/'}><img src={projectDesign[2] ? projectDesign[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDesign[2] && designUsersProjects[2] ? `/users/${designUsersProjects[2].id}/projects/${projectDesign[2].id}` : '/'}><h1>{projectDesign[2] ? projectDesign[2].title : ''}</h1></Link>
                    <p>{projectDesign[2] ? projectDesign[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{designUsersProjects[2] ? designUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectDesign[3] && designUsersProjects[3] ? `/users/${designUsersProjects[3].id}/projects/${projectDesign[3].id}` : '/'}><img src={projectDesign[3] ? projectDesign[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectDesign[3] && designUsersProjects[3] ? `/users/${designUsersProjects[3].id}/projects/${projectDesign[3].id}` : '/'}><h1>{projectDesign[3] ? projectDesign[3].title : ''}</h1></Link>
                    <p>{projectDesign[3] ? projectDesign[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{designUsersProjects[3] ? designUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>DIY PROJECTS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[4] && technologyUsersProjects[4] ? `/users/${technologyUsersProjects[4].id}/projects/${projectTechnology[4].id}` : '/'}><img src={projectTechnology[4] ? projectTechnology[4].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[4] && technologyUsersProjects[4] ? `/users/${technologyUsersProjects[4].id}/projects/${projectTechnology[4].id}` : '/'}><h1>{projectTechnology[4] ? projectTechnology[4].title : ''}</h1></Link>
                    <p>{projectTechnology[4] ? projectTechnology[4].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[4] ? technologyUsersProjects[4].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[5] && technologyUsersProjects[5] ? `/users/${technologyUsersProjects[5].id}/projects/${projectTechnology[5].id}` : '/'}><img src={projectTechnology[5] ? projectTechnology[5].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[5] && technologyUsersProjects[5] ? `/users/${technologyUsersProjects[5].id}/projects/${projectTechnology[5].id}` : '/'}><h1>{projectTechnology[5] ? projectTechnology[5].title : ''}</h1></Link>
                    <p>{projectTechnology[5] ? projectTechnology[5].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[5] ? technologyUsersProjects[5].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTechnology[6] && technologyUsersProjects[6] ? `/users/${technologyUsersProjects[6].id}/projects/${projectTechnology[6].id}` : '/'}><img src={projectTechnology[6] ? projectTechnology[6].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTechnology[6] && technologyUsersProjects[6] ? `/users/${technologyUsersProjects[6].id}/projects/${projectTechnology[6].id}` : '/'}><h1>{projectTechnology[6] ? projectTechnology[6].title : ''}</h1></Link>
                    <p>{projectTechnology[6] ? projectTechnology[6].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{technologyUsersProjects[6] ? technologyUsersProjects[6].name : ''}</span></div>
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
