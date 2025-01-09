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
		<div className="flex-col md:flex-row flex items-center justify-end min-h-screen w-[90vw] mx-auto gap-16">
            <h2 className="text-4xl font-bold text-white md:hidden block">Our Team</h2>
			{/* Central Image */}
			<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col items-center gap-10">
				{execom.slice(0, 2).map((member, index) => (
					<div className="flex flex-col items-center">
						<div
							key={index}
							className="rounded-full h-[22vh] w-[22vh] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[20vh] w-[20vh] object-fill rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
			</div>

			<div className="flex flex-col items-center gap-10">
				{execom.slice(2, 4).map((member, index) => (
					<div className="flex flex-col items-center">
						<div
							key={index}
							className="rounded-full h-[22vh] w-[22vh] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[20vh] w-[20vh] object-fill rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>

			{/* Right Column */}
			<div className="flex flex-col items-center gap-10">
				{execom.slice(4, 6).map((member, index) => (
					<div className="flex flex-col items-center">
						<div
							key={index}
							className="rounded-full h-[22vh] w-[22vh] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[20vh] w-[20vh] object-cover rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col items-center gap-10">
				{execom.slice(6, 8).map((member, index) => (
					<div className="flex flex-col items-center">
						<div
							key={index}
							className="rounded-full h-[22vh] w-[22vh] bg-white flex justify-center items-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="h-[20vh] w-[20vh] object-fill rounded-full"
							/>
						</div>
						<div className="text-center mt-4">
							<h1 className="text-xl font-bold text-white">{member.name}</h1>
							<p className="text-lg text-white">{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamsPage;
