import React from 'react';
import { Link } from 'react-router-dom';

function EditPageNavbar({ userId, projectId, buttonHighlight, completed }) {
  let basic = '';
  let rewards = '';
  let story = '';
  let aboutyou = '';
  let account = '';
  let preview = '';
  let basicCheck = '#DCDEDD';
  let rewardsCheck = '#DCDEDD';
  let storyCheck = '#DCDEDD';
  let aboutYouCheck = '#DCDEDD';
  let accountCheck = '#DCDEDD';
  completed.forEach(el => {
    if (el === 'basic') { basicCheck = '#007460'; }
    else if (el === 'reward') { rewardsCheck = '#007460'; }
    else if (el === 'story') { storyCheck = '#007460'; }
    else if (el === 'aboutyou') { aboutYouCheck = '#007460'; }
    else if (el === 'account') { accountCheck = '#007460'; }
  });
  if (buttonHighlight === 'basic-page-button-highlight') {
    basic = 'basic-page-button-highlight';
  } else if (buttonHighlight === 'rewards-page-button-highlight') {
    rewards = 'rewards-page-button-highlight';
  } else if (buttonHighlight === 'story-page-button-highlight') {
    story = 'story-page-button-highlight';
  } else if (buttonHighlight === 'aboutyou-page-button-highlight') {
    aboutyou = 'aboutyou-page-button-highlight';
  } else if (buttonHighlight === 'account-page-button-highlight') {
    account = 'account-page-button-highlight';
  } else if (buttonHighlight === 'preview-page-button-highlight') {
    preview = 'preview-page-button-highlight';
  }
  return (
    <div className='edit-page-navbar'>
      <div className='edit-page-navbar-inner'>
        <ul>
          <li className='exit-editor'><Link to={`/users/${userId}/projects/${projectId}`}><i className="fas fa-arrow-left"></i>Exit editor</Link></li>
          <li className='edit-options'>
            <ul>
              <li className={`edit-option-basics ${basic}`}><Link to={`/users/${userId}/projects/${projectId}/basics`}><i style={{color: `${basicCheck}`}} className="edit-circle-check fas fa-check-circle"></i>Basics</Link></li>
              <li className={`edit-option-rewards ${rewards}`}><Link to={`/users/${userId}/projects/${projectId}/rewards`}><i style={{color: `${rewardsCheck}`}} className="edit-circle-check fas fa-check-circle"></i>Rewards</Link></li>
              <li className={`edit-option-story ${story}`}><Link to={`/users/${userId}/projects/${projectId}/story`}><i style={{color: `${storyCheck}`}} className="edit-circle-check fas fa-check-circle"></i>Story</Link></li>
              <li className={`edit-option-about-you ${aboutyou}`}><Link to={`/users/${userId}/projects/${projectId}/about-you`}><i style={{color: `${aboutYouCheck}`}} className="edit-circle-check fas fa-check-circle"></i>About you</Link></li>
              <li className={`edit-option-account ${account}`}><Link to={`/users/${userId}/projects/${projectId}/account`}><i style={{color: `${accountCheck}`}} className="edit-circle-check fas fa-check-circle"></i>Account</Link></li>
              <li className={`preview ${preview}`}><Link to={`/users/${userId}/projects/${projectId}/edit`}>Preview</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EditPageNavbar;
