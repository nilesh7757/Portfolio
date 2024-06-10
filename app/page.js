import Image from "next/image";
import Intro from "./components/Navbar";
import TypedText from "./components/TypedText";
import Navbar from "./components/Navbar";
import Backgroud from "./components/backgroud";
import AboutMe from "./components/AboutMe";
export default function Home() {
  return (
   <>
   <main className=" mx-auto">
  <Backgroud />
  <Navbar />
  <div className="h-[100vh]">
    <TypedText />
    <div className='w-full h-1 bg-gray-400'></div>

  </div>
  <div className="h-fit">
    <AboutMe />
  </div>
</main>
   </>
  );
}
