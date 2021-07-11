import { useState } from 'react';
import InputElement from 'react-input-mask';
import { Container, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { getIcon } from './../common/Icon/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {
	setClientNumber,
	setLandingModalShow,
	setShowPhoneNumber,
} from '../../redux/actions/landingPageActions';

const Header = () => {
	return (
		<Navbar bg="light" expand="lg" className="pt-3 pb-3 sticky-top">
			<Container>
				<Row>
					<Col className="col-lg-2">
						<Navbar.Brand href="#home" className="brand d-flex align-items-center">
							{getIcon('brand')}
							<p className="d-flex flex-column align-items-center m-0">
								BrandLink
								<span className="subtitle">Air Conditioning</span>
							</p>
						</Navbar.Brand>
					</Col>
					<Col className="col-lg-4 d-md-none d-lg-flex align-items-center justify-content-end">
						<Number />
					</Col>
					<Col className="col-lg-6 col-md-8 d-none d-md-flex justify-content-end">
						<AddNumberForm type="header" />
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
};
export default Header;

export const AddNumberForm = ({ type }) => {
	const [number, setNumber] = useState('');
	const dispatch = useDispatch();
	return (
		<Form inline>
			<InputElement
				placeholder="Ваш номер телефону"
				mask="+38(999)999-99-99"
				alwaysShowMask={false}
				type="tel"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				name="number"
				autoComplete="tel"
				className={`form-control ${
					type === 'footer' ? 'mr-2 w-lg-50' : 'mx-3 mr-sm-2 w-50'
				}`}
			></InputElement>
			<Button
				className={`btn-app p-2 ${type === 'footer' && 'pl-3 pr-3 mt-3 mt-lg-0'} `}
				onClick={() => {
					dispatch(setClientNumber(number));
					setNumber('');
					dispatch(setLandingModalShow(true));
				}}
			>
				Замовити дзвінок
			</Button>
		</Form>
	);
};

export const Number = ({ type }) => {
	const showPhoneNumber = useSelector(
		(state) => state.landingPage.isPhoneNumberShow
	);
	const dispatch = useDispatch();
	const icon = type === 'footer' ? 'phoneCall' : 'phone';
	if (showPhoneNumber) {
		return (
			<>
				{getIcon(icon)}
				<a
					href="tel:88005553535"
					className={`link ${type === 'footer' && 'text-secondary'}`}
				>
					+38 (096) 58 55 999 8
				</a>
			</>
		);
	}

	return (
		<>
			{getIcon(icon)}
			<span
				className={`link ${type === 'footer' && 'text-secondary'}`}
				onClick={() => {
					console.log('ShowNumber');
					dispatch(setShowPhoneNumber());
				}}
			>
				+38 (096)... Показати номер
			</span>
		</>
	);
};
