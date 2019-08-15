import { BrowserRouter } from 'react-router-dom';

let ReactDOM = require('react-dom');
let React = require('react');
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';

ReactDOM.render(
  <Provider store={store}><Router /></Provider>,
  document.getElementById('app')
);
