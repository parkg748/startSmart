import React from 'react';
import {Link} from 'react-router-dom';

class Following extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <div className='following-header'>
          <div className='following-header-inner'>
            <div className='following-header-content'>
              <div className='following-header-content-inner'>
                <div className='following-header-one'>
                  <h1>Following</h1>
                  <p>Follow creators and Facebook friends and we'll notify you whenever they launch or back a new project. <Link className='policy-link' to='/'>Learn more.</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-two'>
            <div className='following-header-two-inner'>
              <div className='following-header-three'>
                <div className='following-header-four'>
                  <div className='following-header-five'>
                    <div className='green-find-creators-bar'></div>
                    <ul>
                      <li>Find Facebook friends</li>
                      <li>Find creators</li>
                      <li className='divider'></li>
                      <li>Following <span>0</span></li>
                      <li>Followers <span>0</span></li>
                      <li>Blocked</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='following-header-six'>
            <div className='following-header-seven'>
              <div className='following-header-eight'>
                <p>
                  <button>Explore projects</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Following
