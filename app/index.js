// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import database from '../db/config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

database.then((db) => {
    const store = configureStore({dashboard: db.get(1)});
    const history = syncHistoryWithStore(hashHistory, store);

    injectTapEventPlugin();
    console.log('store and db synced', store)
    render(
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  }).catch( (err) => {
    console.log('error loading DB and setting as initial store:', err);
  });
