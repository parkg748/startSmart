import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';
import CategoriesHeader from './categories_header';
import FeaturedProjects from './featured_projects';
import ExploreProjects from './explore_projects';

class Publishing extends React.Component {
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
    let publishingJournalismId = [];
    let categoryName = [];
    let idPublishing = [];
    let idJournalism = [];
    if (Object.values(this.props.category).length > 0) {
      Object.values(this.props.category).forEach(el => {
        if (el.name === 'Publishing' || el.name === 'Journalism') {
          publishingJournalismId.push(el.id);
          categoryName.push(el.name);
          if (el.name === 'Publishing') { idPublishing.push(el.id); }
          else if (el.name === 'Journalism') { idJournalism.push(el.id); }
        }
      });
    }
    let publishingJournalismProjects = [];
    let projectPublishing = [];
    let projectJournalism = [];
    let projectChildrensBooks = [];
    let category = '';
    if (Object.values(this.props.projects).length > 0) {
      Object.values(this.props.projects).forEach(project => {
        if (publishingJournalismId.includes(project.categoryId)) {
          category = categoryName[publishingJournalismId.indexOf(project.categoryId)];
          if (category === 'Publishing' && project.subcategory === "Children's Books") {
            publishingJournalismProjects.push(project);
            projectChildrensBooks.push(project);
          } else if (category === 'Publishing') {
            publishingJournalismProjects.push(project);
            projectPublishing.push(project);
          } else if (category === 'Journalism') {
            publishingJournalismProjects.push(project);
            projectJournalism.push(project);
          }
        }
      });
    }
    let usersPublishingJournalismProjects = [];
    let publishingUsersProjects = [];
    let journalismUsersProjects = [];
    let childrensBooksUsersProjects = [];
    if (Object.values(this.props.user).length > 1) {
      usersPublishingJournalismProjects = publishingJournalismProjects.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      publishingUsersProjects = projectPublishing.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      journalismUsersProjects = projectJournalism.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
      childrensBooksUsersProjects = projectChildrensBooks.map(el => Object.values(this.props.user).find(user => user.id === el.userId));
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <CategoriesHeader category={'Publishing'} subcategories={['journalism', 'publishing']} subcategoriesUppercase={['Journalism', 'Publishing']} description={'Explore how writers and publishers are using StartSmart to bring new literature, periodicals, podcasts, and more to life.'}/>
          <FeaturedProjects mainHeart={this.state.mainHeart}
                            mainHeartFill={this.state.mainHeartFill}
                            projects={publishingJournalismProjects}
                            users={usersPublishingJournalismProjects}
                            firstHeart={this.state.firstHeart}
                            secondHeart={this.state.secondHeart}
                            thirdHeart={this.state.thirdHeart}
                            addToSavedProjectsMainHeart={() => this.addToSavedProjects(publishingJournalismProjects.length > 1 ? publishingJournalismProjects.slice(-1)[0].id : '', 'main-heart')}
                            addToSavedProjectsFirstHeart={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-2)[0].id : '', 'first-heart')}
                            addToSavedProjectsSecondHeart={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-3)[0].id : '', 'second-heart')}
                            addToSavedProjectsThirdHeart={() => this.addToSavedProjects(publishingJournalismProjects.length > 0 ? publishingJournalismProjects.slice(-4)[0].id : '', 'third-heart')}/>
          <ExploreProjects title={'CIVIC-MINDED PROJECTS'}
                           viewmore={'photography'}
                           project={projectPublishing.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={publishingUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'EXPLORE OTHER WORLDS'}
                           viewmore={'photography'}
                           project={projectJournalism.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={journalismUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='comics-illustrion-subscribe-newsletter'>
            <div className='comics-illustrion-subscribe-newsletter-inner'>
              <div className='comics-illustrion-subscribe-newsletter-inner-inner'>
                <h2>Subscribe to StartSmart Reads, StartSmart's new Publishing newsletter</h2>
                <p>Welcome to our library. Peruse the stacks with us.</p>
                <div className='comics-illustrion-subscribe-newsletter-inner-inner-inner'>
                  <button>Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
          <ExploreProjects title={'POPULAR IN PUBLISHING'}
                           viewmore={'photography'}
                           project={projectPublishing.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={publishingUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <ExploreProjects title={'GREAT BOOKS FOR KIDS'}
                           viewmore={'photography'}
                           project={projectChildrensBooks.slice(0, 4)}
                           firstProject={this.state.firstProject}
                           firstProjectFill={this.state.firstProjectFill}
                           user={childrensBooksUsersProjects}
                           addToSavedProjects={() => this.addToSavedProjects(artsProjects.length > 1 ? artsProjects.slice(-1)[0].id : '', 'main-heart')}/>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>GUIDES FROM THE CREATIVE INDEPENDENT</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/NTiRjjK.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>How to write a book proposal: a guide by Joanna Ebenstein</h1>
                    <span>The Creative Independent</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/8RLtiXy.gif'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>Fusty old scientific texts get a gorgeous, pricey makeover</h1>
                    <span>Wired</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/bKlxu5x.jpg'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>How a failed project made Elly Blue a better StartSmart creator</h1>
                    <span>StartSmart Magazine</span>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <div className='guides-creative-independent-column-image'>
                      <img src='https://i.imgur.com/6mKOtkL.png'/>
                      <div className='green-overlay'></div>
                    </div>
                    <h1>2018 has been a record-breaking year for journalism on StartSmart</h1>
                    <span>Nieman Lab</span>
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

export default Publishing;
