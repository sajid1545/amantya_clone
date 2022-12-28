import React from 'react';
import './subscribe.css';

const Subscribe = () => {
	return (
		<div className="w-[80%] mx-auto subscribe-container my-20 flex items-center justify-between">
			<div className="">
				<h1 className="text-[40px] font-bold">Subscribe To Our Newsletter</h1>
				<p className="text-lg text-[#565656]">
					Stay updated with latest news, blogs, articles and insights
				</p>
			</div>

			<div className="input-container">
				<div className="relative ">
					<input
						type="email"
						placeholder="Enter Your Email Address..."
						className="  rounded-full  border border-gray-300  py-4 px-24 bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					/>
					<button className="px-6 py-2 bg-[#F26A29] rounded-3xl text-white text-xl ml-10 hover:bg-[#0A71AF]">
						Contact
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
