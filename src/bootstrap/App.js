import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';
import { configureStore } from '../utils';

import {
  Wrapper,
  SessionManager
} from '../bootstrap';

import {
  Login,
  Home
} from '../pages';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider store={ store }>
    <Wrapper>
      <Router history={ history } render={ applyRouterMiddleware(useScroll()) }>
        <Route path='/' component={ SessionManager }>
          <IndexRoute component={ Home } />
          <Route path="/login" component={ Login } />
        </Route>
      </Router>
    </Wrapper>
  </Provider>
)
