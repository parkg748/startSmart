import React from 'react';

function UserInfo({ userInfoModal, closeUserBio, name, biography, city, state, lastLoggedInMonth, lastLoggedInDay, lastLoggedInYear }) {
  return (
    <div className={userInfoModal}>
      <i className="preview-user-info-close fas fa-times" onClick={closeUserBio}></i>
      <div className='preview-user-info-one'>
        <div className='preview-user-info-two'>
          <h1>About the creator</h1>
          <div className='preview-user-info-three'>
            <div className='preview-user-info-four'>
              <h3>{name}</h3>
              <span>{city}, {state}</span>
            </div>
            <div className='preview-user-info-biography'>
              <span>{biography}</span>
            </div>
            <div className='preview-user-info-five'>
              <div className='preview-user-info-list'>
                <i className="preview-close fas fa-times"></i>
                <span>Identity not verified</span>
              </div>
              <div className='preview-user-info-list'>
                <i className="fas fa-lock"></i>
                <span>Last login {lastLoggedInMonth} {lastLoggedInDay} {lastLoggedInYear}</span>
              </div>
              <div className='preview-user-info-list'>
                <i className="preview-facebook-user-info fab fa-facebook"></i>
                <span>Not connected</span>
              </div>
              <div className='preview-user-info-list'>
                <i className="preview-user-info-s fab fa-stripe-s"></i>
                <span><a>7 created</a> · <a>0 backed</a></span>
              </div>
            </div>
            <button>Contact me</button>
          </div>
        </div>
      </div>
      <p onClick={closeUserBio}>Close</p>
    </div>
  );
}

export default UserInfo;
