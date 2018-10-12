import React from 'react';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.update = this.update.bind(this);
  }

  handleSubmit() {
    if (this.state.pageNo === 1) {
      this.setState({button: this.state.button, className: 'disabled-yes', pageNo: 2});
    } else if (this.state.pageNo === 2) {
      this.setState({className: 'disabled-yes', pageNo: 3})
    }
  }

  update(category) {
    return (e) => {
      if (this.state.pageNo === 1) {
        if (category === 'your-category') {
          this.setState({button: this.state.button, className: 'disabled-yes'});
        } else {
          this.setState({button: '', className: 'disabled-no'});
          Object.values(getState().entities.category).forEach(obj => {if (obj.name === e.currentTarget.value) {
            this.setState({category_id: obj.id});
          }});
        }
      } else if (this.state.pageNo === 2) {
        this.setState({className: 'disabled-no', description: e.target.value, wordCount: e.target.value.length});
        let randPlaceholder = e.target.value;
      }
    }
  }

  render() {
    if (this.state.pageNo === 1) {
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
                  <select className='select-your-country' onChange={this.update('category')} defaultValue='your-category'>
                    <option value='your-category' disabled>Select your category</option>
                    debugger;
                    {Object.values(getState().entities.category).map(obj => {if (obj.name === 'Film') {
                      return <option key={obj.id} value={obj.name}>Film & Video</option>
                    } else {
                      return <option key={obj.id} value={obj.name}>{obj.name}</option>
                    }})}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='step-one-next-step'>
            <div className='step-one-next-step-content'>
              <div className='step-one-next-step-inner'>
                <button onClick={() => this.handleSubmit()} className={this.state.className}><p>Next: Project Idea</p></button>
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
    } else if (this.state.pageNo === 2) {
      const randomPlaceholders = ['An album of songs based on Pablo Neruda poems.', 'A novel written in three languages.', 'A short claymation about boba.', 'A set of handmade greeting cards and stationery.'];
      let randPlaceholder = randomPlaceholders[Math.floor(Math.random() * randomPlaceholders.length)];
      return (
        <div className='step-one-main'>
          <div className='line'></div>
          <div className='page-info'>2 of 3</div>
          <div className='step-two-header'>
            <div className='step-two-title'>
              <div className='step-two-title-content'>
                <h2>Describe what you'll be creating.</h2>
                <h3>And don't worry, you can edit this later, too.</h3>
                <div className='description-box'>
                  <input onChange={this.update('description')} type='text' placeholder={randPlaceholder} value={this.state.description} />
                </div>
                <div className='description-num'>
                  <div className='description-num-inner'>{this.state.wordCount}/135</div>
                </div>
              </div>
            </div>
          </div>
          <div className='step-two-next-step'>
            <div className='step-two-next-step-content'>
              <div className='step-two-next-step-inner'>
                <button onClick={() => this.handleSubmit()} className={this.state.className}><p className='next-location'>Next: Location</p></button>
                <div><i className="fas fa-long-arrow-alt-left"></i><span>Category</span></div>
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
}

export default StartProjectPageOne;
