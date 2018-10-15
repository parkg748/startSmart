import React from 'react';
import {Link} from 'react-router-dom';

class EditStoryProject extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    return (
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
                <h2>Tell us about your project.</h2>
                <p>Use images, video, and a compelling description to describe what you’re making. Be sure to get specific about why people should be excited about your project.</p>
              </div>
            </div>
            <div className='edit-form-box'>
              <div className='edit-form-box-inner'>
                <div className='edit-form-input'>
                  <div className='edit-form-input-inner'>
                    <form>
                      <div className='project-video'>
                        <div className='project-video-inner'>
                          <div className='project-video-inner-title'>Project video</div>
                          <div className='project-video-inner-content'>
                            <div className='project-video-upload'>
                              <div className='project-video-upload-inner'>
                                <span className='choose-an-image'>Choose a video from your computer</span>
                                <span className='choose-an-image-description'>MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV • 5GB file limit</span>
                              </div>
                              <div className='project-video-content'>
                                <p>Have fun – add a video! Projects with a video have a much higher chance of success. For a dose of inspiration, check out the <Link className='project-video-content-link policy-link' to='/help/handbook/your_story'>Creator Handbook</Link>. Need some help? Visit our <Link className='creator-faq policy-link' to='/hc/en-us/articles/115005128494'>Creator FAQ</Link>.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='project-description'>
                        <div className='project-description-content'>
                          <div className='project-description-inner-title'>Project description</div>
                          <div className='project-description-content-inner'>
                            <div className='project-description-description'>
                              <span>Use your project description to share more about what you’re raising funds to do and how you plan to pull it off. It’s up to you to make the case for your project.</span>
                            </div>
                            <div className='project-description-textarea'>
                              <div className='textarea-edit'>
                                <ul>
                                  <li className='bold-edit'>B</li>
                                  <li><i className="fas fa-italic"></i></li>
                                  <li>Header</li>
                                  <li><i className="fas fa-list-ul"></i></li>
                                  <li><i className="fas fa-link"></i></li>
                                  <li><i className="fas fa-unlink"></i></li>
                                  <li><i className="fas fa-video"></i></li>
                                  <li><i className="fas fa-image"></i></li>
                                  <li><i className="fas fa-music"></i></li>
                                </ul>
                              </div>
                              <iframe></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='risks-challenges'>
                        <div className='risks-challenges-content'>
                          <div className='risks-challenges-title'>Risks and challenges</div>
                          <div className='risks-challenges-body'>
                            <div className='risks-challenges-description'>
                              <p className='risks-challenges-description-question'>What are the risks and challenges that come with completing your project, and how are you qualified to overcome them?</p>
                              <p>Every project comes with its own unique risks and challenges. Let your backers know how you’re prepared to overcome these challenges by setting proper expectations and communicating anything that could cause delays or changes in your production plan.</p>
                              <p>Please mention if you’re still in the process of completing any past projects or if your project requires approval or premarket review from an outside company or agency before you can distribute rewards.</p>
                              <p>Being fully transparent and addressing these potential challenges from the start will help backers understand that your project is a work in progress, and that you’ve thought through all of the possible outcomes.</p>
                              <div className='risks-challenges-input'>
                                <input type='text' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='project-faq'>
                        <div className='project-faq-content'>
                          <div className='project-faq-title'>Project FAQs</div>
                          <div className='project-faq-description'>
                            <div className='project-faq-description-text'>
                              <p>You can add frequently asked questions to the FAQ tab on your project page once it goes live. <Link className='creator-faq policy-link' to='/hc/en-us/categories/115000492154-Creator-questions'>Learn more</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='story-side-bar'>
                  <div className='story-video'>
                    <div className='story-video-play'>
                      <div className='play-button'>
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className='how-to-make-video'>
                      <i className="far fa-lightbulb"></i>
                      <span>How to:</span>
                      <span>Make an awesome video</span>
                    </div>
                    <h5>Looking for advice?</h5>
                    <p>Visit Campus to read about <Link className='preparing-for-project-link' to='/campus/questions/what-tips-do-you-have-for-making-a-great-project-video-on-a-limited-budget'>making great videos</Link> and more.</p>
                    <h5>Important reminder</h5>
                    <p>Kickstarter is a global community, and including translations of your description and rewards, or using our <Link className='creator-faq policy-link' to='/blog/introducing-subtitles-and-captions'>Captions & Subtitles</Link> to make your videos more accessible, will help your project have a wider appeal. If you're including text or audio in a language outside of those that we currently support (English, French, German, and Spanish), we also ask that you include English translations or subtitles.</p>
                    <p>Don't use music, images, video, or other content that you don't have the rights to. Reusing copyrighted material is almost always against the law and can lead to <strong>expensive lawsuits</strong> down the road. The easiest way to avoid copyright troubles is to create all the content yourself or use content that is free for public use.</p>
                    <p>For legal, mostly free alternatives, check out some of these great resources: <a className='creator-faq policy-link' href='https://soundcloud.com/'>SoundCloud</a>, <a className='creator-faq policy-link' href='https://help.vimeo.com/hc/en-us/articles/236022047-Music-Store'>Vimeo Music Store</a>, <a className='creator-faq policy-link' href='http://freemusicarchive.org/'>Free Music Archive</a>, and <a className='creator-faq policy-link' href='http://ccmixter.org/'>ccMixter</a>.</p>
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
    );
  }
}

export default EditStoryProject;
