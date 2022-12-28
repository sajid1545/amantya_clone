import React from 'react';

import fiveGBanner from '../../../assets/images/5G-banner.png';
import wireless from '../../../assets/images/Wireless.png';
import digital from '../../../assets/images/Digital_Icon.png';
import man from '../../../assets/images/man.png';

const HomeBanner = () => {
	return (
		<div className="w-[90%] mx-auto flex justify-between items-center gap-10 my-20">
			<div className="lg:w-2/4">
				<h1 className="text-[40px] font-bold leading-10 mb-2">
					Your Go-to Partner for Next-gen Technologies
				</h1>
				<p className="text-[#565656] text-lg mt-4">
					With core competencies in next-gen technologies like 5G, Edge, Cloud, AI ML, IoT, we help
					our clientele stay ahead of the curve.
				</p>
			</div>

			{/* // cards */}

			<div className="grid grid-cols-2 gap-5">
				{/* card - 1 */}
				<div className="block py-10  px-4">
					<img
						alt="Signage"
						src={fiveGBanner}
						className="h-56 w-full  rounded-bl-3xl rounded-tr-3xl object-cover  sm:h-[400px] sm:w-[370px] "
					/>
				</div>

				{/* card -2 */}
				<div className="block h-56 w-full  rounded-bl-3xl rounded-3xl object-cover  sm:h-[380px] sm:w-[320px] border-2 border-gray-500 py-8 px-5 shadow-[6px_4px_5px_0px_#718096]">
					<img src={wireless} alt="" className="mx-auto" />
					<div className="text-center">
						<h1 className="font-bold mt-6 text-[24px]">Wireless</h1>
						<p className="text-[#565656] text-xl my-3">
							Our advanced 5G portfolio includes next-gen accelerators, services, and solutions.
						</p>
						<span className="mt-5">
							<a href="#" className="text-lg text-[#F4824B]">
								Learn More....
							</a>
						</span>
					</div>
				</div>

				{/* card -3 */}
				<div className="block h-56 w-full  rounded-bl-3xl rounded-3xl object-cover  sm:h-[380px] sm:w-[320px] border-2 border-gray-500 py-8 px-5 shadow-[6px_4px_5px_0px_#718096]">
					<img src={digital} alt="" className="mx-auto" />
					<div className="text-center">
						<h1 className="font-bold mt-6 text-[24px]">Digital</h1>
						<p className="text-[#565656] text-xl my-3">
							Our vast digital portfolio includes development, testing, and engineering services.
						</p>
						<span className="mt-5">
							<a href="#" className="text-lg text-[#F4824B]">
								Learn More....
							</a>
						</span>
					</div>
				</div>

				{/* card - 4 */}
				<div className="block py-10 px-4">
					<img
						alt="Signage"
						src={man}
						className="h-56 w-full  rounded-bl-3xl rounded-tr-3xl object-cover  sm:h-[400px] sm:w-[370px] "
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
