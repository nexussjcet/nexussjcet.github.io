import Image from "next/image";
import React from "react";
import { ProjectCard } from "../ProjectCard";

export const PrevProjectOfTheWeek = React.forwardRef<HTMLDivElement>(
	(props, ref) => {
		const projects = [
			{
				title: "AI answers questions about your product data.",
				description:
					"Build lovable products with user insights. Uncover popular features, identify power users, and improve retention through behavior analysis.",
				features: [
					{
						icon: "❓",
						label: "Did they purchased this product?",
					},
					{
						icon: "❤️",
						label: "Who's our best user?",
					},
				],
			},
			{
				title: "Product analytics you'll love, fast, with your keyboard",
				description:
					"Unlike any other analytics you've used. From Keyboard shortcuts to realtime updates, analyze product data in a speed of thought.",
				features: [
					{
						icon: "⌘",
						label: "Command",
					},
					{
						icon: "🌓",
						label: "Dark and Light",
					},
					{
						icon: "🖥️",
						label: "Workflow Automation",
					},
				],
			},
			{
				title: "Workflow for modern software teams",
				description:
					"Bring all your team perspectives, expertise and skills in the same page. Iterate product faster with confidence.",
				features: [
					{
						icon: "▲",
						label: "Vercel",
					},
					{
						icon: "🐙",
						label: "GitHub",
					},
					{
						icon: "🔄",
						label: "CircleCI",
					},
					{
						icon: "🌊",
						label: "DigitalOcean",
					},
					{
						icon: "➕",
						label: "Slack",
					},
					{
						icon: "👾",
						label: "Discord",
					},
					{
						icon: "📝",
						label: "Notion",
					},
				],
			},
		];

		return (
			<div
				ref={ref}
				className="relative flex min-h-screen w-full items-center justify-center overflow-hidden font-semibold text-gray-700 text-lg z-50"
			>
				<div className="z-10 flex w-full flex-wrap items-center justify-center gap-6">
					{projects.map((project, index) => (
						<ProjectCard key={project.title} {...project} cardSize="regular" />
					))}
					{projects.map((project, index) => (
						<ProjectCard key={project.title} {...project} cardSize="regular" />
					))}
					{projects.map((project, index) => (
						<ProjectCard key={project.title} {...project} cardSize="regular" />
					))}
				</div>
			</div>
		);
	},
);
