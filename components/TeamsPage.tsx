import React from "react";

const TeamsPage = () => {
	const execom = [
		{
			name: "Milan Suman",
			role: "Lead, FOSS Enthusiast",
			image: "/team/member1.png",
		},
		{
			name: "Andrea Tresa Tom",
			role: "FOSS Enthusiast",
			image: "/team/member2.png",
		},
		{
			name: "Tom Titus",
			role: "FOSS Enthusiast",
			image: "/team/member3.png",
		},
		{
			name: "AwinDas R",
			role: "FOSS Enthusiast",
			image: "/team/member4.png",
		},
		{
			name: "Aravind Manoj",
			role: "FOSS Enthusiast",
			image: "/team/member5.png",
		},
		{
			name: "Ajay Sharma",
			role: "FOSS Enthusiast",
			image: "/team/member6.png",
		},
		{
			name: "Anders Hejlsberg",
			role: "FOSS Enthusiast",
			image: "/team/member1.png",
		},
	];

	return (
		<div className="flex-col md:flex-row flex items-center justify-end min-h-screen w-[90vw] mx-auto gap-16">
            <h2 className="text-4xl font-bold text-white md:hidden block">Our Team</h2>
			{/* Central Image */}
			<div className="flex flex-col items-center justify-center">
				<div className="rounded-full h-[22vh] w-[22vh] bg-white flex justify-center items-center">
					<img
						src={execom[0]?.image}
						alt="teams"
						className="h-[20vh] w-[20vh] object-fill rounded-full"
					/>
				</div>
				<div className="text-center mt-4">
					<h1 className="text-xl font-bold text-white">{execom[0]?.name}</h1>
					<p className="text-lg text-white">{execom[0]?.role}</p>
				</div>
			</div>

			<div className="flex flex-col items-center gap-10">
				{execom.slice(1, 3).map((member, index) => (
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
				{execom.slice(3, 5).map((member, index) => (
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
				{execom.slice(5, 6).map((member, index) => (
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
