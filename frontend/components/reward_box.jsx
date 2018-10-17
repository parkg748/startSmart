import React from 'react';

class RewardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = reward: {optionsState: '', addBackground: '', addItem: 'js-modal-close', itemName: '', itemDigital: false, title: '', description: '', pledge_amt: 0, month: '', year: 0, shipping: '', limit: false}
  }

  update(field) {
    return (e) => {
      if (digitalChecked.checked && field === 'digital') {
        this.setState({[field]: true});
      } else if (!digitalChecked.checked && field === 'digital') {
        this.setState({[field]: false});
      } else if (limitChecked.checked && field === 'limit') {
        this.setState({[field]: true});
      } else if (!limitChecked.checked && field === 'limit') {
        this.setState({[field]: false});
      } else {
        this.setState({[field]: e.target.value});
      }
    }
  }

  render() {
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = monthString[currentDate.getMonth()];
    return (
      <div className='reward-box-inner'>
        <div className='reward-box-inner-inner'>
          <div className='reward-title'>
            <span className='reward-title-number'>Reward #1 <i className="fas fa-question-circle"></i></span>
            <div className='num-of-backers'>0 backers</div>
          </div>
          <div className='reward-form-field'>
            <div className='reward-form-field-title'>
              <div className='reward-form-field-title-desc'>Title</div>
              <div className='reward-form-field-title-input'><input onChange={this.update('title')} type='text' /></div>
            </div>
            <div className='reward-form-field-title'>
              <div className='reward-form-field-title-desc'>Pledge amount</div>
              <div className='reward-form-field-title-input'><input onChange={this.update('pledge_amt')} type='text' defaultValue='€0' /></div>
            </div>
            <div className='reward-form-field-description'>
              <div className='reward-form-field-description-desc'>Description</div>
              <div className='reward-form-field-description-inner'>
                <div className='reward-form-field-description-textarea'>
                  <textarea onChange={this.update('description')}></textarea>
                </div>
                <button onClick={() => this.addItem()} className='add-an-item'>
                  <div className='add-an-item-inner'>
                    <div className='add-an-item-inner-inner'>
                      <i className="fas fa-plus"></i>Add an item
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className='estimated-delivery'>
              <div className='estimated-delivery-title'>Estimated delivery</div>
              <div className='estimated-delivery-date'>
                  <div className='estimated-delivery-date-month'>
                    <i className="estimated-delivery-date-month-caret fas fa-angle-down"></i>
                    <select onChange={this.update('month')} value={currentMonth}>
                      {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => <option value={month}>{month}</option>)}
                    </select>
                  </div>
                  <div className='estimated-delivery-date-year'>
                    <i className="estimated-delivery-date-year-caret fas fa-angle-down"></i>
                    <select onChange={this.update('year')} defaultValue='2018'>
                      {[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map(year => {
                        if (year === currentYear) {
                          return <option value={year} selected>{year}</option>
                        } else {
                          return <option value={year}>{year}</option>
                        }
                      })}
                    </select>
                  </div>
                </div>
            </div>
            <div className='reward-form-field-title'>
              <div className='reward-form-field-title-desc'>Shipping details</div>
                <div className='shipping-options'>
                  <i className="shipping-options-caret fas fa-angle-down"></i>
                  <select onChange={this.update('shipping')} defaultValue='select-an-option'>
                    <option value='select-an-option' disabled>Select an option</option>
                    <option value='no-shipping-involved'>No shipping involved</option>
                    <option value='only-ships-certain-countries'>Only ships to certain countries</option>
                    <option value='anywhere-in-world'>Ships anywhere in the world</option>
                  </select>
                </div>
              </div>
              <div className='reward-form-field-title'>
                <div className='reward-form-field-title-desc'>Limit availability</div>
                <div className='limit-container'>
                  <div className='limit-container-inner'>
                    <input onChange={this.update('limit')} id='limitChecked' type='checkbox'/>
                    <span>Enable reward limit</span>
                  </div>
                </div>
              </div>
            </div>
            <button className='reward-form-delete'>
              <i className="delete-rewards fas fa-times"></i> Delete
            </button>
            </div>
            <div className='add-new-reward'>
              <div className='add-new-reward-text'>
                <i className="add-new-reward-plus fas fa-plus"></i>
                <span>Add a new reward</span>
              </div>
            </div>
          </div>
          <RewardBox props={fheiowfhw}
    );
  }
}

export default RewardBox;
