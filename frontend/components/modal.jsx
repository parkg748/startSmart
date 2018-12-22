import React from 'react';
import {Link} from 'react-router-dom';

function Modal({ displayProfileMenu, user, userId, sessionId, projectId, logoutUser }) {
  if (getState().entities.users.user === null || getState().entities.users.currentUser) return null;
  let currentUserProjects = Object.values(getState().entities.project).filter(project => project.userId === getState().session.id);
  let currentUserName = '';
  if (Object.values(getState().entities.users).length > 2) {
    Object.values(getState().entities.users).forEach(user => {
      if (user.id === sessionId) {
        currentUserName = user.name;
      }
    });
  } else {
    currentUserName = Object.values(getState().entities.users)[0].name;
  }
  return (
    <div className={`profile-icon-menu ${displayProfileMenu}`}>
      <div className='profile-menu-header'>{currentUserName}</div>
      <div className='profile-menu-body'>
        <div className='profile-menu-body-left'>
          <div className='profile-menu-body-left-header'>MY STUFF</div>
          <ul>
            <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
            <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
            <li><Link to='/recommendations'>Recommended for you</Link></li>
            <li><Link to='/messages/inbox'>Messages</Link></li>
            <li><Link to='/activity'>Activity</Link></li>
            <li><Link to={`/profile/${userId}`}>Profile</Link></li>
            <li><Link to='/profile/backings'>Backed projects</Link></li>
            <li><Link to='/profile/projects'>My projects</Link></li>
            <li><Link to='/profile/starred'>Saved projects</Link></li>
          </ul>
        </div>
        <div className='profile-menu-body-middle'>
          <div className='profile-menu-body-left-header'>SETTINGS</div>
          <ul>
            <li><Link to='/settings/account'>Account</Link></li>
            <li><Link to='/settings/profile'>Edit profile</Link></li>
            <li><Link to='/settings/notifications'>Notifications</Link></li>
          </ul>
        </div>
        <div className='profile-menu-body-right'>
          <div className='profile-menu-body-left-header'>MY PROJECTS</div>
          <ul>
            {currentUserProjects.slice(0, 5).map((project, idx) => {
              if (project.imageUrl === '') {
                return <li key={idx}>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'>
                      <img src='https://i.imgur.com/s5GppRq.png'/>
                    </div>
                    <span><Link to={`/users/${sessionId}/projects/${project.id}`}>Untitled</Link></span>
                  </div>
                </li>
              } else {
                return <li key={idx}>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'>
                      <Link to={`/users/${sessionId}/projects/${project.id}`}><img src={project.imageUrl}/></Link>
                    </div>
                    <span><Link to={`/users/${sessionId}/projects/${project.id}`}>{project.title}</Link></span>
                  </div>
                </li>
              }
            })}
          </ul>
        </div>
      </div>
      <div className='profile-menu-footer'><button onClick={logoutUser}>Log out</button></div>
    </div>
  );
}

export default Modal;
