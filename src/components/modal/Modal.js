import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import InputElement from 'react-input-mask';
import { setLandingModalShow } from '../../redux/actions/landingPageActions';
import { regExpNumber } from '../common/regExp';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const ModalWindow = () => {
	const show = useSelector((state) => state.landingPage.modalShow);
	const number = useSelector((state) => state.landingPage.clientNumber);
	const dispatch = useDispatch();

	/* 	const hours = new Date().getHours();
	const nightTime = hours <= 8 && hours <= 20; */
	const schema = Yup.object().shape({
		clientNumber: Yup.mixed().test('clientNumber', 'Nop', (value) =>
			regExpNumber.test(value)
		),
		clientName: Yup.string().required(),
	});

	const handleClose = () => dispatch(setLandingModalShow(false));
	return (
		<Modal
			show={show}
			size="lg"
			dialogClassName="verdigris main-modal border-0"
			onHide={handleClose}
			animation={false}
		>
			<Modal.Header closeButton className="verdigris main-modal-item">
				<Modal.Title>Отримайте консультацію</Modal.Title>
			</Modal.Header>
			<Formik
				initialValues={{
					clientName: '',
					clientNumber: '' || number,
				}}
				validationSchema={schema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(false);
					const { clientName, clientNumber } = values;
					const data = {
						clientName,
						clientNumber,
					};
					console.log(data);
					resetForm();
					handleClose();
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					setFieldValue,
				}) => (
					<Form onSubmit={handleSubmit}>
						<Modal.Body className="verdigris main-modal-item">
							<Row>
								<Col>
									<Form.Group controlId="name">
										<Form.Label>
											<h4 className="m-0">Ваше ім'я</h4>
										</Form.Label>
										<Form.Control
											value={values.clientName}
											onChange={handleChange}
											name="clientName"
											type="text"
											placeholder="Ваше ім'я"
											className={`form-control ${
												touched.clientName
													? errors.clientName
														? 'is-invalid'
														: 'is-valid'
													: ''
											}`}
											onBlur={handleBlur}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="number">
										<Form.Label>
											<h4 className="m-0">Номер телефону:</h4>
										</Form.Label>
										<InputElement
											value={values.clientNumber}
											onChange={handleChange}
											mask="+38(999)999-99-99"
											alwaysShowMask={true}
											name="clientNumber"
											onBlur={handleBlur}
											type="tel"
											className={`form-control ${
												touched.clientNumber
													? errors.clientNumber
														? 'is-invalid'
														: 'is-valid'
													: ''
											}`}
											required
										/>
									</Form.Group>
								</Col>
							</Row>
						</Modal.Body>
						<Modal.Footer className="verdigris main-modal-item">
							<button type="submit" className="btn-app p-2" disabled={isSubmitting}>
								Чекаю на дзвінок
							</button>
						</Modal.Footer>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
