import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.displaySearchOption = this.displaySearchOption.bind(this);
  }
  // function findMatches(wordToMatch, cities) {
  //   return cities.filter(place => {
  //     const regex = new RegExp(wordToMatch, 'gi');
  //     return place.city.match(regex) || place.state.match(regex);
  //   });
  // }
  //
  // function displayMatches() {
  //   const matchArray = findMatches(this.value, cities);
  //
  // }
  displaySearchOption(e) {
    this.setState({keyword: e.target.value});
    this.props.saveToState('location-none-display');
  }

  render() {


    return (
      <div className='search-bar-modal-box'>
        <div className={`${this.props.searchBar} search-bar-modal`}>
          <input onChange={(e) => this.displaySearchOption(e)} type='text' placeholder='Search for projects or categories'/>
          <div className='search-bar-modal-times'>
            <i onClick={() => {this.props.clickSearchBar; this.props.saveToState('')}} className="search-bar-modal-times-symbol fas fa-times"></i>
          </div>
        </div>
        <div className={`search-bar-dropdown ${this.props.searchOptions}`}>
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
        </div>
      </div>
    );
  }

}

export default SearchBar;
