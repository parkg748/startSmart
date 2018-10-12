import React from 'react';

class StartProjectPageThree extends React.Component {
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
              <h2>First, let's confirm your eligibility.</h2>
              <h3>Tell us where you're based and confirm a few other details before we proceed.</h3>
              <div className='select-your-category-dropdown'>
                <i className="select-your-category-arrow fas fa-caret-down"></i>
                <select className='select-your-category' onChange={this.update('category')} defaultValue='your-category'>
                  <option value='your-category' disabled>Select your country</option>
                  <option value='Australia'>Australia</option>
                  <option value='Austria'>Austria</option>
                  <option value='Belgium'>Belgium</option>
                  <option value='Canada'>Canada</option>
                  <option value='Denmark'>Denmark</option>
                  <option value='France'>France</option>
                  <option value='Germany'>Germany</option>
                  <option value='Hong Kong'>Hong Kong</option>
                  <option value='Ireland'>Ireland</option>
                  <option value='Italy'>Italy</option>
                  <option value='Japan'>Japan</option>
                  <option value='Luxembourg'>Luxembourg</option>
                  <option value='Mexico'>Mexico</option>
                  <option value='New Zealand'>New Zealand</option>
                  <option value='Norway'>Norway</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='Spain'>Spain</option>
                  <option value='Sweden'>Sweden</option>
                  <option value='Switzerland'>Switzerland</option>
                  <option value='the Netherlands'>the Netherlands</option>
                  <option value='the United Kingdom'>the United Kingdom</option>
                  <option value='the United States'>the United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>What if my country isn't listed?</p>
          <ul>
            <li>I am at least 18 years old.</li>
            <li>I can verify a bank account and government-issued ID.</li>
            <li>I have a debit and/or credit card.</li>
          </ul>
        </div>
        <div className='step-one-next-step'>
          <div className='step-one-next-step-content'>
            <div className='step-one-next-step-inner'>
              <label className={this.state.className}><input type='submit' value='' /><p>Continue</p></label>
              <div><i class="fas fa-long-arrow-alt-left"></i><span>Project idea</span></div>
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

export default StartProjectPageThree;
