import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { BrainCircuit, CalendarDays, FilePen, HardDrive, PanelTop, Send, QrCode, Github } from 'lucide-react';
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CustomGithubCalendar } from "@/components/soc/github-calendar";

export const metadata = {
    title: "Season of Commits - Nexus Project",
    description: "Season of Commits is a month-long celebration of open-source contributions. Whether you're an experienced developer, a beginner looking to make your first pull request, or someone with a project to share, this event provides resources, mentorship, and a collaborative environment to help you succeed.",
}

type Project = {
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
    link: string;
};

const projects: Project[] = [
    {
        name: 'The Nexus Website',
        description: 'The official website Nexus sjcet ',
        icon: PanelTop,
        color: 'border-blue-500 text-blue-500',
        link: "https://github.com/nexussjcet/nexussjcet.github.io"
    },
    {
        name: 'Nexus Spaces',
        description: 'AI driven social media for SJCET',
        icon: BrainCircuit,
        color: 'border-purple-500 text-purple-500',
        link: "https://github.com/nexussjcet/nexus-spaces"
    },
    {
        name: 'SJCET Events',
        description: 'An event manager for SJCET',
        icon: CalendarDays,
        color: 'border-green-500 text-green-500',
        link: "https://github.com/alvin-dennis/Sjcet-Events"
    },
    {
        name: "Insight",
        description: "Self Host-able AI enabled WhatsApp Agent",
        icon: Send,
        color: "border-cyan-500 text-cyan-500",
        link: "https://github.com/rajatsandeepsen/insight"
    },
    {
        name: 'Bootcamp Website',
        description: 'Redesign new 10 year anniversary official website for IEDC SJCET',
        icon: PanelTop,
        color: 'border-green-500 text-green-500',
        link: "https://github.com/IEDC-SJCET/IEDC-SJCET.github.io"
    },
    {
        name: 'CertiFoolProof',
        description: 'A platform to verify the authenticity of certificates issued by clubs of SJCET',
        icon: QrCode,
        color: 'border-red-500 text-red-500',
        link: "https://github.com/TimsTittus/CertiFoolProof"
    },
    {
        name: "Duty Leave Generator",
        description: "An AI enabled tool to automate the duty leave documentation process of SJCET",
        color: "border-pink-500 text-pink-500",
        icon: FilePen,
        link: "https://github.com/IEDC-SJCET/dutyfree"
    }
];

const projectIdeas: (Omit<Project, "link"> & { from: string })[] = [
    {
        name: "G-Drive Web portal",
        description: "A structured organizational web portal to edit/write/access Google Drive files",
        color: "border-yellow-500 text-yellow-500",
        icon: HardDrive,
        from: "A Faculty of SJCET"
    }
]

