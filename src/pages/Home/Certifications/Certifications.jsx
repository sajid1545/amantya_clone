import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';

import logo1 from '../../../assets/images/logo-1.png';
import logo2 from '../../../assets/images/logo-2.png';
import logo3 from '../../../assets/images/logo-3.png';
import logo4 from '../../../assets/images/logo-4.png';

const Certifications = () => {
	return (
		<div className="flex my-20 w-[80%] mx-auto justify-between items-center">
			<div className="w-[40%]">
				<h1 className='text-[48px] font-bold'>Certifications and Memberships</h1>
			</div>

			<div className="lg:w-2/4">
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					slidesPerGroup={2}
					loop={true}
					loopFillGroupWithBlank={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className="mySwiper">
					<SwiperSlide>
						<img src={logo1} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={logo2} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={logo3} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={logo4} alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Certifications;
