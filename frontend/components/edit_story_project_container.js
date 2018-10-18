import {connect} from 'react-redux';
import EditStoryProject from './edit_story_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryProject);
