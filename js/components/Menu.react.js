/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var style_block = {
  background: '#3399ff'
};

var Menu = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="menu" style={style_block}>
        <p>
            here will be menu [change text]
        </p>
      </div>
    );
  },
});

module.exports = Menu;
