import Image from "next/image";
import styles from "./page.module.css";
import Hreo from "@/components/Hero";
import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Hreo />
    <About/>
    <ChooseUs/>
    <Testimonials/>
    </>
  );
}
