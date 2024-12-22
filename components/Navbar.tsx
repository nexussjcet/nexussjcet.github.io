import type React from "react";
import { useState, useEffect, useRef } from "react";

interface NavbarProps {
  scrollToSection: (section: "home" | "history" | "events" | "teams") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [rotation, setRotation] = useState(0);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      const scrolledSections = Math.floor(scrollPosition / screenHeight);
      const lastScrolledSections = Math.floor(
        lastScrollPos.current / screenHeight
      );

      if (scrolledSections > lastScrolledSections) {
        setRotation((prevRotation) => prevRotation + 45);
      } else if (scrolledSections < lastScrolledSections) {
        setRotation((prevRotation) => prevRotation - 45);
      }

      lastScrollPos.current = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const labels = [
    "Home",
    "History",
    "Events",
    "Team",
    "Home",
    "Team",
    "Events",
    "History",
  ];
  const descriptions = {
    Home: "The homepage",
    History: "How we started",
    Events: "Events we have hosted",
    Team: "Our members",
  };

  const activeLabelIndex =
    Math.floor(((rotation / 45) % labels.length) + labels.length) %
    labels.length;
  const activeLabel = labels[activeLabelIndex];

  const renderLabels = () => {
    return labels.map((label, index) => {
      const angle = (360 / labels.length) * index;
      const radius = 55;

      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      const description = descriptions[label as keyof typeof descriptions];



      const handleClick = () => {
        // Call scrollToSection only for recognized sections
        if (label === "Home") scrollToSection("home");
        else if (label === "History") scrollToSection("history");
        else if (label === "Events") scrollToSection("events");
        else if (label === "Team") scrollToSection("teams");
      };

      return (
        <div
          key={index}
          
          onClick={handleClick}
          style={{
            position: "absolute",
            top: `${50 + y}%`,
            left: `${50 + x}%`,
            transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: label === activeLabel ? "white" : "#555555",
            cursor: "pointer",
          }}>
          <div
            className={`flex items-center justify-center gap-3 w-[20rem] h-[20rem] transition-transform duration-300 ${
              label === activeLabel ? "scale-110 text-3xl" : "scale-100 text-xl"
            }`}>
            <div className="w-6 h-6 bg-[#D9D9D9] rounded-full"></div>
            <div className="flex flex-col items-start">
              {label}
              {label === activeLabel && activeLabel !== "Home" && (
                <div
                  style={{
                    fontSize: "12px",
                    color: "red",
                  }}>
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    activeLabel !== "Home" && (
      <div
      
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "2px solid #555555",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease-out",
          position: "fixed",
          top: "20%",
          left: "-25%",
          transformOrigin: "center",
        }}>
        {renderLabels()}
      </div>
    )
  );
};

export default Navbar;
