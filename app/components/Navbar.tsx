"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const HighlighterRef = useRef<HTMLDivElement>(null);
  const path = usePathname().split("/")[1];
  const navLinks = [
    { id: 32, name: "Home", path: "/" },
    { id: 56, name: "Projects", path: "/projects" },
    { id: 98, name: "Contact", path: "/contact" },
  ];
  const selectedPath = navLinks.findIndex(
    (li) => path === li.path.split("/")[1],
  );

  const handleClick = (idx: number) => {
    HighlighterRef.current?.style.setProperty("--pos", `${idx * 100}% `);
  };

  return (
    <nav className="navbar h-[3rem] w-fit z-1 ml-5 mt-2  rounded-2xl flex items-center justify-center">
      <fieldset className="relative w-fit h-full flex  items-center justify-center ">
        {navLinks.map((li, idx) => (
          <Link
            key={li.id}
            href={`${li.path}`}
            onClick={() => handleClick(idx)}
            onLoad={() =>
              HighlighterRef.current?.style.setProperty(
                "--pos",
                `${idx * 100}%`,
              )
            }
            className={`w-[8rem]  text-[#888686] z-1 font-[550] p-[0.4rem_2.2rem] flex items-center justify-center cursor-pointer ${path === li.path.split("/")[1] ? "text-[#f1efef]" : "text-[#888686]"}`}
          >
            {li.name}
          </Link>
        ))}

        <div
          className="Highlighter"
          style={{ transform: `translateX(${selectedPath * 100}%)` }}
        ></div>
      </fieldset>
    </nav>
  );
}
