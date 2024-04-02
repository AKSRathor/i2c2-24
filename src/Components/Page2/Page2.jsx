'use client'
import React, { useEffect } from 'react'
import style from"./pg2style.module.css"
import { gsap } from 'gsap'
import "./page2style.css"
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'

const Page2 = () => {
    useEffect(() => {
      
        gsap.to(".homeIICCP",{
            opacity:1, 
            // duration:5,
            scrollTrigger: {
                trigger: ".page2Home",
                // toggleActions: "restart reverse restart none",
                scrub: true,
                // pin:true
            },
        })
      return () => {
        
      }
    }, [])
    
  return (
    <div className={`${style.pg2Home} page2Home`}>
        <div className={`${style.writtenTextPara}`}>
            <p className='homeIICCP'>Ideate Innovate Code Compete</p>
        </div>
    </div>
  )
}

export default Page2