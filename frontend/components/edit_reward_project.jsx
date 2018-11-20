import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class EditRewardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reward;
    this.closeAddItemForm = this.closeAddItemForm.bind(this);
    this.addItem = this.addItem.bind(this);
    this.increaseRewardBox = this.increaseRewardBox.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchProjects();
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  increaseRewardBox() {
    this.setState({numOfRewardBox: this.state.numOfRewardBox + 1});
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createItem(this.props.match.params.userId, this.props.match.params.projectId, 1, {name: this.props.itemName, digital: this.props.itemDigital}).then(() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`));
  }

  closeAddItemForm() {
    this.setState({addItem: 'js-modal-close', addBackground: ''});
  }

  addItem() {
    this.setState({addItem: 'js-modal-open', addBackground: 'is-open'});
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

  moveToTrash(e) {
    e.preventDefault();
    this.props.deleteReward(this.state).then(() => this.props.history.push(`/users/${this.props.user_id}/projects/${this.props.project_id}/rewards`));
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    if (Object.values(this.props.project).length === 0 || Object.values(this.props.user).length === 0) return null;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://i.imgur.com/jyZdRza.png" /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = monthString[currentDate.getMonth()];
    let currentUserProjects = [];
    Object.values(getState().entities.project).forEach(project => {
      if (project.userId === getState().session.id) {
        currentUserProjects.push(project);
      };
    });
    // let rewardBox = [];
    // for (let i = 0; i < this.state.numOfRewardBox; i++) {
    //   rewardBox.push(<div className='reward-box-inner-inner'>
    //       <div className='reward-title'>
    //         <span className='reward-title-number'>Reward #1 <i className="fas fa-question-circle"></i></span>
    //         <div className='num-of-backers'>0 backers</div>
    //       </div>
    //       <div className='reward-form-field'>
    //         <div className='reward-form-field-title'>
    //           <div className='reward-form-field-title-desc'>Title</div>
    //           <div className='reward-form-field-title-input'><input onChange={this.update('title')} type='text' /></div>
    //         </div>
    //         <div className='reward-form-field-title'>
    //           <div className='reward-form-field-title-desc'>Pledge amount</div>
    //           <div className='reward-form-field-title-input'><input onChange={this.update('pledge_amt')} type='text' defaultValue='€0' /></div>
    //         </div>
    //         <div className='reward-form-field-description'>
    //           <div className='reward-form-field-description-desc'>Description</div>
    //           <div className='reward-form-field-description-inner'>
    //             <div className='reward-form-field-description-textarea'>
    //               <textarea onChange={this.update('description')}></textarea>
    //             </div>
    //             <button onClick={() => this.addItem()} className='add-an-item'>
    //               <div className='add-an-item-inner'>
    //                 <div className='add-an-item-inner-inner'>
    //                   <i className="fas fa-plus"></i>Add an item
    //                 </div>
    //               </div>
    //             </button>
    //           </div>
    //         </div>
    //         <div className='estimated-delivery'>
    //           <div className='estimated-delivery-title'>Estimated delivery</div>
    //           <div className='estimated-delivery-date'>
    //               <div className='estimated-delivery-date-month'>
    //                 <i className="estimated-delivery-date-month-caret fas fa-angle-down"></i>
    //                 <select onChange={this.update('month')} value={currentMonth}>
    //                   {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => <option value={month}>{month}</option>)}
    //                 </select>
    //               </div>
    //               <div className='estimated-delivery-date-year'>
    //                 <i className="estimated-delivery-date-year-caret fas fa-angle-down"></i>
    //                 <select onChange={this.update('year')} defaultValue='2018'>
    //                   {[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map((year, id) => {
    //                     if (year === currentYear) {
    //                       return <option value={year} key={id}>{year}</option>
    //                     } else {
    //                       return <option value={year} key={id}>{year}</option>
    //                     }
    //                   })}
    //                 </select>
    //               </div>
    //             </div>
    //         </div>
    //         <div className='reward-form-field-title'>
    //           <div className='reward-form-field-title-desc'>Shipping details</div>
    //             <div className='shipping-options'>
    //               <i className="shipping-options-caret fas fa-angle-down"></i>
    //               <select onChange={this.update('shipping')} defaultValue='select-an-option'>
    //                 <option value='select-an-option' disabled>Select an option</option>
    //                 <option value='no-shipping-involved'>No shipping involved</option>
    //                 <option value='only-ships-certain-countries'>Only ships to certain countries</option>
    //                 <option value='anywhere-in-world'>Ships anywhere in the world</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div className='reward-form-field-title'>
    //             <div className='reward-form-field-title-desc'>Limit availability</div>
    //             <div className='limit-container'>
    //               <div className='limit-container-inner'>
    //                 <input onChange={this.update('limit')} id='limitChecked' type='checkbox'/>
    //                 <span>Enable reward limit</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <button className='reward-form-delete'>
    //           <i className="delete-rewards fas fa-times"></i> Delete
    //         </button>
    //       </div>)
    // }
    return (
      <div>
        <div className={this.state.addBackground}>
          <nav>
            <section className='explore-project'>
              <Link to='/help/handbook' className='creator-handbook-navbar'>Creator Handbook</Link>
              <Link to='/campus' className='campus-navbar'>Campus</Link>
              <Link to='/help' className='help-navbar'>Help</Link>
              <Link to='/rules' className='rules-navbar'>Project Rules</Link>
            </section>
            <Link to='/'><img className='center-logo-position logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
            <section className={`search-signin ${navbarWidth}`}>
              {profile}
            </section>
          </nav>
          <div className={`profile-icon-menu ${this.state.displayProfileMenu}`}>
            <div className='profile-menu-header'>Grace</div>
            <div className='profile-menu-body'>
              <div className='profile-menu-body-left'>
                <div className='profile-menu-body-left-header'>MY STUFF</div>
                <ul>
                  <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                  <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                  <li><Link to='/recommendations'>Recommended for you</Link></li>
                  <li><Link to='/messages/inbox'>Messages</Link></li>
                  <li><Link to='/activity'>Activity</Link></li>
                  <li><Link to={`/profile/${Object.values(this.props.user)[0].id}`}>Profile</Link></li>
                  <li><Link to='/profile/backings'>Backed projects</Link></li>
                  <li><Link to='/profile/projects'>My projects</Link></li>
                  <li><Link to='/profile/starred'>Saved projects</Link></li>
                </ul>
              </div>
              <div className='profile-menu-body-middle'>
                <div className='profile-menu-body-left-header'>SETTINGS</div>
                <ul>
                  <li><Link to='/settings/account'>Account</Link></li>
                  <li><Link to='/settings/profile'>Edit profile</Link></li>
                  <li>Notifications</li>
                </ul>
              </div>
              <div className='profile-menu-body-right'>
                <div className='profile-menu-body-left-header'>MY PROJECTS</div>
                <ul>
                  {currentUserProjects.slice(0, 5).map((project, id) => {
                    if (project.title === '') {
                      return <li key={id}>
                        <div className='profile-menu-projects'>
                          <div className='profile-menu-projects-image'>
                            <img src='https://i.imgur.com/s5GppRq.png'/>
                          </div>
                          <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>Untitled</Link></span>
                        </div>
                      </li>
                    } else {
                      return <li key={id}>
                        <div className='profile-menu-projects'>
                          <div className='profile-menu-projects-image'>
                            <img src='' />
                          </div>
                          <span><Link to={`/users/${getState().session.id}/projects/${project.id}`}>{project.title}</Link></span>
                        </div>
                      </li>
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
          </div>
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
                    <li className='exit-editor'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`}><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
                    <li className='edit-options'>
                      <ul>
                        <li className='edit-option-basics'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/basics`}><i className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
                        <li className='edit-option-rewards current-page-button-highlight'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/rewards`}><i className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
                        <li className='edit-option-story'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/story`}><i className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
                        <li className='edit-option-about-you'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/about-you`}><i className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
                        <li className='edit-option-account'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/account`}><i className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
                        <li className='preview'><Link to={`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/edit`}>Preview</Link></li>
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

                                <div onClick={() => this.increaseRewardBox()} className='add-new-reward'>
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
                        <span onClick={() => this.deleteCurrentProject()}>Delete project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='edit-page-footer'>
                <div className='edit-page-footer-changes'>
                  <a onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`)}>Discard changes</a>
                  <button>Save</button>
                </div>
              </div>
            </div>
            <div className={this.state.addItem}>
              <button onClick={() => this.closeAddItemForm()}><i className="js-modal-close-button fas fa-times"></i></button>
              <div className='js-modal-open-one'>
                <div className='js-modal-open-top'>
                  <h1>Add a reward item</h1>
                  <p>Backers will see the items listed when pledging. Questions about how this works? <Link className='policy-link' to='/'>Visit our FAQ.</Link></p>
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className='js-modal-open-middle'>
                    <div className='js-modal-open-middle-one'>
                      <div className='js-modal-open-middle-two'>
                        <div className='js-modal-open-middle-three'>
                          <span><strong>Name</strong> (required)</span>
                          <input onChange={this.update('itemName')} type='text' placeholder='Examples: Album download, Screenplay, etc.'/>
                        </div>
                      </div>
                      <div className='js-modal-open-middle-four'>
                        <div className='js-modal-open-middle-five'>
                          <label>
                            <div className='js-modal-open-checkbox'>
                              <input onChange={this.update('digital')} id='digitalChecked' name='digitalChecked' type='checkbox' />
                            </div>
                            <div className='js-modal-middle-six'>
                              <span><strong>This is a digital item.</strong> Think album downloads, e-books, videos, or anything that's delivered online.</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='js-modal-open-bottom'>
                    <input type='submit' value='Create Item'/>
                    <button onClick={() => this.closeAddItemForm()}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
      </div>
    );
  }
}

export default EditRewardProject;
