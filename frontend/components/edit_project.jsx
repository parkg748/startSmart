import React from 'react';

class EditProject extends React.Component {
  constructor(props) {
    super(props);
  }

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
                  <h2>Let's get started.</h2>
                  <p>Make a great first impression with your project's title and image, and set your funding goal, campaign duration, and project category.</p>
                </div>
              </div>
              <div className='edit-form-box'>
                <div className='edit-form-box-inner'>
                  <div className='edit-form-input'>
                    <div className='edit-form-input-inner'>
                      <form>
                        <div className='project-image'>
                          <div className='project-image-inner'>
                            <div className='project-image-inner-title'>Project image</div>
                            <div className='project-image-inner-content'>
                              <div className='project-image-upload'>
                                <div className='project-image-upload-inner'>
                                  <span className='choose-an-image'>Choose an image from your computer</span>
                                  <span className='choose-an-image-description'>This is the main image associated with your project. Make it count!</span>
                                  <span className='choose-an-image-description'>JPEG, PNG, GIF, or BMP • 200MB file limit</span>
                                  <span className='choose-an-image-description'>At least 1024x576 pixels • 16:9 aspect ratio</span>
                                </div>
                                <div className='project-image-content'>
                                  <p>This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. <Link className='some-tips' to='/'>Here are some tips.</Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='project-title-box'>
                          <div className='project-title-content'>
                            <div className='project-image-inner-title'>Project title</div>
                            <div className='project-title-content-inner'>
                              <div className='title-input'>
                                <input type='text' defaultValue='' />
                                <span>60/60</span>
                              </div>
                              <div className='project-title-description'>
                                <p className='project-title-description-one'>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.</p>
                                <p className='project-title-description-two'>These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='short-blurb-box'>
                          <div className='short-blurb-content'>
                            <div className='project-image-inner-title'>Short blurb</div>
                            <div className='short-blurb-content-inner'>
                              <div className='short-blurb-input'>
                                <input type='text' defaultValue='' />
                                <span>135/135</span>
                              </div>
                              <div className='short-blurb-description'>
                                <p>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='category-box'>
                          <div className='category-content'>
                            <div className='project-image-inner-title'>Category</div>
                            <div className='category-content-inner'>
                              <select className='category-dropdown' defaultValue='testing'>
                                <option defaultValue='testing'>Testing</option>
                              </select>
                              <select className='category-dropdown-two' defaultValue='testing'>
                                <option defaultValue='testing'>Testing</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className='location-box'>
                          <div className='location-content'>
                            <div className='project-image-inner-title'>Location</div>
                            <div className='location-input'>
                              <i className="location-search fas fa-search"></i>
                              <input type='text' defaultValue='' />
                              <div className='location-options location-none-display'>
                                <i className="fas fa-caret-up"></i>
                                <ul>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='funding-duration'>
                          <div className='funding-duration-content'>
                            <div className='project-image-inner-title'>Funding duration</div>
                            <div className='funding-duration-content-inner'>
                              <div className='funding-duration-content-form'>
                                <div className='funding-duration-content-form-inner'>
                                  <div className='number-of-days'>
                                    <input type='radio' />
                                    <span>Number of days</span>
                                  </div>
                                  <div className='number-of-days-input'>
                                    <div className='number-of-days-input-inner'>
                                      <input type='text' defaultValue='30'/>
                                      <div className='number-of-days-input-inner-inner'>Up to 60 days, but we recommend 30 or fewer</div>
                                    </div>
                                  </div>
                                </div>
                                <div className='end-on-date'>
                                  <div className='end-on-date-inner'>
                                    <input type='radio' />
                                    <span>End on date & time</span>
                                  </div>
                                  <div className='calendar location-none-display'>
                                    <table>
                                      <thead className='month'>
                                        <tr>
                                          <th>
                                            <i className="fas fa-angle-left"></i>
                                            <i className="fas fa-angle-right"></i>
                                            <span>November</span>
                                            <span>2018</span>
                                          </th>
                                        </tr>
                                      </thead>
                                      <thead className='days-of-week'>
                                        <tr>
                                          <th>S</th>
                                          <th>M</th>
                                          <th>T</th>
                                          <th>W</th>
                                          <th>T</th>
                                          <th>F</th>
                                          <th>S</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div className='time'>
                                      <div className='time-content'>
                                        Time:
                                        <input type='time-text'/>
                                        PDT
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='funding-duration-disclaimer'>
                                  <p>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='funding-goal'>
                          <div className='funding-goal-content'>
                            <div className='project-image-inner-title'>Funding goal</div>
                            <div className='funding-goal-content-inner'>
                              <div className='funding-goal-content-input'><input type='text' defaultValue='€0' /></div>
                              <div className='funding-goal-disclaimer'>
                                <p className='funding-goal-disclaimer-one'>Funding on Kickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.</p>
                                <p className='funding-goal-disclaimer-two'>If your project is successfully funded, the following fees will be collected from your funding total: Kickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</p>
                                <p className='funding-goal-disclaimer-three'><Link to='/'>View fees breakdown</Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='project-collaborators'>
                          <div className='project-collaborators-content'>
                            <div className='project-image-inner-title'>Project collaborators</div>
                            <div className='project-collaborators-inner'>
                              <p>Grant your teammates access to help with your project.</p>
                              <button>Add collaborators</button>
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
                        <span className='how-to-make-project-link'>Make an awesome project</span>
                      </div>
                      <h5>Need advice?</h5>
                      <p>Visit Campus to read discussions about <Link className='preparing-for-project-link' to='/'>preparing for a project</Link> and more.</p>
                      <div className='score-tracker'>
                        <div className='project-thumbnail'>
                        </div>
                        <div className='project-card-content'>
                          <p>Grace</p>
                          <p>fhieowhf</p>
                        </div>
                        <div className='project-card-footer'>
                          <div className='project-card-footer-icon'>
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className='project-stats'>
                            <div className='progress-bar'></div>
                            <div className='project-funding-info'>
                              <div className='funded-amount'>
                                <span className='funded-amount-integer'>0%</span>
                                <span className='funded-amount-context'>funded</span>
                              </div>
                              <div className='amount-pledged'>
                                <div className='amount-pledged-integer'>€0.00</div>
                                <div className='amount-pledged-context'>pledged</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default EditProject;
