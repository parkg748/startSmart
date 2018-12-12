import React from 'react';
import {Link} from 'react-router-dom';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='explore-background'>
        <div className='explore-collections'>
          <h1>Collections <i className="fas fa-times"></i></h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/recommendations'>Recommended For You</Link></li>
              <li><Link to='/discover/recommended'>Projects We Love</Link></li>
              <li><Link to='/discover/saved-projects'>Saved Projects</Link></li>
              <li><Link to='/discover/popular'>Trending</Link></li>
              <li><Link to='/discover/nearly-funded'>Nearly Funded</Link></li>
              <li><Link to='/discover/just-launched'>Just Launched</Link></li>
              <li><Link to='/discover/backed-people'>Backed By People You Follow</Link></li>
              <li><Link to='/discover/everything'>Everything</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-sections'>
          <h1>Sections</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/arts'>Arts</Link></li>
              <li><Link to='/comics-illustration'>Comics & Illustration</Link></li>
              <li><Link to='/design-tech'>Design & Tech</Link></li>
              <li><Link to='/film'>Film</Link></li>
              <li><Link to='/food-craft'>Food & Craft</Link></li>
              <li><Link to='/games'>Games</Link></li>
              <li><Link to='/music'>Music</Link></li>
              <li><Link to='/publishing'>Publishing</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-categories'>
          <h1>Categories</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/discover/categories/art'>Art</Link></li>
              <li><Link to='/discover/categories/comics'>Comics</Link></li>
              <li><Link to='/discover/categories/crafts'>Crafts</Link></li>
              <li><Link to='/discover/categories/dance'>Dance</Link></li>
              <li><Link to='/discover/categories/design'>Design</Link></li>
              <li><Link to='/discover/categories/fashion'>Fashion</Link></li>
              <li><Link to='/discover/categories/film-video'>Film & Video</Link></li>
              <li><Link to='/discover/categories/food'>Food</Link></li>
              <li><Link to='/discover/categories/games'>Games</Link></li>
              <li><Link to='/discover/categories/journalism'>Journalism</Link></li>
              <li><Link to='/discover/categories/music'>Music</Link></li>
              <li><Link to='/discover/categories/photography'>Photography</Link></li>
              <li><Link to='/discover/categories/publishing'>Publishing</Link></li>
              <li><Link to='/discover/categories/technology'>Technology</Link></li>
              <li><Link to='/discover/categories/theater'>Theater</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-onradar'>
          <h1>On Our Radar</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/discover/tags/accessible-art'>Accessible Art</Link></li>
              <li><Link to='/discover/tags/bikes'>Bikes</Link></li>
              <li><Link to='/discover/tags/diy'>DIY</Link></li>
              <li><Link to='/discover/tags/go-green'>Go Green</Link></li>
              <li><Link to='/discover/tags/just-for-kids'>Just for Kids</Link></li>
              <li><Link to='/discover/tags/lgbtq'>LGBTQIA+</Link></li>
              <li><Link to='/discover/tags/public-benefit'>Public Benefit</Link></li>
              <li><Link to='/discover/tags/quickstarter'>Quickstarter</Link></li>
              <li><Link to='/discover/tags/robots'>Robots</Link></li>
              <li><Link to='/discover/tags/rpgs'>RPGs</Link></li>
              <li><Link to='/discover/tags/sci-fi'>Sci-Fi and Fantasy</Link></li>
              <li><Link to='/discover/tags/stem'>STEM</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
