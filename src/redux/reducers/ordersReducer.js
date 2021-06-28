import { ADD_NEW_ORDER, EDIT_ORDER } from '../types';

const initialState = {
	allOrders: [],
};

export const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_ORDER:
			return { ...state, ...state.allOrders.push(action.payload) };
		case EDIT_ORDER:
			const index = state.allOrders.findIndex(
				(order) => order.orderId === action.payload.orderId
			);
			return {
				...state,
				...(state.allOrders[index] = action.payload),
			};
		default:
			return state;
	}
};
