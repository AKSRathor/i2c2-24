'use client'

import Navbar from "@/Components/Navbar/Navbar";
import Lander from "@/Components/Page1/Lander";
import Page2 from "@/Components/Page2/Page2";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import { useEffect } from "react";
import Page3 from "@/Components/Page3/Page3";
import Page4 from "@/Components/Page4/Page4";
import Page5 from "@/Components/Page5/Page5";
import Page6 from "@/Components/Page6/Page6";
import Page7 from "@/Components/Page7/Page7";
import Page8 from "@/Components/Page8/Page8";
import Page9 from "@/Components/Page9/Page9";
import Page10 from "@/Components/Page10/Page10";
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
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
    </div>
  );
}
