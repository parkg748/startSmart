import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

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
    // let modal = getState().session.id === null || getState().session.session === null ? '' : (<Modal displayProfileMenu={this.state.displayProfileMenu} user={getState().entities.users.user === null ? : '' : Object.values(getState().entities.users).filter(el => el.id === getState().session.id)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>);
    let projects = Object.values(this.props.projects);
    let firstProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let secondProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let thirdProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let fourthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let fifthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let sixthProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let seventhProject = projects[Math.floor(Math.random() * Math.floor(projects.length - 1))];
    let nullProject = '';
    let firstUserProject = '';
    let secondUserProject = '';
    let thirdUserProject = '';
    let fourthUserProject = '';
    let fifthUserProject = '';
    let sixthUserProject = '';
    let seventhUserProject = '';
    if (Object.values(getState().entities.users).length === 2) {
      if (firstUserProject != undefined && secondProject != undefined && thirdProject != undefined && fourthProject != undefined && fifthProject != undefined && sixthProject != undefined && seventhProject != undefined) {
        firstUserProject = Object.values(getState().entities.users)[0];
        secondUserProject = Object.values(getState().entities.users)[0];
        thirdUserProject = Object.values(getState().entities.users)[0];
        fourthUserProject = Object.values(getState().entities.users)[0];
        fifthUserProject = Object.values(getState().entities.users)[0];
        sixthUserProject = Object.values(getState().entities.users)[0];
        seventhUserProject = Object.values(getState().entities.users)[0];
      }
    } else {
      if (firstProject != undefined && secondProject != undefined && thirdProject != undefined && fourthProject != undefined && fifthProject != undefined && sixthProject != undefined && seventhProject != undefined) {
        firstUserProject = Object.values(getState().entities.users).filter(el => el.id === firstProject.userId)[0];
        secondUserProject = Object.values(getState().entities.users).filter(el => el.id === secondProject.userId)[0];
        thirdUserProject = Object.values(getState().entities.users).filter(el => el.id === thirdProject.userId)[0];
        fourthUserProject = Object.values(getState().entities.users).filter(el => el.id === fourthProject.userId)[0];
        fifthUserProject = Object.values(getState().entities.users).filter(el => el.id === fifthProject.userId)[0];
        sixthUserProject = Object.values(getState().entities.users).filter(el => el.id === sixthProject.userId)[0];
        seventhUserProject = Object.values(getState().entities.users).filter(el => el.id === seventhProject.userId)[0];
      }
    }
    // var firstCurrentPictureCategory = '';
    // var secondCurrentPictureCategory = '';
    // var thirdCurrentPictureCategory = '';
    // var fourthCurrentPictureCategory = '';
    // var fifthCurrentPictureCategory = '';
    // currentPictureCategory.forEach((el, idx) => {
    //   if (currentPictureCategory.length != 0) {
    //     if (Object.values(getState().entities.users).length === 2) {
    //       if (idx === 0) {
    //         fifthCurrentPictureCategory = Object.values(getState().entities.users).id;
    //       } else if (idx === 1) {
    //         fourthCurrentPictureCategory = Object.values(getState().entities.users).id;
    //       } else if (idx === 2) {
    //         thirdCurrentPictureCategory = Object.values(getState().entities.users).id;
    //       } else if (idx === 3) {
    //         secondCurrentPictureCategory = Object.values(getState().entities.users).id;
    //       } else if (idx === 4) {
    //         firstCurrentPictureCategory = Object.values(getState().entities.users).id;
    //       }
    //     } else {
    //       if (Object.values(getState().entities.users).length === 1) {
    //         firstCurrentPictureCategory = '';
    //         secondCurrentPictureCategory = '';
    //         thirdCurrentPictureCategory = '';
    //         fourthCurrentPictureCategory = '';
    //         fifthCurrentPictureCategory = '';
    //       } else {
    //         if (idx === 0) {
    //           fifthCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-5)[0].userId)[0].id;
    //         } else if (idx === 1) {
    //           fourthCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-4)[0].userId)[0].id;
    //         } else if (idx === 2) {
    //           thirdCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-3)[0].userId)[0].id;
    //         } else if (idx === 3) {
    //           secondCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-2)[0].userId)[0].id;
    //         } else if (idx === 4) {
    //           firstCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-1)[0].userId)[0].id;
    //         }
    //       }
    //     }
    //   } else {
    //     firstCurrentPictureCategory = '';
    //     secondCurrentPictureCategory = '';
    //     thirdCurrentPictureCategory = '';
    //     fourthCurrentPictureCategory = '';
    //     fifthCurrentPictureCategory = '';
    //   }
    // });
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
                        <a><div>See all 282 live projects</div><i className={`${this.props.class.display} recommendations-body-arrow fas fa-long-arrow-alt-right`}></i></a>
                      </h5>
                    </div>
                  </div>
                  <div className='recommendations-body-two'>
                    <div className='recommendations-body-three'>
                      <div className='recommendations-body-four'>
                        <Link to={`/users/${projects.length != 0 ? firstUserProject.id : ''}/projects/${projects.length != 0 ? firstProject.id : ''}/front`}>
                          <img src={firstProject === undefined ? '' : firstProject.imageUrl} />
                        </Link>
                        <div className='recommendations-body-six'>
                          <div className='recommendations-body-seven'>
                            <div className='recommendations-body-seven-header'>
                              <Link className='recommendations-body-seven-header-inner' to={`/users/${projects.length != 0 ? firstUserProject.id : ''}/projects/${projects.length != 0 ? firstProject.id : ''}/front`}>{firstProject === undefined ? null : firstProject.title}</Link>
                            </div>
                            <div className='recommendations-body-seven-author'>
                              <img src='https://ksr-ugc.imgix.net/assets/006/347/287/83a01d5959e63f24f2ad447b4a0797f9_original.png?ixlib=rb-1.1.0&w=20&h=20&fit=crop&v=1503090035&auto=format&frame=1&q=92&s=d66f0ce35895ac6e08f4f2592cdbc9b8'/>
                              by <span>{firstUserProject === undefined ? '' : firstUserProject.name}</span>
                            </div>
                            <div className='recommendations-body-seven-description'>{firstProject === undefined ? '' : firstProject.description}</div>
                            <div className='recommendations-body-seven-category'>
                              <a><i className="fab fa-stripe-s"></i>Project We Love</a>
                              <a><i className="far fa-square"></i>{firstProject === undefined ? '' : firstProject.city}, {firstProject === undefined ? '' : firstProject.state}</a>
                              <a className='product-design-category'><i className="far fa-square"></i>{firstProject === undefined ? '' : firstProject.subcategory}</a>
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
                            <li><strong>{firstProject === undefined ? '' : firstProject.duration}</strong><span>days to go</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='recommendations-body-nine'>
                    <div className='first-three-row'>
                      <div className='recommendations-category-one-left'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? secondUserProject.id : ''}/projects/${projects.length != 0 ? secondProject.id : ''}/front`}>
                            <img src={secondProject === undefined ? '' : secondProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? secondUserProject.id : ''}/projects/${projects.length != 0 ? secondProject.id : ''}/front`}>
                                  <h3>{secondProject === undefined ? null : secondProject.title}</h3>
                                </Link>
                                <p>{secondProject === undefined ? null : secondProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{secondUserProject === undefined ? '' : secondUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{secondProject === undefined ? '' : secondProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{secondProject === undefined ? '' : secondProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {secondProject === undefined ? '' : secondProject.city}, {secondProject === undefined ? '' : secondProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? thirdUserProject.id : ''}/projects/${projects.length != 0 ? thirdProject.id : ''}/front`}>
                            <img src={thirdProject === undefined ? '' : thirdProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? thirdUserProject.id : ''}/projects/${projects.length != 0 ? thirdProject.id : ''}/front`}>
                                  <h3>{thirdProject === undefined ? '' : thirdProject.title}</h3>
                                </Link>
                                <p>{thirdProject === undefined ? '' : thirdProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{thirdUserProject === undefined ? '' : thirdUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{thirdProject === undefined ? '' : thirdProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{thirdProject === undefined ? '' : thirdProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {thirdProject === undefined ? '' : thirdProject.city}, {thirdProject === undefined ? '' : thirdProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one-right'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? fourthUserProject.id : ''}/projects/${projects.length != 0 ? fourthProject.id : ''}/front`}>
                            <img src={fourthProject === undefined ? '' : fourthProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? fourthUserProject.id : ''}/projects/${projects.length != 0 ? fourthProject.id : ''}/front`}>
                                  <h3>{fourthProject === undefined ? '' : fourthProject.title}</h3>
                                </Link>
                                <p>{fourthProject === undefined ? '' : fourthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{fourthUserProject === undefined ? '' : fourthUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{fourthProject === undefined ? '' : fourthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{fourthProject === undefined ? '' : fourthProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {fourthProject === undefined ? '' : fourthProject.city}, {fourthProject === undefined ? '' : fourthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='first-three-row'>
                      <div className='recommendations-category-one-left'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? fifthUserProject.id : ''}/projects/${projects.length != 0 ? fifthProject.id : ''}/front`}>
                            <img src={fifthProject === undefined ? '' : fifthProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? fifthUserProject.id : ''}/projects/${projects.length != 0 ? fifthProject.id : ''}/front`}>
                                  <h3>{fifthProject === undefined ? '' : fifthProject.title}</h3>
                                </Link>
                                <p>{fifthProject === undefined ? '' : fifthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{fifthUserProject === undefined ? '' : fifthUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{fifthProject === undefined ? '' : fifthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{fifthProject === undefined ? '' : fifthProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {fifthProject === undefined ? '' : fifthProject.city}, {fifthProject === undefined ? '' : fifthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? sixthUserProject.id : ''}/projects/${projects.length != 0 ? sixthProject.id : ''}/front`}>
                            <img src={sixthProject === undefined ? '' : sixthProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? sixthUserProject.id : ''}/projects/${projects.length != 0 ? sixthProject.id : ''}/front`}>
                                  <h3>{sixthProject === undefined ? '' : sixthProject.title}</h3>
                                </Link>
                                <p>{sixthProject === undefined ? '' : sixthProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{sixthUserProject === undefined ? '' : sixthUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{sixthProject === undefined ? '' : sixthProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{sixthProject === undefined ? '' : sixthProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {sixthProject === undefined ? '' : sixthProject.city}, {sixthProject === undefined ? '' : sixthProject.state}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='recommendations-category-one-right'>
                        <div className='recommendations-category-one-inner'>
                          <Link to={`/users/${projects.length != 0 ? seventhUserProject.id : ''}/projects/${projects.length != 0 ? seventhProject.id : ''}/front`}>
                            <img src={seventhProject === undefined ? '' : seventhProject.imageUrl} />
                          </Link>
                          <span>Project We Love</span>
                          <div className='recommendations-category-one-content'>
                            <div className='recommendations-category-one-content-inner'>
                              <div className='recommendations-category-one-content-inner-inner'>
                                <Link to={`/users/${projects.length != 0 ? seventhUserProject.id : ''}/projects/${projects.length != 0 ? seventhProject.id : ''}/front`}>
                                  <h3>{seventhProject === undefined ? '' : seventhProject.title}</h3>
                                </Link>
                                <p>{seventhProject === undefined ? '' : seventhProject.description}</p>
                              </div>
                              <div className='recommendations-category-one-content-author'>by <h2>{seventhUserProject === undefined ? '' : seventhUserProject.name}</h2></div>
                            </div>
                            <div className='recommendations-category-one-content-bottom'>
                              <div className='recommendations-category-one-content-bar'>
                              </div>
                              <div className='recommendations-category-funding-info'>
                                <h1>$395,347 pledged</h1>
                                <p>1,129% funded</p>
                                <p>{seventhProject === undefined ? '' : seventhProject.duration} days to go</p>
                                <div className='recommendations-category-bottom-link'>{seventhProject === undefined ? '' : seventhProject.subcategory}</div>
                                <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {seventhProject === undefined ? '' : seventhProject.city}, {seventhProject === undefined ? '' : seventhProject.state}</div>
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
