import {connect} from 'react-redux';
import StartProjectPageOne from './start_project_pageone';
import {createProject} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    project: {country: '', ageButton: 'verification-button far fa-check-circle', bankButton: 'verification-button far fa-check-circle', cardButton: 'verification-button far fa-check-circle', ageButtonColor: 'white-button', bankButtonColor: 'white-button', cardButtonColor: 'white-button', ageButtonBorder: '', bankButtonBorder: '', cardButtonBorder: '', wordCount: 0, pageNo: 1, disabled: 'disabled', className: 'disabled-yes', title: '', description: '', duration: 0, pledge_amt: 0, eta: '', shipping: '', limit: false, city: '', state: '', category_id: '', user_id: state.entities.users.id, image_url: '', funding_goal: 0},
    currentUser: state.entities.users,
    categories: state.entities.category,
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (user, project) => dispatch(createProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProjectPageOne);
