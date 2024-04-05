import React from 'react'
import style from "./Page12Style.module.css"

const whoWeAreArr = [
    {
        head: "Befikra",
        text: "The Befikra Community brings together technology professionals, learners, mentors, and companies from around the world to build a supportive environment for learning, growing, enhancing skills, and building projects.",
        siteLink: "https://www.befikracommunity.in/",
        imgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbefikra.ce882a29.jpeg&w=64&q=75",
    },
    {
        head: "Code8",
        text: "Code8 is an experience-based learning platform driven by the energy of code and creativity to churn the wheels of innovation. We are cultivating a culture of project creation to solve real-world problems and an ethos for skill mastering.",
        siteLink: "https://www.codeate.in/",
        imgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode8.d3190025.png&w=64&q=75",
    },
    {
        head: "CodeEdu",
        text: "Codedu is an Open Source Community that helps tech enthusiasts to grow their self in tech. We are providing FREE Learning Content in the form of Video as well as Notes.",
        siteLink: "https://codedu.tech/",
        imgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodedu.f53329e7.png&w=64&q=75",
    },
    {
        head: "CoderWise",
        text: "CoderWise is built with mission to enable Active Learning in the technology space by providing mentorship, connections, networks, resources, guides, and fun! Their goal is to tackle obstacles and enable everyone to achieve their maximum potential.",
        siteLink: "https://linktr.ee/coderwise",
        imgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoderwise_logo.82549a6a.png&w=64&q=75",
    },

]

const Page12 = () => {
    return (
        <div className={`${style.page12Div}`}>
            <div className={`${style.page11NextDiv}`}>
                <div className={`${style.page11HDiv}`}><h1>Who are We?</h1></div>
                <div className={`${style.page11CardsDiv}`}>
                    {whoWeAreArr.map((i) => {
                        return <a href={i.siteLink} target='_blank'><div class="cardPg12">
                            <p class="time-textPg12"><span>{i.head}</span></p>
                            <p class="day-textPg12">{i.text}</p>
                            <div className='moonPg12'><img src={i.imgLink} alt="" /></div>
                        </div>
                        </a>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Page12