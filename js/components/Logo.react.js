let React = require('react');

let style_logo = {
  backgroundColor: '#99ccff',
  height: '150px'
};

let Logo = React.createClass({
  render: function () {
    return (
      <div id="logo" style={style_logo}>
        <img />
      </div>
    );
  }
});

module.exports = Logo;
