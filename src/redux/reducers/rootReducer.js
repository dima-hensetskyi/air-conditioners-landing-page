import { combineReducers } from 'redux';

import { adminPageReducer } from './adminReducer';
import { landingPageReducer } from './landingPageReducer';
import { ordersReducer } from './ordersReducer';

const rootReducer = combineReducers({
	adminPage: adminPageReducer,
	orders: ordersReducer,
	landingPage: landingPageReducer,
});
export default rootReducer;
