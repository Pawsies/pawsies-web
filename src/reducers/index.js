import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import session from './session';
import navigation from './navigation';

export default combineReducers({
  session,
  navigation,
  routing: routerReducer
});
