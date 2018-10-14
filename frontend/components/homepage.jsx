import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.clickHandler = this.clickHandler.bind(this);
    // this.changeDisplay = this.changeDisplay.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  // changeDisplay() {
  //   this.setState({displayNone: ''});
  // }

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
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = monthString[currentDate.getMonth()];
    let day = currentDate.getDate() + 1;
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
                  <div className='homepage-stats-statistic'>Testing</div>
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
                      <div className='category-contents-left-description-title'>
                        <span className='category-contents-left-title'>Testing</span>
                        <span className='category-contents-left-author'>TESTING</span>
                      </div>
                  </div>
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
