import {connect} from 'react-redux';
import Category from './category';

const mapStateToProps = (state, ownProps)=> {
  return {
    user: state.entities.users,
    category: state.categories[ownProps.match.params.categoryId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
