import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionAspectRatio from 'material-ui/svg-icons/action/aspect-ratio';

import './Toolbar.css';

export default function Toolbar() {
  return (
    <div className="Toolbar">
      <div className="Toolbar-materials">
        <FlatButton label="Instructions" primary />
        <FlatButton label="Notes" disabled={true} />
      </div>
      <div className="Toolbar-configuration">
        <IconButton>
          <ActionAspectRatio />
        </IconButton>
      </div>
    </div>
  );
}
