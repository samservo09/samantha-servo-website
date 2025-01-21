"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "About Me", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Publications", path: "#publications" },
  { title: "Talks", path: "#talks" }, // Link to the Talks page
  { title: "Blogs", path: "https://tutorialsdojo.com/author/samantha-servo/" }, // Link to the Blogs page
  { title: "Contact Me", path: "#contact" },
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
    src="/images/logo-pic-3.png" // Replace with your logo's path
    alt="Beyond the Vinculum Logo"
    width={120} // Adjust width
    height={50} // Adjust height
    className="h-auto w-auto" // Optional: To make it responsive
  />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          )}
        </div>
        <div
  className={`menu ${
    navbarOpen ? "block" : "hidden"
  } md:flex md:flex-row`}
>
  <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
    {navLinks.map((link, index) => (
      <li key={index} className="text-white font-medium">
        <NavLink href={link.path} title={link.title}></NavLink>
      </li>
    ))}
  </ul>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
