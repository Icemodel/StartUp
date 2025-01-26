import React from "react";
import Image from "next/image";
import { projectsData } from "@/app/constants/data";

const project = () => {
  return (
    <section className="bg-custom1 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-lg mb-8">
          Explore our portfolio of completed projects, each crafted with passion
          and precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 place-items-center "
            >
              <Image
                src={project.img}
                alt={project.name}
                className="rounded-lg mb-4 w-70 h-60 "
                width={300}
                height={200}
              />
              <div className="font-bold text-lg">{project.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default project;
