import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const contact = () => {
  return (
    <div className="font-roboto">
      {/* Header Section */}
      <Navbar />
      <div className="flex flex-col items-center text-center py-12 px-4 bg-orange-100 h-screen justify-center content-center">
        <div className="container mx-auto justify-items-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-lg">
            Ready to start your project? Reach out to us today.
          </p>
          <div className="w-full max-w-md">
            <form className="w-full max-w-md">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring focus:ring-gray-500"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2e2e2e] text-white py-2 px-4 rounded-lg w-full hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
