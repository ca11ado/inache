let _ = require('lodash');
let shortid = require('shortid');
let css = require('./PlayList.css');
let React = require('react');
let NavLink = require('../../../framework/NavLink.react/navlink');

let PlayList = (props) => {
  let { name, songs, activeSong, urlName } = props;

  return (
    <div className={css.block}>
      <p>{name}</p>
      <ol className={css.songsList}>
        { _.map(songs, (song, index) => {
          return (
            <li key={shortid.generate()}>
              <NavLink to={`/music/${urlName}/${index + 1}`}>{song.name}</NavLink>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

module.exports = PlayList;