import {connect} from 'react-redux';
import Recommendations from './recommendations';

const mapStateToProps = state => {
  return {
    class: {display: 'location-none-display'}
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
