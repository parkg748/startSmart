import React from 'react';
import IFrame from './iframe';

function Campaign({ content, styles, onClick, addGreenBorder, greenBorder, currencyGreenBorder, blackBorder }) {
  return (
    <div className='preview-bottom-front'>
      <div className='project-front-body'>
        <div className='project-front-body-inner'>
          <div className='project-front-body-inner-inner'>
            <div className='project-front-body-left'>
              <h3>About</h3>
              <h1><IFrame content={content} stylesheets={styles}/></h1>
              <h3>Risks and challenges</h3>
              <a>Learn about accountability on StartSmart</a>
              <div className='question-about-project'>
                <p>Questions about this project? <a>Check out the FAQ</a></p>
              </div>
              <div className='report-this-project'>
                <button>Report this project to StartSmart</button>
              </div>
            </div>
            <div className='project-front-body-right'>
              <h3>Support</h3>
              <ul>
                <li className={`${onClick} ${blackBorder}`}>
                  <div className='make-a-pledge-inner'>Make a pledge without a reward</div>
                  <div className='make-a-pledge-inner-inner'>
                    <div className='make-a-pledge-input'>
                      <div className='make-a-pledge-input-inner'>
                        <div className='make-a-pledge-input-inner-inner'>
                          <div className={`make-a-pledge-currency ${currencyGreenBorder}`}>£</div>
                          <input className={`${greenBorder}`} onClick={addGreenBorder} type='text' placeholder='10' />
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

export default Campaign;
