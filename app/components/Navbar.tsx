export default function Navbar() {
  const navItems = ["Home", "Projects", "About", "Contact"];
  return (
    <nav className="h-[95vh] w-[25vw] bg-[#dddddd] rounded-2xl">
      <ul className="h-full w-full flex flex-col items-center justify-center gap-8 pt-5">
        {navItems.map((item,idx) => (
          <li key={Math.floor(Math.random())+idx} className="font-[550] text-black  ">{item}</li>
        ))}
      </ul>
    </nav>
  );
}
