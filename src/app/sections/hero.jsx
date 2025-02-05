import React from "react";

const hero = () => {
  return (
    <header className="bg-cover bg-center h-screen text-center text-white bg-[url(/img/mainBg.jpg)]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold italic mb-4">
          Design Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-6">
          แปลงโฉมภายในบ้านด้วยความคิดและเทคโนโลยี
        </p>
        <button className="px-6 py-3 bg-custom2 text-custom1 font-semibold rounded-lg">
          Explore Now
        </button>
      </div>
    </header>
  );
};

export default hero;
