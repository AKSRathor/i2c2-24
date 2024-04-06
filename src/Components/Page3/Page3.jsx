'use client'
import React, { useEffect } from 'react'
import style from "./Page3.module.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'


const Page3 = () => {

  useEffect(() => {

    gsap.to(".page3Img1", {
      scale: 1.5,
      // duration:5,
      scrollTrigger: {
        trigger: ".page3Img1",
        // toggleActions: "restart reverse restart none",
        scrub: true,
        // pin:true
      },
    })

    gsap.to(".page3Img2", {
      scale: 1.5,
      // duration:5,
      scrollTrigger: {
        trigger: ".page3Img2",
        // toggleActions: "restart reverse restart none",
        scrub: true,
        // pin:true
      },
    })

    gsap.to(".page3Img3", {
      scale: 1.5,
      // duration:5,
      scrollTrigger: {
        trigger: ".page3Img3",
        // toggleActions: "restart reverse restart none",
        scrub: true,
        // pin:true
      },
    })
    return () => {

    }
  }, [])



  return (
    <div className={`${style.pg3Div}`}>
      <div className={`${style.pg3InnerDiv}`}>

        <div className={`w-full gap-2 ${style.pg3CardDiv}`}>
          <div id="item1Pg3" className={`${style.pg3DivCard}`}>
            <CardHeader className={`${style.pg3InnerCardHeader}`} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >About I2C2 Hackathon</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants.

              </CardDescription>
            </CardHeader>
            <div className={`${style.pg3CardSideImgDiv}`}>
              <img className='page3Img1' src="https://i2c2.vercel.app/_next/static/media/logo.75ba5341.jpg" alt="" />
            </div>
          </div>
          <div id="item2Pg3" className={`${style.pg3DivCard}`}>
            <div className={`${style.pg3CardSideImgDiv}`}>
              <img className='page3Img2' src="https://i2c2.vercel.app/_next/static/media/bird.214fc5dd.png" alt="" />
            </div>
            <CardHeader className={`${style.pg3InnerCardHeader}`} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >Why Participate?</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment.</CardDescription>
            </CardHeader>
          </div>
          <div id="item3Pg3" className={`${style.pg3DivCard}`}>
            <CardHeader className={`${style.pg3InnerCardHeader}`} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >Theme of Hackathon</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer).</CardDescription>
            </CardHeader>
            <div className={`${style.pg3CardSideImgDiv}`}>
              <img className='page3Img3' src="https://i2c2.vercel.app/_next/static/media/crystal.0c36e859.png" alt="" />
            </div>

          </div>
        </div>


        
      </div>
    </div >
  )
}

export default Page3