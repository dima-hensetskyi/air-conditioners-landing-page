import { Container, Row, Col } from 'react-bootstrap';
import { PromoCard } from './Card';

import './call-button.css';
import { CallBackBtn } from './CallBackBtn';
import { ModalWindow } from '../modal/Modal';

const PromoHero = () => {
	return (
		<Container fluid>
			<Container>
				<Row className="pt-5 mt-5 pb-5 mb-5">
					<PromoCard content="Без попередніх платежів" icon="wallet" />
					<PromoCard content="Гарантія якості" icon="guarantee" />
					<PromoCard content="Служба підтримки" icon="service" />
					<PromoCard content="Професіоналізм та повага" icon="promice" />
					<PromoCard content="8 років досвіду" icon="mechanic" />
				</Row>
				<Row className="pt-5 mt-5 pb-5 mb-5">
					<Col className="mr-5 col-12 col-lg-6 promo-img w-100"></Col>
					<Col className="col-12 col-lg-5 about-details mt-4 mt-lg-0">
						<h5 className="h5 mt-3 mb-3">Ласкаво просимо до BrandLink</h5>
						<h2 className="h2 mb-5">
							Компанія з ремонту та монтажу систем кондиціонування
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
			<CallBackBtn />
			<ModalWindow />
		</Container>
	);
};
export default PromoHero;
