import React from 'react';

function Updates({ projectCreatedYear, projectCreatedMonth, projectCreatedDay }) {
  return (
    <div className='preview-bottom-front'>
      <div className='project-front-body'>
        <div className='project-front-body-inner'>
          <div className='project-front-body-inner-inner'>
            <div className='project-front-body-updates-left'>
              <a>
                <p>December 3, 2018</p>
                <div className='project-front-body-updates-left-title'>
                  <span>30% of our Goal and more than 200 backers! You ROCK ! now let´s keep wriggling ;)</span>
                </div>
                <div className='project-front-body-updates-left-description'>To all our awesome Explorers out there! <strong>A BIG THANK YOU</strong>  for all your support! We are 12 days in and have sold almost 200 Hive Explorers! We are so... <u>Read more</u></div>
                <div className='project-updates-likes'>2 likes</div>
              </a>
            </div>
            <div className='project-updates-timeline'>
              <div className='project-updates-timeline-inner'>Nov 2018</div>
            </div>
            <div className='project-updates-project-launched'>
              <div className='project-updates-project-launched-inner'>
                <p>{projectCreatedMonth} {projectCreatedDay}, {projectCreatedYear}</p>
                <h2>Project launched</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
