import React from 'react';
import {Link} from 'react-router-dom';

function FeaturedProjects({ mainHeart, mainHeartFill, projects, users, addToSavedProjectsMainHeart, addToSavedProjectsFirstHeart, addToSavedProjectsSecondHeart, addToSavedProjectsThirdHeart, firstHeart, secondHeart, thirdHeart }) {
  return (
    <div className='featured-project-recommended'>
      <div className='featured-project-recommended-inner'>
        <div className='featured-project-recommended-left'>
          <h3>FEATURED PROJECT</h3>
          <div id={`${mainHeart}`} className='featured-project-recommended-left-main-heart' onClick={addToSavedProjectsMainHeart}>
            <i className={`${mainHeartFill} fa-heart`}></i>
          </div>
          <div id='category-recommended-remind-me-first'>Remind Me</div>
          <Link to={`/users/${users.length > 0 ? users.slice(-1)[0].id : ''}/projects/${projects.length > 0 ? projects.slice(-1)[0].id : ''}/front`}><img src={projects.length > 0 ? projects.slice(-1)[0].imageUrl : ''}/></Link>
          <div className='featured-project-recommended-left-gray-bar'>
            <div className='featured-project-recommended-left-green-bar'></div>
          </div>
          <h1>{projects.length > 0 ? projects.slice(-1)[0].title : ''}</h1>
          <p>{projects.length > 0 ? projects.slice(-1)[0].description : ''}</p>
          <div className='featured-project-recommended-left-main-author'>by <a>{users.length > 0 ? users.slice(-1)[0].name : ''}</a></div>
        </div>
        <div className='featured-project-recommended-right'>
          <h3>RECOMMENDED</h3>
          <ul>
            <li>
              <img src={projects.length > 0 ? projects.slice(-2)[0].imageUrl : ''}/>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to='/'>{projects.length > 0 ? projects.slice(-2)[0].title : ''}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <a>{users.length > 0 ? users.slice(-2)[0].name : ''}</a></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsFirstHeart}>
                  <i className={`${firstHeart} fa-heart`}></i>
                </div>
                {firstHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
            <li>
              <img src={projects.length > 0 ? projects.slice(-3)[0].imageUrl : ''}/>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to='/'>{projects.length > 0 ? projects.slice(-3)[0].title : ''}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <a>{users.length > 0 ? users.slice(-3)[0].name : ''}</a></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsSecondHeart}>
                  <i className={`${secondHeart} fa-heart`}></i>
                </div>
                {secondHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
            <li>
              <img src={projects.length > 0 ? projects.slice(-4)[0].imageUrl : ''}/>
              <div className='feature-project-recommended-content'>
                <Link className='feature-project-recommended-content-title' to='/'>{projects.length > 0 ? projects.slice(-4)[0].title : ''}</Link>
                <span>137% funded</span>
                <div className='feature-project-recommended-content-author'>By <a>{users.length > 0 ? users.slice(-4)[0].name : ''}</a></div>
              </div>
              <div className='feature-project-recommended-heart-container'>
                <div id="category-recommended-heart-id" onClick={addToSavedProjectsThirdHeart}>
                  <i className={`${thirdHeart} fa-heart`}></i>
                </div>
                {thirdHeart === 'category-recommended-right-heart far' ? <div id='category-recommended-remind-me'>Remind Me</div> : <div id='category-recommended-saved'>Saved</div>}
              </div>
            </li>
          </ul>
          <div className='feature-project-recommended-view-more'>View more projects</div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
