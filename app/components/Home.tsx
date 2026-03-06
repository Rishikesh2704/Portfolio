import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    { id: 96, name: "Javascript", icon: "/Icons/javascript.svg" },
    { id: 54, name: "Typescript", icon: "/Icons/typescript.svg" },
    { id: 21, name: "React", icon: "/Icons/react.png" },
    { id: 12, name: "Redux", icon: "/Icons/redux.svg" },
    { id: 11, name: "Nextjs", icon: "/Icons/nextjs.svg" },
    { id: 27, name: "Tailwind", icon: "/Icons/tailwindcss.svg" },
    { id: 45, name: "Firebase", icon: "/Icons/firebase.svg" },
    { id: 34, name: "GitHub", icon: "/Icons/github.svg" },
    { id: 84, name: "Git", icon: "/Icons/git.svg" },
  ];
  return (
    <div className="h-[95%] w-[95vw] max-md:h-[78%] grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-3 place-content-center justify-center md:place-items-center z-1  text-white">
      
      {/*Intro*/}
      <section className="CardBg max-sm:p-[0.8rem] h-[31vmin] w-[80vmin] max-sm:w-[80vw] max-sm:h-[12vh] lg:h-[19vmin] lg:w-[46vmin] font-semibold max-lg:w-[45vmin] max-lg:h-[22vmin]  bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-3xl flex flex-col  text-start pl-2 justify-center items-start text-white col-start-1 row-start-1 rounded-lg   ">
        <h1 className="text-[2.1vmax] max-sm:text-[1.4vmax] ">
          Hi, I am <span className="TextBg">Rishikesh </span>
        </h1>
        <h2 className="text-[1.5vmax] max-sm:text-[1.3vmax] font-semibold  text-gray-300">
          Frontend Developer
        </h2>
        <p className=" text-[#dad9d9] text-[1vmax] max-sm:text-[0.8vmax]">
          I build fast, accessible and scalable web applications using React,
          Next.js and TypeScript.
        </p>
        <a
          href="/ResumeN.pdf"
          download={""}
          className="Btns w-fit text-[0.8rem]  p-[0.4rem_0.8rem] max-sm:text-[1vmax] rounded-lg mt-4  cursor-pointer"
        >
          <i className="fa-solid fa-file-lines"></i> Download Resume
        </a>
      </section>

      {/*Education*/}

      <section className="CardBg h-[65%]  w-[70%] max-sm:h-[55%] max-lg:w-[80%] max-lg:h-[40%] lg:h-[41%] lg:w-[77%] font-semibold max-sm:row-start-3 relative flex flex-col justify-around gap-2 text-start pl-2  text-[#e3e1e1] rounded-lg ">
        <h2 className="text-[1.1vmax] max-sm:text-[1.4vmax] max-lg:text-[1.5vmax] underline underline-offset-2  text-[#dad9d9] ">
          Education
        </h2>
        <div className="flex flex-col gap-1 text-[2.1 vmin] max-sm:text-[2.7vmin] ">
          <span className="text-[2.9vmin] max-sm:text-[1.2vmax] max-lg:text-[1.8vmin] lg:text-[1.8vmin] [word-spacing:-0.2rem] text-white">
            Bacherlor of Science (B.sc) - Computer Science{" "}
          </span>
          <span>Pragati Mahavidyalay Degree College</span>
          <span>2023 - 2026</span>
        </div>
      </section>

      {/*Skills*/}

      <section className="CardBg h-[75%] w-[90%] max-sm:w-[80%] max-sm:h-[65%] lg:h-[44%] relative flex flex-col col-start-1 col-end-3  text-start pl-2 justify-center text-white  rounded-lg ">
        <h2 className="text-[1.35vmax] max-sm:text-[1.4vmax] text-[#e4e3e3] absolute top-2 left-2 underline underline-offset-2 ">
          Skills
        </h2>
        <ul className="grid grid-cols-7 max-sm:grid-cols-5 place-content-center place-items-center text-center gap-x-4 gap-y-4 mt-5">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="w-[50%] h-full max-sm:w-[40%] max-sm:text-[0.9vmax] flex flex-col items-center group text-center justify-center text-[1.05vmax] duration-100 ease-out rounded-lg  "
            >
              <Image
                src={skill.icon}
                height={40}
                width={40}
                alt={`${skill.name} Logo`}
              ></Image>
              <p className="text-white">{skill.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
