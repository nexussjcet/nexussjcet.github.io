import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return <div className="w-full min-h-screen flex flex-col text-white scroll-smooth">
        <div className="relative flex flex-col gap-10 justify-center items-center w-full h-screen">
            <Image src={"/soc/ai.webp"} width={1920} height={1080} alt="Big ass robot" className="w-full h-full object-cover absolute -z-10 opacity-50 bg-green-950" />
            <Image src="/soc/grid.webp" width={1920} height={1080} alt="grid" className="absolute -z-10 md:w-1/2 opacity-65" />
            <h1 className="text-3xl md:text-4xl text-center font-medium">Season of Commits</h1>
            <div className="flex flex-row gap-8 items-center text-center">
                <h1 className="max-w-28 md:text-xl">Contribute to exciting projects</h1>
                <Image src="/soc/soc.webp" alt="soc" width={200} height={200} className="w-20 md:w-32 aspect-square" />
                <h1 className="max-w-28 md:text-xl">Or start your own!</h1>
            </div>
            <div className="flex flex-row gap-4">
                <Link href="/soc/register">
                    <Button className="rounded-full bg-green-900 hover:bg-green-700">Get started</Button>
                </Link>
                <Link href="#projects">
                    <Button className="rounded-full bg-green-900 hover:bg-green-700">Visit our projects</Button>
                </Link>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-10 w-full bg-white text-black">
            <div id="projects"></div>
            <div className="flex flex-col gap-4 w-full">
                <h1 className="text-xl font-bold">Projects you can contribute to</h1>
                <Link href="https://github.com/nexussjcet/nexussjcet.github.io" className="underline">
                    The Nexus Website
                </Link>
                <Link href="https://github.com/nexussjcet/nexus-spaces" className="underline">
                    Nexus Spaces - AI driven social media for SJCET
                </Link>
                <Link href="https://github.com/alvin-dennis/Sjcet-Events" className="underline">
                    SJCET Events - An event manager for SJCET
                </Link>
                <Link href="mailto:nexus@sjcetpalai.ac.in" className="underline">
                    Want to be a maintainer? Let us know! (email: nexus@sjcetpalai.ac.in)
                </Link>
            </div>
            <div className="flex flex-col w-full">
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