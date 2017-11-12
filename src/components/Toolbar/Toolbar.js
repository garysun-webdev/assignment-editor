import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionAspectRatio from 'material-ui/svg-icons/action/aspect-ratio';

import './Toolbar.css';

function Toolbar({tagSwitch,currentTag}) {
  return (
    <div className="Toolbar">
      <div className="Toolbar-materials">
        <FlatButton label="Instructions" onClick={()=>tagSwitch(0)} primary={currentTag===0} />
        <FlatButton label="Progress" onClick={()=>tagSwitch(1)} primary={currentTag===1} /> 
      </div>
      <div className="Toolbar-configuration">
        <IconButton>
          <ActionAspectRatio />
        </IconButton>
      </div>
    </div>
  );
}

export default Toolbar;