import React from 'react'
import style from "./Page10Style.module.css"

const speakerArr = [
    {
        name:"Pranav Malik",
        text:"Pranav Malik is an experienced software engineer with a passion for Fullstack and Big Data Distributed Systems. With over 3.7 years in the software industry, he has worked for various product-based companies.",
        lIn:"https://www.linkedin.com/in/candidatepstx-95adfsdk23/",
        imgLink:"https://i2c2.vercel.app/_next/static/media/pranav_malik.9aeada3b.jpeg"

    },
    {
        name:"Naveen Pal",
        text:"Naveen Pal is an experienced UX/UI designer with 3 years of experience in IT industry, specialized in creating intuitive and seamless technology experiences for diverse range of projects, passionate about innovation and user-friendly design.",
        lIn:"https://www.linkedin.com/in/naveen-pal-72435919a/",
        imgLink:"https://i2c2.vercel.app/_next/static/media/naveen_pal.516a5ae3.jpeg"

    },
    {
        name:"Prateek Narang",
        text:"Prateek Narang is a software engineer and professional coding instructor, ex-Google SDE and currently works at Scaler and founded, CodingMinutes.com. He mentored over 50,000 students in programming as a former co-founder at Coding Blocks.",
        lIn:"https://www.linkedin.com/in/prateeknarang27/",
        imgLink:"https://i2c2.vercel.app/_next/static/media/prateek_narang.6c4093b9.jpeg"

    }
]

const Page10 = () => {
    return (
        <div className={style.div10Div}>

            <div className={style.div10DivNext}>
                <div className={style.div10HDiv}><h1>Join Us</h1></div>
            </div>
            <div>
                <div className={style.div10SpeDiv}>
                    <div className={style.div10HSpeDiv}><h2>Speakers</h2></div>
                    <div className={style.div10PSpeDiv}><p>Get to know the speakers of this amazing Hackathon</p></div>
                    <div className={style.div10CardDiv}>
                        {speakerArr.map((i)=>{
                            return <div class="flip-cardPg10">
                            <div class="flip-card-innerPg10">
                                <div class="flip-card-frontPg10">
                                    <img src={i.imgLink} alt="" />
                                    <p className='frontNameFlipCard'>{i.name}</p>
                                    <div className='flipFrontDark'></div>
                                </div>
                                <div class="flip-card-backPg10">
                                    <p class="titlePg10">{i.text}</p>
                                    <p><a href={i.lIn}>Linkedin</a></p>
                                </div>
                            </div>
                        </div>
                        })}
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page10