import { connect } from 'react-redux';

import { DeskEditing } from '../components/Desk';
import { sizeChange } from '../actions/configActions';

function mapStateToProps(state) {
  return {
    materialsPaneSize: state.config.materialsPaneSize
  };
}

export default connect(mapStateToProps, {sizeChange})(DeskEditing);