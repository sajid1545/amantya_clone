import React from 'react';
import './thirdBanner.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

import fiveGLab from '../../../assets/images/5GLab.png';
import download from '../../../assets/images/download-speed.png';
import astraLogo from '../../../assets/images/astraLogo.png';
import drone from '../../../assets/images/drone.png';

import { BsArrowRight } from 'react-icons/bs';

const ThirdBanner = () => {
	return (
		<div className="my-20">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Navigation]}
				className="mySwiper">
				<SwiperSlide>
					<div className="flex bg-[#FFE9B0] justify-center items-center">
						<div className="lg:w-[60%] p-20">
							<img src={fiveGLab} alt="" className="w-[230px] h-[123px] pb-[32px]" />
							<p className="mb-4 text-lg text-[#565656]">
								Amantya's 5G Lab solution, built using a homegrown futuristic 5G Network in a Box,
								is an end-to-end testing & simulation platform to validate and integrate 5G products
								and applications in a 5G simulated environment to accelerate end-user adoption.
							</p>

							<span className="mt-5">
								<a href="#" className="text-lg text-[#F4824B] flex items-center gap-2">
									Learn More{' '}
									<span>
										<BsArrowRight />
									</span>
								</a>
							</span>
						</div>

						<div>
							<img src={download} alt="" />
						</div>
						<div className="banner-circle bg-[#FFE9B0]">
							<h1>5G Solutions</h1>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex bg-[#F4F9FF] justify-center items-center">
						<div className="lg:w-[60%] p-20">
							<img src={astraLogo} alt="" className="w-[230px] h-[123px] pb-[32px]" />
							<p className="mb-4 text-lg text-[#565656]">
								Amantya’s Astra5G is an advanced private network solution designed to simplify 5G
								adoption for enterprises exploring new-age 5G use cases and help telcos leverage
								their infrastructure for better customer service.
							</p>

							<span className="mt-5">
								<a href="#" className="text-lg text-[#F4824B] flex items-center gap-2">
									Learn More
									<span>
										<BsArrowRight />
									</span>
								</a>
							</span>
						</div>

						<div>
							<img src={drone} alt="" />
						</div>
						<div className="banner-circle bg-[#F4F9FF]">
							<h1>5G Solutions</h1>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ThirdBanner;
