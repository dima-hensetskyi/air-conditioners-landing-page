import { Tabs, Tab, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import NewOrder from './NewOrder';
import AllOrders from './AllOrders';
import { Alerts } from '../common/alerts/Alert';

import { setAuthUserData, setTabKey } from '../../redux/actions/adminActions';
import { withAuthRedirect } from '../common/hoc/withAuthRedirect';

const AdminPage = () => {
	const key = useSelector((state) => state.adminPage.tabKey);
	const alertData = useSelector((state) => state.adminPage.alert);
	const dispatch = useDispatch();
	const setTab = (e) => {
		dispatch(setTabKey(e));
	};
	const onLogOut = () => dispatch(setAuthUserData(false));
	return (
		<>
			<span className="float-right">
				<Container className="mx-5">
					<button className="btn-app p-2" onClick={onLogOut}>
						Вийти
					</button>
				</Container>
			</span>
			<Container>
				<h2 className="d-flex justify-content-center mt-3">Brand Link</h2>
				<Tabs id="controlled-tab-example" activeKey={key} onSelect={setTab}>
					<Tab eventKey="all-orders" title="Список усіх замовлень">
						<AllOrders></AllOrders>
					</Tab>
					<Tab eventKey="new-older" title="Додати замовлення">
						<NewOrder />
					</Tab>
				</Tabs>
				<Alerts {...alertData} />
			</Container>
		</>
	);
};

export default withAuthRedirect(AdminPage);
