import {connect} from 'react-redux';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
