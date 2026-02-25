'use client'

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
    <section className="h-screen w-screen grid grid-cols-3 place-content-center place-items-center">
      {Projects.map((project) => (
        <div
          key={project.id}
          className="ProjectCard h-[15rem] w-[25rem] relative bg-black rounded-lg flex items-center justify-center cursor-pointer "
          onMouseOver={(e) => e.currentTarget.style.setProperty('--glow','30px')}
          onMouseOut={(e) => e.currentTarget.style.setProperty('--glow','10px')}
        >
          <figure className="text-center h-full rounded-lg">
            <Image
              src={project.img}
              height={450}
              width={450}
              alt={project.name + "website image"}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="h-[7.5rem] absolute bottom-0 w-full rounded-b-lg Decription flex flex-col justify-center pl-4 items-start text-center text-white">
              <h1 className="TextBg  text-xl font-semibold  text-[#aa00ff]">
                {project.name}
              </h1>
              <desc className="text-gray-300">{project.desc}</desc>
              <div className="absolute bottom-2 flex gap-5 justify-center items-center">
                <Link
                  href={project.demo}
                  className="text-[1rem] text-gray-300 hover:text-gray-500"
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
