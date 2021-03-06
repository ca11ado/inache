const _ = require('lodash');
const css = require('./Cover.css');
const React = require('react');
const store = require('../../../../store');
const TYPES = require('../../../../actions/action-types');

class Cover extends React.Component {
	render () {

		return (
			<div className={css.block}>
				<img
					className={css.coverImage} 
					src={this.props.photo} 
					onClick={this._onImageClick}
				/>
			</div>
		);
	}

	_onImageClick () {
		store.dispatch({
			type: TYPES.SET_MODAL_OPEN,
			image: {
				src: this.props.photo
			}
		});
	}
}

module.exports = Cover;
