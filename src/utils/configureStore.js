import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({ level: 'info', collapsed: true });

let devToolsExtension = window.devToolsExtension || null;

let createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(browserHistory)
  ),
  devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
