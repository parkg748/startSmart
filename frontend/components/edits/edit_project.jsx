import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from '../modal';
import Calendar from 'react-calendar/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import '../../../app/assets/stylesheets/reactcalendar.css';
import FundingDuration from './funding_duration';
import UploadImage from './upload_image';
import EditPageFooter from './edit_page_footer';
import EditPageNavbar from './edit_page_navbar';
import EditPageNav from './edit_page_nav';

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      titleWordCount: 60,
      shortBlurbWordCount: 135,
      radioChecked: 'checked',
      category: '',
      subcategory: 'your-category',
      city: '',
      state: '',
      duration: 30,
      funding_goal: '€0',
      displayProfileMenu: 'js-modal-close',
      addItem: 'js-modal-close',
      addBackground: '',
      location: 'e',
      imageUrl: "",
      imageFile: "",
      imageUpload: 'close',
      category_id: '',
      date: new Date(),
      calendarView: false,
      blackBorder: '',
      time: '5:00 pm',
      finalDate: [],
      nameInput: '',
      shortBlurbInput: '',
      locationInput: '',
      durationInput: '',
      fundingGoalInput: '',
      categoryInput: '',
      subcategoryInput: ''
    };
    this.addCollaborators = this.addCollaborators.bind(this);
    this.addItem = this.addItem.bind(this);
    this.closeAddItemForm = this.closeAddItemForm.bind(this);
    this.clickProfileIcon = this.clickProfileIcon.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.addBlackBorder = this.addBlackBorder.bind(this);
    this.addBlackBorderToInput = this.addBlackBorderToInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchUser(this.props.match.params.userId);
    setTimeout(this.startAutocomplete.bind(this), 5000);
  }

  addBlackBorderToInput(input) {
    if (input === 'name') {
      this.setState({nameInput: 'black-border', shortBlurbInput: '', locationInput: '', durationInput: '', fundingGoalInput: '', categoryInput: '', subcategoryInput: ''});
    } else if (input === 'short-blurb') {
      this.setState({nameInput: '', shortBlurbInput: 'black-border', locationInput: '', durationInput: '', fundingGoalInput: '', categoryInput: '', subcategoryInput: ''});
    } else if (input === 'location') {
      this.setState({nameInput: '', shortBlurbInput: '', locationInput: 'black-border', durationInput: '', fundingGoalInput: '', categoryInput: '', subcategoryInput: ''});
    } else if (input === 'duration') {
      this.setState({nameInput: '', shortBlurbInput: '', locationInput: '', durationInput: 'black-border', fundingGoalInput: '', categoryInput: '', subcategoryInput: ''});
    } else if (input === 'funding-goal') {
      this.setState({nameInput: '', shortBlurbInput: '', locationInput: '', durationInput: '', fundingGoalInput: 'black-border', categoryInput: '', subcategoryInput: ''});
    } else if (input === 'category') {
      this.setState({nameInput: '', shortBlurbInput: '', locationInput: '', durationInput: '', fundingGoalInput: '', categoryInput: 'black-border', subcategoryInput: ''});
    } else if (input === 'subcategory') {
      this.setState({nameInput: '', shortBlurbInput: '', locationInput: '', durationInput: '', fundingGoalInput: '', categoryInput: '', subcategoryInput: 'black-border'});
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result, imageUpload: "open"});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  onChange(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currentDate = date.toString().split(' ');
    this.setState({ date: date, finalDate: [parseInt(currentDate[3]), months.indexOf(currentDate[1]) + 1, parseInt(currentDate[2])] });
  }

  deleteCurrentProject() {
    this.props.deleteProject(this.props.match.params.projectId).then(() => this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if(this.state.imageFile){
        formData.append('project[image_url]', this.state.imageFile);
        $.ajax({
          url: `/api/projects/${this.props.match.params.projectId}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false
        });
    }
    const params = {id: this.props.match.params.projectId,
                      title: this.state.title === '' ? Object.values(getState().entities.project)[0].title : this.state.title,
                      description: this.state.description === '' ? Object.values(getState().entities.project)[0].description : this.state.description,
                      category_id: this.state.category_id === '' ? Object.values(getState().entities.project)[0].categoryId : this.state.category_id,
                      subcategory: this.state.subcategory === 'your-category' ? Object.values(getState().entities.project)[0].subcategory : this.state.subcategory,
                      city: this.state.city === '' ? Object.values(getState().entities.project)[0].city : this.state.city,
                      state: this.state.state === '' ? Object.values(getState().entities.project)[0].state : this.state.state,
                      duration: this.state.duration === 30 ? Object.values(getState().entities.project)[0].duration : this.state.duration,
                      funding_goal: this.state.funding_goal === '€0' ? Object.values(this.props.project)[0].fundingGoal : this.state.funding_goal,
                      eta: new Date(`${this.state.finalDate[0]}-${this.state.finalDate[1]}-${this.state.finalDate[2]} ${this.state.time}`),
                      time: this.state.time};
    this.props.updateProject(params).then(() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`));
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${this.props.session.id}/projects/${idx}`);
    window.location.reload();
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

  addCollaborators() {
    alert('Leave site?\nChanges you made may not be saved.');
  }

  submitChanges(e) {
    e.preventDefault();
    this.props.updateProject(this.state).then(() => this.props.history.push(`/users/${this.props.user_id}/projects/${this.props.project_id}/basics`));
  }

  addItem() {
    this.setState({addItem: 'js-modal-open-basic', addBackground: 'is-open'});
  }

  closeAddItemForm() {
    this.setState({addItem: 'js-modal-close', addBackground: ''});
  }

  showCalendar(view) {
    if (view === 'hide-calendar') {
      this.setState({calendarView: false});
    } else {
      this.setState({calendarView: true});
    }
  }

  addBlackBorder() {
    this.setState({blackBorder: 'black-border'});
  }

  update(field) {
    return (e) => {if (field === 'title') {
      this.setState({[field]: e.target.value, titleWordCount: (60 - e.target.value.length)});
    } else if (field === 'description') {
      this.setState({[field]: e.target.value, shortBlurbWordCount: (135 - e.target.value.length)});
    } else if ((field === 'duration') && (this.state.radioChecked === 'checked')) {
      this.setState({[field]: e.target.value});
    } else if (field === 'end-of-date') {
      this.setState({radioChecked: ''});
    } else if (field === 'funding_goal') {
      let fundingGoal = e.target.value;
      fundingGoal = parseInt(fundingGoal);
      this.setState({[field]: fundingGoal, radioChecked: 'checked'});
    } else if (field === 'category') {
      if (e.target.value === 'Film & Video') {
        this.setState({[field]: 'Film', category_id: Object.values(getState().entities.category).filter(el => el.name === 'Film')[0].id});
      } else {
        this.setState({[field]: e.target.value, category_id: Object.values(getState().entities.category).filter(el => el.name === e.target.value)[0].id});
      }
    } else if (field === 'subcategory') {
      this.setState({[field]: e.target.value});
    } else if (field === 'city') {
      console.log(e.target.value)
      let city = e.target.value.split(', ')[0];
      let state = e.target.value.split(', ')[1];
      this.setState({city: city, state: state});
    } else if (field === 'time') {
      if (this.state.finalDate.length === 0) {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let currentDate = date.toString().split(' ');
      }
      this.setState({time: e.target.value, finalDate: [parseInt(currentDate[3]), months.indexOf(currentDate[1]) + 1, parseInt(currentDate[2])]});
    }};
  }

  startAutocomplete() {
    var options = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
     };
    var input = this.inputRef;
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  render() {
    if(!this.props.project){
      return null
    }
    const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl}/> : null;
    if (this.props.category === null || this.props.category === undefined) return null;
    if (this.props.project === null || this.props.project === undefined) return null;
    if (this.props.user === null || this.props.user === undefined) return null;
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    if (Object.values(this.props.project).length === 0 || Object.values(this.props.category).length === 0) return null;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentDate = new Date();
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    let subCategories = [];
    if (this.state.category === '') {
      Object.values(getState().entities.category).forEach(obj => {if (obj.name === getState().entities.category[Object.values(getState().entities.project)[0].categoryId].name) {
        obj.subcategories.forEach(subcat => subCategories.push([obj.id, subcat]));
      }});
    } else {
      Object.values(getState().entities.category).forEach(obj => {if (obj.name === this.state.category) {
        obj.subcategories.forEach(subcat => subCategories.push([obj.id, subcat]));
      }});
    }
    let calendar = '';
    if (this.state.calendarView) {
      calendar = <div className='calendar-time-container'>
        <Calendar onChange={this.onChange} value={this.state.date} />
        <div className='calendar-time'>
          <div className='calendar-time-input'>
            Time:
            <input className={`${this.state.blackBorder}`} onChange={this.update('time')} type='text' onClick={() => this.addBlackBorder()} value={this.state.time} />
          </div>
          PST
        </div>
      </div>;
    } else {
      calendar = '';
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
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user).filter(el => el.id === this.props.session.id)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
          <div className='edit-background'>
            <ul>
              <li><Link className='edit-button' to='/rules'>Our Rules</Link></li>
              <li><Link className='edit-button' to='/hc/en-us'>Help</Link></li>
              <li><Link className='edit-button' to='/help/handbook'>Creator Handbook</Link></li>
            </ul>
            <div className='edit-page-content'>
              <EditPageNavbar buttonHighlight={'basic-page-button-highlight'} userId={this.props.match.params.userId} projectId={this.props.match.params.projectId} completed={completed} />
              <div className='edit-form'>
                <div className='edit-form-title'>
                  <div className='edit-form-title-inner'>
                    <h2>Let's get started.</h2>
                    <p>Make a great first impression with your project's title and image, and set your funding goal, campaign duration, and project category.</p>
                  </div>
                </div>
                <div className='edit-form-box'>
                  <div className={this.state.imageUpload === 'close' ? 'edit-form-box-inner' : 'edit-form-box-inner-open'}>
                    <div className='edit-form-input'>
                      <div className='edit-form-input-inner'>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                          <UploadImage imageUpload={this.state.imageUpload} handleFile={this.handleFile} handleOtherFile={(e) => this.handleFile(e)} imagePreview={imagePreview} />
                          <div className='project-title-box'>
                            <div className='project-title-content'>
                              <div className='project-image-inner-title'>Project title</div>
                              <div className='project-title-content-inner'>
                                <div className={`title-input ${this.state.nameInput}`}>
                                  <input onClick={() => this.addBlackBorderToInput('name')} onChange={this.update('title')} type='text' defaultValue={Object.values(getState().entities.project).filter(el => el.userId === Object.values(getState().entities.users)[0].id)[0].title} />
                                  <span>{this.state.title === '' ? (60 - Object.values(getState().entities.project).filter(el => el.userId === Object.values(getState().entities.users)[0].id)[0].title.length) : this.state.titleWordCount}/60</span>
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
                                <div className={`short-blurb-input ${this.state.shortBlurbInput}`}>
                                  <textarea onClick={() => this.addBlackBorderToInput('short-blurb')} onChange={this.update('description')} defaultValue={Object.values(getState().entities.project).filter(el => el.userId === Object.values(getState().entities.users)[0].id)[0].description}></textarea>
                                  <span>{this.state.description === '' ? (135 - Object.values(getState().entities.project).filter(el => el.userId === Object.values(getState().entities.users)[0].id)[0].description.length) : this.state.shortBlurbWordCount}/135</span>
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
                                <div className='category-dropdown-container'>
                                  <i className="category-dropdown-container-arrow fas fa-angle-down"></i>
                                  <select onClick={() => this.addBlackBorderToInput('category')} className={`category-dropdown ${this.state.categoryInput}`} onChange={this.update('category')} value={this.state.category === '' ? 'getState().entities.category[Object.values(getState().entities.project)[0].categoryId].name' : this.state.category}>
                                    {Object.values(getState().entities.category).map(obj => {if (obj.name === 'Film') {
                                      if (obj.id === Object.values(getState().entities.project)[0].categoryId || obj.id === this.state.category_id) {
                                        return <option key={obj.id} value={obj.name}>Film & Video</option>
                                      } else {
                                        return <option key={obj.id}>Film & Video</option>
                                      }
                                    } else {
                                      if (obj.id === Object.values(getState().entities.project)[0].categoryId) {
                                        return <option key={obj.id} value={obj.name}>{obj.name}</option>
                                      } else {
                                        return <option key={obj.id}>{obj.name}</option>
                                      }
                                    }})}
                                  </select>
                                  <i className="category-dropdown-two-container-arrow fas fa-angle-down"></i>
                                  <select onClick={() => this.addBlackBorderToInput('subcategory')} onChange={this.update('subcategory')} className={`category-dropdown-two ${this.state.subcategoryInput}`} value={this.state.subcategory === 'your-category' && Object.values(getState().entities.project)[0].subcategory != '' ? Object.values(getState().entities.project)[0].subcategory : this.state.subcategory}>
                                    <option value='your-category'>Subcategory (optional)</option>
                                    {subCategories.map(el => <option key={el[1]} value={el[1]}>{el[1]}</option>)}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='location-box'>
                            <div className='location-content'>
                              <div className='project-image-inner-title'>Location</div>
                              <div className={`location-input ${this.state.locationInput}`}>
                                <i className="location-search fas fa-search"></i>
                                <input onClick={() => this.addBlackBorderToInput('location')} onChange={this.update('city')} ref={ref => this.inputRef = ref} type='text' className='form-control' name='term' id='search-term' placeholder=''/>
                              </div>
                            </div>
                          </div>
                          <FundingDuration showCalendar={this.showCalendar} update={(e) => this.update(e)} calendar={calendar} duration={Object.values(getState().entities.project)[0].duration === 0 ? this.state.duration : Object.values(getState().entities.project)[0].duration} durationInput={this.state.durationInput} addBlackBorder={() => this.addBlackBorderToInput('duration')} />
                          <div className='funding-goal'>
                            <div className='funding-goal-content'>
                              <div className='project-image-inner-title'>Funding goal</div>
                              <div className='funding-goal-content-inner'>
                                <div className={`funding-goal-content-input ${this.state.fundingGoalInput}`}><input onClick={() => this.addBlackBorderToInput('funding-goal')} onChange={this.update('funding_goal')} type='text' defaultValue={this.state.funding_goal === '€0' && Object.values(getState().entities.project)[0].fundingGoal != null ? Object.values(getState().entities.project)[0].fundingGoal : this.state.funding_goal} /></div>
                                <div className='funding-goal-disclaimer'>
                                  <p className='funding-goal-disclaimer-one'>Funding on StartSmart is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.</p>
                                  <p className='funding-goal-disclaimer-two'>If your project is successfully funded, the following fees will be collected from your funding total: StartSmart's 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</p>
                                  <p className='funding-goal-disclaimer-three'><button onClick={() => this.addItem()}>View fees breakdown</button></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='project-collaborators'>
                            <div className='project-collaborators-content'>
                              <div className='project-image-inner-title'>Project collaborators</div>
                              <div className='project-collaborators-inner'>
                                <p>Grant your teammates access to help with your project.</p>
                                <button onClick={() => this.addCollaborators()}>Add collaborators</button>
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
                          <span className='how-to-make-project-link'><Link to='/help/handbook/getting_started'>Make an awesome project</Link></span>
                        </div>
                        <h5>Need advice?</h5>
                        <p>Visit Campus to read discussions about <Link className='preparing-for-project-link' to='/campus/questions/what-three-things-do-you-know-now-that-you-wish-you-knew-before-you-launched-your-project'>preparing for a project</Link> and more.</p>
                        <div className='score-tracker'>
                          <div className='project-thumbnail'>
                            <img src={Object.values(this.props.project)[0].imageUrl} />
                          </div>
                          <div className='project-card-content'>
                            <span>{Object.values(this.props.project)[0].title}</span>
                            <p>{Object.values(this.props.user)[0].name}</p>
                            <p>{Object.values(this.props.project)[0].description}</p>
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
                    <span onClick={() => this.deleteCurrentProject()}>Delete project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EditPageFooter handleSubmit={(e) => this.handleSubmit(e)} />
        </div>
        <div className={this.state.addItem}>
          <div className='fee-breakdown'>
            <div className='fee-breakdown-one'>Fees</div>
          </div>
          <button onClick={() => this.closeAddItemForm()}><i className="js-modal-close-button fas fa-times"></i></button>
          <div className='fee-breakdown-two'>
            <div className='fee-breakdown-three'>
              <p>If your project is successfully funded, the following fees will be collected from your funding total: StartSmart's 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</p>
              <div className='fee-breakdown-four'>
                <div className='fee-breakdown-five'>
                  <p><strong>StartSmart fee</strong></p>
                </div>
                <div className='fee-breakdown-six'>
                  <p>5% of total funds raised</p>
                </div>
              </div>
              <div className='fee-breakdown-seven'>
                <div className='fee-breakdown-ten'>
                  <p><strong>Payment processing fees</strong></p>
                </div>
                <div className='fee-breakdown-eight'>
                  <p>3% + €0.20 per pledge</p>
                  <p className='fee-breakdown-nine'>Pledges under €10 have a discounted micropledge fee of 5% + €0.05 per pledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProject;
