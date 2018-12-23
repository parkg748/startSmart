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
    let regex = new RegExp(this.state.keyword, 'gi');
    // let matchingCategories = this.props.categories.filter(category => category.name.match(regex) != null);
    // let categoryBox = [];
    // matchingCategories.forEach((category, id) => {
    //   categoryBox.push(<div key={id}>
    //     <Link to={category.name === 'Film' ? `/discover/categories/film-video` : `/discover/categories/${category.name.toLowerCase()}`}><li>All<span>in {category.name}</span></li></Link>
    //     <li>{category.name}<span>in {category.subcategories[0]}</span></li>
    //     <li>{category.name}<span>in {category.subcategories[1]}</span></li>
    //   </div>);
    // });
    // let matchingCreators = this.props.creators.filter(creator => creator.name.match(regex) != null);
    // let creatorsBox = [];
    // matchingCreators.forEach((creator, id) => {
    //   creatorsBox.push(<div key={id}><li className='search-bar-creators'><img src={`${creator.profileUrl}`}/> {creator.name}</li></div>);
    // });
    return (
      <div className='search-bar-modal-box'>
        {/*<div className={`${this.props.searchBar} search-bar-modal`}>
          <input onChange={(e) => this.displaySearchOption(e)} type='text' placeholder='Search for projects or categories'/>
          <div className='search-bar-modal-times'>
            <i onClick={() => {this.props.clickSearchBar; this.props.saveToState('')}} className="search-bar-modal-times-symbol fas fa-times"></i>
          </div>
        </div>
        <div className={`search-bar-dropdown ${this.props.searchOptions}`}>
          <ul>
            {matchingCategories.length != 0 ? <div className='search-bar-categories'>Categories</div> : ''}
            {categoryBox}
            {creatorsBox.length != 0 ? <div className='search-bar-categories'>Creators</div> : ''}
            {creatorsBox.length > 3 ? `${creatorsBox[0]}${creatorsBox[1]}${creatorsBox[2]}` : creatorsBox}
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
        </div>*/}
      </div>
    );
  }

}

export default SearchBar;
