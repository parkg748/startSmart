import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import EditPageNavbar from './edit_page_navbar';
import EditPageFooter from './edit_page_footer';
import EditPageNav from './edit_page_nav';

class EditRewardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
             addItem: 'js-modal-close',
             addBackground: '',
             numOfRewardBox: 1,
             addedItems: [],
             item_name: ''};
    this.closeAddItemForm = this.closeAddItemForm.bind(this);
    this.addItem = this.addItem.bind(this);
    this.increaseRewardBox = this.increaseRewardBox.bind(this);
    this.decreaseRewardBox = this.decreaseRewardBox.bind(this);
    this.addItemToAddedItems = this.addItemToAddedItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchProjects();
    this.props.fetchUser(this.props.match.params.userId);
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  increaseRewardBox() {
    this.setState({numOfRewardBox: this.state.numOfRewardBox + 1});
  }

  decreaseRewardBox() {
    this.setState({numOfRewardBox: this.state.numOfRewardBox - 1});
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
    this.props.createItem(this.props.match.params.userId, this.props.match.params.projectId, 1, {name: this.props.itemName, digital: this.props.itemDigital});
  }

  closeAddItemForm() {
    let addedItems = this.state.addedItems;
    addedItems.push(this.state.item_name);
    this.setState({addItem: 'js-modal-close', addBackground: '', addedItems});
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

  addItemToAddedItems(item) {
    this.setState({addedItems: this.state.addedItems.push(item)});
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
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = monthString[currentDate.getMonth()];
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    let rewardBox = [];
    for (let i = 0; i < this.state.numOfRewardBox; i++) {
      rewardBox.push(<div className='reward-box-inner-inner'>
        <div className='reward-box-inner'>
          <div className='reward-title'>
            <span className='reward-title-number'>Reward #{i + 1} <i className="fas fa-question-circle"></i></span>
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
                  <textarea onChange={this.update('description')}></textarea>
                </div>
                <button className='add-an-item'>
                  <ul>
                    <li>
                      <div className='add-an-item-list'>
                        <span>fheifhw</span>
                        <div className='add-or-remove'>
                          <a className='add-or-remove-edit'>edit</a><a className='add-or-remove-remove'>remove</a>
                        </div>
                      </div>
                      <div className='add-an-item-counter'>
                        <button className='add-an-item-counter-minus'>-</button>
                        <p>1</p>
                        <button className='add-an-item-counter-plus'>+</button>
                      </div>
                    </li>
                  </ul>
                  <div onClick={() => this.addItem()} className='add-an-item-inner'>
                    <div className='add-an-item-inner-inner'>
                      <i className="fas fa-plus"></i>Add an item
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className='estimated-delivery'>
              <div className='estimated-delivery-title'>Estimated delivery</div>
              <div className='estimated-delivery-date'>
                  <div className='estimated-delivery-date-month'>
                    <i className="estimated-delivery-date-month-caret fas fa-angle-down"></i>
                    <select onChange={this.update('month')} value={currentMonth}>
                      {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => <option value={month}>{month}</option>)}
                    </select>
                  </div>
                  <div className='estimated-delivery-date-year'>
                    <i className="estimated-delivery-date-year-caret fas fa-angle-down"></i>
                    <select onChange={this.update('year')} defaultValue='2018'>
                      {[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map((year, id) => {
                        if (year === currentYear) {
                          return <option value={year} key={id}>{year}</option>
                        } else {
                          return <option value={year} key={id}>{year}</option>
                        }
                      })}
                    </select>
                  </div>
                </div>
            </div>
            <div className='reward-form-field-title'>
              <div className='reward-form-field-title-desc'>Shipping details</div>
                <div className='shipping-options'>
                  <i className="shipping-options-caret fas fa-angle-down"></i>
                  <select onChange={this.update('shipping')} defaultValue='select-an-option'>
                    <option value='select-an-option' disabled>Select an option</option>
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
                    <input onChange={this.update('limit')} id='limitChecked' type='checkbox'/>
                    <span>Enable reward limit</span>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => this.decreaseRewardBox()} className='reward-form-delete'>
              <i className="delete-rewards fas fa-times"></i> Delete
            </button>
          </div>
        </div>);
        let itemBox = [];
    }
    let basicsProgress = 7;
    let rewardsProgress = 5;
    let storyProgress = 3;
    let aboutYouProgress = 6;
    let accountProgress = 1;
    let project = Object.values(this.props.project).filter(el => el.id == this.props.match.params.projectId)[0];
    let user = Object.values(this.props.user)[0];
    let completed = [];
    if (project.imageUrl != '') basicsProgress--;
    if (project.title != '') basicsProgress--;
    if (project.subcategory != '') basicsProgress--;
    if (project.city != '') basicsProgress--; aboutYouProgress--;
    if (project.description != '') basicsProgress--;
    if (project.fundingGoal != null) basicsProgress--;
    if (project.eta != null) basicsProgress--;
    if (project.editorHtml != '') storyProgress--;
    if (project.challenges != '') storyProgress--;
    if (user.profileUrl != '') aboutYouProgress--;
    if (user.name != '') aboutYouProgress--;
    if (user.biography != '') aboutYouProgress--;
    if (user.websites.length != 0) aboutYouProgress--;
    if (user.googleAnalytics != null) aboutYouProgress--;
    if (user.email != '') accountProgress--;
    if (basicsProgress === 0) { completed.push('basic'); }
    if (rewardsProgress === 0) { completed.push('reward'); }
    if (storyProgress === 0) { completed.push('story'); }
    if (aboutYouProgress === 0) { completed.push('aboutyou'); }
    if (accountProgress === 0) { completed.push('account'); }
    return (
      <div>
        <div className={this.state.addBackground}>
          <EditPageNav navbarWidth={navbarWidth} profile={profile} />
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={this.props.user.user} userId={this.props.user.id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
          <div className='edit-background'>
            <ul>
              <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
              <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
            </ul>
            <div className='edit-page-content'>
              <EditPageNavbar buttonHighlight={'rewards-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
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
                            {rewardBox}
                            <div onClick={() => this.increaseRewardBox()} className='add-new-reward'>
                              <div className='add-new-reward-text'>
                                <i className="add-new-reward-plus fas fa-plus"></i>
                                <span>Add a new reward</span>
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
            </div>
            <EditPageFooter handleSubmit={(e) => this.handleSubmit(e)} />
            <div className={this.state.addItem}>
              <button onClick={() => this.closeAddItemForm()}><i className="js-modal-close-button fas fa-times"></i></button>
              <div className='js-modal-open-one'>
                <div className='js-modal-open-top'>
                  <h1>Add a reward item</h1>
                  <p>Backers will see the items listed when pledging. Questions about how this works? <Link className='policy-link' to='/'>Visit our FAQ.</Link></p>
                </div>
                <form onSubmit={() => this.addItemToAddedItems(this.state.item_name).then((e) => this.handleSubmit(e))}>
                  <div className='js-modal-open-middle'>
                    <div className='js-modal-open-middle-one'>
                      <div className='js-modal-open-middle-two'>
                        <div className='js-modal-open-middle-three'>
                          <span><strong>Name</strong> (required)</span>
                          <input onChange={this.update('item_name')} type='text' placeholder='Examples: Album download, Screenplay, etc.'/>
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
