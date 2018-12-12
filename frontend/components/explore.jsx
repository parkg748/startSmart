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
              <li><Link to='/'>Projects We Love</Link></li>
              <li><Link to='/'>Saved Projects</Link></li>
              <li><Link to='/'>Trending</Link></li>
              <li><Link to='/'>Nearly Funded</Link></li>
              <li><Link to='/'>Just Launched</Link></li>
              <li><Link to='/'>Backed By People You Follow</Link></li>
              <li><Link to='/'>Everything</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-sections'>
          <h1>Sections</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/'>Arts</Link></li>
              <li><Link to='/'>Comics & Illustration</Link></li>
              <li><Link to='/'>Design & Tech</Link></li>
              <li><Link to='/'>Film</Link></li>
              <li><Link to='/'>Food & Craft</Link></li>
              <li><Link to='/'>Games</Link></li>
              <li><Link to='/'>Music</Link></li>
              <li><Link to='/'>Publishing</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-categories'>
          <h1>Categories</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to='/'>Art</Link></li>
              <li><Link to='/'>Comics</Link></li>
              <li><Link to='/'>Crafts</Link></li>
              <li><Link to='/'>Dance</Link></li>
              <li><Link to='/'>Design</Link></li>
              <li><Link to='/'>Fashion</Link></li>
              <li><Link to='/'>Film & Video</Link></li>
              <li><Link to='/'>Food</Link></li>
              <li><Link to='/'>Games</Link></li>
              <li><Link to='/'>Journalism</Link></li>
              <li><Link to='/'>Music</Link></li>
              <li><Link to='/'>Photography</Link></li>
              <li><Link to='/'>Publishing</Link></li>
              <li><Link to='/'>Technology</Link></li>
              <li><Link to='/'>Theater</Link></li>
            </ul>
          </div>
        </div>
        <div className='explore-onradar'>
          <h1>On Our Radar</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li><Link to=''>Accessible Art</Link></li>
              <li><Link to=''>Bikes</Link></li>
              <li><Link to=''>DIY</Link></li>
              <li><Link to=''>Go Green</Link></li>
              <li><Link to=''>Just for Kids</Link></li>
              <li><Link to=''>LGBTQIA+</Link></li>
              <li><Link to=''>Public Benefit</Link></li>
              <li><Link to=''>Quickstarter</Link></li>
              <li><Link to=''>Robots</Link></li>
              <li><Link to=''>RPGs</Link></li>
              <li><Link to=''>Sci-Fi and Fantasy</Link></li>
              <li><Link to=''>STEM</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
