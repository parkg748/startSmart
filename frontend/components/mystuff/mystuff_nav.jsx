import React from 'react';
import { Link } from 'react-router-dom';

function MyStuffNav({ navbarWidth, profile }) {
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
    </div>
  );
}

export default MyStuffNav;
