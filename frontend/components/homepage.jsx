import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let profile = undefined;
    if (this.props.currentUser != null) {
      profile = <div className='profile-circle'></div>;
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    return (
      <nav>
        <section className='explore-project'>
          <Link to='/explore' className='explore'>Explore</Link>
          <Link to='/learn' className='project'>Start a project</Link>
        </section>
        <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
        <section className='search-signin'>
          <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
          {profile}
        </section>
      </nav>
    );
  }
}

export default Homepage;
