import { Text } from "../ui/text";

const data = [
	{
		title: "Welcome to FOSSDAY",
		content:
			"Hello, Nerds! We're bringing open source software community to SJCET. Join us for FOSSDAY – it's going to be an exciting learning experience! Join us to learn, explore, and contribute to the world of open source. It's a great opportunity to expand your tech horizons!",
	},
	{
		title: "What is FOSSDAY?",
		content:
			"FOSSDAY is your opportunity to dive into the world of open source technology right here in Campus of SJCET Pala. Whether you're an experienced coder or just getting started, we've got something for you. Workshops for students and talk session from experinced developers around the FOSS community.",
	},
	{
		title: "When and Where?",
		content:
			"November 9, 2024 (from 10:00am to 4:30pm) at St Joseph's College of Engineering and Technology, Palai",
	},
	{
		title: "Who Can Attend?",
		content:
			"Students, Professional, doesn't matter, all are welcomed. You don't need to be a tech expert – just bring your curiosity and laptop to learn!",
	},
	{
		title: "Event Highlights",
		content:
			"Network with like-minded tech enthusiasts, Earn a certificate of participation, Receive FOSS-themed merchandise, Develop practical skills in open source technologies, Be part of a growing movement in software development",
	},
];

export default function AboutPage() {
	return (
		<div className="text-center container space-y-28 space-y-40">
			{data.map((e) => (
				<div key={e.title} className="text-center">
					<Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
						{e.title}
					</Text>
					<br />
					<Text coloring={"white"} size={"p"}>
						{e.content}
					</Text>
				</div>
			))}
			<div className="text-center">
				<Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
					Workshops
				</Text>
				<br />
				<div className="flex flex-col gap-3">
					<div>
						<Text coloring={"white"} size={"p"}>
							Intro to Git & Version Control
						</Text>
					</div>
					<div>
						<Text coloring={"white"} size={"p"}>
							Docker for DevOps & Self Hosting
						</Text>
					</div>
					<div>
						<Text coloring={"white"} size={"p"}>
							GitHub Actions & CI/CD Pipelines
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
}
