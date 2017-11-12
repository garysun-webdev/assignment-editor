import { connect } from 'react-redux';

import Titlebar from '../components/Titlebar';
import { countListUpdate } from '../actions/countActions';

function mapStateToProps(state) {
  return {
    title: state.manifest.assessment.name,
    wordCount: state.editors.wordCount
  };
}

export default connect(mapStateToProps, {countListUpdate})(Titlebar);
