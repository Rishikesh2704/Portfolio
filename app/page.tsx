import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main className="h-screen w-screen flex justify-around items-center bg-[#171616] gap-8 ">
      
        <Navbar/>
        <Home/>
    </main>
  );
}
