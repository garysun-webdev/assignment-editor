import { connect } from 'react-redux';

import Materials from '../components/Materials';


function mapStateToProps(state) {
  return {
    currentTag: state.config.currentTag
  };
}


export default connect(mapStateToProps)(Materials);