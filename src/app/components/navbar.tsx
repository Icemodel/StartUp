import React from "react";

const navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">Tech Home</div>
      <ul className="flex space-x-4">
        <li>
          <a href="main.html" className="font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="aboutUs.html" className="font-semibold">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="font-semibold">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="font-semibold">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="font-semibold">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
