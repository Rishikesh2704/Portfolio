import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-around items-center bg-[#171616] gap-8 ">
      <Navbar/>
      <Main/>
    </main>
  );
}
