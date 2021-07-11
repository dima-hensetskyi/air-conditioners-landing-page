import { Container, Row, Col } from 'react-bootstrap';

const ThirdPromoSection = () => (
	<Container fluid className=" pt-md-5 pb-5 third-promo-section">
		<Row className="pt-5 pb-5 d-flex justify-content-sm-between">
			<Col className="orange my-md-5 py-5 col-12 col-md-3 text-center cta-text">
				<h2>Свіжість та чистота повітря</h2>
			</Col>
			<Col className="orange my-md-5 py-5 col-12 col-md-3 text-center cta-text">
				<h2 className="w-100">Відмінний стан системи вентиляції</h2>
			</Col>
		</Row>
	</Container>
);
export default ThirdPromoSection;
