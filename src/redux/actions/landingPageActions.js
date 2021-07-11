import {
	SET_LENDING_MODAL_SHOW,
	SET_CLIENT_NUMBER,
	SET_SHOW_PHONE_NUMBER,
} from '../types';

export const setLandingModalShow = (value) => ({
	type: SET_LENDING_MODAL_SHOW,
	value,
});
export const setClientNumber = (number) => ({
	type: SET_CLIENT_NUMBER,
	number,
});
export const setShowPhoneNumber = () => ({
	type: SET_SHOW_PHONE_NUMBER,
});
