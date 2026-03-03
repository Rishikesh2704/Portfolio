
export default function Footer() {
  const Icons = [
    { id: 12, name: "github" , link:"https://github.com/Rishikesh2704"},
    { id: 45, name: "linkedin-in", link:"https://www.linkedin.com/in/rishikesh-darnule-168a3537a/" },
    { id: 54, name: "instagram", link:"https://www.instagram.com/rishikeshdarnule/" },
  ];
  return (
    <footer className="absolute right-8 bottom-3 w-fit h-fit  flex gap-4">
      {Icons.map((icon) => (
        <a
          key={icon.id}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${icon.name} link`}
          className="Btns h-[2rem] w-[2rem] group flex items-center justify-center rounded-md text-gray-200 hover:scale-110 duration-200 ease-out hover:shadow-[0px_0px_10px_#c581e7] "
        >
            <i className={`fa-brands fa-${icon.name} text-xl pointer-events-none`}></i>
        </a>
      ))}
    </footer>
  );
}
