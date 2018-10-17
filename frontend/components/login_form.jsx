import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginForm;
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.login({email: 'demouser@gmail.com', password: 'starwars'}).then(() => this.props.history.push('/recommendations'));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/recommendations'));
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div className='grey-box'>
        <div className='login-outer-container'>
          <div className='login-middle-container'>
            <section className='login-container'>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Log in</h2>
                <div className='login-form-container'>
                  <input onChange={this.update('email')} className='grey-border login-email' type='text' placeholder='Email' value={this.state.email} />
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
    );
  }
}

export default LoginForm;
