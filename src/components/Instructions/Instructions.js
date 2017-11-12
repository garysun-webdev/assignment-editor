import React from 'react';
import PropTypes from 'prop-types';
import Types from 'slate-prop-types';
import { Editor } from 'slate-react';

import Requirements from '../Requirements';
import Resources from '../Resources';
import plugins from '../../utils/slate/plugins';
import './Instructions.css';

function Instructions(props) {
  return (
    <div className="Instructions Paper">
      <Requirements
        dueDate={props.sheet.dueDate}
        draftDueDate={props.sheet.dueDate}
        wordLimit={props.sheet.wordLimit}
        gradeValue={props.sheet.gradeValue}
      />
      <h2>Instructions</h2>
      <Editor
        value={props.editorValue}
        plugins={plugins}
        onChange={() => {}}
        readOnly
      />
       <Resources resources={props.sheet.resources} resClick={props.resClick} />
    </div>
  );
}

Instructions.propTypes = {
  resClick: PropTypes.func.isRequired,
  sheet: PropTypes.shape({
    dueDate: PropTypes.string,
    draftDueDate: PropTypes.string,
    wordLimit: PropTypes.number,
    gradeValue: PropTypes.number,
    resources: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      openDate: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  editorValue: Types.value.isRequired,
};

export default Instructions;
