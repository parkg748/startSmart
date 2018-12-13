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
                <li></li>
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
