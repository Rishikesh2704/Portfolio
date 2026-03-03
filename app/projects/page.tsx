"use client";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  const Projects = [
    {
      id: 23,
      name: "Aurastream",
      img: "/project/Aurastream.png",
      desc: "An anime website",
      stack: [
        "/Icons/nextjs.svg",
        "/Icons/typescript.svg",
        "/Icons/redux.svg",
        "/Icons/tailwindcss.svg",
      ],
      demo: "https://aurastreams.vercel.app",
      github: "https://github.com/Rishikesh2704/AnimeApp",
    },
    {
      id: 61,
      name: "Recili",
      img: "/project/Recili.png",
      desc: "A recipe website",
      stack: [
        "/Icons/nextjs.svg",
        "/Icons/typescript.svg",
        "/Icons/tailwindcss.svg",
      ],
      demo: "https://recili.vercel.app",
      github: "https://github.com/Rishikesh2704/Recipes-App",
    },
  ];
  return (
    <section className="h-[90vh] w-screen flex justify-around items-center ">
      <h1 className="absolute top-30 text-2xl text-white font-semibold">
        Featured <span className="text-[#aa00ff] ">Projects</span>
      </h1>
      {Projects.map((project) => (
        <div
          key={project.id}
          className="group h-[17rem] w-[30rem] relative bg-black col-start-1  rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300 hover:shadow-[0px_0px_18px_#c581e7] hover:scale-102 "
          onMouseOver={(e) =>
            e.currentTarget.style.setProperty("--glow", "30px")
          }
          onMouseOut={(e) =>
            e.currentTarget.style.setProperty("--glow", "10px")
          }
        >
          <div className="absolute top-2 left-4 flex gap-5 justify-center items-center">
            <Link
              href={project.demo}
              className="Btns p-[0rem_0.6rem] rounded-lg text-[1rem] text-gray-300 "
              target="/"
            >
              Live
            </Link>
            <Link
              href={project.github}
              className="text-[1rem] text-gray-300 hover:text-gray-500"
              target="/"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
          <figure className="grid grid-cols-1 text-center h-full rounded-lg place-items-end    ">
            <Image
              src={project.img}
              height={550}
              width={750}
              alt={project.name + "website image"}
              className="h-full w-auto col-start-1 col-end-1  row-start-1 row-end-1 rounded-lg "
            />
            <figcaption className="h-[7.5rem] col-start-1 col-end-1 row-start-1 row-end-1  w-full rounded-b-lg Decription flex flex-col justify-end pl-4 pb-3 items-start text-center text-white">
              <h1 className="TextBg  text-xl font-semibold  text-[#aa00ff]">
                {project.name}
              </h1>
              <p className="text-gray-300">{project.desc}</p>
            </figcaption>
          
          </figure>
            <div className="absolute top-0 right-0 flex gap-1 text-gray-300 w-[fit] h-[1.5rem] pl-2 pr-2 rounded-tr-lg bg-black rounded-l-lg">
              {project.stack.map((frame, idx) => (
                <Image
                  key={idx + frame}
                  src={frame}
                  height={20}
                  width={20}
                  alt="framework"
                />
              ))}
            </div>
        </div>
      ))}
    </section>
  );
}
