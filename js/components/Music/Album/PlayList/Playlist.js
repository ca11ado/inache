let _ = require('lodash');
let css = require('./PlayList.css');
let React = require('react');

let PlayList = (props) => {
  let { name, songs, activeSong } = props;

  return (
    <div className={css.block}>
      <p>{name}</p>
      <ol className={css.songsList}>
        { _.map(songs, (song, index) => {
          let songClass = css.song;
          let className = activeSong === index ? `${songClass} ${css.activeSong}` : songClass;
          return (<li className={className} key={`song-in-playlist-${index}`}>{song.name}</li>);
        })}
      </ol>
    </div>
  );
};

module.exports = PlayList;