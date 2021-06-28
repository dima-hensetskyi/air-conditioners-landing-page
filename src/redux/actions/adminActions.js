import {
	SET_MODAL_SHOW,
	SET_TAB_KEY,
	SET_AUTH_USER_DATA,
	SET_SHOW_ALERT,
} from '../types';

/* export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS }); */

/* export const initializeApp = (feedsUrl, id) => async (dispatch) => {
	await dispatch(getCommonFeeds(feedsUrl));
	await dispatch(getAuthUserData());
	await dispatch(getUserFeeds(id));
	setTimeout(() => dispatch(initializedSuccess()), 1000);
}; */

export const setShowAlert = (value) => ({
	type: SET_SHOW_ALERT,
	payload: value,
});

export const setTabKey = (key) => ({
	type: SET_TAB_KEY,
	key,
});
export const setModalShow = (payload) => ({
	type: SET_MODAL_SHOW,
	payload,
});
export const setAuthUserData = (value) => {
	if (value) {
		sessionStorage.isAuth = JSON.stringify(true);
	} else {
		sessionStorage.isAuth = JSON.stringify(false);
	}
	return {
		type: SET_AUTH_USER_DATA,
		value,
	};
};
