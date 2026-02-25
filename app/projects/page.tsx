import Image from "next/image";

export default function page() {
  const Projects = [
    {
      id: 23,
      name: "Aurastream",
      img: "/project/Aurastream.png",
      desc: "An anime website",
      stack: ["/Icons/nextjs.svg", "/Icons/typescript.svg", "/Icons/redux.svg",  "/Icons/tailwindcss.svg"],
      demo: "https://aurastreams.vercel.app",
      github: "https://github.com/Rishikesh2704/AnimeApp",
    },
    {
      id: 61,
      name: "Recili",
      img: "/project/Recili.png",
      desc: "A recipe website",
      stack: ["/Icons/nextjs.svg", "/Icons/typescript.svg", "/Icons/tailwindcss.svg"],
      demo: "https://recili.vercel.app",
      github: "https://github.com/Rishikesh2704/Recipes-App",
    },
  ];
  return (
    <section className="h-screen w-screen grid grid-cols-3 place-content-center place-items-center">
      {Projects.map((project) => (
        <div
          key={project.id}
          className="ProjectCard h-[15rem] w-[25rem] relative bg-black rounded-lg flex items-center justify-center"
        >
          <figure className="text-center h-full rounded-lg">
            <Image
              src={project.img}
              height={450}
              width={450}
              alt={project.name + "website image"}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="h-[7.5rem] absolute bottom-0 w-full rounded-b-lg Decription flex flex-col justify-around items-center text-center text-white">
                <h1 className="absolute bottom-4 text-xl font-semibold  text-[#aa00ff]">{project.name}</h1>
            </figcaption>
          </figure>
          <div className="absolute top-0 right-0 flex gap-1 text-gray-300 w-[fit] h-[1.5rem] pl-2 pr-2 rounded-tr-lg bg-black rounded-l-lg">
            {project.stack.map((frame, idx) => (
                <Image key={idx + frame} src={frame} height={20} width={20} alt="framework"/>
            ))}
            </div>
        </div>
      ))}
    </section>
  );
}
