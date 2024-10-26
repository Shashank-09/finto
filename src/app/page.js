import Image from "next/image";
import styles from "./page.module.css";
import Hreo from "@/components/Hero";
import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Revenue from "@/components/Revenue";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Financial from "@/components/Financial";
import StartWork from "@/components/StartWork";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
    <Hreo />
    <Revenue />
    {/* <Partner /> */}
    <About/>
    <AboutCard/>
    <Services />
    <Financial />
    <StartWork />
    <Pricing />
    <Blog />
    </>
  );
}
