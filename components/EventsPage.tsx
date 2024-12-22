import React from "react";

const EventsPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center  justify-between mt-10 py-8 ">
            <h2 className="text-4xl font-bold text-white md:hidden block">Our Events</h2>

      <div className="flex flex-col text-white h-3/4 justify-between items-start p-8 rounded-lg shadow-lg bg-opacity-80 w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">FOSSDAY 24'</h2>
        <p className="text-base w-[20rem] md:text-lg mb-4">
          Our first major event after a long time! We wanted to do something big,
          and this is what we came up with.
        </p>
        <p className="text-xl md:text-2xl font-bold mb-2">What's in store?</p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-base md:text-lg">Expert talks</li>
          <li className="text-base md:text-lg">Tribute to Abraham Reji</li>
          <li className="text-base md:text-lg">Software launch</li>
          <li className="text-base md:text-lg">Networking</li>
          <li className="text-base md:text-lg">Intro to GitHub & Git</li>
          <li className="text-base md:text-lg">Intro to Docker & DevOps</li>
          <li className="text-base md:text-lg">Intro to OpenTofu</li>
        </ul>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:max-h-screen w-auto flex justify-end">
        <img src="./FossDay.png" alt="FOSS Day poster" className="max-h-screen" />
      </div>
    </div>
  );
};

export default EventsPage;
