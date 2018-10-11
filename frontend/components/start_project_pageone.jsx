import React from 'react';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.update = this.update.bind(this);
  }

  handleSubmit() {

  }

  update(category) {
    if (e.target.value === 'your-category') {
      this.setState({button: this.state.button, className: 'disabled-yes'});
    } else {
      this.setState({button: '', category: e.target.value, className: 'disabled-no'});
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
                <select className='select-your-category' defaultValue='your-category'>
                  <option onChange={this.update(category)} value='your-category' disabled>Select your category</option>
                  <option onChange={this.update(category)} value='Arts'>Art</option>
                  <option onChange={this.update(category)} value='Comics'>Comics</option>
                  <option onChange={this.update(category)} value='Crafts'>Crafts</option>
                  <option onChange={this.update(category)} value='Dance'>Dance</option>
                  <option onChange={this.update(category)} value='Design'>Design</option>
                  <option onChange={this.update(category)} value='Fashion'>Fashion</option>
                  <option onChange={this.update(category)} value='Film &amp; Video'>Film & Video</option>
                  <option onChange={this.update(category)} value='Food'>Food</option>
                  <option onChange={this.update(category)} value='Games'>Games</option>
                  <option onChange={this.update(category)} value='Journalism'>Journalism</option>
                  <option onChange={this.update(category)} value='Music'>Music</option>
                  <option onChange={this.update(category)} value='Photography'>Photography</option>
                  <option onChange={this.update(category)} value='Publishing'>Publishing</option>
                  <option onChange={this.update(category)} value='Technology'>Technology</option>
                  <option onChange={this.update(category)} value='Theater'>Theater</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='step-one-next-step'>
          <div className='step-one-next-step-content'>
            <div className='step-one-next-step-inner'>
              <button className={this.state.className} {this.state.button}>Next: Project Idea</button>
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
