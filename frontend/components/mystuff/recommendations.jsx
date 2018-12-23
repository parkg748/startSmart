import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'location-none-display',
                  displayProfileMenu: 'js-modal-close',
                  searchBar: 'search-bar-close',
                  projectsNum: 2};
    // this.showArrow = this.showArrow.bind(this);
    // this.hideArrow = this.hideArrow.bind(this);
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  // showArrow() {
  //   this.setState({display: ''});
  // }
  //
  // hideArrow() {
  //   this.setState({display: 'location-none-display'});
  // }



  render() {
    if (this.props.projects === undefined || this.props.projects === null) return null;
    if (this.props.categories === undefined || this.props.categories === null) return null;
    if (this.props.users === undefined || this.props.users === null) return null;
    if (this.props.user === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    let currentProfileIcon = getState().session.id === null || getState().session.session === null ? '' : Object.values(getState().entities.users).filter(el => el.id === getState().session.id)[0].profileUrl;
    if (getState().session.id != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={currentProfileIcon === '' ? 'https://i.imgur.com/jyZdRza.png' : currentProfileIcon} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0] != null) {
      if (Object.values(getState().entities.users)[0].projects != null) {
        Object.values(getState().entities.users)[0].projects.forEach(project => {
          if (project.user_id === getState().session.id.id) {
            currentUserProjects.push(project);
          };
        });
      }
    }
    var projectRowBox = [];
    if (Object.values(this.props.projects).length > 1 && Object.values(this.props.users).length > 2) {
      var projects = Object.values(this.props.projects);
      var users = projects.map(el => Object.values(this.props.users).find(user => user.id === el.userId));
      for (let i = projects.length - 2; i > (projects.length - (this.state.projectsNum * 3) - 2); i -= 3) {
        projectRowBox.push(<div className='first-three-row'>
        <div className='recommendations-category-one-left'>
          <div className='recommendations-category-one-inner'>
            <Link to={`/users/${projects.length != 0 ? projects[i].id : ''}/projects/${projects.length != 0 ? projects[i].id : ''}/front`}>
              <img src={projects[i] === undefined ? '' : projects[i].imageUrl} />
            </Link>
            <span>Project We Love</span>
            <div className='recommendations-category-one-content'>
              <div className='recommendations-category-one-content-inner'>
                <div className='recommendations-category-one-content-inner-inner'>
                  <Link to={`/users/${projects.length != 0 ? users[i].id : ''}/projects/${projects.length != 0 ? projects[i].id : ''}/front`}>
                    <h3>{projects[i] === undefined ? '' : projects[i].title}</h3>
                  </Link>
                  <p>{projects[i] === undefined ? '' : projects[i].description}</p>
                </div>
                <div className='recommendations-category-one-content-author'>by <h2>{users[i] === undefined ? '' : users[i].name}</h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar'>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>$395,347 pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i] === undefined ? '' : projects[i].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i] === undefined ? '' : projects[i].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i] === undefined ? '' : projects[i].city}, {projects[i] === undefined ? '' : projects[i].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='recommendations-category-one'>
          <div className='recommendations-category-one-inner'>
            <Link to={`/users/${projects.length != 0 ? users[i - 1].id : ''}/projects/${projects.length != 0 ? projects[i - 1].id : ''}/front`}>
              <img src={projects[i - 1] === undefined ? '' : projects[i - 1].imageUrl} />
            </Link>
            <span>Project We Love</span>
            <div className='recommendations-category-one-content'>
              <div className='recommendations-category-one-content-inner'>
                <div className='recommendations-category-one-content-inner-inner'>
                  <Link to={`/users/${projects.length != 0 ? users[i - 1].id : ''}/projects/${projects.length != 0 ? projects[i - 1].id : ''}/front`}>
                    <h3>{projects[i - 1] === undefined ? '' : projects[i - 1].title}</h3>
                  </Link>
                  <p>{projects[i - 1] === undefined ? '' : projects[i - 1].description}</p>
                </div>
                <div className='recommendations-category-one-content-author'>by <h2>{users[i - 1] === undefined ? '' : users[i - 1].name}</h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar'>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>$395,347 pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i - 1] === undefined ? '' : projects[i - 1].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i - 1] === undefined ? '' : projects[i - 1].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i - 1] === undefined ? '' : projects[i - 1].city}, {projects[i - 1] === undefined ? '' : projects[i - 1].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='recommendations-category-one-right'>
          <div className='recommendations-category-one-inner'>
            <Link to={`/users/${projects.length != 0 ? users[i - 2].id : ''}/projects/${projects.length != 0 ? projects[i - 2].id : ''}/front`}>
              <img src={projects[i - 2] === undefined ? '' : projects[i - 2].imageUrl} />
            </Link>
            <span>Project We Love</span>
            <div className='recommendations-category-one-content'>
              <div className='recommendations-category-one-content-inner'>
                <div className='recommendations-category-one-content-inner-inner'>
                  <Link to={`/users/${projects.length != 0 ? users[i - 2].id : ''}/projects/${projects.length != 0 ? projects[i - 2].id : ''}/front`}>
                    <h3>{projects[i - 2] === undefined ? '' : projects[i - 2].title}</h3>
                  </Link>
                  <p>{projects[i - 2] === undefined ? '' : projects[i - 2].description}</p>
                </div>
                <div className='recommendations-category-one-content-author'>by <h2>{users[i - 2] === undefined ? '' : users[i - 2].name}</h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar'>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>$395,347 pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i - 2] === undefined ? '' : projects[i - 2].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i - 2] === undefined ? '' : projects[i - 2].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i - 2] === undefined ? '' : projects[i - 2].city}, {projects[i - 2] === undefined ? '' : projects[i - 2].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
      }
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.users)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='recommendations-header'>
          <div className='recommendations-header-content'>
            <div className='recommendations-header-content-inner'>
              <div className='recommendations-header-content-inner-inner'>
                <div className='recommendations-header-inner-inner-inner'>
                  <div className='recommendations-header-inner-inner-inner-inner'>
                    <span>Show me</span>
                    <div className='recommendations-first-box'>
                      <i className="recommendations-close fas fa-times"></i>
                      <span>Live</span>
                    </div>
                    <span>projects in</span>
                    <div className='recommendations-second-box'>
                      <select className='select-your-second-category' defaultValue='all-categories'>
                        <option value='all-categories' disabled>All Categories</option>
                        {Object.values(this.props.categories).map(obj => {if (obj.name === 'Film') {
                          return <option key={obj.id} value={obj.name}>Film & Video</option>
                        } else {
                          return <option key={obj.id} value={obj.name}>{obj.name}</option>
                        }})}
                      </select>
                      <i className="all-categories-caret fas fa-caret-down"></i>
                    </div>
                    <span className='on-recommendations'>on</span>
                    <div className='recommendations-third-box'>
                      <select className='select-your-third-category' defaultValue='earth'>
                        <option value='earth' disabled>Earth</option>
                      </select>
                      <i className="earth-caret fas fa-caret-down"></i>
                    </div>
                    <span className='that-are'>that are</span>
                    <div className='recommendations-fourth-box'>
                      <i className="recommendations-fourth-close fas fa-times"></i>
                      <span>recommended for me</span>
                    </div>
                    <div className='recommendations-fifth-box'>
                      <i className="recommendations-fifth-close fas fa-times"></i>
                      <span>backed by people I follow</span>
                    </div>
                    <div className='recommendations-sixth-box'>
                      <i className="recommendations-sixth-close fas fa-times"></i>
                      <span>I've saved</span>
                    </div>
                    <div className='recommendations-seventh-box'>
                      <i className="recommendations-seventh-close fas fa-times"></i>
                      <span>I haven't backed</span>
                    </div>
                    <span className='sorted-by'>sorted by</span>
                    <div className='recommendations-eighth-box'>
                      <select className='select-your-eighth-category' defaultValue='magic'>
                        <option value='magic'>Magic</option>
                        <option value='popularity'>Popularity</option>
                        <option value='newest'>Newest</option>
                        <option value='end-date'>End Date</option>
                        <option value='most-funded'>Most Funded</option>
                        <option value='most-backed'>Most Backed</option>
                      </select>
                      <i className="magic-caret fas fa-caret-down"></i>
                    </div>
                  </div>
                  <div className='filter-section'>
                    <a>More filters</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='recommendations-body'>
          <div className='recommendations-body-inner'>
            <section className='recommendations-body-inner-inner'>
              <div className='recommendations-body-inner-inner-inner-inner'>
                <div className='recommendations-body-one'>
                  <div className='recommendations-body-header'>
                    <div className='recommendations-body-header-one'>
                      <h3>Projects for you</h3>
                      <h5>
                        <a><div>See all 282 live projects</div><i className={`${this.state.display} recommendations-body-arrow fas fa-long-arrow-alt-right`}></i></a>
                      </h5>
                    </div>
                  </div>
                  <div className='recommendations-body-two'>
                    <div className='recommendations-body-three'>
                      <div className='recommendations-body-four'>
                        <Link to={`/users/${Object.values(this.props.users).length > 2 ? users[users.length - 1].id : ''}/projects/${projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].id : ''}/front`}>
                          <img src={projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].imageUrl : ''} />
                        </Link>
                        <div className='recommendations-body-six'>
                          <div className='recommendations-body-seven'>
                            <div className='recommendations-body-seven-header'>
                              <Link className='recommendations-body-seven-header-inner' to={`/users/${Object.values(this.props.users).length > 2 ? users[users.length - 1].id : ''}/projects/${projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].id : ''}/front`}>{projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].title : null}</Link>
                            </div>
                            <div className='recommendations-body-seven-author'>
                              <img src='https://ksr-ugc.imgix.net/assets/006/347/287/83a01d5959e63f24f2ad447b4a0797f9_original.png?ixlib=rb-1.1.0&w=20&h=20&fit=crop&v=1503090035&auto=format&frame=1&q=92&s=d66f0ce35895ac6e08f4f2592cdbc9b8'/>
                              by <span>{Object.values(this.props.users).length > 2 ? users[users.length - 1].name : ''}</span>
                            </div>
                            <div className='recommendations-body-seven-description'>{projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].description : ''}</div>
                            <div className='recommendations-body-seven-category'>
                              <a><i className="fab fa-stripe-s"></i>Project We Love</a>
                              <a><i className="far fa-square"></i>{projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].city : ''}, {projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].state : ''}</a>
                              <a className='product-design-category'><i className="far fa-square"></i>{projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].subcategory : ''}</a>
                            </div>
                          </div>
                        </div>
                        <div className='recommendations-body-eight'>
                          <div className='recommendations-body-green-bar'>
                          </div>
                          <ul>
                            <li><strong>2512%</strong><span>funded</span></li>
                            <li><strong>$628,149</strong><span>pledged</span></li>
                            <li><strong>8,016</strong><span>backers</span></li>
                            <li><strong>{projects != undefined && Object.values(this.props.projects).length > 1 ? projects[projects.length - 1].duration : ''}</strong><span>days to go</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='recommendations-body-nine'>
                    {projectRowBox}
                    <div className='more-recommendations'>
                      <div className='more-recommendations-inner'>
                        <a>More recommendations</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default Recommendations;
