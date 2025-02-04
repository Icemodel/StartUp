import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <section className="bg-custom1 text-white py-16 px-8">
      <div className="sm:mx-15 md:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto">
        <div className="md:p-10 pl-8 content-center md:leading-8">
          <h2 className="md:text-5xl text-3xl font-bold mb-4 md:leading-20 ">
            ABOUT <br />
            TECH HOME
          </h2>
          <p className="text-lg leading-relaxed mr-10">
            Every time we embark on a new project, we don’t just see land or
            calculate value. We see potential, envisioning homes that exude
            comfort and modern aesthetics. We aim to bring life and happiness
            through thoughtful design, ensuring your dream home reflects your
            unique essence.
          </p>
        </div>
        <div className="flex flex-1 gap-4">
          <div>
            <Image
              src="/img/aboutUsImg1.png"
              alt="Modern house with garden"
              className=""
              width={500}
              height={500}
            />
            <Image
              src="/img/aboutUsImg3.png"
              alt="Luxury poolside area"
              className="mt-4"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-30">
            <Image
              src="/img/aboutUsImg2.png"
              alt="Minimalist interior design"
              className=""
              width={500}
              height={500}
            />

            <Image
              src="/img/luxuryHouse.png"
              alt="Luxury house"
              className="mt-4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
