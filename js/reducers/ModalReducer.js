const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { 
	text: '', 
	image: {},
	isOpen: false
};

const ModalReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_MODAL_TEXT:
      return Object.assign({}, state, { text: action.text });
		case TYPES.SET_MODAL_IMAGE:
			return Object.assign({}, state, { image: action.image });
		case TYPES.SET_MODAL_OPEN:
			return Object.assign({}, state, { isOpen: true } );
		case TYPES.SET_MODAL_CLOSE:
			return Object.assign({}, state, { isOpen: false });
  }

  return state;
};

module.exports = ModalReducer;
