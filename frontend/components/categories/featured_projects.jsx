import React from 'react';
import {Link} from 'react-router-dom';

function FeaturedProjects({ mainHeart, mainHeartFill, projects, users, addToSavedProjectsMainHeart, addToSavedProjectsFirstHeart, addToSavedProjectsSecondHeart, addToSavedProjectsThirdHeart, firstHeart, secondHeart, thirdHeart }) {
  let firstUser = '';
  let secondUser = '';
  let thirdUser = '';
  let fourthUser = '';
  let firstProject = '';
  let secondProject = '';
  let thirdProject = '';
  let fourthProject = '';
  if (users.length > 0) {
    firstUser = users.slice(-1)[0];
    secondUser = users.slice(-2)[0];
    thirdUser = users.slice(-3)[0];
    fourthUser = users.slice(-4)[0];
  }
  if (projects.length > 0) {
    firstProject = projects.slice(-1)[0];
    secondProject = projects.slice(-2)[0];
    thirdProject = projects.slice(-3)[0];
    fourthProject = projects.slice(-4)[0];
  }
  return (
    <div className='featured-project-recommended'>
      <div className='featured-project-recommended-inner'>
        <div className='featured-project-recommended-left'>
          <h3>FEATURED PROJECT</h3>
          <div id={`${mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={addToSavedProjectsMainHeart}>
            <i className={`${mainHeartFill} fa-heart`}></i>
          </div>
          <div id='category-recommended-remind-me-first'>Remind Me</div>
          <Link to={`/users/${firstUser.id}/projects/${firstProject.id}/front`}><img src={firstProject.imageUrl}/></Link>
          <div className='featured-project-recommended-left-gray-bar'>
            <div className='featured-project-recommended-left-green-bar'></div>
          </div>
          <Link to={`/users/${firstUser.id}/projects/${firstProject.id}/front`}><h1>{firstProject.title}</h1></Link>
          <p>{firstProject.description}</p>
          <div className='featured-project-recommended-left-main-author'>by <Link to={`/profile/${firstUser.id}`}>{firstUser.name}</Link></div>
        </div>
        <div className='featured-project-recommended-right'>
          <h3>RECOMMENDED</h3>
          <ul>
            <li>
              <Link className='feature-project-recommended-image' to={`/users/${secondUser.id}/projects/${secondProject.id}/front`}><img src={secondProject.imageUrl}/></Link>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to={`/users/${secondUser.id}/projects/${secondProject.id}/front`}>{secondProject.title}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <Link to={`/profile/${secondUser.id}`}>{secondUser.name}</Link></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsFirstHeart}>
                  <i className={`${firstHeart} fa-heart`}></i>
                </div>
                {firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
            <li>
              <Link className='feature-project-recommended-image' to={`/users/${thirdUser.id}/projects/${thirdProject.id}/front`}><img src={thirdProject.imageUrl}/></Link>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to={`/users/${thirdUser.id}/projects/${thirdProject.id}/front`}>{thirdProject.title}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <Link to={`/profile/${thirdUser.id}`}>{thirdUser.name}</Link></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsSecondHeart}>
                  <i className={`${secondHeart} fa-heart`}></i>
                </div>
                {secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
            <li>
              <Link className='feature-project-recommended-image' to={`/users/${fourthUser.id}/projects/${fourthProject.id}/front`}><img src={fourthProject.imageUrl}/></Link>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to={`/users/${fourthUser.id}/projects/${fourthProject.id}/front`}>{fourthProject.title}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <a>{fourthUser.name}</a></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsThirdHeart}>
                  <i className={`${thirdHeart} fa-heart`}></i>
                </div>
                {thirdHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
          </ul>
          <div className='feature-project-recommended-view-more'><Link to='/recommendations'>View more projects</Link></div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
