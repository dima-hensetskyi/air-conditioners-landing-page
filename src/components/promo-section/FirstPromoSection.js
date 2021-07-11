import { Container, Row, Col, Button } from 'react-bootstrap';

const FirstPromoSection = () => {
	return (
		<Container fluid className="orange py-5">
			<Container className="py-5">
				<Row>
					<Col className="col-12 col-lg-9 d-flex align-items-center">
						<h1 className="h1 m-0">
							Сервісне обслуговування систем кондиціонування, 7 днів на тиждень
						</h1>
					</Col>
					<Col className="col-12 mt-5 mt-lg-0 m-0 col-lg-3 d-flex align-items-center justify-content-center ">
						<Button className="btn-app btn-gray p-4">Консультація</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default FirstPromoSection;
