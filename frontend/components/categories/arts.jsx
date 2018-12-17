import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from '../mystuff/mystuff_nav';
import SearchBar from '../search_bar';

class Arts extends React.Component {
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
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='categories-body'>
          <div className='categories-header'>
            <h3>Arts</h3>
            <p>Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art, dance, and performance.</p>
            <Link className='subcategories-links' to='/discover/categories/art'>Explore Art</Link>
            <Link className='subcategories-links' to='/discover/categories/dance'>Explore Dance</Link>
            <Link className='subcategories-links' to='/discover/categories/photography'>Explore Photography</Link>
            <Link className='subcategories-links' to='/discover/categories/theater'>Explore Theater</Link>
          </div>
          <div className='featured-project-recommended'>
            <div className='featured-project-recommended-inner'>
              <div className='featured-project-recommended-left'>
                <h3>FEATURED PROJECT</h3>
                <div className='featured-project-recommended-left-main-heart'></div>
                <img />
                <div className='featured-project-recommended-left-gray-bar'>
                  <div className='featured-project-recommended-left-green-bar'></div>
                </div>
                <h1>Funkisfabriken</h1>
                <p>A zero waste sculpture park, restaurant, far, and hotel--all in one.</p>
                <div className='featured-project-recommended-left-main-author'>by David Risley</div>
              </div>
              <div className='featured-project-recommended-right'>
                <h3>RECOMMENDED</h3>
                <ul>
                  <li>
                    <img />
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>"Tagebuch eines Streuners" by Marco Klahold (Photobook)</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>Marco Klahold</a></div>
                    </div>
                  </li>
                  <li>
                    <img />
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>"Tagebuch eines Streuners" by Marco Klahold (Photobook)</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>Marco Klahold</a></div>
                    </div>
                  </li>
                  <li>
                    <img />
                    <div className='feature-project-recommended-content'>
                      <Link className='feature-project-recommended-content-title' to='/'>"Tagebuch eines Streuners" by Marco Klahold (Photobook)</Link>
                      <span>137% funded</span>
                      <div className='feature-project-recommended-content-author'>By <a>Marco Klahold</a></div>
                    </div>
                  </li>
                </ul>
                <div className='feature-project-recommended-view-more'>View more projects</div>
              </div>
            </div>
          </div>
          <div className='guides-creative-independent'>
            <div className='guides-creative-independent-inner'>
              <div className='guides-creative-independent-inner-inner'>
                <h3>GUIDES FROM THE CREATIVE INDEPENDENT</h3>
                <div className='guides-creative-independent-columns'>
                  <div className='guides-creative-independent-column'>
                    <img />
                    <span>Jeffrey Silverstein</span>
                    <h1>How to balance full-time work with creative projects</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <img />
                    <span>Volunteer Lawyers for the Arts</span>
                    <h1>An artist's guide to copyrights</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <img />
                    <span>Sarah Hotchkiss</span>
                    <h1>How to write an artist statement</h1>
                  </div>
                  <div className='guides-creative-independent-column'>
                    <img />
                    <span>Kathryn Jaller</span>
                    <h1>A creative person's guide to thoughtful promotion</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-theater'></div>
        </div>
      </div>
    );
  }
}

export default Arts;
