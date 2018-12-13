import React from 'react';
import { Link } from 'react-router-dom';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        <nav className='pledge-header'>
          <Link to='/'><img className='logo-pledge' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
        </nav>
        <div className='pledge-title'>
          <a>{Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].title}</a>
          <span>by {Object.values(this.props.user).length === 1 ? '' : Object.values(this.props.user)[0].name}</span>
        </div>
        <div className='support-this-project'>
          <div className='support-this-project-inner'>
            <div className='support-this-project-left'>
              <h2>Support this project</h2>
              <div className='make-pledge-without-reward'>
                <input type='radio' />
                <div className='make-pledge-without-reward-content'>
                  Make a pledge without a reward
                </div>
              </div>
              <ul>
                <li>
                  <input type='radio' />
                  <div className='make-pledge-with-reward-content'>
                    <div className='make-pledge-with-reward-left'>
                      <h2>$10 or more</h2>
                      <h3>Thank you!</h3>
                      <div className='make-pledge-with-reward-desc'>A public shoutout and thank you on our website!</div>
                    </div>
                    <div className='make-pledge-with-reward-right'>
                      <div className='support-this-project-estimated-delivery'>
                        <span>ESTIMATED DELIVERY</span>
                        <p>Aug 2019</p>
                      </div>
                      <div className='ships-to'>
                        <span>SHIPS TO</span>
                        <p>Anywhere in the world</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='support-this-project-right'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pledge;
