let { createStore } = require('redux');
let reducers = require('./reducers');

const store = createStore(reducers);
module.exports = store;