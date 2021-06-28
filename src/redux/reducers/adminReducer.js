import {
	SET_AUTH_USER_DATA,
	SET_MODAL_SHOW,
	SET_TAB_KEY,
	SET_SHOW_ALERT,
} from '../types';

const initialState = {
	isAuth: sessionStorage.isAuth ? JSON.parse(sessionStorage.isAuth) : false,
	initialized: false,
	tabKey: 'all-orders',
	alert: {
		show: false,
		type: null,
		text: null,
	},
	modalShow: {
		show: false,
		orderId: null,
	},
};

export const adminPageReducer = (state = initialState, action) => {
	switch (action.type) {
		/* case INITIALIZED_SUCCESS:
			return { ...state, initialized: true }; */
		case SET_SHOW_ALERT:
			return { ...state, alert: action.payload };
		case SET_TAB_KEY:
			return { ...state, tabKey: action.key };
		case SET_MODAL_SHOW:
			return { ...state, modalShow: action.payload };
		case SET_AUTH_USER_DATA:
			return { ...state, isAuth: action.value };
		default:
			return state;
	}
};
