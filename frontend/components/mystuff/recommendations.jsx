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
                  projectsNum: 2,
                  categories: 'All Categories',
                  filter: '',
                  popularity: 'Magic',
                  earth: 'Earth',
                  filterByGoalAmt: 'Goal',
                  filterByPledgeAmt: 'Amount Pledged',
                  filterByRaised: '% Raised',
                  subcategories: '',
                  categoryBorder: '',
                  popularityBorder: '',
                  earthBorder: '',
                  categoryBox: 'location-none-display',
                  popularityBox: 'location-none-display',
                  earthBox: 'location-none-display',
                  filterBox: 'location-none-display',
                  categoryBoxWidth: 298,
                  categoryTitleWidth: 100,
                  categoryTitle: '',
                  subCategoryBox: 'location-none-display',
                  subcategoryBoxWidth: 50};
    this.clickSearchBar = this.clickSearchBar.bind(this);
    this.displayCategoryBox = this.displayCategoryBox.bind(this);
    this.displayPopularityBox = this.displayPopularityBox.bind(this);
    this.displayEarthBox = this.displayEarthBox.bind(this);
    this.displayFilterBox = this.displayFilterBox.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchAllUsers();
  }

  displayFilterBox(type) {
    if (type === 'open') {
      if (this.state.filterBox === 'location-none-display') {
        this.setState({filterBox: ''});
      } else {
        this.setState({filterBox: 'location-none-display'});
      }
    } else {
      this.setState({filter: type});
    }
  }

  displayCategoryBox(type) {
    if (type === 'display' && this.state.subcategories != '') {
      this.setState({categoryBorder: 'black-border', categoryBox: '', subCategoryBox: ''});
    } else if (type === 'display') {
      this.setState({categoryBorder: 'black-border', categoryBox: ''});
    } else if (type === 'Art' || type === 'Comics' || type === 'Crafts' || type === 'Dance' || type === 'Design' || type === 'Fashion' || type === 'Film & Video' || type === 'Food' || type === 'Games' || type === 'Journalism' || type === 'Music' || type === 'Photography' || type === 'Publishing' || type === 'Technology' || type === 'Theater') {
      this.setState({subcategories: `All of ${type}`, categories: type, categoryBoxWidth: 598, subCategoryBox: '', categoryTitleWidth: 43.95, categoryTitle: type.toUpperCase(), subcategoryBoxWidth: 25});
    } else if (type === 'hide') {
      this.setState({subcategories: '', categories: 'All Categories', categoryBoxWidth: 298, categoryTitleWidth: 100, subcategoryBoxWidth: 50, categoryTitle: '', categoryBorder: '', categoryBox: 'location-none-display', subCategoryBox: 'location-none-display'});
    } else if (type === 'hide-subcategory') {
      this.setState({subcategories: `All of ${this.state.categories}`, categoryBorder: '', categoryBox: 'location-none-display', subCategoryBox: 'location-none-display'});
    } else {
      this.setState({subcategories: type, categoryBox: 'location-none-display', subCategoryBox: 'location-none-display', categoryBorder: ''});
    }
  }

  displayPopularityBox(type) {
    if (type === 'display') {
      this.setState({popularityBorder: 'black-border', popularityBox: ''});
    } else if (type === 'Magic' || type === 'Popularity' || type === 'Newest' || type === 'End Date' || type === 'Most Funded' || type === 'Most Backed' || type === 'Newest') {
      this.setState({popularity: type, popularityBox: 'location-none-display', popularityBorder: ''});
    }
  }

  displayEarthBox(type) {
    if (type === 'display') {
      this.setState({earthBorder: 'black-border', earthBox: ''});
    } else {
      this.setState({earth: type, earthBox: 'location-none-display', earthBorder: ''});
    }
  }

  update(type) {
    return (e) => {
      if (type === 'goal') {
        if (e.target.value === 'less $1,000 goal') { this.setState({filterByGoalAmt: 'less $1,000 goal'}); }
        else if (e.target.value === '$1,000 to $10,000 goal') { this.setState({filterByGoalAmt: '$1,000 to $10,000 goal'}); }
        else if (e.target.value === '$10,000 to $100,000 goal') { this.setState({filterByGoalAmt: '$10,000 to $100,000 goal'}); }
        else if (e.target.value === '$100,000 to $1,000,000 goal') { this.setState({filterByGoalAmt: '$100,000 to $1,000,000 goal'}); }
        else if (e.target.value === 'greater $1,000,000 goal') { this.setState({filterByGoalAmt: 'greater $1,000,000 goal'}); }
      } else if (type === 'pledge') {
        if (e.target.value === 'less $1,000 pledged') { this.setState({filterByPledgeAmt: 'less $1,000 pledged'}); }
        else if (e.target.value === '$1,000 to $10,000 pledged') { this.setState({filterByPledgeAmt: '$1,000 to $10,000 pledged'}); }
        else if (e.target.value === '$10,000 to $100,000 pledged') { this.setState({filterByPledgeAmt: '$10,000 to $100,000 pledged'}); }
        else if (e.target.value === '$100,000 to $1,000,000 pledged') { this.setState({filterByPledgeAmt: '$100,000 to $1,000,000 pledged'}); }
        else if (e.target.value === 'greater $1,000,000 pledged') { this.setState({filterByPledgeAmt: 'greater $1,000,000 pledged'}); }
      } else if (type === 'raise') {
        if (e.target.value === 'less 75% raised') { this.setState({filterByRaised: 'less 75% raised'}); }
        else if (e.target.value === '75% to 100% raised') { this.setState({filterByRaised: '75% to 100% raised'}); }
        else if (e.target.value === 'greater 100% raised') { this.setState({filterByRaised: 'greater 100% raised'}); }
      }
    }
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

  addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    if (this.props.projects === undefined || this.props.projects === null) return null;
    if (this.props.categories === undefined || this.props.categories === null) return null;
    if (this.props.users === undefined || this.props.users === null) return null;
    if (this.props.user === null || this.props.session.session === null) return <Redirect to='/login' />;
    let allUsers = Object.values(this.props.users);
    let categories = Object.values(this.props.categories);
    let allProjects = Object.values(this.props.projects);
    let profile = undefined;
    let navbarWidth = '';
    let currentProfileIcon = getState().session.id === null || getState().session.session === null ? '' : allUsers.filter(el => el.id === getState().session.id)[0].profileUrl;
    if (getState().session.id != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={currentProfileIcon === '' ? 'https://i.imgur.com/jyZdRza.png' : currentProfileIcon} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (allUsers[0] != null) {
      if (allUsers[0].projects != null) {
        allUsers[0].projects.forEach(project => {
          if (project.user_id === getState().session.id.id) {
            currentUserProjects.push(project);
          };
        });
      }
    }
    var projectRowBox = [];
    if (allProjects.length > 1 && allUsers.length > 2) {
      var projects = allProjects;
      let category = '';
      if (this.state.categories != 'All Categories' && this.state.subcategories === '' || this.state.subcategories.includes('All of')) {
        if (this.state.categories === 'Film & Video') {
          category = categories.filter(el => el.name === 'Film')[0].id;
        } else {
          category = categories.filter(el => el.name === this.state.categories)[0].id;
        }
        projects = projects.filter(el => el.categoryId === category);
      } else if (this.state.categories != 'All Categories' && this.state.subcategories != '') {
        if (this.state.categories === 'Film & Video') {
          category = categories.filter(el => el.name === 'Film')[0].id;
        } else {
          category = categories.filter(el => el.name === this.state.categories)[0].id;
        }
        projects = projects.filter(el => el.categoryId === category && el.subcategory === this.state.subcategories);
      }
      if (this.state.filterByGoalAmt === 'less $1,000 goal') { projects = projects.filter(el => el.fundingGoal < 1000); }
      else if (this.state.filterByGoalAmt === '$1,000 to $10,000 goal') { projects = projects.filter(el => el.fundingGoal >= 1000 && el.fundingGoal < 10000); }
      else if (this.state.filterByGoalAmt === '$10,000 to $100,000 goal') { projects = projects.filter(el => el.fundingGoal >= 10000 && el.fundingGoal < 100000); }
      else if (this.state.filterByGoalAmt === '$100,000 to $1,000,000 goal') { projects = projects.filter(el => el.fundingGoal >= 100000 && el.fundingGoal < 1000000); }
      else if (this.state.filterByGoalAmt === 'greater $1,000,000 goal') { projects = projects.filter(el => el.fundingGoal >= 1000000); }
      if (this.state.filterByPledgeAmt === 'less $1,000 pledged') { projects = projects.filter(el => el.pledgeAmt < 1000); }
      else if (this.state.filterByPledgeAmt === '$1,000 to $10,000 pledged') { projects = projects.filter(el => el.pledgeAmt >= 1000 && el.pledgeAmt < 10000); }
      else if (this.state.filterByPledgeAmt === '$10,000 to $100,000 pledged') { projects = projects.filter(el => el.pledgeAmt >= 10000 && el.pledgeAmt < 100000); }
      else if (this.state.filterByPledgeAmt === '$100,000 to $1,000,000 pledged') { projects = projects.filter(el => el.pledgeAmt >= 100000 && el.pledgeAmt < 1000000); }
      else if (this.state.filterByPledgeAmt === 'greater $1,000,000 pledged') { projects = projects.filter(el => el.pledgeAmt >= 1000000); }
      if (this.state.filterByRaised === 'less 75% raised') { projects = projects.filter(el => (Math.floor(el.pledgeAmt / el.fundingGoal) * 100) < 75); }
      else if (this.state.filterByRaised === '75% to 100% raised') { projects = projects.filter(el => (Math.floor(el.pledgeAmt / el.fundingGoal) * 100) >= 75 && (Math.floor(el.pledgeAmt / el.fundingGoal) * 100) < 100); }
      else if (this.state.filterByRaised === 'greater 100% raised') { projects = projects.filter(el => (Math.floor(el.pledgeAmt / el.fundingGoal) * 100) >= 100); }
      var users = projects.map(el => allUsers.find(user => user.id === el.userId));
      for (let i = projects.length - 2; i > (projects.length - (this.state.projectsNum * 3) - 2); i -= 3) {
        projectRowBox.push(<div className='first-three-row'>
        {i > -1 ? <div className='recommendations-category-one-left'>
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
                <div className='recommendations-category-one-content-author'>by <h2><Link to={`/profile/${users[i].id}`}>{users[i] === undefined ? '' : users[i].name}</Link></h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar-gray'>
                  <div style={{width: `${projects[i].fundingGoal === null ? 0 : projects[i].pledgeAmt > 100 ? 100 : Math.floor((projects[i].pledgeAmt / projects[i].fundingGoal) * 100)}%`}} className='recommendations-category-one-content-bar'></div>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>${this.addCommasToNumber(projects[i].fundingGoal)} pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i] === undefined ? '' : projects[i].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i] === undefined ? '' : projects[i].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i] === undefined ? '' : projects[i].city}, {projects[i] === undefined ? '' : projects[i].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div> : ''}
        {i - 1 > -1 ? <div className='recommendations-category-one'>
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
                <div className='recommendations-category-one-content-author'>by <h2><Link to={`/profile/${users[i - 1].id}`}>{users[i - 1] === undefined ? '' : users[i - 1].name}</Link></h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar-gray'>
                  <div style={{width: `${projects[i - 1].fundingGoal === null ? 0 : projects[i - 1].pledgeAmt > 100 ? 100 : Math.floor((projects[i - 1].pledgeAmt / projects[i - 1].fundingGoal) * 100)}%`}} className='recommendations-category-one-content-bar'></div>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>${this.addCommasToNumber(projects[i - 1].fundingGoal)} pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i - 1] === undefined ? '' : projects[i - 1].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i - 1] === undefined ? '' : projects[i - 1].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i - 1] === undefined ? '' : projects[i - 1].city}, {projects[i - 1] === undefined ? '' : projects[i - 1].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div> : ''}
        {i - 2 > -1 ? <div className='recommendations-category-one-right'>
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
                <div className='recommendations-category-one-content-author'>by <h2><Link to={`/profile/${users[i - 2].id}`}>{users[i - 2] === undefined ? '' : users[i - 2].name}</Link></h2></div>
              </div>
              <div className='recommendations-category-one-content-bottom'>
                <div className='recommendations-category-one-content-bar-gray'>
                  <div style={{width: `${projects[i - 2].fundingGoal === null ? 0 : projects[i - 2].pledgeAmt > 100 ? 100 : Math.floor((projects[i - 2].pledgeAmt / projects[i - 2].fundingGoal) * 100)}%`}} className='recommendations-category-one-content-bar'></div>
                </div>
                <div className='recommendations-category-funding-info'>
                  <h1>${this.addCommasToNumber(projects[i - 1].fundingGoal)} pledged</h1>
                  <p>1,129% funded</p>
                  <p>{projects[i - 2] === undefined ? '' : projects[i - 2].duration} days to go</p>
                  <div className='recommendations-category-bottom-link'>{projects[i - 2] === undefined ? '' : projects[i - 2].subcategory}</div>
                  <div className='recommendations-category-bottom-link'><i className="location-category-recommendations fas fa-map-marker-alt"></i> {projects[i - 2] === undefined ? '' : projects[i - 2].city}, {projects[i - 2] === undefined ? '' : projects[i - 2].state}</div>
                </div>
              </div>
            </div>
          </div>
        </div> : ''}
      </div>);
      }
    }
    const artFirstSubcategories = ['Ceramics', 'Conceptual Art', 'Digital Art', 'Illustration', 'Installations', 'Mixed Media'];
    const artSecondSubcategories = ['Painting', 'Performance Art', 'Public Art', 'Sculpture', 'Textiles', 'Video Art'];
    const comicsFirstSubcategories = ['Anthologies', 'Comic Books'];
    const comicsSecondSubcategories = ['Events', 'Graphic Novels', 'Webcomics'];
    const craftsFirstSubcategories = ['Candles', 'Crochet', 'DIY', 'Embroidery', 'Glass', 'Knitting'];
    const craftsSecondSubcategories = ['Pottery', 'Printing', 'Quilts', 'Stationery', 'Taxidermy', 'Weaving', 'Woodworking'];
    const danceFirstSubcategories = ['Performances', 'Residencies'];
    const danceSecondSubcategories = ['Spaces', 'Workshops'];
    const designFirstSubcategories = ['Architecture', 'Civic Design', 'Graphic Design'];
    const designSecondSubcategories = ['Interactive Design', 'Product Design', 'Typography'];
    const fashionFirstSubcategories = ['Accessories', 'Apparel', 'Childrenswear', 'Couture'];
    const fashionSecondSubcategories = ['Footwear', 'Jewelry', 'Pet Fashion', 'Ready-to-wear'];
    const filmFirstSubcategories = ['Action', 'Animation', 'Comedy', 'Documentary', 'Drama', 'Experimental', 'Family', 'Fantasy', 'Festivals'];
    const filmSecondSubcategories = ['Horror', 'Movie Theaters', 'Music Videos', 'Narrative Film', 'Romance', 'Science Fiction', 'Shorts', 'Television', 'Thrillers', 'Webseries'];
    const foodFirstSubcategories = ['Bacon', 'Community Gardens', 'Cookbooks', 'Drinks', 'Events'];
    const foodSecondSubcategories = ['Farmer\'s Markets', 'Farms', 'Food Trucks', 'Restaurants', 'Small Batch', 'Spaces', 'Vegan'];
    const gamesFirstSubcategories = ['Gaming Hardware', 'Live Games', 'Mobile Games'];
    const gamesSecondSubcategories = ['Playing Cards', 'Puzzles', 'Tabletop Games', 'Video Games'];
    const journalismFirstSubcategories = ['Audio', 'Photo'];
    const journalismSecondSubcategories = ['Print', 'Video', 'Web'];
    const musicFirstSubcategories = ['Blues', 'Chiptune', 'Classical Music', 'Comedy', 'Country & Folk', 'Electronic Music', 'Faith', 'Hip-Hop'];
    const musicSecondSubcategories = ['Indie Rock', 'Jazz', 'Kids', 'Latin', 'Metal', 'Pop', 'Punk', 'R&B', 'Rock', 'World Music'];
    const photographyFirstSubcategories = ['Animals', 'Fine Art'];
    const photographySecondSubcategories = ['Nature', 'People', 'Photobooks', 'Places'];
    const publishingFirstSubcategories = ['Academic', 'Anthologies', 'Art Books', 'Calendars', 'Children\'s Books', 'Comedy', 'Fiction', 'Letterpress'];
    const publishingSecondSubcategories = ['Literary Journals', 'Nonfiction', 'Periodicals', 'Poetry', 'Radio & Podcasts', 'Translations', 'Young Adult', 'Zines', 'Literary Spaces'];
    const technologyFirstSubcategories = ['3D Printing', 'Apps', 'Camera Equipment', 'DIY Electronics', 'Fabrication Tools', 'Flight'];
    const technologySecondSubcategories = ['Gadgets', 'Hardware', 'Makerspaces', 'Robots', 'Software', 'Sound', 'Space Exploration', 'Wearables', 'Web'];
    const theaterFirstSubcategories = ['Comedy', 'Experimental', 'Festivals'];
    const theaterSecondSubcategories = ['Immersive', 'Musical', 'Plays', 'Spaces'];
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={allUsers[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='recommendations-header'>
          <div className='recommendations-header-content-inner'>
            <div className='recommendations-header-content-inner-inner'>
              <div className='recommendations-header-inner-inner-inner'>
                <span>Show me</span>
                <div className='recommendations-second-box'>
                  <div onClick={() => this.displayCategoryBox('display')} className={`select-your-second-category ${this.state.categoryBorder}`}>{this.state.categories}</div>
                  <ul style={{width: `${this.state.categoryBoxWidth}px`}} className={`${this.state.categoryBox}`}>
                    <h5 style={{width: `${this.state.categoryTitleWidth}%`}}>ALL CATEGORIES</h5>
                    <h5 className={this.state.subCategoryBox} style={{width: `${this.state.categoryTitleWidth}%`}}>{this.state.categoryTitle}</h5>
                    <div style={{width: `${this.state.subcategoryBoxWidth}%`}} className={`${this.state.categoryBox} recommendations-second-box-category-list`}>
                      <li className={this.state.categories === 'All Categories' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('hide')}>All categories</li>
                      <li className={this.state.categories === 'Art' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Art')}>Art</li>
                      <li className={this.state.categories === 'Comics' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Comics')}>Comics</li>
                      <li className={this.state.categories === 'Crafts' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Crafts')}>Crafts</li>
                      <li className={this.state.categories === 'Dance' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Dance')}>Dance</li>
                      <li className={this.state.categories === 'Design' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Design')}>Design</li>
                      <li className={this.state.categories === 'Fashion' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Fashion')}>Fashion</li>
                      <li className={this.state.categories === 'Film & Video' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Film & Video')}>Film & Video</li>
                    </div>
                    <div style={{width: `${this.state.subcategoryBoxWidth}%`}} className={`${this.state.categoryBox} recommendations-second-box-category-list`}>
                      <li className={this.state.categories === 'Food' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Food')}>Food</li>
                      <li className={this.state.categories === 'Games' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Games')}>Games</li>
                      <li className={this.state.categories === 'Journalism' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Journalism')}>Journalism</li>
                      <li className={this.state.categories === 'Music' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Music')}>Music</li>
                      <li className={this.state.categories === 'Photography' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Photography')}>Photography</li>
                      <li className={this.state.categories === 'Publishing' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Publishing')}>Publishing</li>
                      <li className={this.state.categories === 'Technology' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Technology')}>Technology</li>
                      <li className={this.state.categories === 'Theater' ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('Theater')}>Theater</li>
                    </div>
                    <div style={{width: `${this.state.subcategoryBoxWidth}%`}} className={`${this.state.subCategoryBox} recommendations-second-box-category-list`}>
                      <li className={this.state.subcategories === `All of ${this.state.categories}` ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox('hide-subcategory')}>All of {this.state.categories}</li>
                      {this.state.categories === 'Art' ? artFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Comics' ? comicsFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Crafts' ? craftsFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Dance' ? danceFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Design' ? designFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Fashion' ? fashionFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Film & Video' ? filmFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Food' ? foodFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Games' ? gamesFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Journalism' ? journalismFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Music' ? musicFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Photography' ? photographyFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Publishing' ? publishingFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Technology' ? technologyFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Theater' ? theaterFirstSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                    </div>
                    <div style={{width: `${this.state.subcategoryBoxWidth}%`}} className={`${this.state.subCategoryBox} recommendations-second-box-category-list`}>
                      {this.state.categories === 'Art' ? artSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Comics' ? comicsSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Crafts' ? craftsSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Dance' ? danceSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Design' ? designSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Fashion' ? fashionSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Film & Video' ? filmSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Food' ? foodSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Games' ? gamesSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Journalism' ? journalismSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Music' ? musicSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Photography' ? photographySecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Publishing' ? publishingSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Technology' ? technologySecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                      {this.state.categories === 'Theater' ? theaterSecondSubcategories.map(el => <li className={this.state.subcategories === el ? 'green-font-color' : ''} onClick={() => this.displayCategoryBox(el)}>{el}</li>) : ''}
                    </div>
                  </ul>
                  <i className="all-categories-caret fas fa-caret-down"></i>
                </div>
                <span>projects on</span>
                <div className='recommendations-third-box'>
                  <div onClick={() => this.displayEarthBox('display')} className={`select-your-third-category ${this.state.earthBorder}`}>{this.state.earth}</div>
                  <ul className={`${this.state.earthBox}`}>
                    <div className='earth-search-bar'>
                      <div className='earth-search-bar-box'>
                        <input type='text' placeholder='Search by city, state, country, ...'/>
                        <div className='earth-search-bar-icon'>
                          <i className="fas fa-search"></i>
                        </div>
                      </div>
                    </div>
                    <h5>BROADER LOCATIONS</h5>
                    <h5>NEARBY LOCATIONS</h5>
                    <div className='recommendations-second-box-category-list'>
                      <li className={this.state.earth === 'Earth' ? 'green-font-color' : ''} onClick={() => this.displayEarthBox('Earth')}>Earth</li>
                      <li>United States</li>
                      <li>California, US</li>
                      <li>Los Angeles, CA</li>
                    </div>
                    <div className='recommendations-second-box-category-list blue-font'>
                      <li>Los Angeles, CA</li>
                      <li>San Francisco, CA</li>
                      <li>San Diego, CA</li>
                      <li>Oakland, CA</li>
                      <li>San Jose, CA</li>
                    </div>
                  </ul>
                  <i className="earth-caret fas fa-caret-down"></i>
                </div>
                <span className='that-are'>that are</span>
                <div className='recommendations-fourth-box'>
                  <i className="recommendations-fourth-close fas fa-times"></i>
                  <span>Projects We Love</span>
                </div>
                <span className='sorted-by'>sorted by</span>
                <div className='recommendations-eighth-box'>
                  <div className={`select-your-eighth-category ${this.state.popularityBorder}`} onClick={() => this.displayPopularityBox('display')}>{this.state.popularity}</div>
                  <ul className={`${this.state.popularityBox}`}>
                    <li className={this.state.popularity === 'Magic' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('Magic')}>Magic</li>
                    <li className={this.state.popularity === 'Popularity' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('Popularity')}>Popularity</li>
                    <li className={this.state.popularity === 'Newest' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('Newest')}>Newest</li>
                    <li className={this.state.popularity === 'End Date' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('End Date')}>End Date</li>
                    <li className={this.state.popularity === 'Most Funded' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('Most Funded')}>Most Funded</li>
                    <li className={this.state.popularity === 'Most Backed' ? 'green-font-color' : ''} onClick={() => this.displayPopularityBox('Most Backed')}>Most Backed</li>
                  </ul>
                  <i className="magic-caret fas fa-caret-down"></i>
                </div>
              </div>
              <div className='filter-section'>
                <a onClick={() => this.displayFilterBox('open')}>More filters</a>
                <ul className={`${this.state.filterBox}`}>
                  <div className='earth-search-bar'>
                    <div className='earth-search-bar-box'>
                      <input type='text' placeholder='3D, Food Trucks, Dogs, ...'/>
                      <div className='filter-search-bar-icon'>
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                  <div className='recommendations-second-box-category-list'>
                    <li className={this.state.filter === 'Recommended for you' ? 'green-font-color' : ''} onClick={() => this.displayFilterBox('Recommended for you')}>Recommended for you</li>
                    <li className={this.state.filter === 'Projects We Love' ? 'green-font-color' : ''} onClick={() => this.displayFilterBox('Projects We Love')}>Projects We Love</li>
                    <li className={this.state.filter === 'Saved projects' ? 'green-font-color' : ''} onClick={() => this.displayFilterBox('Saved projects')}>Saved projects</li>
                    <li className={this.state.filter === 'Following' ? 'green-font-color' : ''} onClick={() => this.displayFilterBox('Following')}>Following</li>
                    <li className={this.state.filter === 'Projects I\'ve backed' ? 'green-font-color' : ''} onClick={() => this.displayFilterBox('Projects I\'ve backed')}>Projects I've backed</li>
                  </div>
                  <div className='recommendations-second-box-category-list blue-font'>
                    <ul>
                      <select className='black-border'>
                        <option>All projects</option>
                        <option>Live projects</option>
                        <option>Successful projects</option>
                      </select>
                      <i className="all-projects-caret fas fa-caret-down"></i>
                      <select onChange={this.update('pledge')} value={this.state.filterByPledgeAmt}>
                        <option value='Amount Pledged'>Amount Pledged</option>
                        <option value='less $1,000 pledged'>&#60; $1,000 pledged</option>
                        <option value='$1,000 to $10,000 pledged'>$1,000 to $10,000 pledged</option>
                        <option value='$10,000 to $100,000 pledged'>$10,000 to $100,000 pledged</option>
                        <option value='$100,000 to $1,000,000 pledged'>$100,000 to $1,000,000 pledged</option>
                        <option value='greater $1,000,000 pledged'>&#62; $1,000,000 pledged</option>
                      </select>
                      <i className="amount-pledged-caret fas fa-caret-down"></i>
                      <select onChange={this.update('goal')} value={this.state.filterByGoalAmt}>
                        <option value='Goal'>Goal</option>
                        <option value='less $1,000 goal'>&#60; $1,000 goal</option>
                        <option value='$1,000 to $10,000 goal'>$1,000 to $10,000 goal</option>
                        <option value='$10,000 to $100,000 goal'>$10,000 to $100,000 goal</option>
                        <option value='$100,000 to $1,000,000 goal'>$100,000 to $1,000,000 goal</option>
                        <option value='greater $1,000,000 goal'>&#62; $1,000,000 goal</option>
                      </select>
                      <i className="goal-caret fas fa-caret-down"></i>
                      <select onChange={this.update('raise')} value={this.state.filterByRaised}>
                        <option value='% Raised'>% Raised</option>
                        <option value='less 75% raised'>&#60; 75% raised</option>
                        <option value='75% to 100% raised'>75% to 100% raised</option>
                        <option value='greater 100% raised'>&#62; 100% raised</option>
                      </select>
                      <i className="raised-caret fas fa-caret-down"></i>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {projects != undefined && projects.length != 0 ? <section className='recommendations-body'>
          <div className='recommendations-body-inner'>
            <section className='recommendations-body-inner-inner'>
              <div className='recommendations-body-inner-inner-inner-inner'>
                <div className='recommendations-body-one'>
                  <div className='recommendations-body-header'>
                    <div className='recommendations-body-header-one'>
                      <h3>Projects for you</h3>
                      <h5>
                        <a><div>See all {this.props.users != undefined ? allUsers.length : ''} live projects</div><i className={`${this.state.display} recommendations-body-arrow fas fa-long-arrow-alt-right`}></i></a>
                      </h5>
                    </div>
                  </div>
                  <div className='recommendations-body-two'>
                    <div className='recommendations-body-three'>
                      <div className='recommendations-body-four'>
                        <Link to={`/users/${allUsers.length > 2 ? users[users.length - 1].id : ''}/projects/${projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].id : ''}/front`}>
                          <img src={projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].imageUrl : ''} />
                        </Link>
                        <div className='recommendations-body-six'>
                          <div className='recommendations-body-seven'>
                            <div className='recommendations-body-seven-header'>
                              <Link className='recommendations-body-seven-header-inner' to={`/users/${allUsers.length > 2 ? users[users.length - 1].id : ''}/projects/${projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].id : ''}/front`}>{projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].title : null}</Link>
                            </div>
                            <div className='recommendations-body-seven-author'>
                              <img src='https://ksr-ugc.imgix.net/assets/006/347/287/83a01d5959e63f24f2ad447b4a0797f9_original.png?ixlib=rb-1.1.0&w=20&h=20&fit=crop&v=1503090035&auto=format&frame=1&q=92&s=d66f0ce35895ac6e08f4f2592cdbc9b8'/>
                              by <Link to={`/profile/${allUsers.length > 2 ? users[users.length - 1].id : ''}`}><span>{allUsers.length > 2 ? users[users.length - 1].name : ''}</span></Link>
                            </div>
                            <div className='recommendations-body-seven-description'>{projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].description : ''}</div>
                            <div className='recommendations-body-seven-category'>
                              <a><i className="fab fa-stripe-s"></i>Project We Love</a>
                              <a><i className="far fa-square"></i>{projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].city : ''}, {projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].state : ''}</a>
                              <a className='product-design-category'><i className="far fa-square"></i>{projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].subcategory : ''}</a>
                            </div>
                          </div>
                        </div>
                        <div className='recommendations-body-eight'>
                          <div className='recommendations-body-gray-bar'>
                            <div style={{width: `${projects[projects.length - 1].fundingGoal === null ? 0 : projects[projects.length - 1].pledgeAmt > 100 ? 100 : Math.floor((projects[projects.length - 1].pledgeAmt / projects[projects.length - 1].fundingGoal) * 100)}%`}} className='recommendations-body-green-bar'></div>
                          </div>
                          <ul>
                            <li><strong>2512%</strong><span>funded</span></li>
                            <li><strong>${this.addCommasToNumber(projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].fundingGoal : '')}</strong><span>pledged</span></li>
                            <li><strong>8,016</strong><span>backers</span></li>
                            <li><strong>{projects != undefined && allProjects.length > 1 ? projects[projects.length - 1].duration : ''}</strong><span>days to go</span></li>
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
        </section> : ''}
      </div>
    );
  }
}

export default Recommendations;
