let css = require('./newsItem.css');
let React = require('react');
let moment = require('moment');

let NewsItem = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    let date = moment(this.props.date).format('YYYY MMMM DD');
    let text = this.props.text;

    return (
      <div className={css.newsItemWrap}>
        <div className={css.date}>{date}</div>
        <div className={css.text}>{text}</div>
      </div>
    );
  }

});

module.exports = NewsItem;
