import { connect } from 'react-redux';

import Instructions from '../components/Instructions';
import { resClick } from '../actions/manifestActions';


function mapStateToProps(state) {
  return {
    sheet: state.manifest.sheet,
    editorValue: state.editors.sheet,
  };
}


export default connect(mapStateToProps,{resClick})(Instructions);
