import { Form, Row, Container, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputElement from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import {
	citiesArr,
	objTypeArr,
	workTypeArr,
	conditionerTypeArr,
	freonTypeArr,
} from '../common/formData';
import { addNewOrder, editOrder } from '../../redux/actions/ordersActions';
import { setShowAlert, setTabKey } from '../../redux/actions/adminActions';
import { regExpNumber } from '../common/regExp';

const NewOrder = ({ data, type }) => {
	const dispatch = useDispatch();
	const allOrders = useSelector((state) => state.orders.allOrders);

	const orderId = allOrders
		? allOrders[allOrders.length - 1]?.orderId + 1
		: undefined;

	const text = Yup.string().required().max(250);
	const OrderSchema = Yup.object().shape({
		number: Yup.mixed().test('number', 'Nop', (value) =>
			regExpNumber.test(value)
		),
		client: text,
		responsible: text,
		address: text,
		price: Yup.number().required().positive(),
		photos: Yup.array()
			.min(1, 'Помилка. Перевірте тип файлів')
			.max(20, 'Перевищенно максимальну кількість файлів')
			.required(),
	});
	const getToday = () => {
		let today = new Date();
		const dd = ('0' + today.getDate()).slice(-2);
		const mm = ('0' + (today.getMonth() + 1)).slice(-2);
		const yyyy = today.getFullYear();
		today = yyyy + '-' + mm + '-' + dd;
		return today;
	};
	const fileInput = useRef('fileInput');

	return (
		<Container>
			<h2 className="d-flex justify-content-center my-3">
				{type ? `Редагувати замовлення № ${data.orderId}` : 'Нове замовлення'}
			</h2>
			<Formik
				initialValues={
					data
						? data
						: {
								number: '',
								client: '',
								responsible: '',
								city: 'lviv',
								address: '',
								objType: '',
								workType: '',
								conditionerType: '',
								freonType: '',
								notes: '',
								dateOrder: getToday(),
								dateOrderCompletion: '',
								price: '',
								photos: [],
								orderId: orderId || 1,
						  }
				}
				validationSchema={OrderSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					console.log(values);
					type ? dispatch(editOrder(values)) : dispatch(addNewOrder(values));
					if (type) {
						window.history.back();
					}
					setSubmitting(false);
					dispatch(
						setShowAlert({
							text: `Нове замовлення №${values.orderId} успішно додане!`,
							type: 'success',
							show: true,
						})
					);
					dispatch(setTabKey('all-orders'));
					fileInput.current.value = '';
					resetForm();
					setTimeout(() => dispatch(setShowAlert(null)), 3000);
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
					<Form className="mt-3" onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group controlId="number">
									<Form.Label>Номер телефону:</Form.Label>
									<InputElement
										mask="+38(999)999-99-99"
										alwaysShowMask={true}
										name="number"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.number}
										type="tel"
										className={`form-control ${
											touched.number ? (errors.number ? 'is-invalid' : 'is-valid') : ''
										}`}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="client">
									<Form.Label>Контакна особа / Назва організації:</Form.Label>
									<Form.Control
										name="client"
										type="text"
										placeholder="Контактна особа"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.client}
										className={`form-control ${
											touched.client ? (errors.client ? 'is-invalid' : 'is-valid') : ''
										}`}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="responsible">
									<Form.Label>Відповідальний за виконання робіт:</Form.Label>
									<Form.Control
										name="responsible"
										type="text"
										placeholder="Відповідальна особа"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.responsible}
										className={`form-control ${
											touched.responsible
												? errors.responsible
													? 'is-invalid'
													: 'is-valid'
												: ''
										}`}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="city">
									<Form.Label>Місто</Form.Label>
									<Form.Control
										name="city"
										as="select"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.city}
										custom
									>
										<option value="Львів" defaultValue>
											Львів
										</option>
										{citiesArr.map((city, i) => (
											<option value={city} key={i}>
												{city}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="address">
									<Form.Label>Адреса:</Form.Label>
									<Form.Control
										name="address"
										type="text"
										placeholder="Адреса"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address}
										className={`form-control ${
											touched.address ? (errors.address ? 'is-invalid' : 'is-valid') : ''
										}`}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="objType">
									<Form.Label>Оберіть тип об'єкта</Form.Label>
									<Form.Control
										as="select"
										name="objType"
										custom
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.objType}
										required
									>
										<option defaultValue></option>
										{objTypeArr.map((type, i) => (
											<option key={i} value={type}>
												{type}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="workType">
									<Form.Label>Оберіть тип робіт</Form.Label>
									<Form.Control
										as="select"
										name="workType"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.workType}
										custom
										required
									>
										<option defaultValue></option>
										{workTypeArr.map((type, i) => (
											<option key={i} value={type}>
												{type}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="conditionerType">
									<Form.Label>Оберіть тип кондиціонера</Form.Label>
									<Form.Control
										as="select"
										name="conditionerType"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.conditionerType}
										custom
										required
									>
										<option defaultValue></option>
										{conditionerTypeArr.map((type, i) => (
											<option key={i} value={type}>
												{type}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="freonType">
									<Form.Label>Оберіть тип фреону</Form.Label>
									<Form.Control
										as="select"
										name="freonType"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.freonType}
										custom
										required
									>
										<option defaultValue></option>
										{freonTypeArr.map((type, i) => (
											<option key={i} value={type}>
												{type}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="notes">
									<Form.Label>Особливі замітки:</Form.Label>
									<Form.Control
										type="text"
										placeholder="..."
										name="notes"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.notes}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="dateOrder">
									<Form.Label>Дата прийому замовлення:</Form.Label>
									<Form.Control
										type="date"
										name="dateOrder"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.dateOrder}
										required
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="dateOrderCompletion ">
									<Form.Label>Дата виконання робіт:</Form.Label>
									<Form.Control
										type="date"
										name="dateOrderCompletion"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.dateOrderCompletion}
										required
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="price">
									<Form.Label>Загальна вартість робіт:</Form.Label>
									<InputGroup>
										<Form.Control
											type="number"
											placeholder="Вартість"
											name="price"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.price}
											className={`form-control ${
												touched.price ? (errors.price ? 'is-invalid' : 'is-valid') : ''
											}`}
										/>
										<InputGroup.Prepend>
											<InputGroup.Text>UAH</InputGroup.Text>
										</InputGroup.Prepend>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.File>
										<Form.File.Label>Завантажити фото</Form.File.Label>
										<Form.File.Input
											ref={fileInput}
											name="photos"
											onChange={(e) => {
												const arr = Array.from(e.target.files);
												const isWrongFiles = arr.some(
													(file) => !file.type.includes('image')
												);
												isWrongFiles
													? setFieldValue('photos', [])
													: setFieldValue('photos', arr);
											}}
											onBlur={handleBlur}
											type="file"
											accept=".jpg, .jpeg, .png"
											multiple
											className={`form-control p-1 ${
												touched.photos ? (errors.photos ? 'is-invalid' : 'is-valid') : ''
											}`}
										/>
									</Form.File>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="price">
									<Form.Label>Вхідний номер замовлення:</Form.Label>
									<Form.Control
										type="text"
										placeholder="Readonly input here..."
										readOnly
										value={type ? values.orderId : orderId || 1}
									/>
								</Form.Group>
							</Col>
						</Row>
						<button type="submit" className="btn-app btn p-2" disabled={isSubmitting}>
							{type ? 'Зберегти' : 'Відправити'}
						</button>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default NewOrder;
