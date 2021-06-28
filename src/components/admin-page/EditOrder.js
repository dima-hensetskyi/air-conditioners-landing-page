import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../common/hoc/withAuthRedirect';
import NewOrder from './NewOrder';
import { useSelector } from 'react-redux';

const EditOrder = ({ match }) => {
	const orderId = +match.params.orderId;
	const order = useSelector((state) =>
		state.orders.allOrders.find((item) => item.orderId === orderId)
	);
	return <NewOrder data={order} type="edit" />;
};
export default withRouter(withAuthRedirect(EditOrder));
