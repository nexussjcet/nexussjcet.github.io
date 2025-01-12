import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Image from "next/image";
import Link from "next/link";
import ChatBot from '../../components/chat';
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
            <ChatBot />
            </div>
        </div>
    </div>
}