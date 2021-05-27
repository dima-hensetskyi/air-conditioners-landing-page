import { Container, Row, Col } from 'react-bootstrap';
import { mapImg } from '../common/images.js';
import { ServicesCard } from './Card.js';

const SecondPromoSection = () => {
	return (
		<Container fluid className="al-bl">
			<Container className="pt-5 pb-5">
				<Row>
					<Col>
						<h1 className="pb-4 text-center">Our services</h1>
					</Col>
				</Row>
				<Row>
					<ServicesCard
						title="Cooling Services"
						content="There are many variations passages of lorem ipsum available but the majority have suffered alteration."
						img={mapImg.service1}
					/>
					<ServicesCard
						title="Heating Services"
						content="There are many variations passages of lorem ipsum available but the majority have suffered alteration."
						img={mapImg.service2}
					/>
					<ServicesCard
						title="Other Services"
						content="There are many variations passages of lorem ipsum available but the majority have suffered alteration."
						img={mapImg.service3}
					/>
				</Row>
			</Container>
		</Container>
	);
};
export default SecondPromoSection;
