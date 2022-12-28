import React from 'react';
import AcceleratorSection from '../AcceleratorSection/AcceleratorSection';
import HomeBanner from '../HomeBanner/HomeBanner';
import LifeAt from '../LifeAt/LifeAt';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
	return (
		<div>
			<TopSlider />
			<HomeBanner />
			<ThirdBanner />
			<AcceleratorSection />
			<LifeAt />
		</div>
	);
};

export default Home;
