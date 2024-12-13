import Image from "next/image";
import ProjectMat from "./ProjectMat";

export const ProjectHome = ({ projectMatRef }: { projectMatRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center text-black">
      {/* <div className="absolute bg-blend-multiply z-50">
        <Image src={"/projects/shadow.webp"} width={1920} height={1080} alt="logo" />
      </div> */}
      <div ref={projectMatRef} className="relative z-50">
        <ProjectMat />
      </div>
    </div>
  );
};