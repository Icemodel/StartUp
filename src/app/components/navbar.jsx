"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex mx-auto md:justify-center justify-between items-center p-4 bg-custom1 text-white">
      <div className="flex justify-between w-full items-center">
        <div className="text-2xl font-bold">Tech Home</div>
        <ul className="md:flex space-x-8 text-NavbarFontColor hidden">
          <li>
            <Link href="/" className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-semibold">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/service" className="font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href="/project" className="font-semibold">
              Projects
            </Link>
          </li>
        </ul>

        <button className="bg-custom2 text-custom1 px-4 py-2 rounded-lg hidden md:block ">
          <Link href="/contact" className="font-semibold">
            Contact Us
          </Link>
        </button>
      </div>
      <button className="border-custom4 border-2 text-custom2 px-3 py-1 mr-2 rounded-lg md:hidden">
        <Link href="/ArModel" className="font-semibold">
          AR
        </Link>
      </button>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <RxHamburgerMenu className="text-3xl text-custom2 md:hidden" />
      </button>
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-custom1 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link
              href="/"
              className="font-semibold"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-semibold"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="font-semibold"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className="font-semibold"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
