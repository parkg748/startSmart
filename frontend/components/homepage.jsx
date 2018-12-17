import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';
import MyStuffNav from './mystuff/mystuff_nav';
import SearchBar from './search_bar';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  displayNone: 'error-email-msg',
                  newNoteworthySection: 'navbar-black',
                  popularSection: '',
                  currentCategory: 'Film',
                  filmBlack: 'navbar-black',
                  artsBlack: '',
                  designBlack: '',
                  comicsBlack: '',
                  gamesBlack: '',
                  foodBlack: '',
                  musicBlack: '',
                  publishingBlack: '',
                  searchBar: 'search-bar-close',
                  firstHeart: 'category-contents-right-heart-id-first',
                  firstHeartFill: 'far',
                  secondHeart: 'category-contents-right-heart far',
                  thirdHeart: 'category-contents-right-heart far',
                  fourthHeart: 'category-contents-right-heart far',
                  fifthHeart: 'category-contents-right-heart far'};
    this.clickHandler = this.clickHandler.bind(this);
    // this.changeDisplay = this.changeDisplay.bind(this);
    this.clickHandlerSection = this.clickHandlerSection.bind(this);
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

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  clickHandlerSection(section) {
    if (section === 'new-noteworthy') {
      this.setState({newNoteworthySection: 'navbar-black', popularSection: ''});
    } else if (section === 'popular') {
      this.setState({newNoteworthySection: '', popularSection: 'navbar-black'});
    }
  }

  addToSavedProjects(idx, heart) {
    if (idx === '') return;
    let savedProjects = getState().entities.users.filter(el => el.id === getState().session.id)[0].savedProjects;
    savedProjects.push(idx);
    if (heart === 'first-heart' && this.state.firstHeart === 'category-contents-right-heart-id-first') {
      this.setState({firstHeart: 'category-contents-right-heart-id-first-red', firstHeartFill: 'fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'second-heart' && this.state.secondHeart === 'category-contents-right-heart far') {
      this.setState({secondHeart: 'category-contents-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'third-heart' && this.state.thirdHeart === 'category-contents-right-heart far') {
      this.setState({thirdHeart: 'category-contents-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'fourth-heart' && this.state.fourthHeart === 'category-contents-right-heart far') {
      this.setState({fourthHeart: 'category-contents-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if (heart === 'fifth-heart' && this.state.fifthHeart === 'category-contents-right-heart far') {
      this.setState({fifthHeart: 'category-contents-right-heart-red fas'}).then(() => this.props.updateUser({id: getState().session.id, saved_projects: savedProjects}));
    } else if ((this.state.firstHeart === 'category-contents-right-heart-id-first-red') ||
               (this.state.secondHeart === 'category-contents-right-heart-red fas') ||
               (this.state.thirdHeart === 'category-contents-right-heart-red fas') ||
               (this.state.fourthHeart === 'category-contents-right-heart-red fas') ||
               (this.state.fifthHeart === 'category-contents-right-heart-red fas')) {
      this.removeFromSavedProjects(idx, heart);
    }
  }

  removeFromSavedProjects(idx, heart) {
    let savedProjects = getState().entities.users.filter(el => el.id === getState().session.id)[0].savedProjects;
    savedProjects = savedProjects.filter(el => el != idx);
    if (heart === 'first-heart') {
      this.setState({firstHeart: 'category-contents-right-heart-id-first', firstHeartFill: 'far'});
    } else if (heart === 'second-heart') {
      this.setState({secondHeart: 'category-contents-right-heart far'});
    } else if (heart === 'third-heart') {
      this.setState({thirdHeart: 'category-contents-right-heart far'});
    } else if (heart === 'fourth-heart') {
      this.setState({fourthHeart: 'category-contents-right-heart far'});
    } else if (heart === 'fifth-heart') {
      this.setState({fifthHeart: 'category-contents-right-heart far'});
    }
    this.props.updateUser({id: getState().session.id, saved_projects: savedProjects});
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
    var firstCurrentPictureCategory = '';
    var secondCurrentPictureCategory = '';
    var thirdCurrentPictureCategory = '';
    var fourthCurrentPictureCategory = '';
    var fifthCurrentPictureCategory = '';
    currentPictureCategory.forEach((el, idx) => {
      if (currentPictureCategory.length != 0) {
        if (Object.values(getState().entities.users).length === 2) {
          if (idx === 0) {
            fifthCurrentPictureCategory = Object.values(getState().entities.users).id;
          } else if (idx === 1) {
            fourthCurrentPictureCategory = Object.values(getState().entities.users).id;
          } else if (idx === 2) {
            thirdCurrentPictureCategory = Object.values(getState().entities.users).id;
          } else if (idx === 3) {
            secondCurrentPictureCategory = Object.values(getState().entities.users).id;
          } else if (idx === 4) {
            firstCurrentPictureCategory = Object.values(getState().entities.users).id;
          }
        } else {
          if (Object.values(getState().entities.users).length === 1) {
            firstCurrentPictureCategory = '';
            secondCurrentPictureCategory = '';
            thirdCurrentPictureCategory = '';
            fourthCurrentPictureCategory = '';
            fifthCurrentPictureCategory = '';
          } else {
            if (idx === 0) {
              fifthCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-5)[0].userId)[0].id;
            } else if (idx === 1) {
              fourthCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-4)[0].userId)[0].id;
            } else if (idx === 2) {
              thirdCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-3)[0].userId)[0].id;
            } else if (idx === 3) {
              secondCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-2)[0].userId)[0].id;
            } else if (idx === 4) {
              firstCurrentPictureCategory = Object.values(getState().entities.users).filter(el => el.id == currentPictureCategory.slice(-1)[0].userId)[0].id;
            }
          }
        }
      } else {
        firstCurrentPictureCategory = '';
        secondCurrentPictureCategory = '';
        thirdCurrentPictureCategory = '';
        fourthCurrentPictureCategory = '';
        fifthCurrentPictureCategory = '';
      }
    });
    var firstProjectsWeLove = '';
    var secondProjectsWeLove = '';
    var thirdProjectsWeLove = '';
    var fourthProjectsWeLove = '';
    projectsWeLove.forEach((el, idx) => {
      if (projectsWeLove.length != 0) {
        if (Object.values(getState().entities.users).length === 2) {
          if (idx === 0) {
            fourthProjectsWeLove = Object.values(getState().entities.users).id;
          } else if (idx === 1) {
            thirdProjectsWeLove = Object.values(getState().entities.users).id;
          } else if (idx === 2) {
            secondProjectsWeLove = Object.values(getState().entities.users).id;
          } else if (idx === 3) {
            firstProjectsWeLove = Object.values(getState().entities.users).id;
          }
        } else {
          if (Object.values(getState().entities.users).length === 1) {
            firstProjectsWeLove = '';
            secondProjectsWeLove = '';
            thirdProjectsWeLove = '';
            fourthProjectsWeLove = '';
          } else {
            if (projectsWeLove[0] != undefined) {
              if (idx === 0) {
                fourthProjectsWeLove = Object.values(getState().entities.users).filter(el => el.id == projectsWeLove[3].userId)[0].id;
              } else if (idx === 1) {
                thirdProjectsWeLove = Object.values(getState().entities.users).filter(el => el.id == projectsWeLove[2].userId)[0].id;
              } else if (idx === 2) {
                secondProjectsWeLove = Object.values(getState().entities.users).filter(el => el.id == projectsWeLove[1].userId)[0].id;
              } else if (idx === 3) {
                firstProjectsWeLove = Object.values(getState().entities.users).filter(el => el.id == projectsWeLove[0].userId)[0].id
              }
            }
          }
        }
      } else {
        firstProjectsWeLove = '';
        secondProjectsWeLove = '';
        thirdProjectsWeLove = '';
        fourthProjectsWeLove = '';
      }
    });
    var firstWhatWereReading = '';
    var secondWhatWereReading = '';
    var thirdWhatWereReading = '';
    var fourthWhatWereReading = '';
    var fifthWhatWereReading = '';
    var sixthWhatWereReading = '';
    whatWereReading.forEach((el, idx) => {
      if (whatWereReading.length != 0) {
        if (Object.values(getState().entities.users).length === 2) {
          if (idx === 0) {
            sixthWhatWereReading = Object.values(getState().entities.users).id;
          } else if (idx === 1) {
            fifthWhatWereReading = Object.values(getState().entities.users).id;
          } else if (idx === 2) {
            fourthWhatWereReading = Object.values(getState().entities.users).id;
          } else if (idx === 3) {
            thirdWhatWereReading = Object.values(getState().entities.users).id;
          } else if (idx === 4) {
            secondWhatWereReading = Object.values(getState().entities.users).id;
          } else if (idx === 5) {
            firstWhatWereReading = Object.values(getState().entities.users).id;
          }
        } else {
          if (Object.values(getState().entities.users).length === 1) {
            firstWhatWereReading = '';
            secondWhatWereReading = '';
            thirdWhatWereReading = '';
            fourthWhatWereReading = '';
            fifthWhatWereReading = '';
            sixthWhatWereReading = '';
          } else {
            if (whatWereReading[0] != undefined) {
              if (idx === 0) {
                sixthWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[5].userId)[0].id
              } else if (idx === 1) {
                fifthWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[4].userId)[0].id;
              } else if (idx === 2) {
                fourthWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[3].userId)[0].id;
              } else if (idx === 3) {
                thirdWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[2].userId)[0].id;
              } else if (idx === 4) {
                secondWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[1].userId)[0].id;
              } else if (idx === 5) {
                firstWhatWereReading = Object.values(getState().entities.users).filter(el => el.id == whatWereReading[0].userId)[0].id
              }
            }
          }
        }
      } else {
        firstWhatWereReading = '';
        secondWhatWereReading = '';
        thirdWhatWereReading = '';
        fourthWhatWereReading = '';
        fifthWhatWereReading = '';
        sixthWhatWereReading = '';
      }
    });
    let currentCategory = (<div className='category-contents-inner'>
      <div className='category-contents-left'>
        <div className='category-contents-left-title'>
          FEATURED PROJECT
        </div>
        <Link to={`/users/${firstCurrentPictureCategory}/projects/${currentPictureCategory.length != 0 ? currentPictureCategory.slice(-1)[0].id : ''}/front`}>
          <div className='category-contents-left-body'>
            <div id={`${this.state.firstHeart}`} onClick={() => this.addToSavedProjects(currentPictureCategory.length > 1 ? currentPictureCategory.slice(-1)[0].id : '', 'first-heart')}>
              <i className={`${this.state.firstHeartFill} fa-heart`}></i>
            </div>
            <div id='category-contents-remind-me-first'>Remind Me</div>
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
        </Link>
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
              <div id="category-contents-right-heart-id" onClick={() => this.addToSavedProjects(currentPictureCategory.length > 1 ? currentPictureCategory.slice(-2)[0].id : '', 'second-heart')}><i className={`${this.state.secondHeart} fa-heart`}></i></div>
              {this.state.secondHeart === 'category-contents-right-heart far' ? <div id='category-contents-remind-me'>Remind Me</div> : <div id='category-contents-saved'>Saved</div>}
              <Link className='category-contents-right-body-inner' to={`/users/${secondCurrentPictureCategory}/projects/${currentPictureCategory.length != 0 ? currentPictureCategory.slice(-2)[0].id : ''}/front`}>
                <img src={currentPictureCategory.length > 1 ? currentPictureCategory.slice(-2)[0].imageUrl : ''}/>
                <div className='category-contents-right-body-content'>
                  <span>{currentPictureCategory.length > 1 ? currentPictureCategory.slice(-2)[0].title : ''}</span>
                  <p>16% funded</p>
                </div>
              </Link>
            </li>
            <li>
              <div id="category-contents-right-heart-id" onClick={() => this.addToSavedProjects(currentPictureCategory.length > 1 ? currentPictureCategory.slice(-3)[0].id : '', 'third-heart')}><i className={`${this.state.thirdHeart} fa-heart`}></i></div>
              {this.state.thirdHeart === 'category-contents-right-heart far' ? <div id='category-contents-remind-me'>Remind Me</div> : <div id='category-contents-saved'>Saved</div>}
              <Link className='category-contents-right-body-inner' to={`/users/${thirdCurrentPictureCategory}/projects/${currentPictureCategory.length != 0 ? currentPictureCategory.slice(-3)[0].id : ''}/front`}>
                <img src={currentPictureCategory.length > 2 ? currentPictureCategory.slice(-3)[0].imageUrl : ''}/>
                <div className='category-contents-right-body-content'>
                  <span>{currentPictureCategory.length > 2 ? currentPictureCategory.slice(-3)[0].title : ''}</span>
                  <p>16% funded</p>
                </div>
              </Link>
            </li>
            <li>
              <div id="category-contents-right-heart-id" onClick={() => this.addToSavedProjects(currentPictureCategory.length > 1 ? currentPictureCategory.slice(-4)[0].id : '', 'fourth-heart')}><i className={`${this.state.fourthHeart} fa-heart`}></i></div>
              {this.state.fourthHeart === 'category-contents-right-heart far' ? <div id='category-contents-remind-me'>Remind Me</div> : <div id='category-contents-saved'>Saved</div>}
              <Link className='category-contents-right-body-inner' to={`/users/${fourthCurrentPictureCategory}/projects/${currentPictureCategory.length != 0 ? currentPictureCategory.slice(-4)[0].id : ''}/front`}>
                <img src={currentPictureCategory.length > 3 ? currentPictureCategory.slice(-4)[0].imageUrl : ''}/>
                <div className='category-contents-right-body-content'>
                  <span>{currentPictureCategory.length > 3 ? currentPictureCategory.slice(-4)[0].title : ''}</span>
                  <p>16% funded</p>
                </div>
              </Link>
            </li>
            <li>
              <div id="category-contents-right-heart-id" onClick={() => this.addToSavedProjects(currentPictureCategory.length > 1 ? currentPictureCategory.slice(-5)[0].id : '', 'fifth-heart')}><i className={`${this.state.fifthHeart} fa-heart`}></i></div>
              {this.state.fifthHeart === 'category-contents-right-heart far' ? <div id='category-contents-remind-me'>Remind Me</div> : <div id='category-contents-saved'>Saved</div>}
              <Link className='category-contents-right-body-inner' to={`/users/${fifthCurrentPictureCategory}/projects/${currentPictureCategory.length != 0 ? currentPictureCategory.slice(-5)[0].id : ''}/front`}>
                <img src={currentPictureCategory.length > 4 ? currentPictureCategory.slice(-5)[0].imageUrl : ''}/>
                <div className='category-contents-right-body-content'>
                  <span>{currentPictureCategory.length > 4 ? currentPictureCategory.slice(-5)[0].title : ''}</span>
                  <p>16% funded</p>
                </div>
              </Link>
            </li>
          </ul>
          <button className='category-contents-right-view-all'>VIEW ALL</button>
        </div>
      </div>
    </div>);
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
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
                  <div className='homepage-stats-statistic'>{Object.values(this.props.projects).filter(el => el.pledgeAmt > 0).length}</div>
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
                  <Link to={`/users/${firstProjectsWeLove}/projects/${projectsWeLove[0] != undefined ? projectsWeLove[0].id : ''}/front`}>
                    <img src={projectsWeLove[0] != undefined ? projectsWeLove[0].imageUrl : ''}/>
                  </Link>
                  <p>{projectsWeLove[0] != undefined ? projectsWeLove[0].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <Link to={`/users/${secondProjectsWeLove}/projects/${projectsWeLove[0] != undefined ? projectsWeLove[1].id : ''}/front`}>
                    <img src={projectsWeLove[1] != undefined ? projectsWeLove[1].imageUrl : ''}/>
                  </Link>
                  <p>{projectsWeLove[1] != undefined ? projectsWeLove[1].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-left'>
                <div className='projects-we-love-body-inner'>
                  <Link to={`/users/${thirdProjectsWeLove}/projects/${projectsWeLove[0] != undefined ? projectsWeLove[2].id : ''}/front`}>
                    <img src={projectsWeLove[2] != undefined ? projectsWeLove[2].imageUrl : ''}/>
                  </Link>
                  <p>{projectsWeLove[2] != undefined ? projectsWeLove[2].description : ''}</p>
                  <span>92% funded</span>
                </div>
              </div>
              <div className='projects-we-love-body-right'>
                <div className='projects-we-love-body-inner'>
                  <Link to={`/users/${fourthProjectsWeLove}/projects/${projectsWeLove[0] != undefined ? projectsWeLove[3].id : ''}/front`}>
                    <img src={projectsWeLove[3] != undefined ? projectsWeLove[3].imageUrl : ''}/>
                  </Link>
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
                <Link to={`/users/${firstWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[0].id : ''}/front`}>
                  <div className='what-were-reading-body'>
                    <img src={whatWereReading[0] != undefined ? whatWereReading[0].imageUrl : ''}/>
                    <div className='what-were-reading-body-content'>
                      <p>{whatWereReading[0] != undefined ? whatWereReading[0].description : ''}</p>
                      <div className='read-on-startsmart'>
                        READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={`/users/${secondWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[1].id : ''}/front`}>
                  <div className='what-were-reading-body'>
                    <img src={whatWereReading[1] != undefined ? whatWereReading[1].imageUrl : ''}/>
                    <div className='what-were-reading-body-content'>
                      <p>{whatWereReading[1] != undefined ? whatWereReading[1].description : ''}</p>
                      <div className='read-on-startsmart'>
                        READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={`/users/${thirdWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[2].id : ''}/front`}>
                  <div className='what-were-reading-body'>
                    <img src={whatWereReading[2] != undefined ? whatWereReading[2].imageUrl : ''}/>
                    <div className='what-were-reading-body-content'>
                      <p>{whatWereReading[2] != undefined ? whatWereReading[2].description : ''}</p>
                      <div className='read-on-startsmart'>
                        READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='what-were-reading-content-bottom'>
                <div className='what-were-reading-content-bottom-section'>
                  <Link to={`/users/${fourthWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[3].id : ''}/front`}>
                    <div className='what-were-reading-content-bottom-inner'>
                      <p>{whatWereReading[3] != undefined ? whatWereReading[3].description : ''}</p>
                      <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                      <img src={whatWereReading[3] != undefined ? whatWereReading[3].imageUrl : ''}/>
                    </div>
                  </Link>
                </div>
                <div className='what-were-reading-content-bottom-section'>
                  <Link to={`/users/${fifthWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[4].id : ''}/front`}>
                    <div className='what-were-reading-content-bottom-inner'>
                      <p>{whatWereReading[4] != undefined ? whatWereReading[4].description : ''}</p>
                      <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                      <img src={whatWereReading[4] != undefined ? whatWereReading[4].imageUrl : ''}/>
                    </div>
                  </Link>
                </div>
                <div className='what-were-reading-content-bottom-section'>
                  <Link to={`/users/${sixthWhatWereReading}/projects/${whatWereReading[0] != undefined ? whatWereReading[5].id : ''}/front`}>
                    <div className='what-were-reading-content-bottom-inner'>
                      <p>{whatWereReading[5] != undefined ? whatWereReading[5].description : ''}</p>
                      <div className='read-on-start-smart'>READ ON STARTSMART <i className="what-were-reading-arrow fas fa-long-arrow-alt-right"></i></div>
                      <img src={whatWereReading[5] != undefined ? whatWereReading[5].imageUrl : ''}/>
                    </div>
                  </Link>
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
