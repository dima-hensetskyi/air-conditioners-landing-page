import { Modal, Button, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalShow } from '../../redux/actions/adminActions';

const ModalWindow = () => {
	const modalData = useSelector((state) => state.adminPage.modalShow);

	const data = useSelector((state) =>
		state.orders.allOrders.find((order) => order.orderId === modalData.orderId)
	);
	const dispatch = useDispatch();

	const dateOrder = new Date(data?.dateOrder).toLocaleDateString('uk-UA');
	const dateOrderCompletion = new Date(
		data?.dateOrderCompletion
	).toLocaleDateString('uk-UA');

	const handleClose = () =>
		dispatch(setModalShow({ show: false, orderId: null }));
	const photos = data?.photos?.map((file) => URL.createObjectURL(file));
	return (
		<>
			<Modal
				show={modalData?.show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size={'xl'}
			>
				<Modal.Header closeButton>
					<Modal.Title className="w-100 d-flex justify-content-around">
						<span>{`Замовлення №${data?.orderId}`}</span>
						<span>{data?.number}</span>
						<span>Замовник: {data?.client}</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col className="pr-1">
							<Table striped bordered hover className="text-center mb-2">
								<tbody>
									<tr>
										<th>Дата замовлення:</th>
										<td>{dateOrder}</td>
									</tr>
									<tr>
										<th>Місто:</th>
										<td>{data?.city}</td>
									</tr>
									<tr>
										<th>Тип об'єкта:</th>
										<td>{data?.objType}</td>
									</tr>
									<tr>
										<th>Тип кондиціонера:</th>
										<td>{data?.conditionerType}</td>
									</tr>
									<tr>
										<th>Загальна вартість робіт:</th>
										<td>{data?.price} грн</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className="pl-1">
							<Table striped bordered hover className="text-center mb-2">
								<tbody>
									<tr>
										<th>Дата виконання:</th>
										<td>{dateOrderCompletion}</td>
									</tr>
									<tr>
										<th>Адреса:</th>
										<td>{data?.address}</td>
									</tr>
									<tr>
										<th>Тип робіт:</th>
										<td>{data?.workType}</td>
									</tr>
									<tr>
										<th>Тип фреону:</th>
										<td>{data?.freonType}</td>
									</tr>
									<tr>
										<th>Відповідальна особа:</th>
										<td>{data?.responsible}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col xs={12}>
							<Table striped bordered hover className="text-center">
								<tbody>
									<tr>
										<th>Особливі замітки:</th>
										<td>{data?.notes}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
					<Row className="px-3">
						{photos &&
							photos.map((url) => (
								<Col xs={3} style={{ overflow: 'hidden' }} className="p-0">
									<img src={url} className="order-photo" alt="Order's gallery element" />
								</Col>
							))}
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" className="mx-2" onClick={handleClose}>
						Закрити
					</Button>
					<Link to={`/admin/order-edit/${data?.orderId}`}>
						<Button className="mx-2" variant="primary">
							Редагувати
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default ModalWindow;
