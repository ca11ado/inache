let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let moment = require('moment');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');

let Album = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  componentWillReceiveProps: function(nextProps) {
  },

  render () {
    let year = this.props.params.year;
    let backLink = [{ title: `Back to ${year}`, link: year }];

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='gallery' list={backLink} />
        <Content>
          <div>
            <h2>Here will be album's photos</h2>
          </div>
        </Content>
      </MainBlock>
    );
  }
});

module.exports = Album;