import { connect } from 'react-redux';

import Titlebar from '../components/Titlebar';

function mapStateToProps(state) {
  return {
    title: state.manifest.assessment.name,
  };
}

export default connect(mapStateToProps)(Titlebar);
