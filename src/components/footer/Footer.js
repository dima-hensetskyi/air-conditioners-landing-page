import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormControl,
} from 'react-bootstrap';
import { getIcon } from './../common/Icon/Icons';
export const Footer = () => (
	<Container fluid className="bg-dark text-white pt-2">
		<Container className="pt-4 pb-4 border-bottom border-secondary">
			<Row>
				<Col className="col-12 border-right border-secondary col-lg">
					<p>
						{getIcon('location')}Adress{' '}
						<span className="text-secondary">66 Broklyn Street, New York</span>
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
						{getIcon('phoneCall')}Get a Quote{' '}
						<span className="text-secondary">+38 064 577 41 31</span>
					</p>
				</Col>
			</Row>
		</Container>
		<Container className="pt-4">
			<Row>
				<Col className="col-12 col-md">
					<h5>About BrandLink</h5>
					<p className="text-secondary pr-lg-5 mr-lg-5">
						At BrandLink, We don’t just provide resi-dential and commercial heating
						and air conditioning services; we make people’s lives easier. Better.
					</p>
				</Col>
				<Col>
					<h5>Отримати консультацію спеціаліста</h5>
					<Form inline>
						<FormControl
							placeholder="Ваш номер телефону"
							required
							type="tel"
							className="mr-2 w-lg-50"
							autoComplete="tel"
						/>
						<Button className="btn-app p-2 pl-3 pr-3 mt-3 mt-lg-0 ">
							Замовити дзвінок
						</Button>
					</Form>
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
