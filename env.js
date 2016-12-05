let localEnv;
try {
  localEnv = require('./env.local');
} catch (e) {
  localEnv = {};
}

// properties will be replaced by env.local.js env object
let env = {
  API_URL: 'http://127.0.0.1:3008/api/'
};

module.exports = Object.assign(env, localEnv);