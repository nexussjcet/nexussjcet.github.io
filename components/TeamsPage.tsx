import React from "react";

const TeamsPage = () => {
	const execom = [
		{
			name: "Milan Suman",
			role: "Lead",
			image: "/team/member1.webp",
		},
		{
			name: "Aibel Bin Zacharia",
			role: "Co-Lead",
			image: "/team/member8.webp",
		},
		{
			name: "Andrea Tresa Tom",
			role: "Documentation Lead",
			image: "/team/member2.webp",
		},
		{
			name: "Tom Titus",
			role: "Cyber Lead",
			image: "/team/member3.webp",
		},
		{
			name: "AwinDas R",
			role: "Web Lead",
			image: "/team/member4.webp",
		},
		{
			name: "Aravind Manoj",
			role: "Cyber Lead",
			image: "/team/member5.webp",
		},
		{
			name: "Ajay Varma",
			role: "Design Lead",
			image: "/team/member6.webp",
		},
		{
			name: "Abin Thomas ",
			role: "Frontend Dev",
			image: "/team/member7.webp",
		},
	];

	return (
		<div className="flex-col md:flex-row flex items-center justify-end min-h-screen w-[90vw] mx-auto sm:gap-[3vw] lg:gap-[4vw]">
			<h2 className="text-4xl font-bold text-white md:hidden block">Our Team</h2>
			{/* Section 1 */}
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center gap-10">
					{execom.slice(0, 2).map((member, index) => (
						<div className="flex flex-col items-center mt-10 md:mt-0">
							<div
								key={index}
								className="rounded-full h-[310px] w-[310px] md:h-[12vw] md:w-[12vw] md:max-h-[296px] md:max-w-[296px] bg-white flex justify-center items-center"
							>
								<img
									src={member.image}
									alt={member.name}
									className="h-[280px] w-[280px] md:h-[11vw] md:w-[11vw] md:max-h-[280px] md:max-w-[280px] object-cover rounded-full"
								/>
							</div>
							<div className="text-center mt-4">
								<h1 className="text-xl md:text-sm lg:text-xl font-bold text-white">{member.name}</h1>
								<p className="text-lg md:text-sm lg:text-lg text-white">{member.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Section 2 */}
			<div className="flex flex-col items-center gap-10">
				{execom.slice(2, 4).map((member, index) => (
					<div className="flex flex-col items-center mt-10 md:mt-0">
						<div
							key={index}
							className="rounded-full h-[310px] w-[310px] md:h-[12vw] md:w-[12vw] md:max-h-[296px] md:max-w-[296px] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[280px] w-[280px] md:h-[11vw] md:w-[11vw] md:max-h-[280px] md:max-w-[280px] object-cover rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl md:text-sm lg:text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg md:text-sm lg:text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
			{/* Section 3 */}
			<div className="flex flex-col items-center gap-10">
				{execom.slice(4, 6).map((member, index) => (
					<div className="flex flex-col items-center mt-10 md:mt-0">
						<div
							key={index}
							className="rounded-full h-[310px] w-[310px] md:h-[12vw] md:w-[12vw] md:max-h-[296px] md:max-w-[296px] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[280px] w-[280px] md:h-[11vw] md:w-[11vw] md:max-h-[280px] md:max-w-[280px] object-cover rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl md:text-sm lg:text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg md:text-sm lg:text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
			{/* Section 4 */}
			<div className="flex flex-col items-center gap-10">
				{execom.slice(6, 8).map((member, index) => (
					<div className="flex flex-col items-center mt-10 md:mt-0">
						<div
							key={index}
							className="rounded-full h-[310px] w-[310px] md:h-[12vw] md:w-[12vw] md:max-h-[296px] md:max-w-[296px] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[280px] w-[280px] md:h-[11vw] md:w-[11vw] md:max-h-[280px] md:max-w-[280px] object-cover rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl md:text-sm lg:text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg md:text-sm lg:text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamsPage;