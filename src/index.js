import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './bootstrap';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
