import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
	return (
		<div>
			<TopSlider />
			<HomeBanner />
			<ThirdBanner/>
		</div>
	);
};

export default Home;
