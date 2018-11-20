import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.clickHandler = this.clickHandler.bind(this);
    // this.changeDisplay = this.changeDisplay.bind(this);
    this.clickHandlerSection = this.clickHandlerSection.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  // changeDisplay() {
  //   this.setState({displayNone: ''});
  // }

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

  clickHandlerSection(section) {
    if (section === 'new-noteworthy') {
      this.setState({newNoteworthySection: 'navbar-black', popularSection: ''});
    } else if (section === 'popular') {
      this.setState({newNoteworthySection: '', popularSection: 'navbar-black'});
    }
  }

  clickHandler(category) {
    if (category === 'Film') {
      this.setState({currentCategory: 'Film', filmBlack: 'navbar-black', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Arts') {
      this.setState({currentCategory: 'Arts', filmBlack: '', artsBlack: 'navbar-black', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Design & Tech') {
      this.setState({currentCategory: 'Design & Tech', filmBlack: '', artsBlack: '', designBlack: 'navbar-black', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Comics & Illustration') {
      this.setState({currentCategory: 'Comics & Illustration', filmBlack: '', artsBlack: '', designBlack: '', comicsBlack: 'navbar-black', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Games') {
      this.setState({currentCategory: 'Games', filmBlack: '', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: 'navbar-black', foodBlack: '', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Food & Craft') {
      this.setState({currentCategory: 'Food & Craft', filmBlack: '', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: 'navbar-black', musicBlack: '', publishingBlack: ''});
    } else if (category === 'Music') {
      this.setState({currentCategory: 'Music', filmBlack: '', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: 'navbar-black', publishingBlack: ''});
    } else if (category === 'Publishing') {
      this.setState({currentCategory: 'Publishing', filmBlack: '', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: 'navbar-black'});
    }
  }

  render() {
    // if (this.props.user.user === null || this.props.user.user === undefined) return null;
    // if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = monthString[currentDate.getMonth()];
    let day = currentDate.getDate() + 1;
    let currentUserProjects = [];
    Object.values(getState().entities.project).forEach(project => {
      if (project.userId === getState().session.id) {
        currentUserProjects.push(project);
      };
    });
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
          <div className='profile-menu-header'>{this.props.user.user ? Object.values(this.props.user.user)[0].name : '' }</div>
          <div className='profile-menu-body'>
            <div className='profile-menu-body-left'>
              <div className='profile-menu-body-left-header'>MY STUFF</div>
              <ul>
                <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                <li><Link to='/recommendations'>Recommended for you</Link></li>
                <li><Link to='/messages/inbox'>Messages</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to={`/profile/${this.props.user.id}`}>Profile</Link></li>
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
                {currentUserProjects.slice(0, 5).map((project, id) => {
                  if (project.title === '') {
                    return <li key={id}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src='https://i.imgur.com/s5GppRq.png'/>
                        </div>
                        <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>Untitled</Link></span>
                      </div>
                    </li>
                  } else {
                    return <li key={id}>
                      <div className='profile-menu-projects'>
                        <div className='profile-menu-projects-image'>
                          <img src=''/>
                        </div>
                        <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>{project.title}</Link></span>
                      </div>
                    </li>
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='homepage-body'>
          <div className='homepage-stats'>
            <div className='homepage-stats-content'>
              <div className='homepage-stats-content-inner'>
                <div className='bringing-creative-projects'>
                  <div className='homepage-stats-title'>{`${month} ${day}, ${year}`}</div>
                  <div className='homepage-stats-statistic'>Bringing creative projects to life.</div>
                </div>
                <div className='total-backers'>
                  <div className='homepage-stats-title'>TOTAL BACKERS</div>
                  <div className='homepage-stats-statistic'>Testing</div>
                </div>
                <div className='funded-projects'>
                  <div className='homepage-stats-title'>FUNDED PROJECTS</div>
                  <div className='homepage-stats-statistic'>Testing</div>
                </div>
                <div className='live-projects'>
                  <div className='homepage-stats-title'>LIVE PROJECTS</div>
                  <div className='homepage-stats-statistic'>{Object.values(this.props.projects).length}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='homepage-content'>
            <div className='homepage-categories'>
              <div className='homepage-categories-inner'>
                <div className='homepage-categories-inner-inner'>
                  <div className='homepage-categories-navbar'>
                    <ul>
                      <li><button className={`${this.state.filmBlack}`} onClick={() => this.clickHandler('Film')}>Film</button></li>
                      <li><button className={`${this.state.artsBlack}`} onClick={() => this.clickHandler('Arts')}>Arts</button></li>
                      <li><button className={`${this.state.designBlack}`} onClick={() => this.clickHandler('Design & Tech')}>Design & Tech</button></li>
                      <li><button className={`${this.state.comicsBlack}`} onClick={() => this.clickHandler('Comics & Illustration')}>Comics & Illustration</button></li>
                      <li><button className={`${this.state.gamesBlack}`} onClick={() => this.clickHandler('Games')}>Games</button></li>
                      <li><button className={`${this.state.foodBlack}`} onClick={() => this.clickHandler('Food & Craft')}>Food & Craft</button></li>
                      <li><button className={`${this.state.musicBlack}`} onClick={() => this.clickHandler('Music')}>Music</button></li>
                      <li><button className={`${this.state.publishingBlack}`} onClick={() => this.clickHandler('Publishing')}>Publishing</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='homepage-category-title'>
                <div className='homepage-category-title-inner'>
                  <div className='homepage-category-title-inner-inner'>{this.state.currentCategory}</div>
                  <div className='view-all'>VIEW ALL <i className="view-all-arrow fas fa-long-arrow-alt-right"></i></div>
                </div>
              </div>
            </div>
            <div className='category-contents'>
              <div className='category-contents-inner'>
                <div className='category-contents-left'>
                  <div className='category-contents-left-title'>
                    FEATURED PROJECT
                  </div>
                  <div className='category-contents-left-body'>
                    <i className="far fa-heart"></i>
                    <img />
                    <div className={`remind-me ${this.state.displayNone}`}>Remind Me</div>
                    <div className='category-contents-left-description'>
                      <p>
                        <span>Arita Ware: Original Japanese Dishware</span>
                        <span className='category-contents-author'>BY HULS INC.</span>
                      </p>
                    </div>
                    <div className='category-contents-funded-info'>55% FUNDED</div>
                  </div>
                </div>
                <div className='category-contents-right'>
                  <div className='category-contents-right-title'>
                    <ul>
                      <li><button className={`${this.state.newNoteworthySection}`} onClick={() => this.clickHandlerSection('new-noteworthy')}>NEW & NOTEWORTHY</button></li>
                      <li><button className={`${this.state.popularSection}`} onClick={() => this.clickHandlerSection('popular')}>POPULAR</button></li>
                    </ul>
                  </div>
                  <div className='category-contents-right-body'>
                    <ul>
                      <li>
                        <i className="category-contents-right-heart far fa-heart"></i>
                        <img />
                        <div className='category-contents-right-body-content'>
                          <span>Testing</span>
                          <p>16% funded</p>
                        </div>
                      </li>
                      <li>
                        <i className="category-contents-right-heart far fa-heart"></i>
                        <img />
                        <div className='category-contents-right-body-content'>
                          <span>Testing</span>
                          <p>16% funded</p>
                        </div>
                      </li>
                      <li>
                        <i className="category-contents-right-heart far fa-heart"></i>
                        <img />
                        <div className='category-contents-right-body-content'>
                          <span>Testing</span>
                          <p>16% funded</p>
                        </div>
                      </li>
                      <li>
                        <i className="category-contents-right-heart far fa-heart"></i>
                        <img />
                        <div className='category-contents-right-body-content'>
                          <span>Testing</span>
                          <p>16% funded</p>
                        </div>
                      </li>
                    </ul>
                    <button className='category-contents-right-view-all'>VIEW ALL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='projects-we-love'>
            <div className='projects-we-love-content'>
              <div className='projects-we-love-title'>
                <div className='projects-we-love-title-inner'>
                  Projects We Love
                </div>
                <div className='projects-we-love-view-all'>
                  <span>VIEW ALL</span><i className="projects-we-love-arrow fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
              <div className='projects-we-love-body-left'>
                <div className='projects-we-love-body-inner'>
                  <img/>
                  <p>The last unpublished manuscript of the late poet and provocateur Jonathan Williams with photographs by Roger Manley and Guy Mendes</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <img/>
                  <p>The last unpublished manuscript of the late poet and provocateur Jonathan Williams with photographs by Roger Manley and Guy Mendes</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-left'>
                <div className='projects-we-love-body-inner'>
                  <img/>
                  <p>The last unpublished manuscript of the late poet and provocateur Jonathan Williams with photographs by Roger Manley and Guy Mendes</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <img/>
                  <p>The last unpublished manuscript of the late poet and provocateur Jonathan Williams with photographs by Roger Manley and Guy Mendes</p>
                  <span>92% funded</span>
                </div>
              </div>
            </div>
          </div>
          <div className='people-quotes'>
            <div className='people-quotes-content'>
              <div className='people-quotes-content-inner'>
                <img src='https://i.imgur.com/0c4pkkv.png' />
                <div className='people-quotes-content-body'>
                  <div className='people-quotes-content-body-title'>
                    To get good at anything, you have to fail a lot at it.
                  </div>
                  <span>WRITER DANIEL ALARCÓN IN <strong><Link to='/'>THE CREATIVE INDEPENDENT</Link></strong>, A KICKSTARTER-PUBLISHED RESOURCE FOR CREATIVE PEOPLE</span>
                  <p>READ MORE <i className="projects-we-love-arrow fas fa-long-arrow-alt-right"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className='homepage-ad'>
            <div className='homepage-ad-content'>
              <div className='homepage-ad-content-left'>
                <img src='https://d3mlfyygrfdi2i.cloudfront.net/quickstarterCrop.jpg' />
                <div className='homepage-ad-content-left-content'>
                  <div className='homepage-ad-content-left-content-top'>
                    <span>StartSmart</span>
                    <p>It's OK to think small.</p>
                  </div>
                  <div className='start-small-project'>START A SMALL PROJECT</div>
                </div>
              </div>
              <div className='homepage-ad-content-right'>
                <div className='homepage-ad-content-right-content'></div>
              </div>
            </div>
          </div>
          <div className='what-were-reading'>
            <div className='what-were-reading-content'>
              <div className='what-were-reading-content-inner'>
                <div className='what-were-reading-title'>What we're reading</div>
                <div className='what-were-reading-body'>
                  <img />
                  <div className='what-were-reading-body-content'>
                    <p>The rebel girls who wrote a real-life role models into fairy tales, a podcast, and an interactive journal</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div className='what-were-reading-body'>
                  <img />
                  <div className='what-were-reading-body-content'>
                    <p>The rebel girls who wrote a real-life role models into fairy tales, a podcast, and an interactive journal</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div className='what-were-reading-body'>
                  <img />
                  <div className='what-were-reading-body-content'>
                    <p>The rebel girls who wrote a real-life role models into fairy tales, a podcast, and an interactive journal</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='what-were-reading-content-bottom'>
                <div className='what-were-reading-content-bottom-section'>
                  <div className='what-were-reading-content-bottom-inner'>
                    <p>New life for a 1902 manual about color</p>
                    <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                    <img />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='subscribe-weekly-newsletter'>
            <div className='subscribe-weekly-newsletter-content'>
              <div className='subscribe-weekly-newsletter-title'>
                <div className='subscribe-weekly-newsletter-title-inner'>Subscribe to our weekly newsletter</div>
              </div>
              <div className='weekly-newsletter-content'>
                <div className='weekly-newsletter-content-inner'>
                  <p>A weekly roundup of the best and brightest projects on StartSmart, handpicked by our team.</p>
                  <div className='subscribe-input'>
                    <div className='subscribe-input-inner'><input type='text' placeholder='Enter email address' /></div>
                    <button className='subscribe-input-button'>Subscribe now</button>
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

export default Homepage;
