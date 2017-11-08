import { connect } from 'react-redux';

import { editorsChange } from '../actions/editorsActions';
import Work from '../components/Work';

function mapStateToProps(state) {
  return {
    editorValue: state.editors.body,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (change) => {
      dispatch(editorsChange('body', change));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);
