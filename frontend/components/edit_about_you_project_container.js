import {connect} from 'react-redux';
import EditAboutYouProject from './edit_about_you_project';

const mapStateToProps = state => {
  return {
    aboutYou: {name: '', biography: '', websites: '', google_analytics: ''},
    user: state.entities.users,
    project: state.entities.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAboutYouProject);
