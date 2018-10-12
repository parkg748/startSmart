import {connect} from 'react-redux';
import StartProjectPageOne from './start_project_pageone';
import {createProject} from '../actions/project_actions';

const mapStateToProps = state => {
  debugger;
  return {
    project: {country: '', ageButton: 'far fa-check-circle', bankButton: 'far fa-check-circle', cardButton: 'far fa-check-circle', ageButtonColor: 'white-button', bankButtonColor: 'white-button', cardButtonColor: 'white-button', ageButtonBorder: 'green-border', bankButtonBorder: 'green-border', cardButtonBorder: 'green-border', wordCount: 0, pageNo: 1, disabled: 'disabled', className: 'disabled-yes', title: '', description: '', duration: 0, starting_bid: 0, eta: '', shipping: '', limit: false, city: '', state: '', category_id: '', user_id: state.entities.users.id, image_url: ''},
    currentUser: state.entities.users,
    categories: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (user, project) => dispatch(createProject(user, project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProjectPageOne);
