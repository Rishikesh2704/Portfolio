import Link from "next/link";

export default function Footer() {
  const Icons = [
    { id: 12, name: "github" , link:"https://github.com/Rishikesh2704"},
    { id: 45, name: "linkedin-in", link:"https://www.linkedin.com/in/rishikesh-darnule-168a3537a/" },
    { id: 54, name: "instagram", link:"https://www.instagram.com/rishikeshdarnule/" },
  ];
  return (
    <footer className="absolute right-8 top-3 w-fit h-fit  flex gap-4">
      {Icons.map((icon) => (
        <Link
          key={icon.id}
          href={icon.link}
          target="/"
          aria-label={`${icon.name} link`}
          className="Btns h-[2rem] w-[2rem] flex items-center justify-center rounded-md text-gray-200 "
        >
            <i className={`fa-brands fa-${icon.name} text-xl`}></i>
        </Link>
      ))}
    </footer>
  );
}
