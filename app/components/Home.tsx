import Image from "next/image"

export default function Home() {
  const skills = [
    {name:"Javascript", icon:"/Icons/javascript.svg", id:96},
    {name:"Typescript", icon:"/Icons/typescript.svg", id:54},
    {name:"Nextjs", icon:"/Icons/nextjs.svg", id:11},
    {name:"React", icon:"/Icons/react.png", id:21},
    {name:"Tailwind", icon:"/Icons/tailwindcss.svg", id:27},
    {name:"Redux", icon:"/Icons/redux.svg", id:12},
    {name:"Firebase", icon:"/Icons/firebase.svg", id:45},
  ]
  return (
    <div className="h-screen w-full items-center z-1 justify-center text-white grid grid-cols-2 grid-rows-2">
      <section className="h-[75%] w-[90%] font-semibold bg-[#ededed] flex flex-col  text-start pl-2 justify-center text-black col-start-1 row-start-1 rounded-lg shadow-lg shadow-black">
        <h1 className="text-3xl">Hi, I am Rishikesh</h1>
        <p>
          <span className="text-2xl text-sky-400">Frontend Developer</span> specializing in React and Next.js, with hands-on
          experience building performant, accessible, and scalable web
          applications. Strong in TypeScript, state management (Redux Toolkit),
          and modern UI development with Tailwind CSS. Passionate about
          performance optimization and clean user experiences.
        </p>
      </section>
      <section className="h-[65%] w-[70%] font-semibold  bg-[#ededed] relative flex flex-col gap-4 text-start pl-2 justify-center text-black  rounded-lg shadow-lg shadow-black">
        <h2 className="text-[1.25rem] underline underline-offset-2 absolute top-2 left-2">Education</h2>
        <span className="text-sky-500 text-[2.7vmin] [word-spacing:-0.2rem]">Bacherlor of Science (B.sc) - Computer Science </span>
        <span>Pragati Mahavidyalay Degree College</span>
        <span>2023 - 2026</span>
      </section>
      <section className='h-[75%] w-[90%] bg-[#2c2a2a] flex flex-col col-start-1 col-end-3  text-start pl-2 justify-center text-black  rounded-lg shadow-lg shadow-black'>
        <h2 className="text-xl text-white underline underline-offset-2">Skills</h2>
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

