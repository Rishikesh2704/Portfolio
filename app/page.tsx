import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center  bg-[#171616] gap-1 ">
        <div className="Circle-1"></div>
        <div className="Circle-2"></div>
        <div className="heroBg h-screen w-screen absolute"></div>
        <Navbar/>
        <Home/>
    </main>
  );
}
