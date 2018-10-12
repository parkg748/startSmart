import {connect} from 'react-redux';
import StartProjectPageOne from './start_project_pageone';
import {createProject} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    project: {wordCount: 0, pageNo: 1, button: 'disabled', className: 'disabled-yes', title: '', description: '', duration: 0, starting_bid: 0, eta: '', shipping: '', limit: false, city: '', state: '', category_id: '', user_id: state.entities.user.user.id, image_url: ''},
    currentUser: state.entities.user.user,
    categories: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (user, project) => dispatch(createProject(user, project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProjectPageOne);
