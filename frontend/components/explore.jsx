import React from 'react';

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
              <li>Recommended For You</li>
              <li>Projects We Love</li>
              <li>Saved Projects</li>
              <li>Trending</li>
              <li>Nearly Funded</li>
              <li>Just Launched</li>
              <li>Backed By People You Follow</li>
              <li>Everything</li>
            </ul>
          </div>
        </div>
        <div className='explore-sections'>
          <h1>Sections</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li>Arts</li>
              <li>Comics & Illustration</li>
              <li>Design & Tech</li>
              <li>Film</li>
              <li>Food & Craft</li>
              <li>Games</li>
              <li>Music</li>
              <li>Publishing</li>
            </ul>
          </div>
        </div>
        <div className='explore-categories'>
          <h1>Categories</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li>Art</li>
              <li>Comics</li>
              <li>Crafts</li>
              <li>Dance</li>
              <li>Design</li>
              <li>Fashion</li>
              <li>Film & Video</li>
              <li>Food</li>
              <li>Games</li>
              <li>Journalism</li>
              <li>Music</li>
              <li>Photography</li>
              <li>Publishing</li>
              <li>Technology</li>
              <li>Theater</li>
            </ul>
          </div>
        </div>
        <div className='explore-onradar'>
          <h1>On Our Radar</h1>
        </div>
        <div className='explore-collections-tab-down'>
          <div className='explore-collections-tab-down-inner'>
            <ul>
              <li>Accessible Art</li>
              <li>Bikes</li>
              <li>DIY</li>
              <li>Go Green</li>
              <li>Just for Kids</li>
              <li>LGBTQIA+</li>
              <li>Public Benefit</li>
              <li>Quickstarter</li>
              <li>Robots</li>
              <li>RPGs</li>
              <li>Sci-Fi and Fantasy</li>
              <li>STEM</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
