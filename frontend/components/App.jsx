import React from 'react';
import {AuthRoute, Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import HomepageContainer from './homepage_container';
import SignupFormContainer from './signup_form_container';
import StartProjectContainer from './start_project_container';
// import HomepageCategoriesContainer from './homepage_categories_container';
// import CategoryContainer from './category_container';
import FooterContainer from './footer_container';
// import RecommendationsContainer from './recommendations_container';
import StartProjectPageOneContainer from './start_project_pageone_container';
import UserProjectContainer from './user_project_container';
import EditProjectContainer from './edit_project_container';

const App = () => (
  <div>
    <header>
      <Route path='/' component={HomepageContainer} />
      <Route path='/learn' component={StartProjectContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/start' component={StartProjectPageOneContainer} />
      <Route path='/users/:userId/projects/:projectId' component={UserProjectContainer} />
      <Route path='/users/:user_id/projects/:id/edit' component={EditProjectContainer} />
    </header>
    <footer>
      <Route path='/' component={FooterContainer} />
    </footer>
  </div>
);

export default App;
