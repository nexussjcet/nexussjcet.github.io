import type React from "react";
import { useState } from "react";

// Define the type for each history item
interface HistoryItem {
    id: number;
    title: string;
    description: string;
    images: string[];
    date: string;
}

// Sample history data
const history: HistoryItem[] = [
    {
        id: 1,
        title: "Swathanthra Group",
        description: "The Swathanthra Group was inaugurated in 2010 by Richard Stallman to promote Free Software ideals.",
        images: [
            './richard stallman-1.png',
            // './richard stallman-2.png',
        ],
        date: 'Sep 2010',
    },
    {
        id: 2,
        title: "Mozilla Campus Club",
        description: "The Mozilla Campus Club at SJCET was established in 2013 to advocate for open web technologies.",
        images: [
            '/history/mozilla_sjcet_logo.png',
        ],
        date: 'July 2013',
    },
    {
        id: 3,
        title: "ICFOSS Events",
        description: "The ICFOSS Cell at SJCET was established in 2018 to engage students in global FOSS initiatives.",
        images: [
            '/history/ICFOSS_logo.jpeg',
        ],
        date: 'June 2018',
    },
    {
        id: 4,
        title: "Abraham & His Legacy",
        description: "Abraham Raji laid the foundation for a thriving open-source culture at SJCET in 2018.",
        images: [
            '/history/abrahamraji.jpg',
        ],
        date: 'Nov 2018',
    },
    {
        id: 5,
        title: "The Nexus Project",
        description: "The Nexus Project was established to unite all open source software related activities at SJCET.",
        images: [
            '/history/the_nexus_project_logo.jpeg',
        ],
        date: 'Dec 2018',
    },
    {
        id: 6,
        title: "FOSS United",
        description: "The Nexus Project joined as FOSS Club on FOSS United in 2024",
        images: [
            '/common/fossunited.svg',
        ],
        date: 'Dec 2024',
    },
];



// Define the props type for ImageGridItem
interface ImageGridItemProps extends HistoryItem {
    isHovered: boolean;
}

// ImageGrid component
const ImageGrid: React.FC = () => {
    return (
        <div className="md:w-[100vw] w-full h-auto justify-center md:justify-end text-white flex flex-wrap ">
            {history.map((item) => (
                <ImageGridItem key={item.id} {...item} isHovered={false} />
            ))}
        </div>
    );
};

// ImageGridItem component
const ImageGridItem: React.FC<ImageGridItemProps> = ({ title, description, images, date, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative md:m-2 h-screen w-screen md:w-[13vw] flex-col md:flex-row transition-all duration-300 ease-in-out transform pointer-events-none md:pointer-events-auto ${
                isHovered ? "flex-grow" : "flex-shrink"
            } text-[#AAAAAA] font-bold text-2xl p-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        
            <div
                className={`absolute h-full md:w-[13vw] inset-0 flex flex-col justify-between items-start ${isHovered ? "bg-transparent" : "md:bg-[#e1e1e1]"} p-4 transition-opacity duration-300 bg-transparent border-t-2 border-b-2 md:border-none `}
            >
                <div className={` text-center justify-between text-gray-400 h-full ${id % 2 === 0 ? "flex-col" : "flex-col-reverse"} ${isHovered ? "hidden" : "flex"}`}>
                    <h3 className="text-3xl md:text-3xl font-bold">{title}</h3>
                    <div>
                    <div className="md:hidden flex flex-col items-start h-full w-full justify-between flex-1  mt-4 transition-all duration-300 ease-in-out transform">
                        <p className="text-2xl text-white mb-2 transition-all duration-300 ease-in-out transform">{description}</p>
                        <div className="flex flex-col items-center gap-2 justify-center">
                            {images.map((img, index) => (
                                <img key={index} src={img} alt={`additional-${index}`} className={`h-[30vh] w-[100vw] object-contain transition-all duration-300 ease-in-out transform ${index === 1 ? "md:mt-[-2rem] md:mr-[10rem]" : ""}`} />
                            ))}
                        </div>
                    </div>
                    </div>
                    <p className="text-7xl">{date.split(" ")[1]}</p>

                </div>
                {isHovered && (
                    <div className="hidden md:flex flex-col  h-full w-[20vw] items-center justify-between  mt-4 transition-all duration-300 ease-in-out transform">
                        <p className="text-2xl text-white mb-2 transition-all duration-300 ease-in-out transform">{description}</p>
                        <div className="flex flex-col items-center space-y-2 mt-2">
                            {images.map((img, index) => (
                                <img key={index} src={img} alt={`additional-${index}`} className={`h-[30vh] w-[30vh] object-contain transition-all duration-300 ease-in-out transform ${index === 1 ? "mt-[-2rem] mr-[-10rem]" : ""}`} />
                            ))}
                        </div>
                        <p className="text-3xl mt-4 text-gray-400">{date}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGrid;
