let _ = require('lodash');
let css = require('./homePage.css');
let React = require('react');
let NewsItem = require('../../components/News/news-item/NewsItem');
let NewsStore = require('../../stores/NewsStore');
let NewsAction = require('../../actions/NewsActions');

let MiddleBlock = require('./middle-block/MiddleBlock');
let LeftBlock = require('./left-block/LeftBlock');
let RightBlock = require('./right-block/RightBlock');

const NEWS_COUNT = 5;

function getNewsState () {
  return {
    news: NewsStore.getNews()
  };
}

let HomePage = React.createClass({
  getInitialState () {
    NewsAction.getLastNews(NEWS_COUNT);
    return {};
  },

  componentDidMount () {
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmont () {
    NewsStore.removeChangeListener(this._onChange);
  },

  render () {
    let news = this.state.news;
    let showNews = _.map(news, (item, index) => {
      let text = _.get(item, 'text');
      let date = _.get(item, 'date');
      let header = _.get(item, 'header');
      let key = `homePageNews-${index}`;
      let props = { key, date, text };
      return <NewsItem { ...props } />;
    });

    return (
      <div className={css.block}>
        <div className={css.leftBlock}>
          <div className={css.blockHeader}>Ближайшие концерты:</div>
        </div>
        <div className={css.middleBlock}>
          <div className={css.blockHeader}>Последние новости:</div>
          <div className={css.newsBlock}>
            {showNews}
          </div>
        </div>
        <div className={css.rightBlock}></div>
      </div>
    );
  },

  _onChange () {
    this.setState(getNewsState());
  }
});

module.exports = HomePage;