import { Container, Row, Col } from 'react-bootstrap';

const ThirdPromoSection = () => (
	<Container fluid className=" pt-md-5 pb-5 third-promo-section">
		<Row className="pt-5 pb-5 d-flex justify-content-sm-between">
			<Col className="orange mt-5 mb-5 pt-5 pb-5 col-12 col-md-3 text-center cta-text">
				<h5>Air Conditioning Services</h5>
				<h2>Cool it down</h2>
			</Col>
			<Col className="orange mt-md-5 mb-md-5 pt-5 pb-5 col-12 col-md-3 text-center cta-text">
				<h5>Heating Services</h5>
				<h2>Heat it up</h2>
			</Col>
		</Row>
	</Container>
);
export default ThirdPromoSection;
