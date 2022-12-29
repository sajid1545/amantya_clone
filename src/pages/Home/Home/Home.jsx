import React from 'react';
import AcceleratorSection from '../AcceleratorSection/AcceleratorSection';
import Certifications from '../Certifications/Certifications';
import HomeBanner from '../HomeBanner/HomeBanner';
import LifeAt from '../LifeAt/LifeAt';
import Subscribe from '../Subscribe/Subscribe';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
	return (
		<div>
			{/* <TopSlider />
			<HomeBanner />
			<ThirdBanner />
			<AcceleratorSection /> */}
			<LifeAt />
			{/* <Certifications />
			<Subscribe /> */}
		</div>
	);
};

export default Home;
