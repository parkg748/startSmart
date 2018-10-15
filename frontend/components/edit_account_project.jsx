import React from 'react';
import {Link} from 'react-router-dom';

class EditAccountProject extends React.Component {
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
                      <li className='edit-option-basics'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/basics`}><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                      <li className='edit-option-rewards'><Link to={`/users/${this.props.user_id}/projects/${this.props.project_id}/rewards`}><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
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
                  <div className='account-side-bar'>
                    <h5>Eligibility requirements</h5>
                    <p>To be eligible to start a Kickstarter project as a creator in Belgium, you need to meet the following requirements:</p>
                    <ul>
                      <li>You are 18 years of age or older.</li>
                      <li>You are a permanent resident of Belgium.</li>
                      <li>You are creating a project in your own name, or on behalf of a registered legal entity with which you are affiliated.</li>
                      <li>You have a bank account, address, and government-issued ID from Belgium. An EU-issued ID is also acceptable.</li>
                      <li>If running your project as an individual, the linked bank account must belong to the person who verified their identity for your project.</li>
                      <li>You have a major credit or debit card.</li>
                    </ul>
                    <h5>Questions about taxes?</h5>
                    <p>Check out <Link className='policy-link' to='/'>Kickstarter and Taxes</Link></p>
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

export default EditAccountProject;
