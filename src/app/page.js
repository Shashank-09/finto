import Image from "next/image";
import styles from "./page.module.css";
import Hreo from "@/components/Hero";
import About from "@/components/About";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <>
    <Hreo />
    <About/>
  <AboutCard/>
    </>
  );
}
