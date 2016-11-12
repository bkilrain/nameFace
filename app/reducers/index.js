// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import dashboard from './app_reducer';

const rootReducer = combineReducers({
  routing,
  dashboard

});

export default rootReducer;
