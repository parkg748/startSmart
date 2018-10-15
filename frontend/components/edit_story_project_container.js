import {connect} from 'react-redux';
import EditStoryProject from './edit_story_project';

const mapStateToProps = state => {
  return {
    user_id: Object.values(state.entities.users)[0].id,
    project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryProject);
