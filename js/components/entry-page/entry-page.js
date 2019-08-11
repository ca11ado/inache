import React from 'react';
import { Link } from 'react-router-dom';
import css from './entry-page.css';
import Youtube from '../youtube/youtube';

export default () => (
    <div className={css.wrapper}>
      <div className={css['fake-margin']}>&nbsp;</div>
      <div className={css.logo} title="Сайт находится в разработке">
        <Link className={css.logo__link} to="/main"></Link>
      </div>
      <div className={css.title}>
        <span className={css.title_main}>Официальный сайт</span><br/>
        <span className={css.title_sub}>находится в разработке</span>
      </div>
      <div className={css.icons}>
        <a title="ВКонтакте"
           href="https://vk.com/vovremeni.band"
           className={`${css.icon} ${css.icon_vk}`}
           target="_blank">&nbsp;</a>
        <a title="Facebook"
           href="https://www.facebook.com/vovremeni.band"
           className={`${css.icon} ${css.icon_facebook}`}
           target="_blank">&nbsp;</a>
        <a title="Instagram"
           href="https://www.instagram.com/vovremeni.band"
           className={`${css.icon} ${css.icon_instagram}`}
           target="_blank">&nbsp;</a>
      </div>
      <div className={css.playerWrapper}>
        <Youtube />
      </div>
    </div>
);
