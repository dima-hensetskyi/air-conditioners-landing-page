import { Container, Row, Col, Button } from 'react-bootstrap';

export const Slide = ({ slide, text, title }) => (
	<div className={`slide slide-${slide} d-flex align-items-center`}>
		<Container>
			<Row className="slide-title p-3 p-sm-0 pt-sm-3">
				<Col className="col-lg-5 p-0">
					<h5 className="h5  mb-3">{`${slide}. ${text}`}</h5>
					<h1 className="h1 title mb-3">{title}</h1>
					<Button className="btn-app mt-4 p-3">Get a free quote</Button>
				</Col>
			</Row>
		</Container>
	</div>
);
