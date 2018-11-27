import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

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
    this.props.fetchCategories();
    this.props.fetchAllUsers();
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
    // if (this.props.user === null || this.props.user === undefined) return null;
    // if (this.props.user.currentUser === null) return <Redirect to='/login' />;
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
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = monthString[currentDate.getMonth()];
    let day = currentDate.getDate() + 1;
    let currentCategoryId = [];
    Object.values(this.props.category).forEach(category => {
      this.state.currentCategory.split(' & ').forEach(categ => {
        if ((category.name === categ) ||
        (category.name === 'Art' && categ === 'Arts') ||
        (category.name === 'Technology' && categ === 'Tech') ||
        (category.name === 'Comics' && categ === 'Illustration') ||
        (category.name === 'Crafts' && categ === 'Craft')) {
          currentCategoryId.push(category.id);
        }
      });
    });
    let currentPictureCategory = [];
    Object.values(getState().entities.project).forEach(project => {
      if (currentCategoryId.length > 1) {
        if (project.categoryId === currentCategoryId[0] || project.categoryId === currentCategoryId[1]) {
          currentPictureCategory.push(project);
        }
      } else {
        if (project.categoryId === currentCategoryId[0]) {
          currentPictureCategory.push(project);
        }
      }
    });
    let projectsWeLove = [];
    let whatWereReading = [];
    while (projectsWeLove.length != 4) {
      projectsWeLove.push(Object.values(getState().entities.project)[Math.floor(Math.random() * Math.floor(Object.values(getState().entities.project).length))]);
    }
    while (whatWereReading.length != 6) {
      whatWereReading.push(Object.values(getState().entities.project)[Math.floor(Math.random() * Math.floor(Object.values(getState().entities.project).length))]);
    }
    let firstProjectPicture = '';
    if (Object.values(getState().entities.users).length > 2 && currentPictureCategory.length != 0) {
      firstProjectPicture = Object.values(getState().entities.users).filter(el => el.id === currentPictureCategory.slice(-1)[0].userId)[0].name;
    } else {
      firstProjectPicture = Object.values(getState().entities.users)[0].name;
    }
    // if (Object.values(this.props.user).length > 1) {
    //   let firstProjectUser = this.props.user.filter(user => user.id === currentPictureCategory[0].userId)[0].name;
    // }
    let currentCategory = (<div className='category-contents-inner'>
      <div className='category-contents-left'>
        <div className='category-contents-left-title'>
          FEATURED PROJECT
        </div>
        <div className='category-contents-left-body'>
          <i className="far fa-heart"></i>
          <img src={currentPictureCategory.length === 0 ? '' : currentPictureCategory.slice(-1)[0].imageUrl}/>
          <div className={`remind-me ${this.state.displayNone}`}>Remind Me</div>
          <div className='category-contents-left-description'>
            <p>
              <span>{currentPictureCategory.length === 0 ? '' : currentPictureCategory.slice(-1)[0].title}</span>
              <span className='category-contents-author'>by {currentPictureCategory.length === 0 ? '' : firstProjectPicture}</span>
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
              <img src={currentPictureCategory.length > 1 ? currentPictureCategory.slice(-2)[0].imageUrl : ''}/>
              <div className='category-contents-right-body-content'>
                <span>{currentPictureCategory.length > 1 ? currentPictureCategory.slice(-2)[0].title : ''}</span>
                <p>16% funded</p>
              </div>
            </li>
            <li>
              <i className="category-contents-right-heart far fa-heart"></i>
              <img src={currentPictureCategory.length > 2 ? currentPictureCategory.slice(-3)[0].imageUrl : ''}/>
              <div className='category-contents-right-body-content'>
                <span>{currentPictureCategory.length > 2 ? currentPictureCategory.slice(-3)[0].title : ''}</span>
                <p>16% funded</p>
              </div>
            </li>
            <li>
              <i className="category-contents-right-heart far fa-heart"></i>
              <img src={currentPictureCategory.length > 3 ? currentPictureCategory.slice(-4)[0].imageUrl : ''}/>
              <div className='category-contents-right-body-content'>
                <span>{currentPictureCategory.length > 3 ? currentPictureCategory.slice(-4)[0].title : ''}</span>
                <p>16% funded</p>
              </div>
            </li>
            <li>
              <i className="category-contents-right-heart far fa-heart"></i>
              <img src={currentPictureCategory.length > 4 ? currentPictureCategory.slice(-5)[0].imageUrl : ''}/>
              <div className='category-contents-right-body-content'>
                <span>{currentPictureCategory.length > 4 ? currentPictureCategory.slice(-5)[0].title : ''}</span>
                <p>16% funded</p>
              </div>
            </li>
          </ul>
          <button className='category-contents-right-view-all'>VIEW ALL</button>
        </div>
      </div>
    </div>);
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
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
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
                  <div className='homepage-stats-statistic'>{Object.values(this.props.projects).filter(el => el.fundingGoal != null).length}</div>
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
              {currentCategory}
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
                  <img src={projectsWeLove[0] != undefined ? projectsWeLove[0].imageUrl : ''}/>
                  <p>{projectsWeLove[0] != undefined ? projectsWeLove[0].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <img src={projectsWeLove[1] != undefined ? projectsWeLove[1].imageUrl : ''}/>
                  <p>{projectsWeLove[1] != undefined ? projectsWeLove[1].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-left'>
                <div className='projects-we-love-body-inner'>
                  <img src={projectsWeLove[2] != undefined ? projectsWeLove[2].imageUrl : ''}/>
                  <p>{projectsWeLove[2] != undefined ? projectsWeLove[2].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <img src={projectsWeLove[3] != undefined ? projectsWeLove[3].imageUrl : ''}/>
                  <p>{projectsWeLove[3] != undefined ? projectsWeLove[3].description : ''}</p>
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
              <div className='what-were-reading-title'>What we're reading</div>
              <div className='what-were-reading-content-inner'>
                <div className='what-were-reading-body'>
                  <img src={whatWereReading[0] != undefined ? whatWereReading[0].imageUrl : ''}/>
                  <div className='what-were-reading-body-content'>
                    <p>{whatWereReading[0] != undefined ? whatWereReading[0].description : ''}</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div className='what-were-reading-body'>
                  <img src={whatWereReading[1] != undefined ? whatWereReading[1].imageUrl : ''}/>
                  <div className='what-were-reading-body-content'>
                    <p>{whatWereReading[1] != undefined ? whatWereReading[1].description : ''}</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div className='what-were-reading-body'>
                  <img src={whatWereReading[2] != undefined ? whatWereReading[2].imageUrl : ''}/>
                  <div className='what-were-reading-body-content'>
                    <p>{whatWereReading[2] != undefined ? whatWereReading[2].description : ''}</p>
                    <div className='read-on-startsmart'>
                      READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='what-were-reading-content-bottom'>
                <div className='what-were-reading-content-bottom-section'>
                  <div className='what-were-reading-content-bottom-inner'>
                    <p>{whatWereReading[3] != undefined ? whatWereReading[3].description : ''}</p>
                    <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                    <img src={whatWereReading[3] != undefined ? whatWereReading[3].imageUrl : ''}/>
                  </div>
                </div>
                <div className='what-were-reading-content-bottom-section'>
                  <div className='what-were-reading-content-bottom-inner'>
                    <p>{whatWereReading[4] != undefined ? whatWereReading[4].description : ''}</p>
                    <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                    <img src={whatWereReading[4] != undefined ? whatWereReading[4].imageUrl : ''}/>
                  </div>
                </div>
                <div className='what-were-reading-content-bottom-section'>
                  <div className='what-were-reading-content-bottom-inner'>
                    <p>{whatWereReading[5] != undefined ? whatWereReading[5].description : ''}</p>
                    <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                    <img src={whatWereReading[5] != undefined ? whatWereReading[5].imageUrl : ''}/>
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
