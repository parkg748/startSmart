import React from 'react';
import { Link } from 'react-router-dom';

function EditPageNav({ navbarWidth, profile }) {
  return (
    <div>
      <nav className='nav-boxshadow'>
        <section className='explore-project'>
          <Link to='/help/handbook' className='creator-handbook-navbar'>Creator Handbook</Link>
          <Link to='/campus' className='campus-navbar'>Campus</Link>
          <Link to='/help' className='help-navbar'>Help</Link>
          <Link to='/rules' className='rules-navbar'>Project Rules</Link>
        </section>
        <Link to='/'><img className='center-logo-position logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
        <section className={`search-signin ${navbarWidth}`}>
          {profile}
        </section>
      </nav>
    </div>
  );
}

export default EditPageNav;
