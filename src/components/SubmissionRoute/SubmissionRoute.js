import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { pathConfig } from '../../utils/routeConfig';
import SubmissionEditing from '../SubmissionEditing';

function SubmissionRoute() {
  return (
    <Switch>
      <Route
        exact
        path={pathConfig.submissionEditing}
        component={SubmissionEditing}
      />
    </Switch>
  );
}

export default SubmissionRoute;
