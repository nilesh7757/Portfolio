// import Image from "next/image";
// import Niles from "./components/Home";
import Nilesh from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Backgroud from "./components/backgroud";
import Skills from "./components/Skills";
import Form from "./components/Form";
export default function Home() {
  return (
   <>
   <main className=" mx-auto relative top-0">
    <div className=""><Backgroud/></div>
    <div className="nav sticky z-10 top-0"><Navbar/></div>
    <div className="home bg-blue-50 h-[130vh] lg:h-[100vh]"><Nilesh /></div>
    <div className="bg-gray-500 h-1 w-full"></div>
    <div className="home bg-purple-150 w-full h-[130vh] lg:h-[100vh]"><AboutMe /></div>
    <div className="bg-gray-500 h-1 w-full"></div>
    <div className="home bg-green-50"><Skills /></div>
    <div className="bg-gray-500 h-1 w-full"></div>
    <div className=""><Form/></div>
    <div className="bg-gray-500 h-1 w-full"></div>





</main>
   </>
  );
}
