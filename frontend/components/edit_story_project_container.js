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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryProject);
