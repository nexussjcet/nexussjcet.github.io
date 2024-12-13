import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NextRequest } from "next/server";
import React from "react";

export default function RegisterPage() {
	const communityLogos = [
		{
			imageSrc: "/projects/nexus-project-logo-black.webp",
			altText: "The Nexus Project Logo",
		},
		{
			imageSrc: "/projects/mulearn-sjc-logo.webp",
			altText: "MuLearn SJCET Logo",
		},
		{
			imageSrc: "/projects/tinkerhub-sjc-logo.webp",
			altText: "TinkerHub SJCET Logo",
		},
		{
			imageSrc: "/projects/bootcamp-sjc-logo.webp",
			altText: "Bootcamp SJCET Logo",
		},
	];

	return (
		<div className="relative z-50 flex min-h-screen w-full flex-col items-center justify-between py-4 px-4 sm:px-6">
			<Image
				src="/projects/collegelogo.webp"
				width={150}
				height={150}
				alt="College Logo"
				className="mx-auto w-32 h-32 sm:w-48 sm:h-48 object-contain md:-mt-9 "
			/>
			<div className="w-full flex flex-col gap-3 justify-center items-center mt-40 md:mt-0 ">
				<Text variant="projects" size={"h2"} coloring={"projects-white"} className="text-[.8rem]">
					build <span className="underline decoration-white">real</span>{" "}
					projects,
				</Text>
				<Text variant="projects" size={"h2"} coloring={"projects-white"} className="text-[.8rem]">
					prove you're an{" "}
					<span className="underline decoration-white">engineer</span>.
				</Text>
				<Link href={"/projects/submit"}>
					<Button className="scale-75 md:scale-150 md:mt-10" variant={"projects"}>
						<span className="text-lg">showcase your work</span>
						<ChevronRight />
					</Button>
				</Link>
			</div>
			<div className="flex flex-wrap justify-center sm:justify-between items-center mt-8 sm:mt-0 w-full sm:w-3/4 gap-4">
				{communityLogos.map((community) => (
					<Image
						src={community.imageSrc}
						width={150}
						height={150}
						alt={community.altText}
						key={community.altText}
						className="h-24 object-contain"
					/>
				))}
			</div>
		</div>
	);
}
