import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    // this.showArrow = this.showArrow.bind(this);
    // this.hideArrow = this.hideArrow.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
    this.props.fetchProjectsByCurrentUser(this.props.match.params.userId);
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id}/projects/${idx}`);
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
    if (this.props.user === null || this.props.user === undefined) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    Object.values(getState().entities.project).forEach(project => {
      if (project.userId === getState().session.id) {
        currentUserProjects.push(project);
      };
    });
    let projects = Object.values(this.props.projects);
    let firstProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let secondProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let thirdProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let fourthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let fifthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let sixthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let seventhProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    debugger;
    return (
      <div>
        <nav>
          <section className='explore-project'>
            <Link to='/explore' className='explore'>Explore</Link>
            <Link to='/learn' className='project'>Start a project</Link>
          </section>
          <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className={`search-signin ${navbarWidth}`}>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div className={`profile-icon-menu ${this.state.displayProfileMenu}`}>
          <div className='profile-menu-header'>Grace</div>
          <div className='profile-menu-body'>
            <div className='profile-menu-body-left'>
              <div className='profile-menu-body-left-header'>MY STUFF</div>
              <ul>
                <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                <li><Link to='/recommendations'>Recommended for you</Link></li>
                <li><Link to='/messages/inbox'>Messages</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to={`/profile/${Object.values(this.props.user)[0].id}`}>Profile</Link></li>
                <li><Link to='/profile/backings'>Backed projects</Link></li>
                <li><Link to='/profile/projects'>My projects</Link></li>
                <li><Link to='/profile/starred'>Saved projects</Link></li>
              </ul>
            </div>
            <div className='profile-menu-body-middle'>
              <div className='profile-menu-body-left-header'>SETTINGS</div>
              <ul>
                <li><Link to='/settings/account'>Account</Link></li>
                <li><Link to='/settings/profile'>Edit profile</Link></li>
                <li>Notifications</li>
              </ul>
            </div>
            <div className='profile-menu-body-right'>
              <div className='profile-menu-body-left-header'>MY PROJECTS</div>
              <ul>
                {currentUserProjects.slice(0, 5).map((project, idx) => {
                  if (project.title === '') {
                    return <li key={idx}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src='https://i.imgur.com/s5GppRq.png'/>
                        </div>
                        <span><a onClick={() => this.changeProjectPage(project.id)}>Untitled</a></span>
                      </div>
                    </li>
                  } else {
                    return <li key={idx}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src={project.imageUrl} />
                        </div>
                        <span><a onClick={() => this.changeProjectPage(project.id)}>{project.title}</a></span>
                      </div>
                    </li>
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
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
                        <a>See all 282 live projects</a>
                        <i className={`${this.props.class.display} recommendations-body-arrow fas fa-long-arrow-alt-right`}></i>
                      </h5>
                    </div>
                  </div>
                  <div className='recommendations-body-two'>
                    <div className='recommendations-body-three'>
                      <div className='recommendations-body-four'>
                        <div className='recommendations-body-five'>
                          <div className='recommendations-body-image'>
                          </div>
                          <div className='recommendations-body-six'>
                            <div className='recommendations-body-seven'>
                              <div className='recommendations-body-seven-header'>
                                <Link to='/'>{firstProject === undefined ? null : firstProject.title}</Link>
                              </div>
                              <div className='recommendations-body-seven-author'>
                                <img src='https://ksr-ugc.imgix.net/assets/006/347/287/83a01d5959e63f24f2ad447b4a0797f9_original.png?ixlib=rb-1.1.0&w=20&h=20&fit=crop&v=1503090035&auto=format&frame=1&q=92&s=d66f0ce35895ac6e08f4f2592cdbc9b8'/>
                                by anonymous
                              </div>
                              <div className='recommendations-body-seven-description'>{firstProject === undefined ? null : firstProject.description}</div>
                              <div className='recommendations-body-seven-category'>
                                <a><i className="fab fa-stripe-s"></i>Project We Love</a>
                                <a><i className="far fa-square"></i>{firstProject === undefined ? null : firstProject.city}, {firstProject === undefined ? null : firstProject.state}</a>
                                <a className='product-design-category'><i className="far fa-square"></i>Product Design</a>
                              </div>
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
                            <li><strong>{firstProject === undefined ? null : firstProject.duration}</strong><span>days to go</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='recommendations-body-nine'>
                    <div className='first-three-row'>
                      <div className='recommendations-category-one-left'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{secondProject === undefined ? null : secondProject.title}</h3>
                                <p>{secondProject === undefined ? null : secondProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {secondProject === undefined ? null : this.props.users[secondProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{secondProject === undefined ? null : secondProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {secondProject === undefined ? null : secondProject.city}, {secondProject === undefined ? null : secondProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{thirdProject === undefined ? null : thirdProject.title}</h3>
                                <p>{thirdProject === undefined ? null : thirdProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {thirdProject === undefined ? null : this.props.users[thirdProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{thirdProject === undefined ? null : thirdProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {thirdProject === undefined ? null : thirdProject.city}, {thirdProject === undefined ? null : thirdProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one-right'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{fourthProject === undefined ? null : fourthProject.title}</h3>
                                <p>{fourthProject === undefined ? null : fourthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {fourthProject === undefined ? null : this.props.users[fourthProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{fourthProject === undefined ? null : fourthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {fourthProject === undefined ? null : fourthProject.city}, {fourthProject === undefined ? null : fourthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='first-three-row'>
                      <div className='recommendations-category-one-left'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{fifthProject === undefined ? null : fifthProject.title}</h3>
                                <p>{fifthProject === undefined ? null : fifthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {fifthProject === undefined ? null : this.props.users[fifthProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{fifthProject === undefined ? null : fifthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {fifthProject === undefined ? null : fifthProject.city}, {fifthProject === undefined ? null : fifthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{sixthProject === undefined ? null : sixthProject.title}</h3>
                                <p>{sixthProject === undefined ? null : sixthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {sixthProject === undefined ? null : this.props.users[sixthProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{sixthProject === undefined ? null : sixthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {sixthProject === undefined ? null : sixthProject.city}, {sixthProject === undefined ? null : sixthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one-right'>
                        <div className='recommendations-category-one-inner'>
                          <div className='recommendations-category-one-image'>
                            <a>Project We Love</a>
                          </div>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <h3>{seventhProject === undefined ? null : seventhProject.title}</h3>
                                <p>{seventhProject === undefined ? null : seventhProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by {seventhProject === undefined ? null : this.props.users[seventhProject.userId].name}</div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <span>$395,347 pledged</span>
                                <p>1,129% funded</p>
                                <p>{seventhProject === undefined ? null : seventhProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>Product Design</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {seventhProject === undefined ? null : seventhProject.city}, {seventhProject === undefined ? null : seventhProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
