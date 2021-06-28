import { combineReducers } from 'redux';

import { adminPageReducer } from './adminReducer';
import { ordersReducer } from './ordersReducer';

const rootReducer = combineReducers({
	adminPage: adminPageReducer,
	orders: ordersReducer,
});
export default rootReducer;
