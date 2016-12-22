const reducer = require('../../js/reducers/ModalReducer');
const {
	SET_MODAL_TEXT,
	SET_MODAL_IMAGE,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE
} = require('../../js/actions/action-types');

describe('modal window', () => {
	let initialState;

	beforeEach(() => {
		initialState = {
			text: '', image: {}, isOpen: false
		};
	});

	it('should return initialState', () => {
		expect(
			reducer(undefined, {})
		).toEqual(initialState);	
	});

	it('should return open state', () => {
		expect(
			reducer(initialState, { type: SET_MODAL_OPEN })
		).toEqual(Object.assign(
			{},
			initialState, 
			{ isOpen: true }
		));	
	});

	it('should return close state', () => {
		expect(
			reducer(initialState, { type: SET_MODAL_CLOSE })
		).toEqual(Object.assign(
			{},
			initialState, 
			{ isOpen: false }
		));	
	});

	it('should return state with text', () => {
		const text = 'some text';

		expect(
			reducer(initialState, { type: SET_MODAL_TEXT, text })
		).toEqual(Object.assign(
			{},
			initialState, 
			{ text }
		));	
	});

	it('should return state with text', () => {
		const text = 'some text';

		expect(
			reducer(initialState, { type: SET_MODAL_TEXT, text })
		).toEqual(Object.assign(
			{},
			initialState, 
			{ text }
		));	
	});

	it('should return state with image', () => {
		const image = { src: 'http://ya.ru' };

		expect(
			reducer(initialState, { type: SET_MODAL_IMAGE, image })
		).toEqual(Object.assign(
			{},
			initialState, 
			{ image }
		));	
	});
});
