import Image from "next/image";
import React from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export interface Author {
  name: string;
  githubUsername?: string;
  linkedinUsername?: string;
}

export interface PreviousProject {
  title: string;
  image: string;
  deployedUrl?: string;
  description: string;
  author: Author;
  technologies: string[];
}

interface Props {
  projects?: PreviousProject[];
}

const defaultProjects: PreviousProject[] = [
  {
    title: "Duty Leave Generator",
    image: "/projects/dutyleavegenerator.png",		
    deployedUrl: "https://leaveletter.streamlit.app?embed=true&embed_options=show_toolbar",
    description: "A tool for SJCET Palai students to quickly generate duty leave applications with correct formatting and details.",
    author: {
      name: "Abhijith S",
      githubUsername: "abhips2005",
      linkedinUsername: "abhips1108"
    },
    technologies: ["Python", "Streamlit"],
  },
  {
    title: "project.sjcet.in",
    image: "/projects/projectsjcetin.png",
    deployedUrl: "https://project.sjcet.in",
    description: "A platform that connects student project ideas with the most suitable mentors at SJCET. It helps students find guidance tailored to their project needs, ensuring effective support and faster progress.",
    author: {
      name: "Kiran Babu",
      githubUsername: "KiranBabu007",
      linkedinUsername: "kiran07x",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Quiz Master",
    image: "/projects/quizmaster.png",		
    deployedUrl: "https://quiz-master-live.vercel.app/",
    description: "Quiz Master Live gamifies quizzes to make learning interactive and fun, helping students engage and retain knowledge effectively.",
    author: {
      name: "Abhijith S",
      githubUsername: "abhips2005",
      linkedinUsername: "abhips1108"
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "KKNotes",
    image: "/projects/kknotes.png",
    deployedUrl: "https://kknotes.up.railway.app/",
    description: "KKNotes is a simple platform for KTU CS students to share and access class notes, making learning collaborative and hassle-free.",
    author: {
      name: "Christopher Joshy",
      githubUsername: "ChristopherJoshy",
      linkedinUsername: "christopher-joshy-272a77290",
    },
    technologies: ["Mongo-DB", "Express-JS", "React", "Node-JS", "Tailwind CSS"],
  },
];


const PrevProjectOfTheWeek: React.FC<Props> = ({ projects }) => {
  const projectList = projects || defaultProjects;

  return (
    <div className="py-16 bg-neutral-100 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">
        Previous Projects of the Week's
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {projectList.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow-lg rounded-2xl p-8 w-full flex flex-col"
          >
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-indigo-900 mb-3 text-left">
              {project.title}
            </h2>

            <p className="text-gray-700 text-base mb-6 text-left">
              {project.description}
            </p>

            <div className="flex-grow" />

            <div className="mt-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg text-black">{project.author.name}</span>
                </div>
                 <div className="flex items-center gap-3">
                   {project.author.githubUsername && (
                    <a
                      href={`https://github.com/${project.author.githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.author.linkedinUsername && (
                    <a
                      href={`https://www.linkedin.com/in/${project.author.linkedinUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                 </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.deployedUrl && (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg text-base font-semibold hover:bg-gray-800 transition-colors"
                  >
                    View Project <ArrowUpRight className="w-5 h-5" />
                  </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevProjectOfTheWeek;