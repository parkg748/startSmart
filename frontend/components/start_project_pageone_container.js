import {connect} from 'react-redux';
import StartProjectPageOne from './start_project_pageone';

const mapStateToProps = state => {
  return {
    class: {button: 'disabled', category: '', className: 'disabled-yes'}
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProjectPageOne);
