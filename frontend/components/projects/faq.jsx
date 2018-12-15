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
              <h3>Support</h3>
              <ul>
                <li className={onClick}>
                  <div className='make-a-pledge-inner'>Make a pledge without a reward</div>
                  <div className='make-a-pledge-inner-inner'>
                    <div className='make-a-pledge-input'>
                      <div className='make-a-pledge-input-inner'>
                        <div className='make-a-pledge-input-inner-inner'>
                          <div className='make-a-pledge-currency'>£</div>
                          <input type='text' value='10' />
                        </div>
                        <div className='make-a-pledge-currency-disclaimer'>ABOUT $13</div>
                      </div>
                      <button>Continue</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
