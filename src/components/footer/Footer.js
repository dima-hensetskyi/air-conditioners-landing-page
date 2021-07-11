import { Container, Row, Col } from 'react-bootstrap';
import { AddNumberForm, Number } from '../header/Header';
import { getIcon } from './../common/Icon/Icons';
export const Footer = () => (
	<Container fluid className="bg-dark text-white pt-2">
		<Container className="pt-4 pb-4 border-bottom border-secondary">
			<Row>
				<Col className="col-12 border-right border-secondary col-lg">
					<p>
						{getIcon('location')}
						<span className="text-secondary">{`Адреса: Львівська обл., м. Львів`}</span>
					</p>
				</Col>
				<Col className="col-12 text-lg-center border-right border-secondary col-lg">
					<p>
						{getIcon('email2')}Email{' '}
						<span className="text-secondary">help@example.com</span>
					</p>
				</Col>
				<Col className="text-lg-center col-12 col-lg">
					<p>
						<Number type="footer" />
					</p>
				</Col>
			</Row>
		</Container>
		<Container className="pt-4">
			<Row>
				<Col className="col-12 col-md">
					<h5>Про BrandLink</h5>
					<p className="text-secondary pr-lg-5 mr-lg-5">
						Немає нічого кращого, ніж робота, що приносить задовлення. Кліматизація -
						це те що ми любимо, вміємо та робимо. Наші майстри завжди залишають за
						собою чистоту, якісну прохолоду та задоволених клієнтів.
					</p>
				</Col>
				<Col>
					<h5 className="mb-3">Отримати консультацію спеціаліста</h5>
					<AddNumberForm type="footer" />
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="text-secondary mt-2">&copy; copyright 2021 by BrandLink</p>
				</Col>
			</Row>
		</Container>
	</Container>
);
