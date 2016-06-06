let css = require('./homePage.css');
let React = require('react');
let _ = require('lodash');

let NewsStore = require('../../stores/NewsStore');
let NewsAction = require('../../actions/NewsActions');
let NewsItem = require('../../components/News/news-item/NewsItem');

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
      let props = { key, header, date, text };
      return <NewsItem { ...props } />;
    });

    return (
      <div className={css.block}>
        <div className={css.leftBlock}></div>
        <div className={css.middleBlock}>
          <h2>Последние новости</h2>
          {showNews}
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