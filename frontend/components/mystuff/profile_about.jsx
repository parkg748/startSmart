import React from 'react';
import { Link } from 'react-router-dom';

function ProfileAbout({ biography }) {
  return (
    <div className='profile-about-container'>
      <div className='profile-about-container-inner'>
        <div className='profile-about-container-biography'>
          <div className='profile-about-container-biography-header'>Biography</div>
          <div className='profile-about-container-biography-content'>
            <div className='profile-about-time-creator'>6-time creator</div>
            <p>{Object.values(this.props.user)[0].biography ? Object.values(this.props.user)[0].biography : ''}</p>
          </div>
        </div>
        <div className='profile-about-container-biography'>
          <hr></hr>
          <div className='profile-about-container-websites'>
            <div className='profile-about-container-biography-header'>Websites</div>
            <p>
              <ul>
                <li>daron.ceciliatan.com</li>
                <li>daron.ceciliatan.com</li>
                <li>daron.ceciliatan.com</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
