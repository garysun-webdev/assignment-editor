import { connect } from 'react-redux';

import Progress from '../components/Progress';

function mapStateToProps(state) {
  return {
    sheet: state.manifest.sheet,
    editorValue: state.editors.sheet,
  };
}

export default connect(mapStateToProps)(Progress);