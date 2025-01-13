import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        
        const res: Record<string, string> = {
            "What's this event about?":"Season of Commits is a month-long celebration of open-source contributions. Whether you're an experienced developer, a beginner looking to make your first pull request, or someone with a project to share, this event provides resources, mentorship, and a collaborative environment to help you succeed.",
            "Who can join?":"Anyone with an interest in coding, open source, or collaboration can join! Whether you're a student, professional, or hobbyist, there's a space for you. Beginners are especially encouraged to participate and explore the world of open source.",
            "Are there any prizes?":"Yes! Participants with the highest number of quality commits will be eligible for a cash prize of 2000 INR.",
            "what do i gain from this event?":"By joining Season of Commits, you'll gain hands-on experience in open source development, build connections with like-minded contributors, and enhance your coding and collaboration skills. You'll also have the opportunity to grow your portfolio, increasing your chances of being hired.",
            "Do i need to know how to code?":"No! While code contributions are the best way to contribute, there is also a need of designers, technical writers(people who write documentation) and beta testers(People who test the project and report issues.)",
            "What should i work on?":"Look for unsolved issues in the issues tab, or create a new issue with the \"question\" label if you have something specific in mind.",
            "other help":"Mail us nexus@sjcetpalai.ac.in"        
        };

        return NextResponse.json({
            response: res[message] || "Response not found"
        });
    } catch (error) {
        return NextResponse.json({ 
            error: "Error processing request" 
        }, { 
            status: 500 
        });
    }
}