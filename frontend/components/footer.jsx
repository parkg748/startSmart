import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer-section'>
        <nav className='footer-nav-bar'>
          <section className='footer-category'>
            <div className='footer-links'>
              <Link className='footer-link' to='/arts'>Arts</Link>
              <Link className='footer-link' to='/comics-illustration'>Comics & Illustration</Link>
              <Link className='footer-link' to='/design-tech'>Design & Tech</Link>
              <Link className='footer-link' to='/film'>Film</Link>
              <Link className='footer-link' to='/food-craft'>Food & Craft</Link>
              <Link className='footer-link' to='/games'>Games</Link>
              <Link className='footer-link' to='/music'>Music</Link>
              <Link className='footer-link' to='/publishing'>Publishing</Link>
            </div>
          </section>
        </nav>
        <div className='footer-index'>
          <div className='footer-index-content'>
            <div className='footer-index-section'>
              <section>
                <h3>ABOUT</h3>
                <ul>
                  <li>About us</li>
                  <li>Our charter</li>
                  <li>Stats</li>
                  <li>Press</li>
                  <li>Jobs</li>
                </ul>
              </section>
            </div>
            <div className='footer-index-section'>
              <section>
                <h3>SUPPORT</h3>
                <ul>
                  <li>Help Center</li>
                  <li>Our Rules</li>
                  <li>Creator Handbook</li>
                  <li>Campus</li>
                  <li>Patrons</li>
                </ul>
              </section>
            </div>
            <div className='footer-index-section'>
              <section>
                <h3>HELLO</h3>
                <ul>
                  <li>StartSmart Blog</li>
                  <li>Engineering Blog</li>
                  <li>Newsletters</li>
                  <li>Research</li>
                </ul>
              </section>
            </div>
            <div className='footer-index-section'>
              <section>
                <h3>MORE FROM STARTSMART</h3>
                <ul>
                  <li>Drip</li>
                  <li>StartSmart Live</li>
                  <li>The Creative</li>
                  <li>Independent</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className='footer-social-media'>
          <section>
            <ul>
              <li><i className="black fab fa-facebook"></i></li>
              <li><i className="black fab fa-instagram"></i></li>
              <li><i className="black fab fa-twitter"></i></li>
              <li><i className="black fab fa-youtube"></i></li>
            </ul>
          </section>
        </div>
        <div className='policies'>
          <ul>
            <li className='policy-links'>Trust and Safety</li>
            <li className='policy-links'>Terms of Use</li>
            <li className='policy-links'>Privacy Policy</li>
            <li className='policy-links'>Cookie Policy</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
