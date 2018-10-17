import React from 'react';
import {Link} from 'react-router-dom';

class StartProjectPageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
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
          user_id: this.state.user_id,
          category_id: this.state.category_id}).then(action => {
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
      if (this.state.pageNo === 1) {
        if (category === 'your-category') {
          this.setState({button: 'disabled', className: 'disabled-yes'});
        } else {
          this.setState({button: '', className: 'disabled-no'});
          Object.values(getState().entities.category).forEach(obj => {if (obj.name === e.currentTarget.value) {
            this.setState({category_id: obj.id});
          }});
        }
      } else if (this.state.pageNo === 2) {
        this.setState({className: 'disabled-no', description: e.target.value, wordCount: e.target.value.length});
        let randPlaceholder = e.target.value;
      } else if (this.state.pageNo === 3) {
        if (category === 'your-category') {
          this.setState({button: 'disabled', className: 'disabled-yes'});
        } else {
          this.setState({[category]: e.target.value});
        }
      }
    }
  }

  render() {
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='start-project-profile-circle'><button><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
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
                    <select className='select-your-category' onChange={this.update('category')} defaultValue='your-category'>
                      <option value='your-category' disabled>Select your category</option>
                      {Object.values(getState().entities.category).map(obj => {if (obj.name === 'Film') {
                        return <option key={obj.id} value={obj.name}>Film & Video</option>
                      } else {
                        return <option key={obj.id} value={obj.name}>{obj.name}</option>
                      }})}
                    </select>
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
                    <input onChange={this.update('description')} type='text' placeholder={randPlaceholder} value={this.state.description} />
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
                  <div className='category-arrow'><i className="fas fa-long-arrow-alt-left"></i><span>Category</span></div>
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
                <div className='country-dropdown'>
                  <i className="select-your-country-arrow fas fa-caret-down"></i>
                  <select className='select-your-country' onChange={this.update('country')} defaultValue='your-category'>
                    <option value='your-category' disabled>Select your country</option>
                    {countries.map((country, id) => <option key={id} value={country}>{country}</option>)}
                  </select>
                </div>
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
        </div>
      );
    }
  }
}

export default StartProjectPageOne;
