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
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
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
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
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
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
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
                        {Object.values(getState().entities.category).map(obj => {if (obj.name === 'Film') {
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
                                <Link to='/'>Testing</Link>
                              </div>
                              <div className='recommendations-body-seven-author'>
                                <img src='https://ksr-ugc.imgix.net/assets/006/347/287/83a01d5959e63f24f2ad447b4a0797f9_original.png?ixlib=rb-1.1.0&w=20&h=20&fit=crop&v=1503090035&auto=format&frame=1&q=92&s=d66f0ce35895ac6e08f4f2592cdbc9b8'/>
                                by anonymous
                              </div>
                              <div className='recommendations-body-seven-description'>The essential nonstick pan, redefined. No gimmicks. No BS marketing claims. Just premium, long-lasting performance at an honest price.</div>
                              <div className='recommendations-body-seven-category'>
                                <a><i className="fab fa-stripe-s"></i>Project We Love</a>
                                <a><i className="far fa-square"></i>Brooklyn, NY</a>
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
                            <li><strong>20</strong><span>days to go</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='recommendations-body-nine'>
                    <div className='recommendations-category-one-left'>
                      <div className='recommendations-category-one-inner'>
                        <div className='recommendations-category-one-image'>
                          <a>Project We Love</a>
                        </div>
                        <div className='recommendations-category-one-content'>
                          <div className='recommendations-category-one-content-inner'>
                            <div className='recommendations-category-one-content-inner-inner'>
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
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
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
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
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='recommendations-category-one-left'>
                      <div className='recommendations-category-one-inner'>
                        <div className='recommendations-category-one-image'>
                          <a>Project We Love</a>
                        </div>
                        <div className='recommendations-category-one-content'>
                          <div className='recommendations-category-one-content-inner'>
                            <div className='recommendations-category-one-content-inner-inner'>
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
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
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
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
                              <h3>Lumapod - The World's Fastest Tripod</h3>
                              <p>An ultra-compact and lightning fast tripod solution for those who enjoy exploring freely.</p>
                            </div>
                            <div className='recommendations-category-one-content-author'>by Lumapod</div>
                          </div>
                          <div className='recommendations-category-one-content-bottom'>
                            <div className='recommendations-category-one-content-bar'>
                            </div>
                            <div className='recommendations-category-funding-info'>
                              <span>$395,347 pledged</span>
                              <p>1,129% funded</p>
                              <p>10 days to go</p>
                              <div className='recommendations-category-bottom-link'>Product Design</div>
                              <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> Grieskirchen, Austria</div>
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
