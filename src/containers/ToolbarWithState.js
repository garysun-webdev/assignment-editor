import { connect } from 'react-redux';

import Toolbar from '../components/Toolbar';
import { tagSwitch } from '../actions/configActions'

function mapStateToProps(state){
  return { 
    currentTag: state.config.currentTag
  };
}

export default connect(mapStateToProps, {tagSwitch})(Toolbar);
