import React from 'react';
import { Link } from 'react-router-dom';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className='pledge-header'>
          <Link to='/'><img className='logo-pledge' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
        </nav>
        <div className='pledge-title'>
          <a>Project Title</a>
          <span>by Project Author</span>
        </div>
        <div className='support-this-project'>
          <div className='support-this-project-inner'>
            <div className='support-this-project-left'>
              <h2>Support this project</h2>
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
