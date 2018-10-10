import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.signupForm;
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  updateEmail(e) {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <section className='signup-container'>
        <form onSubmit={this.props.signup}>
          <p>Have an account?</p>
          <h1>Sign up</h1>
          <input onChange={this.updateName} type='text' value={this.state.name} />
          <input onChange={this.updateEmail} type='text' value={this.state.email} />
          <input onChange={this.updateEmail} type='text' value={this.state.email} />
          <input type='password' />
          <input type='password' />
          <input type='checkbox' value='Receive our weekly newsletter and other occasional updates' />
          <input type='submit' value='Create account' />
          <p>By signing up, you agree to our terms of use, privacy policy, and cookie policy. Our policies explain how we use your data to deliver, improve, and promote our service and our site, and how you can exercise your rights to control that use.</p>
          <p>or</p>
          <input type='submit' value='Log in with Facebook' />
          <p>If you log in with Facebook, we’ll import your name and profile photo. We&apos;ll also access your friend list so you can follow your Facebook friends on stART. We will never post anything on Facebook without your permission.</p>
        </form>
      </section>
    );
  }
}

export default SignupForm;
