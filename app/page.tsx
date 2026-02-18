import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main className="h-screen w-screen flex justify-around items-center  bg-[#171616] gap-8 ">
        <div className="h-70 w-70 bg-[#4d0786] absolute top-30 left-50 shadow-[0px_0px_55px_2px_#4d0786] rounded-[50%]"></div>
        <div className="h-70 w-70 bg-[#4d0786] absolute bottom-30 right-80 shadow-[0px_0px_35px_2px_#4d0786] rounded-[50%]"></div>
        <div className="heroBg h-screen w-screen absolute "></div>
        <Navbar/>
        <Home/>
    </main>
  );
}
