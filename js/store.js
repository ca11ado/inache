let { createStore } = require('redux');
let reducers = require('./reducers');

const store = createStore(reducers.default);
module.exports = store;
