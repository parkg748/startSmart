import React from 'react';
import {Link} from 'react-router-dom';

class EditRewardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reward;
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  moveToTrash(e) {
    e.preventDefault();
    this.props.deleteReward(this.state).then(() => this.props.history.push(`/users/${this.props.user_id}/projects/${this.props.project_id}/rewards`));
  }

  render() {
    return (
      <div>
        <div className='edit-background'>
          <ul>
            <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
            <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
            <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
          </ul>
          <div className='edit-page-content'>
            <div className='edit-page-navbar'>
              <div className='edit-page-navbar-inner'>
                <ul>
                  <li className='exit-editor'><Link to='/'><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                  <li className='edit-options'>
                    <ul>
                      <li className='edit-option-basics'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/basics`}><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                      <li className='edit-option-rewards current-page-button-highlight'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/rewards`}><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                      <li className='edit-option-story'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                      <li className='edit-option-about-you'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                      <li className='edit-option-account'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/account`}><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                      <li className='preview'><Link to='/'>Preview</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='edit-form'>
              <div className='edit-form-title'>
                <div className='edit-form-title-inner'>
                  <h2>Set your rewards and shipping costs.</h2>
                  <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='reward-box'>
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
                                      <input onChange={this.update('description')} type='text' />
                                    </div>
                                    <div className='add-an-item'>
                                      <div className='add-an-item-inner'>
                                        <div className='add-an-item-inner-inner'>
                                          <i className="fas fa-plus"></i>Add an item
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='estimated-delivery'>
                                  <div className='estimated-delivery-title'>Estimated delivery</div>
                                  <div className='estimated-delivery-date'>
                                    <div className='estimated-delivery-date-month'>
                                      <select onChange={this.update('month')} defaultValue='october'>
                                        <option value='january'>January</option>
                                        <option value='february'>February</option>
                                        <option value='march'>March</option>
                                        <option value='april'>April</option>
                                        <option value='may'>May</option>
                                        <option value='june'>June</option>
                                        <option value='july'>July</option>
                                        <option value='august'>August</option>
                                        <option value='september'>September</option>
                                        <option value='october'>October</option>
                                        <option value='november'>November</option>
                                        <option value='december'>December</option>
                                      </select>
                                    </div>
                                    <div className='estimated-delivery-date-year'>
                                      <select onChange={this.update('year')} defaultValue='2018'>
                                        <option value='2013'>2013</option>
                                        <option value='2014'>2014</option>
                                        <option value='2015'>2015</option>
                                        <option value='2016'>2016</option>
                                        <option value='2017'>2017</option>
                                        <option value='2018'>2018</option>
                                        <option value='2019'>2019</option>
                                        <option value='2020'>2020</option>
                                        <option value='2021'>2021</option>
                                        <option value='2022'>2022</option>
                                        <option value='2023'>2023</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className='reward-form-field-title'>
                                  <div className='reward-form-field-title-desc'>Shipping details</div>
                                  <div className='shipping-options'>
                                    <select onChange={this.update('shipping')} defaultValue='select-an-option'>
                                      <option value='select-an-option' disabled></option>
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
                                      <input type='checkbox'/>
                                      <span>Enable reward limit</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='reward-form-delete'>
                                <i className="delete-rewards fas fa-times"></i> Delete
                              </div>
                            </div>
                            <div className='add-new-reward'>
                              <div className='add-new-reward-text'>
                                <i className="add-new-reward-plus fas fa-plus"></i>
                                <span>Add a new reward</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='edit-side-bar'>
                    <div className='edit-side-bar-content'>
                      <div className='how-to-make-project'>
                        <i className="far fa-lightbulb"></i>
                        <span>How to:</span>
                        <span className='how-to-make-project-link'><Link to='/help/handbook/rewards'>Create great rewards</Link></span>
                      </div>
                      <h5>What to offer</h5>
                      <p className='what-to-offer-content'>Copies of what you're making, unique experiences, and limited editions work great.</p>
                      <h5>How to price</h5>
                      <ul className='what-is-allowed'>
                        <li>Price fairly, and offer a good value. What would <i>you</i> consider a fair exchange?</li>
                        <li>Something fun for €10 or less is always a good idea.</li>
                        <li>Backers based in the U.S. will always see reward amounts and funding goals reflected in USD.</li>
                        <li>Funds that backers pledge to account for shipping costs will count towards your project's funding goal. Keep this in mind when setting your goal.</li>
                        <li>Use the shipping tool to add delivery costs for any country you like (including your own). The price will be added to backer's pledges as they check out.</li>
                      </ul>
                      <h5 className='what-is-prohibited'>What's prohibited</h5>
                      <ul className='what-is-disallowed'>
                        <li>Rewards not directly produced by the creator or the project itself</li>
                        <li>Financial incentives</li>
                        <li>Raffles, lotteries, and sweepstakes</li>
                        <li>Coupons, discounts, and cash-value gift cards</li>
                        <li>For more, please review our <Link className='policy-link' to='/'>list of prohibited items and subject matter</Link></li>
                      </ul>
                      <h5>Need ideas for rewards?</h5>
                      <p className='what-to-offer-content'>Campus has <Link className='policy-link' to='/campus/questions/what-makes-a-great-startsmart-reward-and-whats-a-terrible-idea-for-one'>a discussion on that</Link> — and plenty more.</p>
                    </div>
                  </div>
                </div>
                <div className='delete-project'>
                  <i className="fas fa-times"></i>
                  <span>Delete project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='edit-page-footer'>
          <div className='edit-page-footer-changes'>
            <span>Discard changes</span>
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditRewardProject;
