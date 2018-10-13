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
                                <input type='text' value='' />
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
                                <input type='text' value='' />
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
                                <option value='testing'>Testing</option>
                              </select>
                              <select className='category-dropdown-two' defaultValue='testing'>
                                <option value='testing'>Testing</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
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

export default Homepage;
