import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  displayNone: 'error-email-msg',
                  searchBar: 'search-bar-close'};
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
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
    if (Object.values(this.props.user).length > 1) {
      usersGamesProjects = gamesProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      gamesUsersProjects = projectGames.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      gamingHardwareUsersProjects = projectGamingHardware.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      videoGamesUsersProjects = projectVideoGames.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      tabletopUsersProjects = projectTabletop.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Games</h3>
            <p>From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.</p>
            <Link className='subcategories-links' to='/discover/categories/games'>Explore Games</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div className='featured-project-recommended-left-main-heart'>
                  <i className='featured-project-recommended-left-main-heart-icon far fa-heart'></i>
                </div>
                <img src={gamesProjects.length > 0 ? gamesProjects.slice(-1)[0].imageUrl : ''}/>
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>{gamesProjects.length > 0 ? gamesProjects.slice(-1)[0].title : ''}</h1>
                <p>{gamesProjects.length > 0 ? gamesProjects.slice(-1)[0].description : ''}</p>
                <div className='featured-project-recommended-left-main-author'>by <a>{usersGamesProjects.length > 0 ? usersGamesProjects.slice(-1)[0].name : ''}</a></div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img src={gamesProjects.length > 0 ? gamesProjects.slice(-2)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{gamesProjects.length > 0 ? gamesProjects.slice(-2)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersGamesProjects.length > 0 ? usersGamesProjects.slice(-2)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <img src={gamesProjects.length > 0 ? gamesProjects.slice(-3)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{gamesProjects.length > 0 ? gamesProjects.slice(-3)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersGamesProjects.length > 0 ? usersGamesProjects.slice(-3)[0].name : ''}</a></div>
                    </div>
                  </li>
                  <li>
                    <img src={gamesProjects.length > 0 ? gamesProjects.slice(-4)[0].imageUrl : ''}/>
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>{gamesProjects.length > 0 ? gamesProjects.slice(-4)[0].title : ''}</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>{usersGamesProjects.length > 0 ? usersGamesProjects.slice(-4)[0].name : ''}</a></div>
                    </div>
                  </li>
                </ul>
                <div className='feature-project-recommended-view-more'>View more projects</div>
              </div>
            </div>
          </div>
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
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>RPGS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/photography'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectVideoGames[0] && videoGamesUsersProjects[0] ? `/users/${videoGamesUsersProjects[0].id}/projects/${projectVideoGames[0].id}` : '/'}><img src={projectVideoGames[0] ? projectVideoGames[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectVideoGames[0] && videoGamesUsersProjects[0] ? `/users/${videoGamesUsersProjects[0].id}/projects/${projectVideoGames[0].id}` : '/'}><h1>{projectVideoGames[0] ? projectVideoGames[0].title : ''}</h1></Link>
                    <p>{projectVideoGames[0] ? projectVideoGames[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{videoGamesUsersProjects[0] ? videoGamesUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectVideoGames[1] && videoGamesUsersProjects[1] ? `/users/${videoGamesUsersProjects[1].id}/projects/${projectVideoGames[1].id}` : '/'}><img src={projectVideoGames[1] ? projectVideoGames[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectVideoGames[1] && videoGamesUsersProjects[1] ? `/users/${videoGamesUsersProjects[1].id}/projects/${projectVideoGames[1].id}` : '/'}><h1>{projectVideoGames[1] ? projectVideoGames[1].title : ''}</h1></Link>
                    <p>{projectVideoGames[1] ? projectVideoGames[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{videoGamesUsersProjects[1] ? videoGamesUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectVideoGames[2] && videoGamesUsersProjects[2] ? `/users/${videoGamesUsersProjects[2].id}/projects/${projectVideoGames[2].id}` : '/'}><img src={projectVideoGames[2] ? projectVideoGames[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectVideoGames[2] && videoGamesUsersProjects[2] ? `/users/${videoGamesUsersProjects[2].id}/projects/${projectVideoGames[2].id}` : '/'}><h1>{projectVideoGames[2] ? projectVideoGames[2].title : ''}</h1></Link>
                    <p>{projectVideoGames[2] ? projectVideoGames[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{videoGamesUsersProjects[2] ? videoGamesUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectVideoGames[3] && videoGamesUsersProjects[3] ? `/users/${videoGamesUsersProjects[3].id}/projects/${projectVideoGames[3].id}` : '/'}><img src={projectVideoGames[3] ? projectVideoGames[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectVideoGames[3] && videoGamesUsersProjects[3] ? `/users/${videoGamesUsersProjects[3].id}/projects/${projectVideoGames[3].id}` : '/'}><h1>{projectVideoGames[3] ? projectVideoGames[3].title : ''}</h1></Link>
                    <p>{projectVideoGames[3] ? projectVideoGames[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{videoGamesUsersProjects[3] ? videoGamesUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>CONSOLE GAMES</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/dance'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGamingHardware[0] && gamingHardwareUsersProjects[0] ? `/users/${gamingHardwareUsersProjects[0].id}/projects/${projectGamingHardware[0].id}` : '/'}><img src={projectGamingHardware[0] ? projectGamingHardware[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGamingHardware[0] && gamingHardwareUsersProjects[0] ? `/users/${gamingHardwareUsersProjects[0].id}/projects/${projectGamingHardware[0].id}` : '/'}><h1>{projectGamingHardware[0] ? projectGamingHardware[0].title : ''}</h1></Link>
                    <p>{projectGamingHardware[0] ? projectGamingHardware[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamingHardwareUsersProjects[0] ? gamingHardwareUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGamingHardware[1] && gamingHardwareUsersProjects[1] ? `/users/${gamingHardwareUsersProjects[1].id}/projects/${projectGamingHardware[1].id}` : '/'}><img src={projectGamingHardware[1] ? projectGamingHardware[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGamingHardware[1] && gamingHardwareUsersProjects[1] ? `/users/${gamingHardwareUsersProjects[1].id}/projects/${projectGamingHardware[1].id}` : '/'}><h1>{projectGamingHardware[1] ? projectGamingHardware[1].title : ''}</h1></Link>
                    <p>{projectGamingHardware[1] ? projectGamingHardware[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamingHardwareUsersProjects[1] ? gamingHardwareUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGamingHardware[2] && gamingHardwareUsersProjects[2] ? `/users/${gamingHardwareUsersProjects[2].id}/projects/${projectGamingHardware[2].id}` : '/'}><img src={projectGamingHardware[2] ? projectGamingHardware[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGamingHardware[2] && gamingHardwareUsersProjects[2] ? `/users/${gamingHardwareUsersProjects[2].id}/projects/${projectGamingHardware[2].id}` : '/'}><h1>{projectGamingHardware[2] ? projectGamingHardware[2].title : ''}</h1></Link>
                    <p>{projectGamingHardware[2] ? projectGamingHardware[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamingHardwareUsersProjects[2] ? gamingHardwareUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGamingHardware[3] && gamingHardwareUsersProjects[3] ? `/users/${gamingHardwareUsersProjects[3].id}/projects/${projectGamingHardware[3].id}` : '/'}><img src={projectGamingHardware[3] ? projectGamingHardware[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGamingHardware[3] && gamingHardwareUsersProjects[3] ? `/users/${gamingHardwareUsersProjects[3].id}/projects/${projectGamingHardware[3].id}` : '/'}><h1>{projectGamingHardware[3] ? projectGamingHardware[3].title : ''}</h1></Link>
                    <p>{projectGamingHardware[3] ? projectGamingHardware[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamingHardwareUsersProjects[3] ? gamingHardwareUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>PC GAMES</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[0] && gamesUsersProjects[0] ? `/users/${gamesUsersProjects[0].id}/projects/${projectGames[0].id}` : '/'}><img src={projectGames[0] ? projectGames[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[0] && gamesUsersProjects[0] ? `/users/${gamesUsersProjects[0].id}/projects/${projectGames[0].id}` : '/'}><h1>{projectGames[0] ? projectGames[0].title : ''}</h1></Link>
                    <p>{projectGames[0] ? projectGames[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[0] ? gamesUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[1] && gamesUsersProjects[1] ? `/users/${gamesUsersProjects[1].id}/projects/${projectGames[1].id}` : '/'}><img src={projectGames[1] ? projectGames[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[1] && gamesUsersProjects[1] ? `/users/${gamesUsersProjects[1].id}/projects/${projectGames[1].id}` : '/'}><h1>{projectGames[1] ? projectGames[1].title : ''}</h1></Link>
                    <p>{projectGames[1] ? projectGames[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[1] ? gamesUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[2] && gamesUsersProjects[2] ? `/users/${gamesUsersProjects[2].id}/projects/${projectGames[2].id}` : '/'}><img src={projectGames[2] ? projectGames[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[2] && gamesUsersProjects[2] ? `/users/${gamesUsersProjects[2].id}/projects/${projectGames[2].id}` : '/'}><h1>{projectGames[2] ? projectGames[2].title : ''}</h1></Link>
                    <p>{projectGames[2] ? projectGames[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[2] ? gamesUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[3] && gamesUsersProjects[3] ? `/users/${gamesUsersProjects[3].id}/projects/${projectGames[3].id}` : '/'}><img src={projectGames[3] ? projectGames[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[3] && gamesUsersProjects[3] ? `/users/${gamesUsersProjects[3].id}/projects/${projectGames[3].id}` : '/'}><h1>{projectGames[3] ? projectGames[3].title : ''}</h1></Link>
                    <p>{projectGames[3] ? projectGames[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[3] ? gamesUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>STRATEGY GAMES</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/theater'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTabletop[0] && tabletopUsersProjects[0] ? `/users/${tabletopUsersProjects[0].id}/projects/${projectTabletop[0].id}` : '/'}><img src={projectTabletop[0] ? projectTabletop[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTabletop[0] && tabletopUsersProjects[0] ? `/users/${tabletopUsersProjects[0].id}/projects/${projectTabletop[0].id}` : '/'}><h1>{projectTabletop[0] ? projectTabletop[0].title : ''}</h1></Link>
                    <p>{projectTabletop[0] ? projectTabletop[0].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{tabletopUsersProjects[0] ? tabletopUsersProjects[0].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTabletop[1] && tabletopUsersProjects[1] ? `/users/${tabletopUsersProjects[1].id}/projects/${projectTabletop[1].id}` : '/'}><img src={projectTabletop[1] ? projectTabletop[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTabletop[1] && tabletopUsersProjects[1] ? `/users/${tabletopUsersProjects[1].id}/projects/${projectTabletop[1].id}` : '/'}><h1>{projectTabletop[1] ? projectTabletop[1].title : ''}</h1></Link>
                    <p>{projectTabletop[1] ? projectTabletop[1].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{tabletopUsersProjects[1] ? tabletopUsersProjects[1].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTabletop[2] && tabletopUsersProjects[2] ? `/users/${tabletopUsersProjects[2].id}/projects/${projectTabletop[2].id}` : '/'}><img src={projectTabletop[2] ? projectTabletop[2].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTabletop[2] && tabletopUsersProjects[2] ? `/users/${tabletopUsersProjects[2].id}/projects/${projectTabletop[2].id}` : '/'}><h1>{projectTabletop[2] ? projectTabletop[2].title : ''}</h1></Link>
                    <p>{projectTabletop[2] ? projectTabletop[2].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{tabletopUsersProjects[2] ? tabletopUsersProjects[2].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectTabletop[3] && tabletopUsersProjects[3] ? `/users/${tabletopUsersProjects[3].id}/projects/${projectTabletop[3].id}` : '/'}><img src={projectTabletop[3] ? projectTabletop[3].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectTabletop[3] && tabletopUsersProjects[3] ? `/users/${tabletopUsersProjects[3].id}/projects/${projectTabletop[3].id}` : '/'}><h1>{projectTabletop[3] ? projectTabletop[3].title : ''}</h1></Link>
                    <p>{projectTabletop[3] ? projectTabletop[3].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{tabletopUsersProjects[3] ? tabletopUsersProjects[3].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'>
            <div className='explore-theater-inner'>
              <div className='explore-theater-inner-inner'>
                <div className='explore-theater-header'>
                  <h3>VISUAL NOVELS</h3>
                  <div className='explore-theater-header-view-more'><Link to='/discover/categories/art'>View more</Link></div>
                </div>
                <div className='explore-theater-columns'>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[0] && gamesUsersProjects[0] ? `/users/${gamesUsersProjects[0].id}/projects/${projectGames[0].id}` : '/'}><img src={projectGames[0] ? projectGames[0].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[4] && gamesUsersProjects[4] ? `/users/${gamesUsersProjects[4].id}/projects/${projectGames[4].id}` : '/'}><h1>{projectGames[4] ? projectGames[4].title : ''}</h1></Link>
                    <p>{projectGames[4] ? projectGames[4].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[4] ? gamesUsersProjects[4].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[1] && gamesUsersProjects[1] ? `/users/${gamesUsersProjects[1].id}/projects/${projectGames[1].id}` : '/'}><img src={projectGames[1] ? projectGames[1].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[5] && gamesUsersProjects[5] ? `/users/${gamesUsersProjects[5].id}/projects/${projectGames[5].id}` : '/'}><h1>{projectGames[5] ? projectGames[5].title : ''}</h1></Link>
                    <p>{projectGames[5] ? projectGames[5].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[5] ? gamesUsersProjects[5].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[6] && gamesUsersProjects[6] ? `/users/${gamesUsersProjects[6].id}/projects/${projectGames[6].id}` : '/'}><img src={projectGames[6] ? projectGames[6].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[6] && gamesUsersProjects[6] ? `/users/${gamesUsersProjects[6].id}/projects/${projectGames[6].id}` : '/'}><h1>{projectGames[6] ? projectGames[6].title : ''}</h1></Link>
                    <p>{projectGames[6] ? projectGames[6].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[6] ? gamesUsersProjects[6].name : ''}</span></div>
                  </div>
                  <div className='explore-theater-column'>
                    <Link className='explore-theater-column-image' to={projectGames[7] && gamesUsersProjects[7] ? `/users/${gamesUsersProjects[7].id}/projects/${projectGames[7].id}` : '/'}><img src={projectGames[7] ? projectGames[7].imageUrl : ''}/></Link>
                    <div className='explore-theater-column-grey-bar'>
                      <div className='explore-theater-column-green-bar'></div>
                    </div>
                    <Link to={projectGames[7] && gamesUsersProjects[7] ? `/users/${gamesUsersProjects[7].id}/projects/${projectGames[7].id}` : '/'}><h1>{projectGames[7] ? projectGames[7].title : ''}</h1></Link>
                    <p>{projectGames[7] ? projectGames[7].description : ''}</p>
                    <div className='explore-theater-column-author'>By <span>{gamesUsersProjects[7] ? gamesUsersProjects[7].name : ''}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
