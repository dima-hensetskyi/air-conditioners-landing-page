import {
	Container,
	Navbar,
	Form,
	Button,
	FormControl,
	Row,
	Col,
} from 'react-bootstrap';
import { getIcon } from './../common/Icon/Icons';
const Header = () => {
	return (
		<Navbar bg="light" expand="lg" className="pt-3 pb-3 sticky-top">
			<Container>
				<Row>
					<Col className="col-lg-3">
						<Navbar.Brand href="#home" className="brand d-flex align-items-center">
							{getIcon('brand')}
							<p className="d-flex flex-column align-items-center m-0">
								BrandLink
								<span className="subtitle">Air Conditioning</span>
							</p>
						</Navbar.Brand>
					</Col>
					<Col className="col-lg-3 d-md-none d-lg-block">
						<span>
							{getIcon('phone')}
							+38 064 577 41 31
						</span>
					</Col>
					<Col className="col-lg-6 col-md-8 d-none d-md-block">
						<Form inline>
							<FormControl
								placeholder="Ваш номер телефону"
								required
								type="tel"
								className="mr-sm-2 w-50"
								autoComplete="tel"
							/>
							<Button className="btn-app p-2">Замовити дзвінок</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
};
export default Header;
