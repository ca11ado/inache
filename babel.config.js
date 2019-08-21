module.exports = function (api) {
  api.cache(true);

  const plugins = ['syntax-dynamic-import'];
  const presets = [
    ['@babel/preset-react'],
    ['@babel/preset-env', { modules: false }]
  ];

  return {
    presets,
    plugins
  };
}
