import React from 'react';
import {AuthRoute, Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import HomepageContainer from './homepage_container';
import SignupFormContainer from './signup_form_container';
import StartProjectContainer from './start_project_container';
// import HomepageCategoriesContainer from './homepage_categories_container';
// import CategoryContainer from './category_container';
import FooterContainer from './footer_container';
import RecommendationsContainer from './recommendations_container';
import StartProjectPageOneContainer from './start_project_pageone_container';
import UserProjectContainer from './user_project_container';
import EditProjectContainer from './edit_project_container';
import EditRewardProjectContainer from './edit_reward_project_container';
import EditStoryProjectContainer from './edit_story_project_container';
import EditAboutYouProjectContainer from './edit_about_you_project_container';
import EditAccountProjectContainer from './edit_account_project_container';
import FollowingContainer from './following_container';
import FollowingFacebookContainer from './following_facebook_container';

const App = () => (
  <div>
    <header>
      <Route exact path='/' component={HomepageContainer} />
      <Route path='/learn' component={StartProjectContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/start' component={StartProjectPageOneContainer} />
      <Route path='/recommendations' component={RecommendationsContainer} />
      <Route exact path='/users/:userId/projects/:projectId' component={UserProjectContainer} />
      <Route exact path='/users/:userId/projects/:projectId/basics' component={EditProjectContainer} />
      <Route exact path='/users/:userId/projects/:projectId/rewards' component={EditRewardProjectContainer} />
      <Route exact path='/users/:userId/projects/:projectId/story' component={EditStoryProjectContainer} />
      <Route exact path='/users/:userId/projects/:projectId/about-you' component={EditAboutYouProjectContainer} />
      <Route exact path='/users/:userId/projects/:projectId/account' component={EditAccountProjectContainer} />
      <Route exact path='/profile/following/find_creators' component={FollowingContainer} />
      <Route exact path='/profile/following/welcome' component={FollowingFacebookContainer} />
    </header>
    <footer>
      <Route path='/' component={FooterContainer} />
    </footer>
  </div>
);

export default App;
