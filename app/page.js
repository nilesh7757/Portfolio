import Image from "next/image";
import Intro from "./components/Navbar";
import TypedText from "./components/TypedText";
import Navbar from "./components/Navbar";
import Backgroud from "./components/backgroud";
export default function Home() {
  return (
   <>
   <main className="relative mx-auto">
      <Backgroud/>
      <Navbar/>
      <TypedText/>
   </main>
   </>
  );
}