const contributors: { username: string, name: string, avatar: string, url: string, projects: string[] }[] = [
    {
        username: "aravind-manoj",
        name: "Aravind Manoj",
        avatar: "https://avatars.githubusercontent.com/u/136658800?v=4",
        url: "https://github.com/aravind-manoj",
        projects: ["Nexus Spaces", "Nexus Website"],
    },
    {
        username: "Milansuman",
        name: "Milan Suman",
        avatar: "https://avatars.githubusercontent.com/u/38901868?v=4",
        url: "https://github.com/Milansuman",
        projects: ["Nexus Spaces", "Nexus Website"],
    },
    {
        username: "DTS-11",
        name: "Deon Thomas",
        avatar: "https://avatars.githubusercontent.com/u/76153100?v=4",
        url: "https://github.com/DTS-11",
        projects: ["Nexus Spaces"]
    },
    {
        username: "joegeorge022",
        name: "Joe George",
        avatar: "https://avatars.githubusercontent.com/u/127773439?v=4",
        url: "https://github.com/joegeorge022",
        projects: ["Nexus Spaces", "SJCET Events"],
    },
    {
        username: "abhips2005",
        name: "Abhijith S",
        avatar: "https://avatars.githubusercontent.com/u/183483087?v=4",
        url: "https://github.com/abhips2005",
        projects: ["DutyFree"],
    },
    {
        username: "alvin-dennis",
        name: "Alvin Dennis",
        avatar: "https://avatars.githubusercontent.com/u/134829236?v=4",
        url: "https://github.com/alvin-dennis",
        projects: ["SJCET Events", "G-Drive Portal"],
    },
    {
        username: "abin-karukappallil",
        name: "Abin Thomas",
        avatar: "https://avatars.githubusercontent.com/u/73917119?v=4",
        url: "https://github.com/abin-karukappallil",
        projects: ["Nexus Spaces", "Nexus Website", "SJCET Events"],
    },
    {
        username: "TimsTittus",
        name: "Tims Tittus",
        avatar: "https://avatars.githubusercontent.com/u/151863700?v=4",
        url: "https://github.com/TimsTittus",
        projects: ["CertiFoolProof", "Nexus Spaces", "SJCET Events"],
    },
    {
        username: "josehp304",
        name: "Joseph Babu",
        avatar: "https://avatars.githubusercontent.com/u/83821474?v=4",
        url: "https://github.com/josehp304",
        projects: ["Nexus Spaces", "Nexus Website"],
    },
    {
        username: "Blesson-Tomy",
        name: "Blesson K Tomy",
        avatar: "https://avatars.githubusercontent.com/u/116932677?v=4",
        url: "https://github.com/Blesson-Tomy",
        projects: ["Nexus Spaces"],
    },
];

