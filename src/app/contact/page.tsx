import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const contact = () => {
  return (
    <div className="font-roboto">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen text-center text-white bg-[url(/img/modernHouse.png)]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold italic mb-4">
            Transform Your Home with Elegance
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We specialize in creating spaces that reflect your personality and
            style.
          </p>
          <button className="px-6 py-3 bg-custom2 text-custom1 font-semibold rounded-lg">
            Learn More
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-custom2 py-12">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-2xl mb-4 font-bold">Lookin4Home</h3>
          <p className="text-lg leading-7 mb-4">
            Established in 2016, Lookin4Home was founded with a vision to
            redefine modern interior and architectural design. Our expertise
            lies in crafting timeless and functional spaces that resonate with
            elegance and innovation. We blend cutting-edge techniques with
            sustainable practices to create spaces that inspire and endure.
          </p>
          <p className="text-lg leading-7">
            At Lookin4Home, we believe in turning ideas into reality. With an
            unwavering focus on detail and quality, we have transformed numerous
            homes and commercial spaces into personalized masterpieces. Our
            commitment to excellence drives us to exceed expectations in every
            project we undertake.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card border p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Residential Design</h3>
              <p className="text-lg">
                From cozy apartments to luxurious homes, we create spaces you'll
                love to live in.
              </p>
            </div>
            <div className="card border p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Commercial Spaces</h3>
              <p className="text-lg">
                We design modern, functional offices and retail spaces tailored
                to your needs.
              </p>
            </div>
            <div className="card border p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Custom Furniture</h3>
              <p className="text-lg">
                Unique, handcrafted furniture pieces that perfectly complement
                your interiors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default contact;
