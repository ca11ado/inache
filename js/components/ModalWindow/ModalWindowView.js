const React = require('react');
const _ = require('lodash');
const css = require('./modal-window-view.css');
const { connect } = require('react-redux');
const store = require('../../store');
const TYPES = require('../../actions/action-types');

const ModalWindow = React.createClass({
	render () {
		const { text, image, isOpen } = this.props;

		const Text = text ? <h1>{text}</h1> : <div></div>;
		const Image = !_.isEmpty(image)
			? <img className={css.image} src={image.src} /> 
			: <div></div>;
		
		if (!isOpen) {
			return (<div></div>);	
		}

		return (
			<div
				className={`${css.block} ${css.contentCentered}`}
				onClick={this._closeWindow}
			>
				<div className={`${css.content} ${css.contentCentered}`}>
					{Text}
					{Image}
				</div>
			</div>	
		);
	},

	_closeWindow () {
		store.dispatch({
			type: TYPES.SET_MODAL_CLOSE
		});	
	}
});

const mapStateToProps = ({ modalState }) => ({ 
	text: modalState.text,
	image: modalState.image,
	isOpen: modalState.isOpen
});
module.exports = connect(mapStateToProps)(ModalWindow);
