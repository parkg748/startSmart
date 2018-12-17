import React from 'react';
import {Link} from 'react-router-dom';

function Comments({ content, styles, onClick }) {
  return (
    <div className='preview-bottom-front'>
      <div className='project-front-body'>
        <div className='project-front-body-inner'>
          <div className='project-front-comments-body-inner-inner'>
            <div className='project-front-comments-body-left'>
              <p>Only backers can post comments. <Link to='/login'>Login</Link></p>
              <ul>
                <li>
                  <div className='project-comments-box'>
                    <div className='project-comments-box-inner'>
                      <img />
                      <div className='project-comments-box-user'>
                        <span>Florian Nock</span>
                        <p>5 days ago</p>
                      </div>
                    </div>
                    <div className='project-comments-box-inner-inner'>What a great job ! Thanks for putting this out to the universe. We need more of this kind of productsufeuwfhwoufeghwouefgwuoefgwgfwufg</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='project-front-comments-body-right'>
              <div className='project-front-comments-body-right-inner'>
                <p>Use this space to cheer the creator along, and talk to your fellow backers.</p>
                <div>
                  <p className='have-a-question'>Have a question?</p>
                  <a>Check out the FAQ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
