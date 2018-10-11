import React from 'react';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className='step-one-main'>
        <div className='line'></div>
        <div className='page-info'>1 of 3</div>
        <div className='step-one-header'>
          <div className='step-one-title'>
            <div className='step-one-title-content'>
              <h2>First, let's get you set up.</h2>
              <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
              <div className='select-your-category-dropdown'>
                <i className="select-your-category-arrow fas fa-caret-down"></i>
                <select className='select-your-category' defaultValue='your-category'>
                  <option value='your-category' disabled>Select your category</option>
                  <option value='arts'>Art</option>
                  <option value='comics'>Comics</option>
                  <option value='crafts'>Crafts</option>
                  <option value='dance'>Dance</option>
                  <option value='design'>Design</option>
                  <option value='fashion'>Fashion</option>
                  <option value='film-video'>Film & Video</option>
                  <option value='food'>Food</option>
                  <option value='games'>Games</option>
                  <option value='journalism'>Journalism</option>
                  <option value='music'>Music</option>
                  <option value='photography'>Photography</option>
                  <option value='publishing'>Publishing</option>
                  <option value='technology'>Technology</option>
                  <option value='theater'>Theater</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='step-one-next-step'>
          <div className='step-one-next-step-content'>
            <div className='step-one-next-step-inner'>
              <button className='next-project-idea'>Next: Project Idea</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartProjectPageOne;
