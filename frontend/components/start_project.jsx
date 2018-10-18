import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class StartProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
        navbarWidth = 'navbar-width';
      } else {
        profile = <Link to='/login' className='login'>Sign in</Link>;
        }
    return (
      <div>
        <nav>
          <section className='explore-project'>
            <Link to='/explore' className='explore'>Explore</Link>
            <Link to='/learn' className='project'>Start a project</Link>
          </section>
          <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className={`search-signin ${navbarWidth}`}>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div className={`profile-icon-menu ${this.state.displayProfileMenu}`}>
          <div className='profile-menu-header'>Grace</div>
          <div className='profile-menu-body'>
            <div className='profile-menu-body-left'>
              <div className='profile-menu-body-left-header'>MY STUFF</div>
              <ul>
                <li><Link to='/profile/following/find_creators'>Follow creators</Link></li>
                <li><Link to='/profile/following/welcome'>Follow Facebook friends</Link></li>
                <li><Link to='/recommendations'>Recommended for you</Link></li>
                <li><Link to='/messages/inbox'>Messages</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to={`/profile/${Object.values(this.props.user)[0].id}`}>Profile</Link></li>
                <li><Link to='/profile/backings'>Backed projects</Link></li>
                <li><Link to='/profile/projects'>My projects</Link></li>
                <li><Link to='/profile/starred'>Saved projects</Link></li>
              </ul>
            </div>
            <div className='profile-menu-body-middle'>
              <div className='profile-menu-body-left-header'>SETTINGS</div>
              <ul>
                <li><Link to='/settings/account'>Account</Link></li>
                <li><Link to='/settings/profile'>Edit profile</Link></li>
                <li>Notifications</li>
              </ul>
            </div>
            <div className='profile-menu-body-right'>
              <div className='profile-menu-body-left-header'>MY PROJECTS</div>
              <ul>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
                <li>
                  <div className='profile-menu-projects'>
                    <div className='profile-menu-projects-image'></div>
                    <span>Untitled</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='profile-menu-footer'><button onClick={(e) => this.logoutUser(e)}>Log out</button></div>
        </div>
        <div className='start-project-content'>
          <div className='start-project-middle'>
            <div className='start-project-top'>
              <div className='start-project-inner'>
                <div className='start-project-1'>
                  <h1>Bring your creative project to life.</h1>
                  <div className='green-box-1'><Link to='/start'>Start a project</Link></div>
                </div>
              </div>
            </div>
            <div className='start-project-body'>
              <div className='start-project-body-content'>
                <a></a>
                <span>
                  <p>
                    De La Soul raised $600,874 to make their Grammy-winning album, <i>And the Anonymous Nobody...</i>, with full creative control.
                  </p>
                </span>
              </div>
              <div className='start-project-body-right'>
                <div className='start-project-body-right-top'>
                  <div className='start-project-right-top-background'>
                    <a></a>
                    <span><p>With the support of 13,454 backers, Elena Favilli and Francesca Cavallo published <i>Good Night Stories for Rebel Girls </i>-- and became best-selling authors.</p></span>
                  </div>
                </div>
                <div className='start-project-body-right-bottom'>
                  <a></a>
                  <span>
                    <p>Since raising over $300K through seven successful projects, Craighton Berman now runs his own homewares company with his partner, Emily.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='startsmart-quote'>
          <div className='startsmart-quote-content'>
            <div className='startsmart-quote-content-text'>
              <div className='single-quote'><i className="fas fa-quote-left"></i></div>
              <div className='startsmart-quote-text'>
                We see StartSmart as a home for creative minds and a wonderful platform; where people who believe, respect, and see the vision can support an idea and make it a reality.
              </div>
            </div>
            <div className='startsmart-quote-author'>
              <div className='startsmart-quote-author-text'>— DE LA SOUL</div>
            </div>
        </div>
        </div>
        <div className='about-start-project'>
          <div className='about-start-project-content'>
            <div className='about-start-project-content-inner'>
              <div className='about-start-project-content-inner-inner'>
                <div className='about-start-project-title'>
                  <h2>A StartSmart project does more than raise money. It builds community around your work.</h2>
                </div>
                <div className='about-start-project-first-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>What can I use Kickstarter to fund?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>Kickstarter is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it. Read more about <Link className='policy-link' to='/'>our project guidelines</Link>.</p>
                  </div>
                </div>
                <div className='about-start-project-second-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>Who can I get pledges from?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>Millions of people visit Kickstarter every week, but support always begins with people you know. Friends, fans, and the communities you’re a part of will likely be some of your earliest supporters, not to mention your biggest resources for spreading the word about your project.</p>
                  </div>
                </div>
                <div className='about-start-project-third-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>How much work is it to run a project?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>Every Kickstarter project has its share of exhilarating and challenging moments, but the amount of work generally depends on the size and complexity of the project.</p>
                    <p>Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.</p>
                    <p>Projects sometimes take on a life of their own, and in that case you should expect to spend more time creating and fulfilling rewards.</p>
                  </div>
                </div>
                <div className='about-start-project-first-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>How do I get in touch with questions?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>You can reach out with your questions through this <Link className='policy-link' to='/'>contact form</Link>. We also recommend taking a look at <Link className='policy-link' to='/'>our FAQs</Link> for more detailed information, along with the <Link className='policy-link' to='/'>creator handbook</Link> for guidance on starting and running a project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='start-project-video'></div>
        <div className='why-startsmart'>
          <div className='why-startsmart-content'>
            <div className='why-startsmart-inner'>
              <div className='why-startsmart-inner-inner'>
                <h2>Why StartSmart?</h2>
                <div className='why-startsmart-step-one'>
                  <div className='why-startsmart-step-one-title'>
                    <div className='number-one'>1</div>
                    <h3>Kickstarter is <i>just</i> for creative projects.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>We built Kickstarter as a tool for artists, designers, makers, musicians, and creative people everywhere. We’re proud to be the only platform that’s fully dedicated to building community around creative projects.</p>
                  </div>
                </div>
                <div className='why-startsmart-step-two'>
                  <div className='why-startsmart-step-one-title'>
                    <div className='number-one'>2</div>
                    <h3>All-or-nothing funding works.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>Kickstarter’s all-or-nothing model allows you to choose a funding goal and a set number of days to reach that goal. This way, you don’t get stuck without enough funds to realize your project. It also gives backers incentive to pledge more to help you reach your goal.</p>
                  </div>
                </div>
                <div className='why-startsmart-step-one'>
                  <div className='why-startsmart-step-one-title'>
                    <div className='number-one'>3</div>
                    <h3>Our community wants to support you.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>Millions of backers agree — helping to create something new is exciting. People love peeking behind the creative curtain and directly supporting the creative process. In fact, 13.9 million people have pledged more than $3.39 billion to bring Kickstarter projects to life over the years.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='create-project-category'>
          <div className='create-project-category-content'>
            <div className='create-project-title'>
              <div className='create-project-title-title'>
                <h2>Create a project in any of the following categories</h2>
              </div>
            </div>
            <div className='create-project-navbar'>
              <div className='create-project-navbar-inner'>
                <div className='create-project-navbar-inner-inner'>
                  <ul>
                    <li>Arts</li>
                    <li>Comics & Illustration</li>
                    <li>Design & Tech</li>
                    <li>Film</li>
                    <li>Food & Craft</li>
                    <li>Games</li>
                    <li>Music</li>
                    <li>Publishing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='create-project-body'>
              <div className='create-project-body-inner'>
                <div className='create-project-body-inner-inner'>
                  <div className='create-project-body-inner-top'>
                    <div className='create-project-body-top-header'>
                      <div className='create-project-body-top-inner'>
                        <div className='create-project-body-top-left'>
                          <div className='create-project-body-top-left-top'>
                            <p>From backyard performances to large public murals, thousands of arts projects have broken new ground, sparked meaningful dialogue, and given people the opportunity to share their work with the world.</p>
                          </div>
                        </div>
                        <div className='create-project-body-right-body'>
                          <h4>Interested?</h4>
                          <p>Click start and get sketching. See how it looks. Then share it with your friends!</p>
                          <button>Start a project</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='example-art-projects'>
                    <div className='example-art-projects-title'>EXAMPLE ARTS PROJECTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartProject;
