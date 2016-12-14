const React = require('react');
const css = require('./content-wrapper-view.css');
const CenterBlock = require('./CenterBlockView');
const LeftBlock = require('./LeftBlockView');
const RightBlock = require('./RightBlockView');

const CenterBlockView = (props) => {

  return (
    <div className={css.block}>
        <div className={css.left}><LeftBlock { ...props } /></div>
        <div className={css.center}><CenterBlock { ...props } /></div>
        <div className={css.right}><RightBlock/></div>
    </div>
  );
};

module.exports = CenterBlockView;
