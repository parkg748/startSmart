import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <section className='explore-project'>
          <Link to='/explore' className='explore'>Explore</Link>
          <Link to='/project' className='project'>Start a project</Link>
        </section>
        <img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' />
        <section className='search-signin'>
          <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
          <Link to='/login' className='login'>Sign in</Link>
        </section>
      </nav>
    );
  }
}

export default Homepage;
