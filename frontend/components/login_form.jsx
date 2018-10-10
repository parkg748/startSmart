import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginForm;
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateEmail(e) {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <div className='grey-box'>
        <div className='login-outer-container'>
          <div className='login-middle-container'>
            <section className='login-container'>
              <form onSubmit={this.props.login}>
                <h2>Log in</h2>
                <div className='login-form-container'>
                  <input className='login-email' onChange={this.updateEmail} type='text' placeholder='Email' />
                  <input className='login-password' type='password' placeholder='Password' />
                  <a className='forgot-your-password'>Forgot your password?</a>
                  <div className='green-box'><input type='submit' value='Log me in!' /></div>
                  <label><input type='checkbox' value='Remember me' />Remember me</label>
                </div>
                <p>or</p>
                <input type='submit' value='Log in with Facebook' />
                <p>If you log in with Facebook, we'll import your name and profile photo. We&apos;ll also access your friend list so you can follow your Facebook friends on stART. We will never post anything on Facebook without your permission.</p>
                <p>New to stART? <Link to='/signup'>Sign up!</Link></p>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
