import { Col, Button } from 'react-bootstrap';
import { getIcon } from './../common/Icon/Icons';

export const PromoCard = ({ content, icon }) => (
	<Col className="verdigris col p-5 d-flex flex-column promo-card align-items-center justify-content-center col-12 col-sm">
		<img className="app-icons-promo" src={getIcon(icon)} alt="Promo icon" />
		<p className="mb-4 mt-2">{content}</p>
	</Col>
);

export const ServicesCard = ({ title, content, icon, img }) => (
	<Col className="service-card p-1 white m-sm-3 mt-1 mb-1 text-center col-12 col-md-5 col-lg">
		<img src={img} alt="Our service." className="w-100" />
		<h2 className="h2 pt-4 pb-4 m-0">{title}</h2>
		<p className="regular pl-4 pr-4 pb-5 m-0">{content}</p>
		<Button className="w-100 p-3 btn-app al-bl">Learn more</Button>
	</Col>
);
