import { connect } from 'react-redux';

import Progress from '../components/Progress';

function mapStateToProps(state) {
  return {
    countData: state.count,
    wordLimit: state.manifest.sheet.wordLimit,
    wordCount: state.editors.wordCount,
    dueDate: state.manifest.sheet.dueDate
  };
}

export default connect(mapStateToProps)(Progress);