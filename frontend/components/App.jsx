import React from 'react';
import {Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import HomepageContainer from './homepage_container';
import SignupFormContainer from './signup_form_container';
import StartProjectContainer from './start_project_container';
// import HomepageCategoriesContainer from './homepage_categories_container';
// import CategoryContainer from './category_container';
import FooterContainer from './footer_container';

const App = () => (
  <div>
    <header>
      <Route path='/' component={HomepageContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/learn' component={StartProjectContainer} />
    </header>
    <footer>
      <Route path='/' component={FooterContainer} />
    </footer>
  </div>
);

export default App;
