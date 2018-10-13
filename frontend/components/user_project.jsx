import React from 'react';
import {Link} from 'react-router-dom';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProject(Object.values(this.props.user)[0].id, Object.values(this.props.project)[0].id);
  }

  render() {
    return (
      <div>
        <div className='project-front-header'>
          <div className='project-front-header-inner'>
            <div className='project-front-header-title'>
              <h2>{this.props.category[Object.values(this.props.project)[0].categoryId].name} Project</h2>
              <h3>by {Object.values(this.props.user)[0].name}</h3>
            </div>
            <div className='project-preview'>
              <div className='project-preview-inner'>
                <Link className='project-preview-link' to='/'><i className="fas fa-eye"></i>Preview</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='project-front-margin'></div>
        <div className='edit-project-page'>
          <div className='edit-project-page-inner'>
            <div className='edit-project-page-inner-inner'>
              <div className='edit-project-page-inner-inner-inner'>
                <div className='edit-project-page-inner-inner-inner-inner'>
                  <div className='edit-project-form-container'>
                    <h3>Project overview</h3>
                    <Link to='/'>
                      <div className='basics'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Basics</div>
                          <div className='basics-content-desc'>Add an image, set your funding goal, and more.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to='/'>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Rewards</div>
                          <div className='basics-content-desc'>Set your rewards and shipping costs.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to='/'>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Story</div>
                          <div className='basics-content-desc'>Add a video and detailed project description.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to='/'>
                      <div className='rewards'>
                        <i className="far fa-check-circle"></i>
                        <div className='basics-content'>
                          <div className='basics-content-title'>Profile</div>
                          <div className='basics-content-desc'>Please add your profile photo, biography, and location.</div>
                        </div>
                      </div>
                    </Link>
                    <Link to='/'>
                      <div className='account'>
                        <i className="far fa-check-circle"></i>
                        <div className='account-content'>
                          <div className='basics-content-title'>Account</div>
                          <div className='basics-content-desc'>Confirm your identity and link a bank account.</div>
                          <div className='account-content-disclaimer'>Please allow up to three business days for this to be completed.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='completed-list'>
                  <div className='completed-list-content'>
                    <div className='completed-list-content-inner'>
                      <p className='completed-list-num'>0 of 5 complete</p>
                      <p className='completed-list-num-desc'>When everything is done, you'll submit your project for review. Review of your project may take up to five business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='support-section'>
          <div className='support-section-inner'>
            <div className='support-section-inner-inner'>
              <div className='support-section-inner-content'>
                <div className='support-section-inner-content-inner'>
                  <div className='support-section-content'>
                    <h3>Support</h3>
                    <div className='support-content'>
                      <Link to='/'>
                        <div className='creator-handbook'>
                          <h5>Creator Handbook<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Learn about everything from shipping to communicating with backers.</span>
                        </div>
                      </Link>
                      <Link to='/'>
                        <div className='campus'>
                          <h5>Campus<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Ask questions and find answers from other creators.</span>
                        </div>
                      </Link>
                      <Link to='/'>
                        <div className='creator-questions'>
                          <h5>Creator Questions<i className="fas fa-long-arrow-alt-right"></i></h5>
                          <span>Get more help with any step of the process.</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default UserProject;
