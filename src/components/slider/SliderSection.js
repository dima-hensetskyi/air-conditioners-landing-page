import { Carousel } from 'react-bootstrap';
import { Slide } from './Slide';

const SliderSection = (props) => {
	return (
		<Carousel fade controls={false}>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Reliable Air Conditioning'}
					title={'Installation Services & Repair'}
					slide={1}
				/>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Quality that is Guaranteed'}
					title={'Expert Repair Ac and Heating Services'}
					slide={2}
				/>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<Slide
					text={'Choose the Best Company'}
					title={'Heating and Air Conditioning Specialist'}
					slide={3}
				/>
			</Carousel.Item>
		</Carousel>
	);
};
export default SliderSection;
