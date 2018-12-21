import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from './modal';
import MyStuffNav from './mystuff/mystuff_nav';
import SearchBar from './search_bar';

class StartProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayProfileMenu: 'js-modal-close',
                  searchBar: 'search-bar-close',
                  arts: 'font-black',
                  comicsIllustration: '',
                  designTech: '',
                  film: '',
                  foodCraft: '',
                  games: '',
                  music: '',
                  publishing: ''};
    this.clickSearchBar = this.clickSearchBar.bind(this);
    this.displayCategoryDescription = this.displayCategoryDescription.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(this.props.session.id);
    this.props.fetchCategories();
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  displayCategoryDescription(category) {
    if (category === 'art') {
      this.setState({arts: 'font-black', comicsIllustration: '', designTech: '', film: '', foodCraft: '', games: '', music: '', publishing: ''});
    } else if (category === 'comics-illustration') {
      this.setState({arts: '', comicsIllustration: 'font-black', designTech: '', film: '', foodCraft: '', games: '', music: '', publishing: ''});
    } else if (category === 'design-tech') {
      this.setState({arts: '', comicsIllustration: '', designTech: 'font-black', film: '', foodCraft: '', games: '', music: '', publishing: ''});
    } else if (category === 'film') {
      this.setState({arts: '', comicsIllustration: '', designTech: '', film: 'font-black', foodCraft: '', games: '', music: '', publishing: ''});
    } else if (category === 'food-craft') {
      this.setState({arts: '', comicsIllustration: '', designTech: '', film: '', foodCraft: 'font-black', games: '', music: '', publishing: ''});
    } else  if (category === 'games') {
      this.setState({arts: '', comicsIllustration: '', designTech: '', film: '', foodCraft: '', games: 'font-black', music: '', publishing: ''});
    } else if (category === 'music') {
      this.setState({arts: '', comicsIllustration: '', designTech: '', film: '', foodCraft: '', games: '', music: 'font-black', publishing: ''});
    } else if (category === 'publishing') {
      this.setState({arts: '', comicsIllustration: '', designTech: '', film: '', foodCraft: '', games: '', music: '', publishing: 'font-black'});
    }
  }

  render() {
    if (Object.values(getState().entities.users)[0] === null || getState().session.id === null || getState().session.id === undefined) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (Object.values(getState().entities.users) != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users).length === 2 && Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    let exampleArtProjects = [];
    if (Object.values(this.props.category).length != 0) {
      let artCategoryId = Object.values(this.props.category).filter(el => el.name === 'Art')[0].id;
      if (Object.values(this.props.projects).length != 0) {
        let projects = Object.values(this.props.projects).filter(el => el.categoryId == artCategoryId);
        let i = 0;
        while (i < 4) {
          let randomProject = projects[Math.floor(Math.random() * projects.length)];
          if (!exampleArtProjects.includes(randomProject)) {
            exampleArtProjects.push(randomProject);
            i++;
          }
        }
      }
    }
    let currentDescription = '';
    let artsDescription = 'From backyard performances to large public murals, thousands of arts projects have broken new ground, sparked meaningful dialogue, and given people the opportunity to share their work with the world.';
    let comicsDescription = 'Whether you work in ink or online, a StartSmart project can get your work on your fans’ walls, or on the shelves of your local comic shop.';
    let designDescription = 'From innovative new products to civic design projects that revitalize public spaces across the globe, designers and technologists use StartSmart to bring ambitious ideas to life.';
    let filmDescription = 'More than 150 StartSmart-funded films have made theatrical debuts and thousands have played at festivals around the world — including a film that would go on to win an Academy Award. Shoot your first film, restore an old classic, or make your documentary feature debut.';
    let foodDescription = 'Whether you’re a budding chef with big restaurant plans or a fashion designer working on your breakthrough line, a StartSmart project can help bring your dreams to life.';
    let gamesDescription = 'Whether you’re an aspiring game maker or a seasoned pro, StartSmart gives game designers a platform to bring their boldest ideas to life. Our community has helped launch groundbreaking indie games, epic tabletop games, beloved revivals, and even a household name or two.';
    let musicDescription = 'Whether you’re an unsigned musician or a career artist, StartSmart connects creators with fans to help them bring amazing new albums, shows, and performances to life — together.';
    let publishingDescription = 'From anthologies to zines and everything in between, writers and journalists can find readers and listeners on StartSmart. Whether you dream of making an illustrated biography, a podcast, or a full-color magazine, you can make it here.';
    if (this.state.arts === 'font-black') {
      currentDescription = artsDescription;
    } else if (this.state.comicsIllustration === 'font-black') {
      currentDescription = comicsDescription;
    } else if (this.state.designTech === 'font-black') {
      currentDescription = designDescription;
    } else if (this.state.film === 'font-black') {
      currentDescription = filmDescription;
    } else if (this.state.foodCraft === 'font-black') {
      currentDescription = foodDescription;
    } else if (this.state.games === 'font-black') {
      currentDescription = gamesDescription;
    } else if (this.state.music === 'font-black') {
      currentDescription = musicDescription;
    } else if (this.state.publishing === 'font-black') {
      currentDescription = publishingDescription;
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(getState().entities.users)[0]} userId={Object.values(getState().entities.users)[0].id} sessionId={getState().session.id.id} logoutUser={(e) => this.logoutUser(e)}/>
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
                    <h3>What can I use StartSmart to fund?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>StartSmart is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it. Read more about <Link className='policy-link' to='/'>our project guidelines</Link>.</p>
                  </div>
                </div>
                <div className='about-start-project-second-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>Who can I get pledges from?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>Millions of people visit StartSmart every week, but support always begins with people you know. Friends, fans, and the communities you’re a part of will likely be some of your earliest supporters, not to mention your biggest resources for spreading the word about your project.</p>
                  </div>
                </div>
                <div className='about-start-project-third-faq'>
                  <div className='about-start-project-first-faq-question'>
                    <h3>How much work is it to run a project?</h3>
                  </div>
                  <div className='about-start-project-first-faq-answer'>
                    <p>Every StartSmart project has its share of exhilarating and challenging moments, but the amount of work generally depends on the size and complexity of the project.</p>
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
                    <h3>StartSmart is <i>just</i> for creative projects.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>We built StartSmart as a tool for artists, designers, makers, musicians, and creative people everywhere. We’re proud to be the only platform that’s fully dedicated to building community around creative projects.</p>
                  </div>
                </div>
                <div className='why-startsmart-step-two'>
                  <div className='why-startsmart-step-one-title'>
                    <div className='number-one'>2</div>
                    <h3>All-or-nothing funding works.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>StartSmart’s all-or-nothing model allows you to choose a funding goal and a set number of days to reach that goal. This way, you don’t get stuck without enough funds to realize your project. It also gives backers incentive to pledge more to help you reach your goal.</p>
                  </div>
                </div>
                <div className='why-startsmart-step-one'>
                  <div className='why-startsmart-step-one-title'>
                    <div className='number-one'>3</div>
                    <h3>Our community wants to support you.</h3>
                  </div>
                  <div className='why-startsmart-step-one-body'>
                    <div className='why-startsmart-step-one-body-top'></div>
                    <p>Millions of backers agree — helping to create something new is exciting. People love peeking behind the creative curtain and directly supporting the creative process. In fact, 13.9 million people have pledged more than $3.39 billion to bring StartSmart projects to life over the years.</p>
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
                    <li onClick={() => this.displayCategoryDescription('arts')} className={`${this.state.arts}`}>Arts</li>
                    <li onClick={() => this.displayCategoryDescription('comics-illustration')} className={`${this.state.comicsIllustration}`}>Comics & Illustration</li>
                    <li onClick={() => this.displayCategoryDescription('design-tech')} className={`${this.state.designTech}`}>Design & Tech</li>
                    <li onClick={() => this.displayCategoryDescription('film')} className={`${this.state.film}`}>Film</li>
                    <li onClick={() => this.displayCategoryDescription('food-craft')} className={`${this.state.foodCraft}`}>Food & Craft</li>
                    <li onClick={() => this.displayCategoryDescription('games')} className={`${this.state.games}`}>Games</li>
                    <li onClick={() => this.displayCategoryDescription('music')} className={`${this.state.music}`}>Music</li>
                    <li onClick={() => this.displayCategoryDescription('publishing')} className={`${this.state.publishing}`}>Publishing</li>
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
                            <p>{currentDescription}</p>
                          </div>
                        </div>
                        <div className='create-project-body-right-body'>
                          <h4>Interested?</h4>
                          <p>Click start and get sketching. See how it looks. Then share it with your friends!</p>
                          <button onClick={() => this.props.history.push('/start')}>Start a project</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='example-art-projects'>
                    <div className='example-art-projects-title'>EXAMPLE ARTS PROJECTS</div>
                    <div className='example-art-projects-content'>
                      <div className='example-art-projects-content-inner'>
                        <div className='example-art-projects-content-inner-left'>
                          <div className='example-art-projects-content-inner-left-inner'>
                            <img src={exampleArtProjects.length > 0 ? exampleArtProjects[0].imageUrl : ''}/>
                            <Link to={exampleArtProjects.length > 0 ? `/users/${exampleArtProjects[0].userId}/projects/${exampleArtProjects[0].id}` : '/'}><h5>{exampleArtProjects.length > 0 ? exampleArtProjects[0].title : ''}</h5></Link>
                          </div>
                        </div>
                        <div className='example-art-projects-content-inner-center'>
                          <div className='example-art-projects-content-inner-left-inner'>
                            <img src={exampleArtProjects.length > 0 ? exampleArtProjects[1].imageUrl : ''}/>
                            <Link to={exampleArtProjects.length > 0 ? `/users/${exampleArtProjects[1].userId}/projects/${exampleArtProjects[1].id}` : '/'}><h5>{exampleArtProjects.length > 0 ? exampleArtProjects[1].title : ''}</h5></Link>
                          </div>
                        </div>
                        <div className='example-art-projects-content-inner-center'>
                          <div className='example-art-projects-content-inner-left-inner'>
                            <img src={exampleArtProjects.length > 0 ? exampleArtProjects[2].imageUrl : ''}/>
                            <Link to={exampleArtProjects.length > 0 ? `/users/${exampleArtProjects[2].userId}/projects/${exampleArtProjects[2].id}` : '/'}><h5>{exampleArtProjects.length > 0 ? exampleArtProjects[2].title : ''}</h5></Link>
                          </div>
                        </div>
                        <div className='example-art-projects-content-inner-right'>
                          <div className='example-art-projects-content-inner-left-inner'>
                            <img src={exampleArtProjects.length > 0 ? exampleArtProjects[3].imageUrl : ''}/>
                            <Link to={exampleArtProjects.length > 0 ? `/users/${exampleArtProjects[3].userId}/projects/${exampleArtProjects[3].id}` : '/'}><h5>{exampleArtProjects.length > 0 ? exampleArtProjects[3].title : ''}</h5></Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
