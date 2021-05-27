import Header from './header/Header';
import {
	PromoHero,
	FirstPromoSection,
	SecondPromoSection,
	ThirdPromoSection,
} from './promo-section/';
import SliderSection from './slider/SliderSection';
import Footer from './footer';

const MainPage = () => {
	return (
		<>
			<Header />
			<SliderSection />
			<PromoHero />
			<FirstPromoSection />
			<SecondPromoSection />
			<ThirdPromoSection />
			<Footer />
		</>
	);
};

export default MainPage;
