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
                  <h2>Confirm your identity and link a bank account.</h2>
                  <p>Provide additional details about yourself and where funds should be sent.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='account-box'>
                          <div className='account-box-inner'>
                            <div className='account-box-inner-inner'>Contact details</div>
                            <div className='account-box-content'>
                              <div className='account-box-input'>
                                <div className='account-box-input-title'>
                                  <div className='account-box-input-title-inner'>Email</div>
                                  <div className='account-box-input-info'>
                                    <div className='account-box-input-info-header'>
                                      <span>parkg748@newschool.edu</span>
                                      <div className='account-box-input-info-verification'>Unverified</div>
                                    </div>
                                    <div className='account-box-input-info-desc'>
                                      <p>In order to create a project you’ll need to verify your email. Send a verification email to yourself using the button below, then use the link in the email to verify your email address.</p>
                                      <button className='send-verification-email'>Send verification email</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Funds recipient</div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Bank account</div>
                          </div>
                        </div>
                        <div className='funds-recipient'>
                          <div className='funds-recipient-content'>
                            <div className='account-box-inner-inner'>Payment source</div>
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
                      <p className='what-to-offer-content'>Campus has <Link className='policy-link' to='/'>a discussion on that</Link> — and plenty more.</p>
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

export default Homepage;