export default function Page() {
    return <div className="w-full min-h-screen flex flex-col text-white scroll-smooth">
        <div className="relative flex flex-col gap-10 justify-center items-center w-full h-screen">
            <Image src={"/soc/ai.webp"} width={1920} height={1080} alt="Big ass robot" className="w-full h-full object-cover absolute -z-10 opacity-50 bg-green-950" />
            <Image src="/soc/grid.webp" width={1920} height={1080} alt="grid" className="absolute -z-10 md:w-1/2 opacity-65" />
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-extrabold">Season of <span className="decoration-dashed underline decoration-green-500 underline-offset-3 px-1 italic">Commits</span></h1>
            <div className="flex flex-row gap-8 items-center text-center">
                <h1 className="max-w-28 md:text-xl">Contribute to exciting projects</h1>
                <Image src="/soc/soc.webp" alt="soc" width={200} height={200} className="w-20 md:w-32 aspect-square" />
                <h1 className="max-w-28 md:text-xl">Or start your own!</h1>
            </div>
            <div className="flex flex-row gap-4">
                <Link href="/soc/register">
                    <Button className="rounded-full bg-green-500 hover:bg-green-600">Get started</Button>
                </Link>
                <Link href="#projects">
                    <Button className="rounded-full bg-green-500 hover:bg-green-600">Visit our projects</Button>
                </Link>
            </div>
        </div>
        <div className="flex flex-col gap-4 p-5 md:p-10 w-full bg-white text-black">
            <div id="projects" />
            <div className="max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-gray-900 text-center">
                    The <span className="bg-green-400 px-2">Winners</span>
                </h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <img src={"/soc/DeonThomas.webp"} alt="DeonThomas, first" className="rounded-2xl shadow-md hover:shadow-xl transition-shadow border hover:border-4 hover:border-green-400 duration-300 ease-in-out md:col-span-2 lg:col-span-1" />
                    <img src={"/soc/JoeGeorge.webp"} alt="JoeGeorge, second" className="rounded-2xl shadow-md hover:shadow-xl transition-shadow border hover:border-4 hover:border-green-400 duration-300 ease-in-out" />
                    <img src={"/soc/AbhijithS.webp"} alt="Abhijith S, third" className="rounded-2xl shadow-md hover:shadow-xl transition-shadow border hover:border-4 hover:border-green-400 duration-300 ease-in-out" />
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Projects You Can <span className="bg-green-400 px-2">Contribute</span> To
                </h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        const IconComponent = project.icon;
                        return (
                            <div
                                key={project.name}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between border"
                            >
                                <div className="p-6 ">
                                    <div className="flex items-center space-x-4">
                                        <div className={`${project.color} p-3 rounded-lg bg-gray-50 border-2`}>
                                            <IconComponent size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 ">
                                    <Link href={project.link}>
                                        <button type="button" className="font-medium text-blue-600 text-sm hover:text-blue-800">
                                            Github link →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="max-w-4xl mx-auto ">
                    <h1 className="text-3xl font-bold text-gray-900 text-center my-12">
                        Some Project Ideas That <br /> You Can <span className="bg-green-400 px-2">Start Your Own</span> Right Now
                    </h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {projectIdeas.map((project) => {
                            const IconComponent = project.icon;
                            return (
                                <div
                                    key={project.name}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between border"
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col items-start space-y-2">
                                            <div className={`${project.color} border-2 p-3 rounded-lg bg-gray-50`}>
                                                <IconComponent size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {project.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col border-gray-100 border-t bg-gray-50 py-4 text-center text-sm">
                                        <span className="text-black opacity-40">
                                            Requirement from:
                                        </span>
                                        <span className="text-blue-600 hover:text-blue-800">
                                            {project.from}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full my-16">
                <h1 className="text-3xl font-bold text-gray-900 text-center m-12">
                    The <span className="bg-green-400 px-2">Contributors</span>
                </h1>
                <Carousel className="w-[80%] max-w-5xl justify-center items-center">
                    <CarouselContent>
                        {contributors.map((contributor, index) => (
                            <CarouselItem className="min-[1024px]:basis-1/2 min-[1375px]:basis-1/3 overflow-hidden select-none" key={index}>
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center p-2 md:p-6 h-[28rem]">
                                        <Avatar className="w-20 h-20 mb-4">
                                            <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                            <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-2xl font-semibold mb-2">{contributor.name}</span>
                                        <Separator className="my-4" />
                                        <div className="flex w-full mb-4">
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold mb-1 text-center w-full underline">Active Projects</h4>
                                                <div className="flex justify-center">
                                                    <ul className="text-sm">
                                                        {contributor.projects.map((project, idx) => (
                                                            <li key={idx}>▸ {project}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <Separator orientation="vertical" className="mx-4" />
                                            <CustomGithubCalendar contributor={contributor} />
                                        </div>
                                        <Button variant="outline" className="mt-2" asChild>
                                            <Link href={contributor.url} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" /> GitHub Profile
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <Link href="mailto:nexus@sjcetpalai.ac.in" className="underline block text-center mb-8">
                Want to be a maintainer? Let us know! (email: nexus@sjcetpalai.ac.in)
            </Link>
            <div className="flex flex-col container">
                <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                        <AccordionTrigger>What's this event about?</AccordionTrigger>
                        <AccordionContent>
                            Season of Commits is a month-long celebration of open-source contributions. Whether you're an experienced developer, a beginner looking to make your first pull request, or someone with a project to share, this event provides resources, mentorship, and a collaborative environment to help you succeed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger>Who can join?</AccordionTrigger>
                        <AccordionContent>
                            Anyone with an interest in coding, open source, or collaboration can join! Whether you're a student, professional, or hobbyist, there's a space for you. Beginners are especially encouraged to participate and explore the world of open source.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger>Are there any prizes?</AccordionTrigger>
                        <AccordionContent>
                            Yes! Participants with the highest number of quality commits will be eligible for a cash prize of 2000 INR.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionTrigger>What do I gain from this event?</AccordionTrigger>
                        <AccordionContent>
                            By joining Season of Commits, you'll gain hands-on experience in open source development, build connections with like-minded contributors, and enhance your coding and collaboration skills. You'll also have the opportunity to grow your portfolio, increasing your chances of being hired.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>Do I need to know how to code?</AccordionTrigger>
                        <AccordionContent>
                            No! While code contributions are the best way to contribute, there is also a need of designers, technical writers(people who write documentation) and beta testers(People who test the project and report issues.)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>What should I work on?</AccordionTrigger>
                        <AccordionContent>
                            Look for unsolved issues in the issues tab, or create a new issue with the "question" label if you have something specific in mind.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
}
