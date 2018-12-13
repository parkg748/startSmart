import React from 'react';
import { Link } from 'react-router-dom';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCaret: 'frequently-asked-questions-caret-right',
      secondCaret: 'frequently-asked-questions-caret-right',
      thirdCaret: 'frequently-asked-questions-caret-right',
      fourthCaret: 'frequently-asked-questions-caret-right',
      fifthCaret: 'frequently-asked-questions-caret-right',
      sixthCaret: 'frequently-asked-questions-caret-right',
      firstSpan: '',
      secondSpan: '',
      thirdSpan: '',
      fourthSpan: '',
      fifthSpan: '',
      sixthSpan: '',
      firstDiv: 'location-none-display',
      secondDiv: 'location-none-display',
      thirdDiv: 'location-none-display',
      fourthDiv: 'location-none-display',
      fifthDiv: 'location-none-display',
      sixthDiv: 'location-none-display'
    };
    this.revealAnswers = this.revealAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.userId, this.props.match.params.projectId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  revealAnswers(num) {
    if (num === 'first' && this.state.firstCaret === 'frequently-asked-questions-caret-right') {
      this.setState({firstCaret: 'frequently-asked-questions-caret-down', firstSpan: 'font-weight-500', firstDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'second' && this.state.secondCaret === 'frequently-asked-questions-caret-right') {
      this.setState({secondCaret: 'frequently-asked-questions-caret-down', secondSpan: 'font-weight-500', secondDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'third' && this.state.thirdCaret === 'frequently-asked-questions-caret-right') {
      this.setState({thirdCaret: 'frequently-asked-questions-caret-down', thirdSpan: 'font-weight-500', thirdDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'fourth' && this.state.fourthCaret === 'frequently-asked-questions-caret-right') {
      this.setState({fourthCaret: 'frequently-asked-questions-caret-down', fourthSpan: 'font-weight-500', fourthDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'fifth' && this.state.fifthCaret === 'frequently-asked-questions-caret-right') {
      this.setState({fifthCaret: 'frequently-asked-questions-caret-down', fifthSpan: 'font-weight-500', fifthDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'sixth' && this.state.sixthCaret === 'frequently-asked-questions-caret-right') {
      this.setState({sixthCaret: 'frequently-asked-questions-caret-down', sixthSpan: 'font-weight-500', sixthDiv: 'frequently-asked-questions-answer'});
    } else if (num === 'first' && this.state.firstCaret === 'frequently-asked-questions-caret-down') {
      this.setState({firstCaret: 'frequently-asked-questions-caret-right', firstSpan: '', firstDiv: 'location-none-display'});
    } else if (num === 'second' && this.state.secondCaret === 'frequently-asked-questions-caret-down') {
      this.setState({secondCaret: 'frequently-asked-questions-caret-right', secondSpan: '', secondDiv: 'location-none-display'});
    } else if (num === 'third' && this.state.thirdCaret === 'frequently-asked-questions-caret-down') {
      this.setState({thirdCaret: 'frequently-asked-questions-caret-right', thirdSpan: '', thirdDiv: 'location-none-display'});
    } else if (num === 'fourth' && this.state.fourthCaret === 'frequently-asked-questions-caret-down') {
      this.setState({fourthCaret: 'frequently-asked-questions-caret-right', fourthSpan: '', fourthDiv: 'location-none-display'});
    } else if (num === 'fifth' && this.state.fifthCaret === 'frequently-asked-questions-caret-down') {
      this.setState({fifthCaret: 'frequently-asked-questions-caret-right', fifthSpan: '', fifthDiv: 'location-none-display'});
    } else if (num === 'sixth' && this.state.sixthCaret === 'frequently-asked-questions-caret-down') {
      this.setState({sixthCaret: 'frequently-asked-questions-caret-right', sixthSpan: '', sixthDiv: 'location-none-display'});
    }
  }

  render() {
    return (
      <div>
        <nav className='pledge-header'>
          <Link to='/'><img className='logo-pledge' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
        </nav>
        <div className='pledge-title'>
          <a>{Object.values(this.props.project).length === 0 ? '' : Object.values(this.props.project)[0].title}</a>
          <span>by {Object.values(this.props.user).length === 1 ? '' : Object.values(this.props.user)[0].name}</span>
        </div>
        <div className='support-this-project'>
          <div className='support-this-project-inner'>
            <div className='support-this-project-left'>
              <h2>Support this project</h2>
              <div className='make-pledge-without-reward'>
                <input type='radio' />
                <div className='make-pledge-without-reward-content'>
                  Make a pledge without a reward
                </div>
              </div>
              <ul>
                <li>
                  <input type='radio' />
                  <div className='make-pledge-with-reward-content'>
                    <div className='make-pledge-with-reward-left'>
                      <h2>$10 or more</h2>
                      <h3>Thank you!</h3>
                      <div className='make-pledge-with-reward-desc'>A public shoutout and thank you on our website!</div>
                    </div>
                    <div className='make-pledge-with-reward-right'>
                      <div className='support-this-project-estimated-delivery'>
                        <span>ESTIMATED DELIVERY</span>
                        <p>Aug 2019</p>
                      </div>
                      <div className='ships-to'>
                        <span>SHIPS TO</span>
                        <p>Anywhere in the world</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='support-this-project-right'>
              <div className='startsmart-is-not-store'>
                <h6>
                  <span>StartSmart is not a store.</span>
                  <p>It's a way to bring creative projects to life.</p>
                </h6>
                <p>StartSmart does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
                <a>Learn more about accountability</a>
              </div>
              <div className='frequently-asked-questions'>
                <h6>FREQUENTLY ASKED QUESTIONS</h6>
                <ul>
                  <li>
                    <i className={`${this.state.firstCaret} fas fa-caret-right`}></i>
                    <span className={`${this.state.firstSpan}`} onClick={() => this.revealAnswers('first')}>How do I pledge?</span>
                    <div className={`${this.state.firstDiv}`}>Enter your pledge amount and select a reward. Then, enter your payment information to complete the checkout process.</div>
                  </li>
                  <li>
                    <i className={`${this.state.secondCaret} fas fa-caret-right`}></i>
                  <span className={`${this.state.secondSpan}`} onClick={() => this.revealAnswers('second')}>When is my card charged?</span>
                <div className={`${this.state.secondDiv}`}>If this project is successfully funded, your card will be charged on Fri, December 28 2018 3:19 AM PST, along with all the other backers of this project.</div>
                  </li>
                  <li>
                    <i className={`${this.state.thirdCaret} fas fa-caret-right`}></i>
                  <span className={`${this.state.thirdSpan}`} onClick={() => this.revealAnswers('third')}>So I'm only charged if funding succeeds?</span>
                <div className={`${this.state.thirdDiv}`}>Yes! That's part of what makes Kickstarter special. If a project isn't successfully funded, no one pays anything.</div>
                  </li>
                  <li>
                    <i className={`${this.state.fourthCaret} fas fa-caret-right`}></i>
                  <span className={`${this.state.fourthSpan}`} onClick={() => this.revealAnswers('fourth')}>What can others see about my pledge?</span>
                <div className={`${this.state.fourthDiv}`}>The project will be added to the list of backings on your profile page, but the amount you pledge, and the reward you choose, will not be made public.</div>
                  </li>
                  <li>
                    <i className={`${this.state.fifthCaret} fas fa-caret-right`}></i>
                  <span className={`${this.state.fifthSpan}`} onClick={() => this.revealAnswers('fifth')}>What if I want to change my pledge?</span>
                <div className={`${this.state.fifthDiv}`}>You can change or cancel your pledge anytime before Fri, December 28 2018 3:19 AM PST.</div>
                  </li>
                  <li>
                    <i className={`${this.state.sixthCaret} fas fa-caret-right`}></i>
                  <span className={`${this.state.sixthSpan}`} onClick={() => this.revealAnswers('sixth')}>If this project is funded, how do I get my reward?</span>
                <div className={`${this.state.sixthDiv}`}>When your reward is ready, Wil Petre & Chiaki Murata will send you a survey via email to request any info needed to deliver your reward (mailing address, T-shirt size, etc).</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pledge;
