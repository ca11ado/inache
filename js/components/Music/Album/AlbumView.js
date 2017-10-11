import React from 'react';
import css from './album.css';
import Cover from './Cover/Cover';
import About from './About/About';
import Song from './Song/Song';
import PlayList from './PlayList/PlayList';

export default (props) => {
  const {
    name,
    song,
    songs,
    about,
    photo,
    urlName,
    playerLink,
    activeSongNumber
  } = props;

  console.log('%c some text %o', 'color:red', 'props', props);

  return (
    <div className={css.block}>
      <div className={`${css.half} ${css.rightHalf}`}>
        <div>
          <div className={css.cell}>
            <Cover photo={photo}/>
          </div>
          <div className={css.cell}>
            <PlayList
              name={name}
              songs={songs}
              activeSong={activeSongNumber}
              urlName={urlName}
            />
          </div>
        </div>
        <div>
          <About about={about}/>
        </div>
      </div>

      <div className={`${css.half} ${css.rightHalf}`}>
        <div>
          <iframe width="404" height="201" src={playerLink}></iframe>
        </div>
        <div>
          <Song song={song}/>
        </div>
      </div>
    </div>
  );
};