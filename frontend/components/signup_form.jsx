import React from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.signupForm;
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    if (this.props.errors.length > 0) {
      this.props.receiveErrors(this.props.errors);
    } else if (!this.state.email.includes('@') || !this.state.reemail.includes('@')) {
      this.setState({emailError: 'error-email-msg-show'});
      // window.setTimeout(() => this.setState({emailError: 'error-email-msg'}), 5000);
    } else if ((this.state.email === this.state.reemail) && (this.state.password === this.state.repassword)) {
      this.props.signup({name: this.state.name, email: this.state.email, password: this.state.password}).then(() => this.props.history.push('/recommendations'));
    }
  }

  render() {
    return (
      <div className='grey-box'>
        <div className='login-outer-container'>
          <div className='login-middle-container'>
            <section className='login-container'>
              <div className='signup-top-login'>
                <p>Have an account? <Link className='login-link-signup' to='/login'>Log in</Link></p>
              </div>
              <form onSubmit={() => this.handleSubmit()}>
                <div className='error-messages-red'>
                  <ul>
                    {this.props.errors.map(error => <li>{error}</li>)}
                  </ul>
                </div>
                <h2>Sign up</h2>
                <div className='login-form-container'>
                  <input className='grey-border login-email' onChange={this.update('name')} type='text' value={this.state.name} placeholder='Name'/>
                  <input className='grey-border login-email' onChange={this.update('email')} type='text' value={this.state.email} placeholder='Email' />
                  <div className={this.state.emailError}><i className="fas fa-exclamation-circle"></i> <div className='error-email-text'>Please include '@' in the email address. &#39;{this.state.email}&#39; is missing an &#39;@&#39;.</div></div>
                  <input className='grey-border login-email' onChange={this.update('reemail')} type='text' value={this.state.reemail} placeholder='Re-enter email' />
                  <input className='grey-border login-email' onChange={this.update('password')} type='password' value={this.state.password} placeholder='Password'/>
                  <input className='grey-border login-email' onChange={this.update('repassword')} type='password' value={this.state.repassword} placeholder='Re-enter password'/>
                </div>
                <label className='weekly-newsletter'>
                  <div className='signup-weekly-checkbox'>
                    <input type='checkbox' />
                  </div>
                    <div className='signup-weekly-newsletter'>
                      Receive our weekly newsletter and other occasional updates
                    </div>
                </label>
                <div className='create-account-container'>
                  <div className='green-box'><input type='submit' value='Create account' /></div>
                </div>
                <p className='signup-disclaimer'>By signing up, you agree to our <Link className='policy-link' to='/terms-of-use'>terms of use</Link>, <Link className='policy-link' to='/privacy'>privacy policy</Link>, and <Link className='policy-link' to='/cookie'>cookie policy</Link>. Our policies explain how we use your data to deliver, improve, and promote our service and our site, and how you can exercise your rights to control that use.</p>
                <div className='login-or'>
                  <div className='line'></div>
                  <div className='text'>or</div>
                </div>
                <div className='blue-box'><i className="fab fa-facebook"></i><input type='submit' value='Log in with Facebook'/></div>
                <p className='login-facebook-disclaimer'>If you log in with Facebook, we’ll import your name and profile photo. We&apos;ll also access your friend list so you can follow your Facebook friends on stART. We will never post anything on Facebook without your permission.</p>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
