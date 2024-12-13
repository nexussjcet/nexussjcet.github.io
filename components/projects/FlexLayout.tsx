import Image from "next/image";
import React from "react";

export default function FlexLayout() {
	return (
		<div className="flex flex-col w-full h-screen justify-between gap-0 overflow-hidden">
			{/* row one */}
			<div className="flex flex-wrap overflow-visible h-screen justify-between">
				{/* Column 1 */}
				<div className="flex flex-col w-1/5 h-screen justify-between">
					<div className="box-top w-[30vw]">
						<Image
							src="/projects/board4.webp"
							width={200}
							height={200}
							alt="Board 4"
						/>
					</div>
					<div className="-mt-10 lg:ml-48 w-[25vw] md:w-[15vw] ">
						<Image
							src="/projects/notepad3.webp"
							width={150}
							height={150}
							alt="Notepad 4"
							className="box-top"
						/>
					</div>
					<div className="-mt-9 w-[40vw] md:w-[25vw]">
						<Image
							src="/projects/notepad2.webp"
							width={600}
							height={600}
							alt="Notepad 2"
							className="box-left"
						/>
					</div>
					<div className="-mt-24 lg:ml-48 ">
						<Image
							src="/projects/speaker.webp"
							width={100}
							height={100}
							alt="Speaker"
							className="box-left"
						/>
					</div>
				</div>

				{/* Column 2 */}
				<div className="flex flex-col w-1/5 border border-yellow-500 justify-between">
					<div className="box-left mt-20 md:mt-4 w-[15vw] ml-4 md:-ml-14 md-w-[20vw]">
						<Image
							src="/projects/speaker.webp"
							width={100}
							height={100}
							alt="Speaker"
						/>
					</div>
					<div className="md:-mt-32 mt-24  box-top">
						<Image
							src="/projects/specs.png"
							width={200}
							height={200}
							alt="Specs"
						/>
					</div>
					<div className="mt-4 box-bottom  flex flex-col justify-between">
						<Image
							src="/projects/nexussticky.webp"
							width={200}
							height={200}
							alt="Nexus Sticky"
							className="lg:mt-0 mt-30 lg:ml-0 -ml-14 box-left"

						/>
						<Image
							src="/projects/board3.webp"
							width={150}
							height={150}
							alt="Board 3"
							className="lg:mt-0 mt-44 "
						/>
					</div>
					<div className="">
						<Image
							src="/projects/solderingiron.webp"
							width={180}
							height={180}
							alt="Soldering Iron"
							className="box-left"
						/>
					</div>
					
				</div>

				{/* Column 3 */}
				<div className="flex flex-col w-1/5 border border-red-500 justify-between h-screen overflow-visible">
					<div className="w-[60vw] md:w-[30vw] lg:w-[40vw] ">
						<Image
							src="/projects/sketches.png"
							width={400}
							height={400}
							alt="Envelope"
							className="box-top"
						/>
					</div>
					<div className="w-[70vw] md:w-[50vw] lg:w-[40vw] -mt-24">
						<Image
							src="/projects/notepad4.webp"
							width={600}
							height={600}
							alt="Notepad 4"
							className="box-bottom"
						/>
					</div>
				</div>

				{/* Column 4 */}
				<div className="flex flex-col w-1/5 border border-green-500 justify-between h-screen overflow-visible">
					<div>
						<Image
							src="/projects/cable.webp"
							width={200}
							height={200}
							alt="Cable"
							className="box-right"
						/>
					</div>
					<div className="mt-72 z-20 relative overflow-visible">
						<Image
							src="/projects/board2.webp"
							width={100}
							height={100}
							alt="Board 1"
							className="ml-96 box-right "
							
							
						/>
							<Image
							src="/projects/board2.webp"
							width={100}
							height={100}
							alt="Board 1"
							className="-mt-98 mt-9 rotate-45 box-bottom"
							

							
						/>
					
					</div>
					<div className="ml-28 z-10">
						<Image
							src="/projects/gears.webp"
							width={200}
							height={200}
							alt="Gears"
							className="-mt-28 box-bottom"
						/>
					</div>
					
				</div>

				{/* Column 5 */}
				<div className="flex flex-col w-1/5 border border-purple-500 h-screen justify-between overflow-visible items-end">
					<div className="z-30 w-[50vw] md:w-[30vw] lg:w-[20vw]">
						<Image
							src="/projects/lamp.webp"
							width={300}
							height={300}
							alt="Lamp"
							className="box-right "
						/>
					</div>
					<div className="-mt-56 z-20 relative overflow-visible  w-[30vw] md:w-[20vw] lg:w-[20vw]">
						<Image
							src="/projects/Rectangle 40319.webp"
							width={200}
							height={400}
							alt="Board 1"
							className="absolute top-0  overflow-visible box-right hidden lg:block"
						/>
						<Image
							src="/projects/notepad1.webp"
							width={200}
							height={200}
							alt="Notepad 1"
							className="-ml-9 box-right"
						
						/>
					</div>
					<div className="mt-4">
						<Image
							src="/projects/volt.webp"
							width={250}
							height={250}
							alt="Volt"
						
							className="box-right w-[50vw] md:w-[30vw] lg:w-[15vw]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
