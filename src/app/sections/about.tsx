import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <section className="bg-custom1 text-white py-16 px-8">
      <div className="mx-20 grid grid-cols-1 md:grid-cols-2 gap-8 h-auto">
        <div>
          <h2 className="text-3xl font-bold mb-4">ABOUT TECH HOME</h2>
          <div className="border-1 border-l-custom1 w-0 h-35 mb-5"></div>
          <p className="text-lg leading-relaxed mr-10">
            Every time we embark on a new project, we don’t just see land or
            calculate value. We see potential, envisioning homes that exude
            comfort and modern aesthetics. We aim to bring life and happiness
            through thoughtful design, ensuring your dream home reflects your
            unique essence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image
            src="/img/aboutUsImg1.png"
            alt="Modern house with garden"
            className="rounded-lg"
            width={300}
            height={300}
          />
          <Image
            src="/img/aboutUsImg2.png"
            alt="Minimalist interior design"
            className="rounded-lg mt-20"
            width={300}
            height={300}
          />
          <Image
            src="/img/aboutUsImg3.png"
            alt="Luxury poolside area"
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default about;
