let ReactDOM = require('react-dom');
let React = require('react');

var TodoApp = require('./components/TodoApp.react');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
