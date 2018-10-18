import {connect} from 'react-redux';
import Preview from './preview';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
