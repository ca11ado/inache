const React = require('react');
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');
const css = require('./content-wrapper-view.css');
const CenterBlock = require('./Blocks/CenterBlockView');
const LeftBlock = require('./Blocks/LeftBlockView');
const RightBlock = require('./Blocks/RightBlockView');

const CenterBlockView = (props) => {

  return (
    <CSSTransitionGroup
      transitionName="content-wrapper"
      transitionEnter={false}
      transitionLeavet={false}
      transitionAppear={true}
      transitionAppearTimeout={5000}>
      <div key="main-example" className={css.block}>
          <div className={css.left}><LeftBlock { ...props } /></div>
          <div className={css.center}><CenterBlock { ...props } /></div>
          <div className={css.right}><RightBlock/></div>
      </div>
    </CSSTransitionGroup>
  );
};

module.exports = CenterBlockView;
