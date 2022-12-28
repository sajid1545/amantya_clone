import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './topSlider.css';

import deviceCloud from '../../../assets/images/device-cloud.png';
import fiveG from '../../../assets/images/5g-wireless.png';
import qualityFocused from '../../../assets/images/quality-focused.png';
import recognized from '../../../assets/images/recognised.png';
import marksman from '../../../assets/images/Marksman-daily.png';

const TopSlider = () => {
	return (
		<div className='mb-10'>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper">
				<SwiperSlide>
					<div className="flex justify-between items-center">
						<div className="pl-20 lg:w-2/4">
							<h1 className=" font-bold text-[35px] leading-[50px]">
								Accelerating Innovation From Device To Cloud
							</h1>
							<p className="mt-5 text-xl text-[#565656]">
								Full spectrum of avant-garde solutions and services from hardware, network, to the
								cloud
							</p>
						</div>
						<div>
							<img src={deviceCloud} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex justify-between items-center">
						<div className="pl-20 lg:w-2/4">
							<h1 className=" font-bold text-[35px] leading-[50px]">
								Next-gen 5G Wireless Solutions From Labs to Private Network
							</h1>
							<p className="mt-5 text-xl text-[#565656]">
								Pioneers in 5G wireless accelerators, services and solutions across industries
							</p>
							<button className="px-8 py-3 mt-10 hover:bg-[#F26A29] rounded-3xl text-white text-xl bg-[#0A71AF]">
								Learn More
							</button>
						</div>
						<div>
							<img src={fiveG} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex justify-between items-center">
						<div className="pl-20 lg:w-2/4">
							<h1 className=" font-bold text-[35px] leading-[50px]">
								Quality-focused Digital Services From Ideation to Launch
							</h1>
							<p className="mt-5 text-xl text-[#565656]">
								High-quality digital services and solutions for better outcomes every time
							</p>
							<button className="px-8 py-3 mt-10 hover:bg-[#F26A29] rounded-3xl text-white text-xl bg-[#0A71AF]">
								Learn More
							</button>
						</div>
						<div>
							<img src={qualityFocused} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex justify-between items-center">
						<div className="pl-20 lg:w-2/4">
							<h1 className=" font-bold text-[35px] leading-[50px]">
								Recognized as “Best SME in Telecom Ecosystem” at IMC 2022
							</h1>
						</div>
						<div>
							<img src={recognized} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex justify-between items-center">
						<div className="pl-20 lg:w-2/4">
							<h1 className=" font-bold text-[35px] leading-[50px]">
								Recognized as "Most Preferred Workplace in IT/ITES" for 2022-23 by Marksmen Daily
							</h1>
						</div>
						<div>
							<img src={marksman} alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default TopSlider;
