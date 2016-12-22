const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { 
	text: '', 
	image: {},
	isOpen: false
};

const ModalReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
		case TYPES.SET_MODAL_OPEN:
			return Object.assign({}, state, { 
				isOpen: true,
				text: action.text || DEFAULT_STATE.text,
				image: action.image || DEFAULT_STATE.image
			});
		case TYPES.SET_MODAL_CLOSE:
			return DEFAULT_STATE;
  }

  return state;
};

module.exports = ModalReducer;
