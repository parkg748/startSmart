import React from 'react';
import { Link } from 'react-router-dom';

function ProfileAbout({ biography, websites }) {

  return (
    <div className='profile-about-container'>
      <div className='profile-about-container-inner'>
        <div className='profile-about-container-biography'>
          <div className='profile-about-container-biography-header'>Biography</div>
          <div className='profile-about-container-biography-content'>
            <div className='profile-about-time-creator'>6-time creator</div>
            <p>{biography}</p>
          </div>
        </div>
        <div className='profile-about-container-biography'>
          <hr></hr>
          <div className='profile-about-container-websites'>
            <div className='profile-about-container-biography-header'>Websites</div>
            <p>
              <ul>
                {websites.map(el => <li>el</li>)}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
