import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  country: 'Select your country',
                  ageButton: 'verification-button far fa-check-circle',
                  bankButton: 'verification-button far fa-check-circle',
                  cardButton: 'verification-button far fa-check-circle',
                  ageButtonColor: 'white-button',
                  bankButtonColor: 'white-button',
                  cardButtonColor: 'white-button',
                  ageButtonBorder: '',
                  bankButtonBorder: '',
                  cardButtonBorder: '',
                  wordCount: 0,
                  pageNo: 1,
                  disabled: 'disabled',
                  className: 'disabled-yes',
                  title: '',
                  description: '',
                  duration: 0,
                  pledge_amt: 0,
                  eta: '',
                  shipping: '',
                  limit: false,
                  city: '',
                  state: '',
                  category_id: '',
                  user_id: '',
                  image_url: '',
                  funding_goal: 0,
                  dropdown: 'location-none-display',
                  currentCategory: 'Select your category',
                  countryDropdown: 'location-none-display'};
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.changePages = this.changePages.bind(this);
    this.displayCountryDropdown = this.displayCountryDropdown.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProjects();
    if (this.props.currentUser) this.props.fetchUser(Object.values(this.props.currentUser)[0].id);
  }

  changePages(type) {
    if (type === 'category') {
      this.setState({pageNo: 1});
    }
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  handleSubmit() {
    if (this.state.pageNo === 1) {
      this.setState({button: 'disabled', className: 'disabled-yes', pageNo: 2});
    } else if (this.state.pageNo === 2) {
      this.setState({button: 'disabled', className: 'disabled-yes', pageNo: 3})
    } else if (this.state.pageNo === 3) {
      this.props.createProject(Object.values(this.props.currentUser)[0].id,
        {title: this.state.title,
          description: this.state.description,
          duration: this.state.duration,
          pledge_amt: this.state.pledge_amt,
          eta: this.state.eta,
          shipping: this.state.shipping,
          limit: this.state.limit,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          user_id: this.props.session.id,
          category_id: this.state.category_id})
          .then(action => {
            let project = Object.values(action.project)[0];
            this.props.history.push(`/users/${project.userId}/projects/${project.id}`);
          });
    }
  }

  handleClick(button) {
    if (button === 'ageButton' && this.state.ageButton === 'verification-button far fa-check-circle') {
      this.setState({ageButton: 'verification-button fas fa-check-circle', ageButtonColor: 'green-button', ageButtonBorder: 'green-border', bankButtonBorder: '', cardButtonBorder: ''});
    } else if (button === 'bankButton' && this.state.bankButton === 'verification-button far fa-check-circle') {
      this.setState({bankButton: 'verification-button fas fa-check-circle', bankButtonColor: 'green-button', ageButtonBorder: '', bankButtonBorder: 'green-border', cardButtonBorder: ''});
    } else if (button === 'cardButton' && this.state.cardButton === 'verification-button far fa-check-circle') {
      this.setState({cardButton: 'verification-button fas fa-check-circle', cardButtonColor: 'green-button', ageButtonBorder: '', bankButtonBorder: '', cardButtonBorder: 'green-border', className: 'disabled-no', button: ''});
    } else if (button === 'ageButton' && this.state.ageButton === 'verification-button fas fa-check-circle') {
      this.setState({ageButton: 'verification-button far fa-check-circle', ageButtonColor: 'white-button', ageButtonBorder: '', bankButtonBorder: '', cardButtonBorder: ''});
    } else if (button === 'bankButton' && this.state.bankButton === 'verification-button fas fa-check-circle') {
      this.setState({bankButton: 'verification-button far fa-check-circle', bankButtonColor: 'white-button', ageButtonBorder: '', bankButtonBorder: '', cardButtonBorder: ''});
    } else if (button === 'cardButton' && this.state.cardButton === 'verification-button fas fa-check-circle') {
      this.setState({cardButton: 'verification-button far fa-check-circle', cardButtonColor: 'white-button', ageButtonBorder: '', bankButtonBorder: '', cardButtonBorder: ''});
    }

  }

  update(category) {
    return (e) => {
      if (this.state.pageNo === 2) {
        this.setState({className: 'disabled-no', description: e.target.value, wordCount: e.target.value.length});
        let randPlaceholder = e.target.value;
      }
    }
  }

  displayDropdown() {
    if (this.state.dropdown === 'location-none-display') {
      this.setState({dropdown: ''});
    } else {
      this.setState({dropdown: 'location-none-display'});
    }
  }

  displayCountryDropdown() {
    if (this.state.countryDropdown === 'location-none-display') {
      this.setState({countryDropdown: ''});
    } else {
      this.setState({countryDropdown: 'location-none-display'});
    }
  }

  updateCountry(country) {
    this.setState({country, countryDropdown: 'location-none-display'});
  }

  updateCategory(category) {
    if (category === 'Art') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Art', button: '', className: 'disabled-no'});
    } else if (category === 'Comics') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Comics', button: '', className: 'disabled-no'});
    } else if (category === 'Crafts') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Crafts', button: '', className: 'disabled-no'});
    } else if (category === 'Dance') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Dance', button: '', className: 'disabled-no'});
    } else if (category === 'Design') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Design', button: '', className: 'disabled-no'});
    } else if (category === 'Fashion') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Fashion', button: '', className: 'disabled-no'});
    } else if (category === 'Film') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Film & Video', button: '', className: 'disabled-no'});
    } else if (category === 'Food') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Food', button: '', className: 'disabled-no'});
    } else if (category === 'Games') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Games', button: '', className: 'disabled-no'});
    } else if (category === 'Journalism') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Journalism', button: '', className: 'disabled-no'});
    } else if (category === 'Music') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Music', button: '', className: 'disabled-no'});
    } else if (category === 'Photography') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Photography', button: '', className: 'disabled-no'});
    } else if (category === 'Publishing') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Publishing', button: '', className: 'disabled-no'});
    } else if (category === 'Technology') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Technology', button: '', className: 'disabled-no'});
    } else if (category === 'Theater') {
      this.setState({dropdown: 'location-none-display', currentCategory: 'Theater', button: '', className: 'disabled-no'});
    }
    this.setState({category_id: Object.values(this.props.categories).filter(el => el.name === category)[0].id});
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='start-project-profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === this.props.session.id) {
          currentUserProjects.push(project);
        };
      });
    }
    if (this.state.pageNo === 1) {
      return (
        <div>
          <nav className='start-project-navbar-top'>
            <div className='start-project-header-top'>
              <Link to='/'><img className='start-project-logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
              {profile}
            </div>
          </nav>
          <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={this.props.session.id} sessionId={this.props.session.id} logoutUser={(e) => this.logoutUser(e)}/>
          <div className='step-one-main'>
            <div className='line'></div>
            <div className='page-info'>1 of 3</div>
            <div className='step-one-header'>
              <div className='step-one-title'>
                <div className='step-one-title-content'>
                  <h2>First, let's get you set up.</h2>
                  <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
                  <div className='select-your-category-dropdown'>
                    <i className="select-your-category-arrow fas fa-caret-down"></i>
                    <div onClick={() => this.displayDropdown()} className='select-your-category'>{this.state.currentCategory}</div>
                    <ul className={`${this.state.dropdown}`}>
                      <li onClick={() => this.updateCategory('Art')}>Art</li>
                      <li onClick={() => this.updateCategory('Comics')}>Comics</li>
                      <li onClick={() => this.updateCategory('Crafts')}>Crafts</li>
                      <li onClick={() => this.updateCategory('Dance')}>Dance</li>
                      <li onClick={() => this.updateCategory('Design')}>Design</li>
                      <li onClick={() => this.updateCategory('Fashion')}>Fashion</li>
                      <li onClick={() => this.updateCategory('Film')}>Film & Video</li>
                      <li onClick={() => this.updateCategory('Food')}>Food</li>
                      <li onClick={() => this.updateCategory('Games')}>Games</li>
                      <li onClick={() => this.updateCategory('Journalism')}>Journalism</li>
                      <li onClick={() => this.updateCategory('Music')}>Music</li>
                      <li onClick={() => this.updateCategory('Photography')}>Photography</li>
                      <li onClick={() => this.updateCategory('Publishing')}>Publishing</li>
                      <li onClick={() => this.updateCategory('Technology')}>Technology</li>
                      <li onClick={() => this.updateCategory('Theater')}>Theater</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='step-one-next-step'>
              <div className='step-one-next-step-content'>
                <div className='step-one-next-step-inner'>
                  <button onClick={() => this.handleSubmit()} className={this.state.className}><p>Next: Project Idea</p></button>
                  <span>Welcome back.</span>
                </div>
              </div>
            </div>
            <div className='step-one-disclaimer'>
              <div className='step-one-disclaimer-content'>
                <span>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.pageNo === 2) {
      const randomPlaceholders = ['An album of songs based on Pablo Neruda poems.', 'A novel written in three languages.', 'A short claymation about boba.', 'A set of handmade greeting cards and stationery.'];
      let randPlaceholder = randomPlaceholders[Math.floor(Math.random() * randomPlaceholders.length)];
      return (
        <div>
          <nav className='start-project-navbar-top'>
            <div className='start-project-header-top'>
              <Link to='/'><img className='start-project-logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
              {profile}
            </div>
          </nav>
          <div className='step-one-main'>
            <div className='line'></div>
            <div className='page-info'>2 of 3</div>
            <div className='step-two-header'>
              <div className='step-two-title'>
                <div className='step-two-title-content'>
                  <h2>Describe what you'll be creating.</h2>
                  <h3>And don't worry, you can edit this later, too.</h3>
                  <div className='description-box'>
                    <textarea onChange={this.update('description')} placeholder={randPlaceholder}></textarea>
                  </div>
                  <div className='description-num'>
                    <div className='description-num-inner'>{this.state.wordCount}/135</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='step-two-next-step'>
              <div className='step-two-next-step-content'>
                <div className='step-two-next-step-inner'>
                  <button onClick={() => this.handleSubmit()} className={this.state.className}><p className='next-location'>Next: Location</p></button>
                  <div className='category-arrow'><i className="fas fa-long-arrow-alt-left"></i><span onClick={() => this.changePages('category')}>Category</span></div>
                </div>
              </div>
            </div>
            <div className='step-one-disclaimer'>
              <div className='step-one-disclaimer-content'>
                <span>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.pageNo === 3) {
      const countries = ['Australia', 'Austria', 'Belgium', 'Canada', 'Denmark', 'France', 'Germany', 'Hong Kong', 'Ireland', 'Italy', 'Japan', 'Luxembourg', 'Mexico', 'New Zealand', 'Norway', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'the Netherlands', 'the United Kingdom', 'the United States'];
      return (
        <div>
          <nav className='start-project-navbar-top'>
            <div className='start-project-header-top'>
              <Link to='/'><img className='start-project-logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
              {profile}
            </div>
          </nav>
          <div className='line'></div>
          <div className='step-three-top'>
            <div className='page-3'>3 of 3</div>
          </div>
          <div className='step-three-box'>
            <div className='step-three-box-inner'>
              <div className='step-three-box-inner-inner'>
                <h2>Finally, let's confirm your eligibility.</h2>
                <h3>Tell us where you're based and confirm a few other details before we proceed.</h3>
                <div onClick={() => this.displayCountryDropdown()} className='country-dropdown'>
                  <i className="select-your-country-arrow fas fa-caret-down"></i>
                  {this.state.country}
                </div>
                <ul className={`${this.state.countryDropdown}`}>
                  {countries.map((country, id) => <li key={id} onClick={() => this.updateCountry(`${country}`)}>{country}</li>)}
                </ul>
                <div className='faqs'><Link to='/'><i className="far fa-question-circle"></i> What if my country isn’t listed?</Link></div>
                <div className='verification'>
                  <button onClick={() => this.handleClick('ageButton')} className={`age-verification ${this.state.ageButtonBorder}`}><i className={`${this.state.ageButton} ${this.state.ageButtonColor}`}></i><span>I am at least 18 years old.</span></button>
                  <button onClick={() => this.handleClick('bankButton')} className={`bank-verification ${this.state.bankButtonBorder}`}><i className={`${this.state.bankButton} ${this.state.bankButtonColor}`}></i><span>I can verify a bank account and government-issued ID.</span></button>
                  <button onClick={() => this.handleClick('cardButton')} className={`credit-card-verification ${this.state.cardButtonBorder}`}><i className={`${this.state.cardButton} ${this.state.cardButtonColor}`}></i><span>I have a debit and/or credit card</span></button>
                </div>
              </div>
            </div>
          </div>
          <div className='continue-button-section'>
            <div className='continue-button-inner'>
              <div className='continue-button-inner-inner'>
                <button onClick={() => this.handleSubmit()} className={this.state.className}>Continue</button>
                <span>A new project — welcome back!</span>
              </div>
            </div>
          </div>
          <div className='start-project-page-three-disclaimer'>
            <div className='start-project-page-three-disclaimer-one'>
              <span>
                To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StartProjectPageOne;
