import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DutyFree - Duty Leave Generator",
    description: "Duty Leave Generator AI Tool for the students of SJCET Palai college.",
    authors: { name: "Abhijith S", url: "https://github.com/abhips2005" }
};

export default function Project() {
    return <div className="relative h-screen overflow-auto">
        <iframe
            title="DutyFree"
            src="https://leaveletter.streamlit.app?embed=true&embed_options=show_toolbar"
            frameBorder="0"
            className="absolute top-0 left-0 h-full w-full border-0 bg-white">
        </iframe>
    </div>
}
