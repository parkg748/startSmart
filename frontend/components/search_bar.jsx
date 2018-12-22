import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ searchBar, clickSearchBar }) {
  let temp = (<div className='search-bar-dropdown'>
    <ul>
      <div className='search-bar-categories'>Categories</div>
      <li>All <span>in Fashion</span> </li>
      <div className='search-bar-categories'>Creators</div>
      <li className='search-bar-creators'><img /> Nimba Fashion</li>
      <div className='search-bar-categories'>Projects</div>
      <li className='search-bar-projects'>
        <img />
        <div className='search-bar-projects-content'>
          <div className='search-bar-projects-content-title'>Empowered Fashion</div>
          <div className='search-bar-projects-content-author'>by Crystal Brok</div>
          <div className='search-bar-projects-content-funding'>
            <div className='search-bar-projects-content-fund-amt'>0% funded</div>
            <div className='search-bar-projects-content-date'>0% funded</div>
          </div>
        </div>
      </li>
      <button className='search-bar-see-all-results'>See all 2384234 results</button>
    </ul>
  </div>);
  return (
    <div className='search-bar-modal-box'>
      <div className={`${searchBar} search-bar-modal`}>
        <input type='text' placeholder='Search for projects or categories'/>
        <div className='search-bar-modal-times'>
          <i onClick={clickSearchBar} className="search-bar-modal-times-symbol fas fa-times"></i>
        </div>
      </div>

    </div>
  );
}

export default SearchBar;
