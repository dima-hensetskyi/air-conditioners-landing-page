import { Container, Row, Col } from 'react-bootstrap';
import { mapImg } from '../common/images.js';
import { ServicesCard } from './Card.js';

const SecondPromoSection = () => {
	return (
		<Container fluid className="al-bl">
			<Container className="pt-5 pb-5">
				<Row>
					<Col>
						<h1 className="pb-3 text-center">Наші Послуги</h1>
					</Col>
				</Row>
				<Row>
					<ServicesCard
						title="Кондиціонування"
						content={[
							'обслуговування систем усіх типів',
							'монтаж, демонтаж та ремонт побутових кондиціонерів',
							'заправка фреоном та пошук витоків у системі',
						]}
						img={mapImg.service1}
					/>
					<ServicesCard
						title="Обігрів"
						content={[
							'продаж, встановлення та діагностика систем з функцією обігріву',
							'передсезонне обслуговування',
							'встановлення низькотемпературних комплектів',
						]}
						img={mapImg.service2}
					/>
					<ServicesCard
						title="Інші сервіси"
						content={[
							'дезінфекція систем кондиціонування від збудників хвороб',
							'чистка систем вентиляції',
							'профілактичне обслуговування систем вентиляції',
						]}
						img={mapImg.service3}
					/>
				</Row>
			</Container>
		</Container>
	);
};
export default SecondPromoSection;
