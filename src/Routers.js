import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminPage from './components/admin-page/AdminPage';
import EditOrder from './components/admin-page/EditOrder';
import Login from './components/admin-page/Login';
import MainPage from './components/MainPage';

export const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/admin/login" exact component={Login} />
				<Route path="/admin" exact component={AdminPage} />
				<Route path="/admin/order-edit/:orderId" exact component={EditOrder} />
				<Route path="/" component={MainPage} />
			</Switch>
		</Router>
	);
};
