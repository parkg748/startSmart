import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
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
import MessagesContainer from './messages_container';
import ActivityContainer from './activity_container';
import ProfileContainer from './profile_container';
import BackedProjectsContainer from './backed_project_container';
import CreatedProjectsContainer from './created_project_container';
import SavedProjectsContainer from './saved_project_container';
import AccountContainer from './account_container';
import EditProfileContainer from './edit_profile_container';
import ExploreContainer from './explore_container';
import PreviewContainer from './preview_container';
import {ProtectedRoute} from '../util/route_util';
import ProjectViewContainer from './project_view_container';
import BasicsFormContainer from './basics_form_container';

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Switch>
            <Route path='/basics' component={BasicsFormContainer} />
            <Route path='/learn' component={StartProjectContainer} />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/start' component={StartProjectPageOneContainer} />
            <Route path='/recommendations' component={RecommendationsContainer} />
            <Route exact path='/users/:userId/projects/:projectId/front' component={ProjectViewContainer} />
            <Route exact path='/users/:userId/projects/:projectId' component={UserProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/basics' component={EditProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/rewards' component={EditRewardProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/story' component={EditStoryProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/about-you' component={EditAboutYouProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/account' component={EditAccountProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/edit' component={PreviewContainer} />
            <Route exact path='/profile/following/find_creators' component={FollowingContainer} />
            <Route exact path='/profile/following/welcome' component={FollowingFacebookContainer} />
            <Route exact path='/messages/inbox' component={MessagesContainer} />
            <Route exact path='/activity' component={ActivityContainer} />
            <Route exact path='/profile/backings' component={BackedProjectsContainer} />
            <Route exact path='/profile/projects' component={CreatedProjectsContainer} />
            <Route exact path='/profile/starred' component={SavedProjectsContainer} />
            <Route exact path='/settings/account' component={AccountContainer} />
            <Route exact path='/settings/profile' component={EditProfileContainer} />
            <Route exact path='/profile/:userId' component={ProfileContainer} />
            <Route exact path='/' component={HomepageContainer} />
            <Redirect to='/' />
          </Switch>
        </header>
        <footer>
          <Route path='/' component={FooterContainer} />
        </footer>
      </div>
    );
  }
}

export default App;
