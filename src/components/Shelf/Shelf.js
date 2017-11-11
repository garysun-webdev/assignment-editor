import React from 'react';
import { Route } from 'react-router-dom';

import { pathConfig } from '../../utils/routeConfig';

import ToolbarWithState from '../../containers/ToolbarWithState';
import TitlebarWithTitle from '../../containers/TitlebarWithTitle';

import './Shelf.css';

function Shelf() {
  return (
    <div className="Shelf">
      <Route
        path={pathConfig.submissionEditing}
        component={TitlebarWithTitle}
      />
      <ToolbarWithState />
    </div>
  );
}

export default Shelf;
