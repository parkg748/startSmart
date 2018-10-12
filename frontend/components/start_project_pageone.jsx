import React from 'react';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.update = this.update.bind(this);
  }

  update(category) {
    return (e) => {
      if (category === 'your-category') {
        this.setState({button: this.state.button, className: 'disabled-yes'});
      } else {
        debugger;
        this.setState({button: '', category_id: this.props.extractCategoryId(this.props.category, e.target.value), className: 'disabled-no'});
      }
    }
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
                <select className='select-your-category' onChange={this.update('category')} defaultValue='your-category'>
                  <option value='your-category' disabled>Select your category</option>
                  <option value='Art'>Art</option>
                  <option value='Comics'>Comics</option>
                  <option value='Crafts'>Crafts</option>
                  <option value='Dance'>Dance</option>
                  <option value='Design'>Design</option>
                  <option value='Fashion'>Fashion</option>
                  <option value='Film'>Film & Video</option>
                  <option value='Food'>Food</option>
                  <option value='Games'>Games</option>
                  <option value='Journalism'>Journalism</option>
                  <option value='Music'>Music</option>
                  <option value='Photography'>Photography</option>
                  <option value='Publishing'>Publishing</option>
                  <option value='Technology'>Technology</option>
                  <option value='Theater'>Theater</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='step-one-next-step'>
          <div className='step-one-next-step-content'>
            <div className='step-one-next-step-inner'>
              <label className={this.state.className}><input type='submit' value='' /><p>Next: Project Idea</p></label>
              <span>Welcome back.</span>
            </div>
          </div>
        </div>
        <div className='step-one-disclaimer'>
          <div className='step-one-disclaimer-content'>
            <span>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default StartProjectPageOne;
