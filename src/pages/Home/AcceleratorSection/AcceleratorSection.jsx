import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import fiveG from '../../../assets/images/5g-accelerations.png';
import phone from '../../../assets/images/phone.png';

const AcceleratorSection = () => {
	return (
		<div className="my-20">
			<h1 className="text-[40px] mb-12 text-center font-bold">Accelerators</h1>

			<Tabs className="">
				<TabList className="flex justify-center gap-10 text-[24px] font-bold cursor-pointer text-[#f26a29]">
					<Tab className="hover:underline underline-offset-4">5G</Tab>
					<Tab className="hover:underline underline-offset-4">iOT</Tab>
				</TabList>

				<TabPanel className="w-[90%] mx-auto flex gap-10 mt-14">
					<div className="lg:w-[60%]">
						<img src={fiveG} alt="" className="w-full" />
					</div>

					<div className="w-full flex items-center gap-10">
						<div className="">
							<h1 className="font-bold  text-[40px]">5G</h1>
							<p className="mb-4 text-lg text-[#565656]">
								Amantya’s expertise in the rapidly evolving 5G ecosystem is underpinned by our
								advanced accelerators, including 5G SA Core, 5G UPF, and 5G Core-as-a-service. We
								optimally use these futuristic accelerators to deliver cutting-edge solutions like
								5G labs and private 5G networks for network operators, OEMs, and enterprises.
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
							<ul className="list-decimal text-xl font-bold cursor-pointer text-[#0070AD]">
								<li className='hover:text-[#F26F29]'>5G SA Core</li>
								<li className='hover:text-[#F26F29]'>5G UPF</li>
								<li className='hover:text-[#F26F29]'>5G Network in a Box</li>
								<li className='hover:text-[#F26F29]'>5G Caas</li>
							</ul>
						</div>
					</div>
				</TabPanel>
				<TabPanel className="w-[90%] mx-auto flex gap-10">
					<div className="lg:w-[60%]">
						<img src={phone} alt="" className="w-full" />
					</div>

					<div className="w-full flex items-center gap-10">
						<div className="">
							<h1 className="font-bold  text-[40px]">IoT</h1>
							<p className="mb-4 text-lg text-[#565656]">
                            We provide reliable, scalable, and secure end-to-end IoT-powered solutions and services, which can be tailored to integrate with each enterprise’s unique architecture and business needs. Moreover, our deep expertise in transformative technologies like 5G, AI ML, MEC, Robotics, and Cloud complement our IoT portfolio to unlock its true potential and create relevant and customized solutions for our clients.
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
							<ul className="list-decimal text-xl font-bold cursor-pointer text-[#0070AD]">
								<li className='hover:text-[#F26F29]'>Indoor RTLS</li>
								<li className='hover:text-[#F26F29]'>NB-IoT Tracker</li>
								<li className='hover:text-[#F26F29]'>3G/4G Tracker</li>
								<li className='hover:text-[#F26F29]'>Bluetooth Tracker</li>
							</ul>
						</div>
					</div>
				</TabPanel>

				
			</Tabs>
		</div>
	);
};

export default AcceleratorSection;
