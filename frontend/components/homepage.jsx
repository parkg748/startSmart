import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let profile = undefined;
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    return (
      <div>
        <nav>
          <section className='explore-project'>
            <Link to='/explore' className='explore'>Explore</Link>
            <Link to='/learn' className='project'>Start a project</Link>
          </section>
          <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className='search-signin'>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div>
          <div className='edit-background'>
            <ul>
              <li><Link className='edit-button' to='/'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/'>Help</Link></li>
              <li><Link className='edit-button' to='/'>Creator Handbook</Link></li>
            </ul>
            <div className='edit-page-content'>
              <div className='edit-page-navbar'>
                <div className='edit-page-navbar-inner'>
                  <ul>
                    <li className='exit-editor'><Link to='/'><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                    <li className='edit-options'>
                      <ul>
                        <li className='edit-option-basics'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                        <li className='edit-option-rewards'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                        <li className='edit-option-story'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                        <li className='edit-option-about-you'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                        <li className='edit-option-account'><Link to='/'><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
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
                                    <div className='reward-form-field-title-input'><input type='text' /></div>
                                  </div>
                                  <div className='reward-form-field-title'>
                                    <div className='reward-form-field-title-desc'>Pledge amount</div>
                                    <div className='reward-form-field-title-input'><input type='text' defaultValue='€0' /></div>
                                  </div>
                                  <div className='reward-form-field-description'>
                                    <div className='reward-form-field-description-desc'>Description</div>
                                    <div className='reward-form-field-description-inner'>
                                      <div className='reward-form-field-description-textarea'>
                                        <input type='text' />
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
                                        <select defaultValue='october'>
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
                                        <select defaultValue='2018'>
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
                                      <select defaultValue='select-an-option'>
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
                          <span className='how-to-make-project-link'>Create great rewards</span>
                        </div>
                        <h5>What to offer</h5>
                        <p className='what-to-offer-content'>Copies of what you're making, unique experiences, and limited editions work great.</p>
                        <h5>How to price</h5>
                        <ul>
                          <li>Price fairly, and offer a good value. What would <i>you</i> consider a fair exchange?</li>
                          <li>Something fun for €10 or less is always a good idea.</li>
                          <li>Backers based in the U.S. will always see reward amounts and funding goals reflected in USD.</li>
                          <li>Funds that backers pledge to account for shipping costs will count towards your project's funding goal. Keep this in mind when setting your goal.</li>
                          <li>Use the shipping tool to add delivery costs for any country you like (including your own). The price will be added to backer's pledges as they check out.</li>
                        </ul>
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
      </div>
    );
  }
}

export default Homepage;
