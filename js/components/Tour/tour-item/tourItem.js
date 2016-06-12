let css = require('./tourItem.css');
let React = require('react');
let moment = require('moment');

moment.locale('ru');

const FORMAT = 'DD MMMM YYYY';

let TourItem = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    let date = moment(this.props.date).format(FORMAT);
    let text = this.props.text;
    let header = this.props.header || '';

    return (
      <div className={css.tourItemWrap}>
        <div className={css.date}>{date}</div>
        <div className={css.header}>{header}</div>
        <div className={css.text}>{text}</div>
      </div>
    );
  }

});

module.exports = TourItem;
