import { Carousel } from 'react-bootstrap';
import { Slide } from './Slide';

const SliderSection = (props) => {
	return (
		<Carousel fade controls={false}>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Надійні системи кондиціонування'}
					title={'Монтаж, обслуговування та ремонт'}
					slide={1}
				/>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Гарантія якості робіт'}
					title={'Експертний ремонт усіх типів кондиціонерів'}
					slide={2}
				/>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Обирайте професіоналів'}
					title={'Більш ніж 8 років робіт з системами кондиціонування'}
					slide={3}
				/>
			</Carousel.Item>
		</Carousel>
	);
};
export default SliderSection;
