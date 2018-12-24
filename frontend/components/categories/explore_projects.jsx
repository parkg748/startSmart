import React from 'react';
import {Link} from 'react-router-dom';

function ExploreProjects({ title, viewmore, project, user, firstProject, firstProjectFill, addToSavedProjects }) {
  let firstproject = project[0] ? project[0] : '';
  let secondproject = project[1] ? project[1] : '';
  let thirdproject = project[2] ? project[2] : '';
  let fourthproject = project[3] ? project[3] : '';
  let firstuser = user[0] ? user[0] : '';
  let seconduser = user[1] ? user[1] : '';
  let thirduser = user[2] ? user[2] : '';
  let fourthuser = user[3] ? user[3] : '';
  let firstBar = '';
  let secondBar = '';
  let thirdBar = '';
  let fourthBar = '';
  firstproject.fundingGoal === null ? firstBar = 0 : firstBar > 100 ? firstBar = 100 : firstBar = Math.floor((firstproject.pledgeAmt / firstproject.fundingGoal) * 100);
  secondproject.fundingGoal === null ? secondBar = 0 : secondBar > 100 ? secondBar = 100 : secondBar = Math.floor((secondproject.pledgeAmt / secondproject.fundingGoal) * 100);
  thirdproject.fundingGoal === null ? thirdBar = 0 : thirdBar > 100 ? thirdBar = 100 : thirdBar = Math.floor((thirdproject.pledgeAmt / thirdproject.fundingGoal) * 100);
  fourthproject.fundingGoal === null ? fourthBar = 0 : fourthBar > 100 ? fourthBar = 100 : fourthBar = Math.floor((fourthproject.pledgeAmt / fourthproject.fundingGoal) * 100);
  return (
    <div className='explore-theater'>
      <div className='explore-theater-inner'>
        <div className='explore-theater-inner-inner'>
          <div className='explore-theater-header'>
            <h3>{title}</h3>
            <div className='explore-theater-header-view-more'><Link to={`/discover/categories/${viewmore}`}>View more</Link></div>
          </div>
          <div className='explore-theater-columns'>
            <div className='explore-theater-column'>
              <Link className='explore-theater-column-image' to={firstproject && firstuser ? `/users/${firstuser.id}/projects/${firstproject.id}/front` : '/'}>
                <div id={`${firstProject}`} className='explore-project-main-heart' onClick={addToSavedProjects}>
                  <i className={`${firstProjectFill} fa-heart`}></i>
                </div>
                <div id='explore-project-remind-me-first'>Remind Me</div>
                <img src={firstproject.imageUrl}/>
              </Link>
              <div className='explore-theater-column-grey-bar'>
                <div className='explore-theater-column-green-bar' style={{width: `${firstBar}%`}}></div>
              </div>
              <Link to={firstproject && firstuser ? `/users/${firstuser.id}/projects/${firstproject.id}/front` : '/'}><h1>{firstproject.title}</h1></Link>
              <p>{firstproject.description}</p>
              <div className='explore-theater-column-author'>By <span><Link to={`/profile/${firstuser.id}`}>{firstuser.name}</Link></span></div>
            </div>
            <div className='explore-theater-column'>
              <Link className='explore-theater-column-image' to={secondproject && seconduser ? `/users/${seconduser.id}/projects/${secondproject.id}/front` : '/'}>
                <div id={`${firstProject}`} className='explore-project-main-heart' onClick={addToSavedProjects}>
                  <i className={`${firstProjectFill} fa-heart`}></i>
                </div>
                <div id='explore-project-remind-me-first'>Remind Me</div>
                <img src={secondproject.imageUrl}/>
              </Link>
              <div className='explore-theater-column-grey-bar'>
                <div className='explore-theater-column-green-bar' style={{width: `${secondBar}%`}}></div>
              </div>
              <Link to={secondproject && seconduser ? `/users/${seconduser.id}/projects/${secondproject.id}/front` : '/'}><h1>{secondproject.title}</h1></Link>
              <p>{secondproject.description}</p>
              <div className='explore-theater-column-author'>By <span><Link to={`/profile/${seconduser.id}`}>{seconduser.name}</Link></span></div>
            </div>
            <div className='explore-theater-column'>
              <Link className='explore-theater-column-image' to={thirdproject && thirduser ? `/users/${thirduser.id}/projects/${thirdproject.id}/front` : '/'}>
                <div id={`${firstProject}`} className='explore-project-main-heart' onClick={addToSavedProjects}>
                  <i className={`${firstProjectFill} fa-heart`}></i>
                </div>
                <div id='explore-project-remind-me-first'>Remind Me</div>
                <img src={thirdproject.imageUrl}/>
              </Link>
              <div className='explore-theater-column-grey-bar'>
                <div className='explore-theater-column-green-bar' style={{width: `${thirdBar}%`}}></div>
              </div>
              <Link to={thirdproject && thirduser ? `/users/${thirduser.id}/projects/${thirdproject.id}/front` : '/'}><h1>{thirdproject.title}</h1></Link>
              <p>{thirdproject.description}</p>
              <div className='explore-theater-column-author'>By <span><Link to={`/profile/${thirduser.id}`}>{thirduser.name}</Link></span></div>
            </div>
            <div className='explore-theater-column'>
              <Link className='explore-theater-column-image' to={fourthproject && fourthuser ? `/users/${fourthuser.id}/projects/${fourthproject.id}/front` : '/'}>
                <div id={`${firstProject}`} className='explore-project-main-heart' onClick={addToSavedProjects}>
                  <i className={`${firstProjectFill} fa-heart`}></i>
                </div>
                <div id='explore-project-remind-me-first'>Remind Me</div>
                <img src={fourthproject.imageUrl}/>
              </Link>
              <div className='explore-theater-column-grey-bar'>
                <div className='explore-theater-column-green-bar' style={{width: `${fourthBar}%`}}></div>
              </div>
              <Link to={fourthproject && fourthuser ? `/users/${fourthuser.id}/projects/${fourthproject.id}/front` : '/'}><h1>{fourthproject.title}</h1></Link>
              <p>{fourthproject.description}</p>
              <div className='explore-theater-column-author'>By <span><Link to={`/profile/${fourthuser.id}`}>{fourthuser.name}</Link></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProjects;
