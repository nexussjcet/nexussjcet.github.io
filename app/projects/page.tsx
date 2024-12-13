"use client";
import FlexLayout from "@/components/projects/FlexLayout";
import ProjectMat from "@/components/projects/ProjectMat";
import { PrevProjectOfTheWeek } from "@/components/projects/pages/PrevProjectOfTheWeek";
import { ProjectOfTheWeek } from "@/components/projects/pages/ProjectOfTheWeek";
import RegisterPage from "@/components/projects/pages/RegisterPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
	const heroRef = useRef<HTMLDivElement>(null);
	const nextSectionRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const thirdSectionRef = useRef<HTMLDivElement>(null);
	const fourthSectionRef = useRef<HTMLDivElement>(null);
	const projectMatRef = useRef<HTMLDivElement>(null);

	const projectMatPositions = [
		{
			id: "hero",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 0.8,
		},
		{
			id: "secondSection",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 1.2,
		},
		{
			id: "thirdSection",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 2.3,
		},
		{
			id: "thirdSection2",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 2.3,
		},
		{
			id: "fourthSection",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 0.8,
		},
	];

	useEffect(() => {
		if (projectMatRef.current) {
			const projectMatTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: "body",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			});

			gsap.set(projectMatRef.current, {
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			});

			projectMatPositions.forEach((pos, index) => {
				if (index > 0) {
					projectMatTimeline.to(projectMatRef.current, {
						top: `${pos.position.y * 100}%`,
						left: `${pos.position.x * 100}%`,
						rotation: pos.rotation,
						scale: pos.scale,
						duration: 1,
					});
				}
			});
		}

		const stopMotionEffect = () => ({
			duration: 2,
			ease: "steps(8)",
			x: `+=${Math.random() * 200 - 100}`,
			y: `+=${Math.random() * 200 - 100}`,
			rotation: `+=${Math.random() * 60 - 30}`,
		});

		const smoothScrollTrigger = ScrollTrigger.create({
			trigger: heroRef.current,
			start: "bottom top",
			end: "bottom bottom",
			onLeave: () => {
				nextSectionRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			},
			onEnterBack: () => {
				heroRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			},
		});

		const images = gsap.utils.toArray(
			".box-left, .box-right, .box-top, .box-bottom",
		);

		const animations = gsap.timeline({
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});

		animations
			.to(
				".box-left",
				{
					...stopMotionEffect(),
					x: -1500,
					stagger: 0.1,
				},
				0,
			)
			.to(
				".box-right",
				{
					...stopMotionEffect(),
					x: 1500,
					stagger: 0.1,
				},
				0,
			)
			.to(
				".box-top",
				{
					...stopMotionEffect(),
					y: -1500,
					stagger: 0.1,
				},
				0,
			)
			.to(
				".box-bottom",
				{
					...stopMotionEffect(),
					y: 1500,
					stagger: 0.1,
				},
				0,
			);

		const handleResize = () => {
			ScrollTrigger.refresh();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="relative min-h-screen w-full bg-[#f3f5f9]">
			{/* Animated Edge-Aligned Boxes */}
			<div className="pointer-events-none fixed inset-0 z-30 ">
				<FlexLayout/>
			</div>

			{/* Main Content */}
			<div className="relative h-auto overflow-hidden bg-[#f3f5f9] z-0">
				<div
					className="relative flex  w-full items-center justify-center z-30"
					ref={projectMatRef}
				>
					<ProjectMat />
				</div>

				<div ref={heroRef} className="relative min-h-screen w-full ">
					<div className="absolute  z-20 w-screen h-screen ">
						<Image
							src={"/projects/shadow.webp"}
							className="opacity-100 bg-blend-overlay"
							width={1920}
							height={1080}
							alt="logo"
							priority
						
						/>
					</div>
					<div className="absolute top-1/2 md:top-1/2 lg:mt-4 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-6xl lg:text-7xl font-bold text-white text-center flex items-start flex-col justify-start ">
					
						<Image
							src={"/projects/logo.svg"}
							width={350}
							height={350}
							alt="logo"
							className="w-[30vw] md:w-[30vw] lg:w-[20vw]"
							// className="w-6 h-6 sm:w-5 sm:h-5 md:w-12 md:h-12 lg:w-14 lg:h-14"
						/>
					</div>
				</div>

				<div
					ref={nextSectionRef}
					className="flex min-h-screen w-full items-center justify-center  z-4 bg-transparent0"
				>
					<ProjectOfTheWeek />
				</div>

				<div className="w-full min-h-screen">
					<PrevProjectOfTheWeek />
				</div>

				<div className="w-full min-h-screen">
					<RegisterPage />
				</div>
			</div>
		</div>
	);
}
