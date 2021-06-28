import { Container, Row, Col } from 'react-bootstrap';
import { PromoCard } from './Card';
const PromoHero = () => {
	return (
		<Container fluid>
			<Container>
				<Row className="pt-5 mt-5 pb-5 mb-5">
					<PromoCard content="No Upfront Payments" icon="wallet" />
					<PromoCard content="Satisfaction Guarantee" icon="guarantee" />
					<PromoCard content="Emergency Service" icon="service" />
					<PromoCard content="Fixed Right Promise" icon="promice" />
					<PromoCard content="8 Years Experience" icon="mechanic" />
				</Row>
				<Row className="pt-5 mt-5 pb-5 mb-5">
					<Col className="mr-5 col-12 col-lg-6 promo-img w-100"></Col>
					<Col className="col-12 col-lg-5 about-details mt-4 mt-lg-0">
						<h5 className="h5 mt-3 mb-3">Welcome to BrandLink</h5>
						<h2 className="h2 mb-5">
							Heating and air conditioning repair and installation company
						</h2>
						<p className="p mb-5 regular">
							There are many variations of passages of lorem ipsum available, but the
							majorify have suffered alteration in some form by injected humour, or
							randmised words which don't look even slightly believable.
						</p>
						<button className="btn btn-app p-3">Learn more</button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default PromoHero;
