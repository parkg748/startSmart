import Homepage from './homepage';
import {connect} from 'react-redux';
import {receiveCurrentUser} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
