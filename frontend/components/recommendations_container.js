import {connect} from 'react-redux';
import Recommendations from './recommendations';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    class: {display: 'location-none-display', displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
