import React from 'react';

class EditAboutYouProject extends React.Component {
  render() {
    return (
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
                  <h2>Tell us more about yourself.</h2>
                  <p>Add a bio and links to your website and social media profiles. Think of it as your creative resume.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='profile-photo'>
                          <div className='profile-photo-inner'>
                            <div className='profile-photo-title'>Profile photo</div>
                            <div className='profile-photo-inner-content'>
                              <div className='profile-photo-upload'>
                                <div className='profile-photo-upload-inner'>
                                  <span className='choose-an-image'>Choose an image from your computer</span>
                                </div>
                                <div className='profile-photo-description'>
                                  <p>JPEG, PNG, GIF, or BMP • 200MB file limit</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='name-box'>
                          <div className='name-box-content'>
                            <div className='profile-photo-title'>Name</div>
                            <div className='name-content-inner'>
                              <div className='name-input'>
                                <input type='text' defaultValue='' />
                              </div>
                              <div className='name-description'>
                                <p>Heads up: Once you launch a project, you cannot make changes to your name on Kickstarter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='facebook-connect'>
                          <div className='facebook-connect-content'>
                            <div className='profile-photo-title'>Facebook Connect</div>
                            <div className='facebook-connect-content-inner'>
                              <div className='facebook-connect-description'>
                                <p>Build trust with potential backers by showing there's a real person behind the project. Your name and number of friends will be displayed.</p>
                                <button className='facebook-connect-button'>
                                  <i className="fab fa-facebook"></i>Log in with Facebook
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='biography-box'>
                            <div className='biography-content'>
                              <div className='profile-photo-title'>Biography</div>
                              <div className='biography-content-inner'>
                                <div className='biography-input'>
                                  <input type='text' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='your-location'>
                            <div className='your-location-content'>
                              <div className='profile-photo-title'>Your location</div>
                              <div className='your-location-dropdown'>
                                <span>San Francisco, CA</span>
                                <i className="your-location-button fas fa-times"></i>
                              </div>
                            </div>
                          </div>
                          <div className='websites'>
                            <div className='websites-content'>
                              <div className='profile-photo-title'>Websites</div>
                              <div className='websites-content-inner'>
                                <div className='websites-content-inner-input'>
                                  <div className='websites-input'>
                                    <input type='text' />
                                  </div>
                                  <button className='websites-add-button'>Add</button>
                                </div>
                                <div className='websites-description'>
                                  <p>Some suggestions: Link to your blog, portfolio, Twitter, Instagram, etc.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='google-analytics'>
                            <div className='google-analytics-content'>
                              <div className='profile-photo-title'>Google Analytics</div>
                              <div className='google-analytics-content-inner'>
                                <div className='google-analytics-content-input'>
                                  <input type='text' placeholder='UA-XXXXXXXX-X' />
                                </div>
                                <div className='google-analytics-description'>
                                  <p>Enter your tracking ID to enable Google Analytics for your project. <Link className='policy-link' to='/'>Check out our FAQ for more info</Link>.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='about-you-side-bar'>
                      <h5>Important notes on accountability</h5>
                      <p>Part of every creator’s job is earning their backers’ trust, especially backers who don’t personally know them. It’s up to you to make the case that you can successfully bring your project to life. Present your qualifications and share links that help reinforce them.</p>
                      <h5>Returning creators</h5>
                      <p>Launching another project? Awesome! For the sake of transparency, just be sure all of them are under the same account. In special circumstances where this won't work (this project’s a solo album, the last one was with your mariachi band) just be sure to link to any previous projects in your bio.</p>
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
