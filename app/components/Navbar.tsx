export default function Navbar() {
  return (
    <nav className="CardBg h-[95vh] w-[25vw] z-1 ml-5  rounded-2xl shadow-[0px_0px_1.5px_1.5px_#515050_inset]">
      <ul className="h-full w-full flex flex-col items-center justify-center gap-8 pt-5">
        {/* <div className="Highlighter"></div> */}
          <li className="Item1 z-1 font-[550] text-white cursor-pointer">Home</li>
          <li className="Item2 z-1 font-[550] text-white cursor-pointer">Projects</li>
          <li className="Item3 z-1 font-[550] text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}
