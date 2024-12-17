"use client";
import { PrevProjectOfTheWeek } from "@/components/projects/pages/PrevProjectOfTheWeek";
import { ProjectOfTheWeek } from "@/components/projects/pages/ProjectOfTheWeek";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function Page(){
	const heroRef = useRef<HTMLDivElement>(null);
	const nextSectionRef = useRef<HTMLDivElement>(null);
	const projectMatRef = useRef<HTMLDivElement>(null);

	const projectMatPositions = [
		{
			id: "hero",
			position: { x: 0.5, y: 0.5 },
			rotation: 0,
			scale: 0.9,
		},
		{
			id: "secondSection",
			position: { x: 0.5, y: 0.5 },

			rotation: 0,
			scale: 3,
		},
		{
			id: "thirdSection",
			position: { x: 0.5, y: 0.5 },

			rotation: 0,
			scale: 4,
		},
		{
			id: "fourthSection",
			position: { x: 0.5, y: 0.4 },
			rotation: 0,
			scale: 1.0,
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
			pin: true,
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
		<div className="relative flex flex-col min-h-screen w-full overflow-x-hidden  bg-white">
			<div className="absolute h-screen w-full overflow-hidden z-30 mix-blend-multiply">
				<Image
					src="/projects/shadow.webp"
					width={1980}
					height={1080}
					alt="smooth shadow" className="min-w-[1500px] md:min-w-screen"/>
			</div>
			{/* stopmotion images */}
			{/* TOP PORTION */}
			<div className="box-left absolute w-56 -left-16 -top-12 md:w-80">
				<Image
					src="/projects/circuitboard.webp"
					width={1000}
					height={1000}
					alt="circuit board"/>
			</div>
			<div className="box-right absolute w-64 top-24 z-10 md:left-[800px] md:top-5">
				<Image
					src="/projects/cable.webp"
					width={1000}
					height={1000}
					alt="cable"/>
			</div>
			<div className="box-right absolute w-[500px] -right-64 -top-56 z-10 md:w-[600px] md:-right-44 md:z-20">
				<Image
					src="/projects/magazinefolder.webp"
					width={1000}
					height={1000}
					alt="folder"/>
			</div>
			<div className="box-right absolute w-[350px] -right-24 -top-12 md:w-[400px] md:z-10">
				<Image
					src="/projects/blackprint.webp"
					width={1000}
					height={1000}
					alt="black prints"/>
			</div>
			<div className="box-bottom absolute w-44 top-72 left-24 z-10 md:w-64">
				<Image
					src="/projects/gears.webp"
					width={1000}
					height={1000}
					alt="gears"/>
			</div>
			<div className="box-bottom absolute w-32 top-[450px] left-[60px] z-20 md:w-52 md:left-[200px]">
				<Image
					src="/projects/arduino.webp"
					width={1000}
					height={1000}
					alt="arduino"/>
			</div>
			<div className="box-right absolute w-16 top-[450px] left-[220px] z-20 md:w-28 md:left-[1000px]">
				<Image
					src="/projects/lilchip.webp"
					width={1000}
					height={1000}
					alt="lil chip"/>
			</div>
			<div className="box-right absolute w-64 top-[250px] -right-32 z-20 md:w-80 md:top-[300px]">
				<Image
					src="/projects/multimeter.webp"
					width={1000}
					height={1000}
					alt="multimeter"/>
			</div>

			

			{/* BOTTOM PORTION */}
			<div className="box-bottom absolute w-[300px] -left-[160px] top-[450px] md:w-[400px] md:top-[300px]">
				<Image
					src="/projects/notebook.webp"
					width={1000}
					height={1000}
					alt="notebook"/>
			</div>
			<div className="box-left absolute w-[400px] left-20 top-[700px] md:top-[500px] md:w-[600px] md:left-[900px]">
				<Image
					src="/projects/notepads.webp"
					width={1000}
					height={1000}
					alt="notebook"/>
			</div>
			<div className="box-bottom absolute w-[200px] top-[750px] md:top-[600px] md:left-14">
				<Image
					src="/projects/soldering.webp"
					width={1000}
					height={1000}
					alt="notebook"/>
			</div>
			<div className="box-bottom absolute w-[100px] top-[700px] right-12 md:right-[1000px] md:top-[600px]">
				<Image
					src="/projects/stickynote.webp"
					width={1000}
					height={1000}
					alt="notebook"/>
			</div>
			{/* stopmotion images end */}

			<div className="absolute w-[800px] -left-[200px] top-40 md:left-[300px] md:w-[1000px] md:top-0"
			
			>
				<Image
					src="/projects/blueprint.webp"
					width={1000}
					height={1000}
					alt="blueprint"/>
			</div>

			{/* REAL CONTENT BEGINS HERE */}
			<div className="relative h-screen flex flex-col justify-center items-center" ref={heroRef} >
				<div className="flex flex-col pt-20 md:pt-0">
					<Image src="/projects/nexus.webp" width={100} height={100} alt="nexus" className="w-14"/>
					<h1 className="text-[40px] font-bold text-white opacity-80 md:text-6xl">project of the week</h1>
				</div>
				<a href="/projects/submit" className="relative bg-gradient-to-b from-neutral-700 to-black text-white px-4 p-2 rounded-full z-50">showcase your project!</a>
			</div>
			<div className="py-6 z-50 bg-neutral-100">
				<ProjectOfTheWeek/>
			</div>
			<div className="py-6 z-50 bg-neutral-100">
				<PrevProjectOfTheWeek/>
			</div>
		</div>
	)
}
