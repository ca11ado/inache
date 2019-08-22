import styled from 'styled-components';
let _ = require('lodash');
let css = require('./news.css');
let React = require('react');
let NavLink = require('../framework/NavLink.react/navlink');
let moment = require('moment');
import Components from 't0s-components';
moment.locale('ru');

/*
class Smile extends React.Component {
  render() {
    return (<h1>Here will be smile</h1>);
  }
}
*/

const NothingWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

let NewsItem = (props) => {
  const FORMAT = 'DD MMMM YYYY';
  let date = moment(props.date).format(FORMAT);
  let text = props.text;
  let header = props.header || '';

  return (
    <div className={css.newsItemWrap}>
      <div className={css.headerContainer}>
        <span className={css.header}>{header}</span>
        <span className={css.subHeader}>{date}</span>
      </div>
      <div className={css.article}>{text}</div>
    </div>
  );
};

let NewsView = (props) => {
  const news =  _.map(props.news, ({ text, date, header }) => {
    const props = { key: date, date, text, header };
    return <NewsItem { ...props } />;
  });

  const nothingToShow = (
    <NothingWrapper>
      <h2>За этот год нет ни одной новости</h2>
      <Components.Smile />
    </NothingWrapper>
  );

  return (
    <div>
      { news.length ? news : nothingToShow }
    </div>
  );
};

export default NewsView;
