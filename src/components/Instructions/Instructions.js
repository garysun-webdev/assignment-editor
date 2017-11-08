import React from 'react';
import PropTypes from 'prop-types';
import Types from 'slate-prop-types';
import { Editor } from 'slate-react';

import Requirements from '../Requirements';
import plugins from '../../utils/slate/plugins';

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
      <h2>Resources</h2>
      <ul>
      {
        props.sheet.resources.map(r => (
          <li key={r.name}>
            {r.name} - {r.url}
          </li>
        ))
      }
      </ul>
    </div>
  );
}

Instructions.propTypes = {
  sheet: PropTypes.shape({
    dueDate: PropTypes.string,
    draftDueDate: PropTypes.string,
    wordLimit: PropTypes.number,
    gradeValue: PropTypes.number,
    resources: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  editorValue: Types.value.isRequired,
};

export default Instructions;