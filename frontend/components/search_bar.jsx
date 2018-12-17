import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ searchBar, clickSearchBar }) {
  return (
    <div className={`${searchBar} search-bar-modal`}>
      <input type='text' placeholder='Search for projects or categories'/>
      <div className='search-bar-modal-times'>
        <i onClick={clickSearchBar} className="search-bar-modal-times-symbol fas fa-times"></i>
      </div>
    </div>
  );
}

export default SearchBar;
