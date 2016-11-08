let _ = require('lodash');
let css = require('./PlayList.css');
let React = require('react');

let PlayList = React.createClass({
  render () {
    let { name, songs, activeSong } = this.props;

    let songsList = _.map(songs, (song, index) => {
      let songClass = css.song;
      let className = activeSong === index ? `${songClass} ${css.activeSong}` : songClass;
      return (<li className={className} key={`song-in-playlist-${index}`}>{song.name}</li>);
    });

    return (
      <div className={css.block}>
        <p>{name}</p>
        <ol className={css.songsList}>
          {songsList}
        </ol>
      </div>
    );
  }
});

module.exports = PlayList;