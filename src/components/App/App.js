import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { pathConfig } from '../../utils/routeConfig';
import SubmissionRoute from '../SubmissionRoute';

/**
 * Main top-level component which should render the three main routes in
 * Aphrodite.
 *
 * Currently only renders the default `/:workId/editing` route since this
 * client isn't setup with a submission workflow. For route information on how
 * to setup a submission workflow look at the `pathConfig` object.
 */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path={pathConfig.base}
          component={SubmissionRoute}
        />
      </Switch>
    </div>
  );
}

export default App;
