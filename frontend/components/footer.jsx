import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='footer-nav-bar'>
        <section className='footer-category'>
          <div className='footer-links'>
            <Link className='footer-link' to='/arts'>Arts</Link>
            <Link className='footer-link' to='/comics-illustration'>Comics & Illustration</Link>
            <Link className='footer-link' to='design-tech'>Design & Tech</Link>
            <Link className='footer-link' to='film'>Film</Link>
            <Link className='footer-link' to='food-craft'>Food & Craft</Link>
            <Link className='footer-link' to='games'>Games</Link>
            <Link className='footer-link' to='music'>Music</Link>
            <Link className='footer-link' to='publishing'>Publishing</Link>
          </div>
        </section>
      </nav>
    );
  }
}

export default Footer;
