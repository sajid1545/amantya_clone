import React from 'react';
import AcceleratorSection from '../AcceleratorSection/AcceleratorSection';
import HomeBanner from '../HomeBanner/HomeBanner';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
	return (
		<div>
			<TopSlider />
			<HomeBanner />
			<ThirdBanner />
			<AcceleratorSection />
		</div>
	);
};

export default Home;
