const _ = require('lodash');
const React = require('react');
const moment = require('moment');
const css = require('./main-page-container.css');
const store = require('../../store');
const { connect } = require('react-redux');
const TYPES = require('../../actions/action-types');
const ContentWrapper = require('./ContentWrapperView');
const API = require('../../api');

let Logo = require('../Logo.react/logo');
let Menu = require('../Menu.react/menu');
let MainBlock = require('../MainBlock/mainBlock');

const NEWS_COUNT = 5;

class MainPageContainer extends React.Component {
  componentDidMount () {
    const currentYear = moment().year();
    API
      .getSectionItemsForYear('tours', currentYear)
      .then((tours) => {
        store.dispatch({
          type: TYPES.GET_TOURS,
          tours
        });
      });

    API
      .getSectionItems('news')
      .then((news) => {
        store.dispatch({
          type: TYPES.GET_NEWS,
          news: _.take(news, 3)
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
    }
  }

  render () {
    const props = {
      tours: _.chain(this.props.tours)
        .orderBy(['date'])
        .take(NEWS_COUNT)
        .value(),
      news: _.chain(this.props.news)
        .orderBy(['date'], ['desc'])
        .take(NEWS_COUNT)
        .value(),
    };

    return (
      <div className={css.mainWrapper}>
        <Logo />
        <Menu />
        <MainBlock>
          <ContentWrapper { ...props } />
        </MainBlock>
      </div>
    );
  }
}

const mapStateToProps = ({ toursState, newsState }) => ({ tours: toursState.tours, news: newsState.news });

module.exports = connect(mapStateToProps)(MainPageContainer);
