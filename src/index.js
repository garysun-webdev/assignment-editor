import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './components/App';
import configureStore from './utils/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
registerServiceWorker();
