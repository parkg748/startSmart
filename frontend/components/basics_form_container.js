import {connect} from 'react-redux';
import {createBasics} from '../actions/basics_actions';
import BasicsForm from './basics_form_container';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBasics: project => dispatch(createBasics(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicsForm);
