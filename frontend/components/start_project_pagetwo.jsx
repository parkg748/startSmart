import React from 'react';

class StartProjectPageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.update = this.update.bind();
  }

  update(field) {
    return (e) => this.setState({button: this.state.button, className: 'disabled-yes' [field]: e.target.value});
  }

  render() {
    const randomPlaceholders = ['An album of songs based on Pablo Neruda poems.', 'A novel written in three languages.', 'A short claymation about boba.', 'A set of handmade greeting cards and stationery.'];
    return (
      <div className='step-one-main'>
        <div className='line'></div>
        <div className='page-info'>1 of 3</div>
        <div className='step-one-header'>
          <div className='step-one-title'>
            <div className='step-one-title-content'>
              <h2>Describe what you'll be creating.</h2>
              <h3>And don't worry, you can edit this later, too.</h3>
              <div className='select-your-category-dropdown'>
                <input onChange={this.update('description')} type='text' placeholder={randomPlaceholders[Math.floor(Math.random() * randomPlaceholders.length)]} value={this.state.description} />
              </div>
            </div>
          </div>
        </div>
        <div className='step-one-next-step'>
          <div className='step-one-next-step-content'>
            <div className='step-one-next-step-inner'>
              <label className={this.state.className}><input type='submit' value='' /><p>Next: Location</p></label>
              <div><i class="fas fa-long-arrow-alt-left"></i><span>Category</span></div>
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

export default StartProjectPageTwo;
