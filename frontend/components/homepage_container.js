import Homepage from './homepage';
import {connect} from 'react-redux';
import {receiveCurrentUser} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
