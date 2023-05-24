import Image from "next/image";
import Navbar from "./components/Navbar";
import ImageBackground from "./components/ImageBackground";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageBackground />
      <AboutUs />
    </div>
  );
}
