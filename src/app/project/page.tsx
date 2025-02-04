import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { serviceData } from "..//constants/data";

const projects = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="text-center bg-cover bg-fixed bg-center text-white py-24 bg-[url(/img/bg_project.jpg)]">
          <h1 className="text-4xl font-bold mb-4">Our Previous Projects</h1>
          <p className="text-lg">
            Explore our portfolio of beautifully designed homes and spaces.
          </p>
        </section>

        {/* Projects Section */}
        <section className="flex-grow bg-custom2 py-16">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {serviceData.map((project, index) => (
              <div
                key={index}
                className="bg-custom1 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 m-2"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
