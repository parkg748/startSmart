import React from 'react';

function FundingDuration({ showCalendar, update, calendar, duration, addBlackBorder, durationInput }) {
  return (
    <div>
      <fieldset id='eta-group'>
        <div className='funding-duration'>
          <div className='funding-duration-content'>
            <div className='project-image-inner-title'>Funding duration</div>
            <div className='funding-duration-content-inner'>
              <div className='funding-duration-content-form'>
                <div className='funding-duration-content-form-inner'>
                  <div className='number-of-days'>
                    <input name='eta-group' onClick={() => showCalendar('hide-calendar')} type='radio' defaultChecked />
                    <span>Number of days</span>
                  </div>
                  <div className='number-of-days-input'>
                    <div className={`number-of-days-input-inner ${durationInput}`}>
                      <input onClick={addBlackBorder} onChange={update('duration')} type='text' defaultValue={duration} />
                      <div className='number-of-days-input-inner-inner'>Up to 60 days, but we recommend 30 or fewer</div>
                    </div>
                  </div>
                </div>
                <div className='end-on-date'>
                  <div className='end-on-date-inner'>
                    <input name='eta-group' onClick={() => showCalendar('show-calendar')} onChange={update('end-of-date')} type='radio' />
                    <span>End on date & time</span>
                  </div>
                  {calendar}
                </div>
                <div className='funding-duration-disclaimer'>
                  <p>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default FundingDuration;
