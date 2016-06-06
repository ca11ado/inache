let _ = require('lodash');
let css = require('./homePage.css');
let React = require('react');
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

    return (
      <div className={css.block}>
        <div className={css.leftBlock}>
          <LeftBlock />
        </div>
        <div className={css.middleBlock}>
          <MiddleBlock news={news} />
        </div>
        <div className={css.rightBlock}>
          <RightBlock />
        </div>
      </div>
    );
  },

  _onChange () {
    this.setState(getNewsState());
  }
});

module.exports = HomePage;