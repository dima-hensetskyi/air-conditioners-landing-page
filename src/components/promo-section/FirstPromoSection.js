import { Container, Row, Col, Button } from 'react-bootstrap';

const FirstPromoSection = () => {
	return (
		<Container fluid className="orange pt-5 pb-5">
			<Container className="pt-5 pb-5">
				<Row>
					<Col className="col-12 col-lg-9 d-flex align-items-center">
						<h1 className="h1 m-0">No overtime charges, 7 days a week</h1>
					</Col>
					<Col className="col-12 mt-5 mt-lg-0 m-0 col-lg-3 ">
						<Button className="btn-app btn-gray p-4">Get a free quote</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default FirstPromoSection;
