import Image from "next/image"

export default function Home() {
  const skills = [
    { id:96, name:"Javascript", icon:"/Icons/javascript.svg" },
    { id:54, name:"Typescript", icon:"/Icons/typescript.svg" },
    { id:21, name:"React", icon:"/Icons/react.png" },
    { id:12, name:"Redux", icon:"/Icons/redux.svg" },
    { id:11, name:"Nextjs", icon:"/Icons/nextjs.svg" },
    { id:27, name:"Tailwind", icon:"/Icons/tailwindcss.svg" },
    { id:45, name:"Firebase", icon:"/Icons/firebase.svg" },
    { id:34, name:"GitHub", icon:"/Icons/github.svg" },
    { id:84, name:"Git", icon:"/Icons/git.svg" },
  ]
  return (
    <div className="h-screen w-full items-center z-1 justify-center text-white grid grid-cols-2 grid-rows-2">
      <section className="CardBg h-[75%] w-[90%] font-semibold pl-4 bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-3xl flex flex-col shadow-[0px_0px_1.5px_1.5px_#515050_inset] text-start pl-2 justify-center text-white col-start-1 row-start-1 rounded-lg   ">
        <h1 className="text-3xl">Hi, I am Rishikesh</h1>
        <p className="text-[#dad9d9] text-[0.95rem]">
          <span className="text-2xl TextBg">Frontend Developer</span> specializing in React and Next.js, with hands-on
          experience building performant, accessible, and scalable web
          applications. Strong in TypeScript, state management (Redux Toolkit),
          and modern UI development with Tailwind CSS. Passionate about
          performance optimization and clean user experiences.
        </p>
      </section>
      <section className="CardBg h-[65%] w-[70%] font-semibold pl-4  relative flex flex-col gap-4 text-start pl-2 justify-center text-[#e3e1e1] rounded-lg shadow-[0px_0px_1.5px_1.5px_#515050_inset]">
        <h2 className="text-[1.25rem] underline underline-offset-2 absolute top-2 left-2 text-[#dad9d9] ml-2">Education</h2>
        <span className="text-[2.7vmin] [word-spacing:-0.2rem] text-white">Bacherlor of Science (B.sc) - Computer Science </span>
        <span>Pragati Mahavidyalay Degree College</span>
        <span>2023 - 2026</span>
      </section>
      <section className='CardBg h-[75%] w-[90%] flex flex-col col-start-1 col-end-3  text-start pl-2 justify-center text-white  rounded-lg shadow-[0px_0px_1.5px_1.5px_#515050_inset]'>
        <h2 className="text-xl text-[#e4e3e3] underline underline-offset-2 ml-3">Skills</h2>
        <ul className="grid grid-cols-5 place-content-center place-items-center text-center gap-y-4" >
            {skills.map((skill) => (
                <li key={skill.id} className="w-[50%] h-full flex flex-col items-center group justify-center duration-100 ease-out rounded-lg  ">
                <Image src={skill.icon} height={70} width={70} alt= {`${skill.name} Logo`}></Image>
                <p className='text-white'>{skill.name}</p>
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

