"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import History from "@/components/History";
import EventsPage from "@/components/EventsPage";
import TeamsPage from "@/components/TeamsPage";
import GridPattern from "@/components/magicui/grid-pattern";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section: "home" | "history" | "events" | "teams" | "footer" | "about") => {
    switch (section) {
      case "home":
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "history":
        historyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "events":
        eventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "teams":
        teamsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "footer":
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  if (loading) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src="./logo.svg"
          className="repeat-infinite animate-pulse transition-all ease-out"
        />
      </main>
    );
  }

  return (
    <div className="relative h-auto w-screen flex gap-10 flex-col justify-end">
      <GridPattern
        width={50}
        height={50}
        strokeDasharray="5,5"
        className="absolute inset-0 z-0"
      />
      {/* Navbar visible only on md screens and above */}
      <div className="hidden md:block w-1/4 mr-10">
        <Navbar
          scrollToSection={scrollToSection} // Pass the function as a prop
        />
      </div>
      <div>

        <div ref={heroRef}>
          <Hero />
        </div>
        <div className="flex h-auto w-full items-center justify-center">
          <div className="flex h-auto w-full flex-col items-end justify-center gap-10">
            <section ref={historyRef}>
              <History />
            </section>
            <section ref={eventsRef} className="max-w-full">
              <EventsPage />
            </section>
            <section ref={teamsRef} className="w-full" >
              <TeamsPage />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}