'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Lander from "@/Components/Page1/Lander";
import Page2 from "@/Components/Page2/Page2";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import { useEffect } from "react";
import Page3 from "@/Components/Page3/Page3";
// import Page4 from "@/Components/Page4/Page4";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {

    }
  }, [])

  return (
    <div>
      <Navbar />
      <Lander />
      <Page2 />
      <Page3/>
      {/* <Page4/> */}
    </div>
  );
}
