import {
	SET_CLIENT_NUMBER,
	SET_LENDING_MODAL_SHOW,
	SET_SHOW_PHONE_NUMBER,
} from '../types';

const initialState = {
	modalShow: false,
	clientNumber: '',
	isPhoneNumberShow: false,
};

export const landingPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LENDING_MODAL_SHOW:
			return { ...state, modalShow: action.value };
		case SET_CLIENT_NUMBER:
			return { ...state, clientNumber: action.number };
		case SET_SHOW_PHONE_NUMBER:
			return { ...state, isPhoneNumberShow: true };
		default:
			return state;
	}
};
