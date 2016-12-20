const React = require('react');
const css = require('./content-wrapper-view.css');
const CenterBlock = require('./Blocks/CenterBlockView');
const LeftBlock = require('./Blocks/LeftBlockView');
const RightBlock = require('./Blocks/RightBlockView');

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
