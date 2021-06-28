import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setModalShow } from '../../redux/actions/adminActions';

import ModalWindow from './Modal';

const AllOrders = () => {
	const orders = useSelector((state) => state.orders.allOrders);

	const dispatch = useDispatch();

	const onOrderClick = (order) => {
		dispatch(setModalShow({ orderId: order.orderId, show: true }));
	};

	return (
		<>
			<Table striped bordered hover className="text-center mt-3">
				<thead>
					<tr>
						<th>#</th>
						<th>Контактна особа</th>
						<th>Номер телефону</th>
						<th>Місто</th>
						<th>Тип робіт</th>
						<th>Дата оформлення / виконання</th>
						<th>Відповідальна особа</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order) => {
						const dateOrder = new Date(order.dateOrder).toLocaleDateString('uk-UA');
						const dateOrderCompletion = new Date(
							order.dateOrderCompletion
						).toLocaleDateString('uk-UA');
						return (
							<tr key={order.orderId} onClick={() => onOrderClick(order)}>
								<td>{order.orderId}</td>
								<td>{order.client}</td>
								<td>{order.number}</td>
								<td>{order.city}</td>
								<td>{order.workType}</td>
								<td>{`${dateOrder} / ${dateOrderCompletion}`}</td>
								<td>{order.responsible}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<ModalWindow />
		</>
	);
};

export default AllOrders;
