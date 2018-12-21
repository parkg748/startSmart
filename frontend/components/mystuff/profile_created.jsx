import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCreated({ projects, user }) {
  let projectList = [];
  for (let i = 0; i < projects.length; i++) {
    projectList.push(<div className='profile-created-section'>
      <div className='profile-created-section-inner'>
        <img src={projects[i].imageUrl}/>
        <div className='profile-created-section-content'>
          <div className='profile-created-section-content-header'>
            <div className='profile-created-section-content-header-inner'>
              <h1>{projects[i].title}</h1>
              <p>{projects[i].description}</p>
            </div>
          </div>
          <div className='profile-created-section-author'>
            <div className='profile-created-section-author-inner'>
              <div className='profile-created-section-author-inner-inner'>
                <img src={user.profileUrl}/>
                <div className='profile-created-section-author-inner-inner-inner'>
                  by <a>{user.name}</a> and 576 backers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <div className='profile-created-container'>
      <ul>
        <div className='profile-created-inner'>
          {projectList}
        </div>
      </ul>
    </div>
  );
}

export default ProfileCreated;
