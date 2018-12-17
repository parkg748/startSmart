import {connect} from 'react-redux';
import Checkout from './checkout';
import {fetchUser} from '../actions/session_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    user: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
