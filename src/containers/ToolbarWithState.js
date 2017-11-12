import { connect } from 'react-redux';

import Toolbar from '../components/Toolbar';
import { tagSwitch, sizeChange } from '../actions/configActions'

function mapStateToProps(state){
  return { 
    currentTag: state.config.currentTag,
    paneSize: state.config.materialsPaneSize
  };
}

export default connect(mapStateToProps, {tagSwitch, sizeChange})(Toolbar);
