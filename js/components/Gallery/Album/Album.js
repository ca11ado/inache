let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');

let Album = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  componentWillReceiveProps: function(nextProps) {
  },

  render () {
    let photoPath = `/img/albums/${this.props.photo}`;
    let name = this.props.name;
    let link = this.props.link;

    return (
      <div className={css.albumWrapper}>
        <img className={css.album} src={photoPath} />
        <div className={css.albumName}><a href={link}>{name}</a></div>
      </div>
    );
  }
});

module.exports = Album;