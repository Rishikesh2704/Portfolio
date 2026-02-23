"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar h-[3rem] w-fit z-1 ml-5  rounded-2xl flex items-center justify-center">
      <fieldset className="relative w-fit h-full flex  items-center justify-center ">

        <Link href="/" >
          <input
            type="radio"
            id="Home"
            name="group"
            className="List-1 hidden"
            defaultChecked
          />
          <label
            htmlFor="Home"
            className="List-1 w-[8rem] duration-200 ease-out text-[#d2d2d2] z-1 font-[550] p-[0.4rem_2.2rem] flex items-center justify-center cursor-pointer"
          >
            Home
          </label>
        </Link>

        <Link href="/projects">
          <input
            type="radio"
            id="Projects"
            name="group"
            className="List-2 hidden"
          />
          <label
            htmlFor="Projects"
            className="List-2 w-[8rem] z-1 font-[550] duration-200 ease-out  text-[#bbbaba] cursor-pointer p-[0.4rem_2.2rem] flex items-center justify-center"
          >
            Projects
          </label>
        </Link>

        <Link href="/contact">
          <input
            type="radio"
            id="Contact"
            name="group"
            className="List-3 hidden"
          />
          <label
            htmlFor="Contact"
            className="List-3 w-[8rem] z-1 font-[550] duration-200 ease-out text-[#bbbaba] cursor-pointer p-[0.4rem_2.2rem] flex items-center justify-center"
          >
            Contact
          </label>
        </Link>
        <div className="Highlighter"></div>
      </fieldset>
    </nav>
  );
}
