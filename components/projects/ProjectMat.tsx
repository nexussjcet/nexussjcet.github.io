import Image from "next/image";

export default function ProjectMat() {
	return (
		
		<div className="flex items-center justify-center  rounded-lg drop-shadow-xl md:w-[70vw]">
			<Image
				src={"/projects/tablemat.webp"}
				width={1280}
				height={720}
				alt="logo"
				className="  z-10  object-cover rounded-lg object-center lg:w-[80vw]  sm:w-full"
			/>
			
		</div>
	);
}
