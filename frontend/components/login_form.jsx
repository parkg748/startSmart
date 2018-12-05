import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginForm;
    this.executeErrorMessage = this.executeErrorMessage.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.login({email: 'demouser@gmail.com', password: 'starwars'}).then(() => this.props.history.push('/recommendations'));
  }

  executeErrorMessage() {
    this.setState({addItem: 'js-modal-open-login', addBackground: 'is-open'});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email.includes('@')) {
      this.setState({emailError: 'error-email-msg-show-login'});
      window.setTimeout(() => this.setState({emailError: 'error-email-msg'}), 5000);
    } else {
      this.props.clearErrors(this.props.errors);
      this.props.login({email: this.state.email, password: this.state.password}).then(() => this.props.history.push('/recommendations'));
    }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div>
        <div className={this.state.addBackground}>
          <nav>
            <section className='explore-project'>
              <Link to='/explore' className='explore'>Explore</Link>
              <Link to='/learn' className='project'>Start a project</Link>
            </section>
            <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
            <section className='search-signin'>
              <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
              <Link to='/login' className='login'>Sign in</Link>
            </section>
          </nav>
          <div className='grey-box'>
            <div className='login-outer-container'>
              <div className='login-middle-container'>
                <section className='login-container'>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Log in</h2>
                    <div className='login-form-container'>
                      <input onChange={this.update('email')} className='grey-border login-email' type='text' placeholder='Email' value={this.state.email} />
                      <div className={this.state.emailError}><i className="fas fa-exclamation-circle"></i> <div className='error-email-text'>Please include '@' in the email address. &#39;{this.state.email}&#39; is missing an &#39;@&#39;.</div></div>
                      <input onChange={this.update('password')} className='grey-border login-password' type='password' placeholder='Password' value={this.state.password} />
                      <a className='forgot-your-password'>Forgot your password?</a>
                      <div className='green-box'><input type='submit' value='Log me in!' /></div>
                      <div className='green-box demo-user'><button onClick={(e) => this.clickHandler(e)}>Demo user</button></div>
                    </div>
                    <label className='remember-me-login'><input className='remember-me-checkbox' type='checkbox' /><span className='remember-me'>Remember me</span></label>
                    <div className='login-or'>
                      <div className='line'></div>
                      <div className='text'>or</div>
                    </div>
                    <div className='blue-box'><i className="fab fa-facebook"></i><input type='submit' value='Log in with Facebook'/></div>
                    <p className='login-facebook-disclaimer'>If you log in with Facebook, we'll import your name and profile photo. We&apos;ll also access your friend list so you can follow your Facebook friends on StartSmart. We will never post anything on Facebook without your permission.</p>
                  </form>
                  <div className='login-bottom-signup'>
                    <p>New to StartSmart? <Link className='login-link-signup' to='/signup'>Sign up!</Link></p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.addItem}>
          <ul>
            {this.props.errors.map((error, id) => <li key={id}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginForm;
