import React from 'react';

import life from '../../../assets/images/Life_at_Amantya_1.png';
import opportunities from '../../../assets/images/Opportunities.png';
import timing from '../../../assets/images/Flexible_Timing.png';
import workLife from '../../../assets/images/Work_Life_Integration.png';
import health from '../../../assets/images/Health.png';
import { BsArrowRight } from 'react-icons/bs';

const LifeAt = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 w-[85%] mx-auto my-20">
			<div className="lg:w-[60%]">
				<h1 className="font-bold  text-[40px] mb-2 text-center sm:text-left">Life At Amantya</h1>
				<p className="text-[#565656] text-lg text-center sm:text-left">
					Transform your career within a culture of continuous learning, disruption, co-creation,
					collaboration, and personal development.
				</p>

				<div className="flex text-center gap-10 my-10 flex-col sm:flex-row">
					<div className="">
						<img
							src={opportunities}
							alt=""
							className="hover:scale-110 duration-500 cursor-pointer mx-auto"
						/>
						<p className="mt-5 text-[12px] text-[#212529]">Endless Opportunities</p>
					</div>
					<div className="">
						<img
							src={timing}
							alt=""
							className="hover:scale-110 duration-500 cursor-pointer mx-auto"
						/>
						<p className="mt-5 text-[12px] text-[#212529]">Flexible Timing</p>
					</div>
					<div className="">
						<img
							src={workLife}
							alt=""
							className="hover:scale-110 duration-500 cursor-pointer mx-auto"
						/>
						<p className="mt-5 text-[12px] text-[#212529]">Work Life Integration</p>
					</div>
					<div className="">
						<img
							src={health}
							alt=""
							className="hover:scale-110 duration-500 cursor-pointer mx-auto"
						/>
						<p className="mt-5 text-[12px] text-[#212529]">Health Benefits</p>
					</div>
				</div>

				<span className="mt-5">
					<a href="#" className="text-lg text-[#F4824B] flex items-center gap-2 font-bold">
						Explore Life at Amantya{' '}
						<span>
							<BsArrowRight />
						</span>
					</a>
				</span>
			</div>

			<div>
				<img src={life} alt="" className="rounded-xl shadow-lg shadow-gray-500" />
			</div>
		</div>
	);
};

export default LifeAt;
