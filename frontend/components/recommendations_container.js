import {connect} from 'react-redux';
import Recommendations from './recommendations';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
