import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBacked({}) {
  return (
    <div className='profile-container-footer'>
      <div className='profile-container-footer-one'>
        <p>
          <strong>You haven't backed any projects. </strong>
          Let's change that!
          <span className='discover-projects'><Link className='policy-link' to='/'>Discover projects</Link></span>
        </p>
      </div>
    </div>
  );
}

export default ProfileBacked;
