import React from 'react';
import IFrame from './iframe';

function FAQ({ content, styles, onClick }) {
  return (
    <div className='preview-bottom-front'>
      <div className='project-front-body'>
        <div className='project-front-body-inner'>
          <div className='project-front-body-inner-inner'>
            <div className='project-front-faq-body-left'>
              <h3>Frequently Asked Questions</h3>
              <h1>
                <ul>
                  <li>
                    <a>
                      <span>Can you tell me more about the mealworm?</span>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </h1>
            </div>
            <div className='project-front-body-right'>
              <div className='project-front-body-right-inner'>
                <p>Don't see the answer to your question? Ask the project creator directly.</p>
                <button>Ask a question</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
