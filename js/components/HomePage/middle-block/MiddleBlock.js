let _ = require('lodash');
let css = require('./MiddleBlock.css');
let React = require('react');
let NewsItem = require('../../News/news-item/NewsItem');

let MiddleBlock = React.createClass({
  render () {
    let news = this.props.news;
    
    let showNews = _.map(news, (item, index) => {
      let text = _.get(item, 'text');
      let date = _.get(item, 'date');
      let header = _.get(item, 'header');
      let key = `homePageNews-${index}`;
      let props = { key, date, text };
      return <NewsItem { ...props } />;
    });
    
    return (
      <div>
        <div className={css.blockHeader}>Последние новости:</div>
        <div className={css.newsBlock}>
          {showNews}
        </div>
      </div>
    );
  }
});

module.exports = MiddleBlock;