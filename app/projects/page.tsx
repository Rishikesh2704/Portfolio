import Image from "next/image"

export default function page(){
    const Projects = [
        {id:23, name:"Aurastream", img:"/project/Aurastream.png", desc:"An anime website", demo:"https://aurastreams.vercel.app", github:"https://github.com/Rishikesh2704/AnimeApp"},
        {id:61, name:"Recili", img:"/project/Recili.png", desc:"A recipe website", demo:"https://recili.vercel.app", github:"https://github.com/Rishikesh2704/Recipes-App"}
    ]
    return(
        <section className="h-screen w-screen">
           {Projects.map( (project) => (
            <div key={project.id}>
                <Image src={project.img} height={150} width={150} alt={project.name + 'website image'}/>
                <h1>{project.name}</h1>
            </div>
           ))}
        </section>
    )
}