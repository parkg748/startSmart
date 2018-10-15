import {connect} from 'react-redux';
import EditAboutYouProject from './edit_about_you_project';

const mapStateToProps = state => {
  return {
    aboutYou: {name: '', biography: '', websites: '', google_analytics: ''},
    user_id: Object.values(state.entities.users)[0].id,
    project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAboutYouProject);
