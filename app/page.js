import Image from "next/image";
import Intro from "./components/Navbar";
import TypedText from "./components/TypedText";
import Navbar from "./components/Navbar";
import Backgroud from "./components/backgroud";
import Line from "./components/Line";
import AboutMe from "./components/AboutMe";
export default function Home() {
  return (
   <>
   <main className="relative mx-auto">
      <Backgroud/>
      <Navbar/>
      <TypedText/>
      <Line/>
      <AboutMe/>
   </main>
   </>
  );
}
