import React from 'react';
import {Link} from 'react-router-dom';

class StartProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='start-project-content'>
        <div className='start-project-middle'>
          <div className='start-project-top'>
            <div className='start-project-inner'>
              <div className='start-project-1'>
                <h1>Bring your creative project to life.</h1>
                <div className='green-box-1'><Link to='/start'>Start a project</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartProject;
