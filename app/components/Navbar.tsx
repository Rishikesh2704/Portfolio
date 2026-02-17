export default function Navbar() {
  const navItems = ["Home", "Projects", "Contact"];
  return (
    <nav className="h-[95vh] w-[25vw] z-1 ml-5 bg-[#111010] rounded-2xl shadow-[0px_5px_14px_2px_black]">
      <ul className="h-full w-full flex flex-col items-center justify-center gap-8 pt-5">
        {navItems.map((item,idx) => (
          <li key={Math.floor(Math.random())+idx} className="font-[550] text-white  ">{item}</li>
        ))}
      </ul>
    </nav>
  );
}
