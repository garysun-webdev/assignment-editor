import { connect } from 'react-redux';

import Titlebar from '../components/Titlebar';

function mapStateToProps(state) {
  return {
    title: state.manifest.assessment.name,
    wordCount: state.editors.wordCount
  };
}

export default connect(mapStateToProps)(Titlebar);
