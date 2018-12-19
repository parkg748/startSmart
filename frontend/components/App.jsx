import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import HomepageContainer from './homepage_container';
import SignupFormContainer from './signup_form_container';
import StartProjectContainer from './start_project_container';
// import HomepageCategoriesContainer from './homepage_categories_container';
// import CategoryContainer from './category_container';
import FooterContainer from './footer_container';
import RecommendationsContainer from './mystuff/recommendations_container';
import StartProjectPageOneContainer from './start_project_pageone_container';
import UserProjectContainer from './user_project_container';
import EditProjectContainer from './edits/edit_project_container';
import EditRewardProjectContainer from './edits/edit_reward_project_container';
import EditStoryProjectContainer from './edits/edit_story_project_container';
import EditAboutYouProjectContainer from './edits/edit_about_you_project_container';
import EditAccountProjectContainer from './edits/edit_account_project_container';
import FollowingContainer from './mystuff/following_container';
import FollowingFacebookContainer from './mystuff/following_facebook_container';
import MessagesContainer from './mystuff/messages_container';
import ActivityContainer from './mystuff/activity_container';
import ProfileContainer from './mystuff/profile_container';
import BackedProjectsContainer from './mystuff/backed_project_container';
import CreatedProjectsContainer from './mystuff/created_project_container';
import SavedProjectsContainer from './mystuff/saved_project_container';
import AccountContainer from './settings/account_container';
import EditProfileContainer from './settings/edit_profile_container';
import ExploreContainer from './explore_container';
import PreviewContainer from './edits/preview_container';
import {ProtectedRoute} from '../util/route_util';
import ProjectViewContainer from './projects/project_view_container';
import PledgeContainer from './pledge_container';
import NotificationsContainer from './settings/notifications_container';
import CheckoutContainer from './checkout_container';
import ArtsContainer from './categories/arts_container';
import ComicsIllustrationContainer from './categories/comics_illustration_container';
import DesignTechContainer from './categories/design_tech_container';
import FilmContainer from './categories/film_container';
import FoodCraftContainer from './categories/food_craft_container';
import GamesContainer from './categories/games_container';
import MusicContainer from './categories/music_container';
import PublishingContainer from './categories/publishing_container';
import TestContainer from './test_container';

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Switch>
            <Route path='/test' component={TestContainer} />
            <Route path='/arts' component={ArtsContainer} />
            <Route path='/comics-illustration' component={ComicsIllustrationContainer} />
            <Route path='/design-tech' component={DesignTechContainer} />
            <Route path='/film' component={FilmContainer} />
            <Route path='/food-craft' component={FoodCraftContainer} />
            <Route path='/games' component={GamesContainer} />
            <Route path='/music' component={MusicContainer} />
            <Route path='/publishing' component={PublishingContainer} />
            <Route path='/learn' component={StartProjectContainer} />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/start' component={StartProjectPageOneContainer} />
            <Route path='/recommendations' component={RecommendationsContainer} />
            <Route path='/explore' component={ExploreContainer} />
            <Route exact path='/users/:userId/projects/:projectId/front' component={ProjectViewContainer} />
            <Route exact path='/users/:userId/projects/:projectId' component={UserProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/basics' component={EditProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/rewards' component={EditRewardProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/story' component={EditStoryProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/about-you' component={EditAboutYouProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/account' component={EditAccountProjectContainer} />
            <Route exact path='/users/:userId/projects/:projectId/edit' component={PreviewContainer} />
            <Route exact path='/users/:userId/projects/:projectId/pledge' component={PledgeContainer} />
            <Route exact path='/profile/following/find_creators' component={FollowingContainer} />
            <Route exact path='/profile/following/welcome' component={FollowingFacebookContainer} />
            <Route exact path='/checkouts/:rewardId/payments/new' component={CheckoutContainer} />
            <Route exact path='/messages/inbox' component={MessagesContainer} />
            <Route exact path='/activity' component={ActivityContainer} />
            <Route exact path='/profile/backings' component={BackedProjectsContainer} />
            <Route exact path='/profile/projects' component={CreatedProjectsContainer} />
            <Route exact path='/profile/starred' component={SavedProjectsContainer} />
            <Route exact path='/settings/account' component={AccountContainer} />
            <Route exact path='/settings/profile' component={EditProfileContainer} />
            <Route exact path='/settings/notifications' component={NotificationsContainer} />
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
