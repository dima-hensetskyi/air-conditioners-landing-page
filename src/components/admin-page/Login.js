import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { setAuthUserData } from '../../redux/actions/adminActions';

const Login = () => {
	const isAuth = useSelector((state) => state.adminPage.isAuth);
	const dispatch = useDispatch();
	const text = Yup.string().required().min(5).max(250);
	const LoginSchema = Yup.object().shape({
		login: text,
		password: text,
	});

	if (isAuth) {
		return <Redirect to={'/admin'} />;
	}

	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center container-wrapper"
		>
			<Row className="px-5 w-50 mb-5">
				<Col className="al-bl py-5 px-5">
					<h3 className="d-flex justify-content-center">BrandLink</h3>
					<Formik
						initialValues={{ login: 'adminExample', password: '123456789' }}
						validationSchema={LoginSchema}
						onSubmit={(values, { setSubmitting }) => {
							console.log(values);
							dispatch(setAuthUserData(true));
							setSubmitting(false);
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
							/* and other goodies */
						}) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="login">
									<Form.Label>Логін:</Form.Label>
									<Form.Control
										name="login"
										type="text"
										placeholder="Введіть ваш логін"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.login}
										className={`form-control ${
											touched.login ? (errors.login ? 'is-invalid' : 'is-valid') : ''
										}`}
									/>
								</Form.Group>
								<Form.Group controlId="client">
									<Form.Label>Пароль:</Form.Label>
									<Form.Control
										name="password"
										type="password"
										placeholder="Пароль"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
										className={`form-control ${
											touched.password ? (errors.password ? 'is-invalid' : 'is-valid') : ''
										}`}
									/>
								</Form.Group>
								<button
									type="submit"
									className="btn-app btn p-2 my-3"
									disabled={isSubmitting}
								>
									Увійти
								</button>
							</Form>
						)}
					</Formik>
				</Col>
			</Row>
		</Container>
	);
};
export default Login;
