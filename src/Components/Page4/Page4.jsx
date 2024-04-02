import React from 'react'
import style from "./Page4style.module.css"

const whyChooseUsArr = [
    {
        h:"Informative & Interactive Session",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsessions.6378f2e8.png&w=64&q=75'
    },
    {
        h:"Mentorship Support",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupport.b1c3fed4.png&w=64&q=75'
    },
    {
        h:"NFT's, Certificates & Swags",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.0615755f.png&w=64&q=75'
    },
    {
        h:"Project Building Experience",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject.e833dd3a.png&w=64&q=75'
    },
    {
        h:"Learn, Build & Participate",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn.4fc99438.png&w=64&q=75'
    },
    {
        h:"Internship & PPO Opportunities",
        link:'https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintern.2b76d810.png&w=64&q=75'
    }
]

const Page4 = () => {
    return (
        <div className={`${style.page4Home}`}>
            <div className={`${style.page4HomeDiv}`} >
                <div className={`${style.page4HomeHDiv}`}>
                    <div class="bg-white py-24 sm:py-32">
                        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                            <div class="max-w-2xl">
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us?</h2>
                                {/* <p class="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p> */}
                            </div>
                            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {whyChooseUsArr.map((i)=>{
                                    return <li>
                                    <div class="flex items-center gap-x-6">
                                        <img class="h-16 w-16 rounded-full" src={i.link} alt=""/>
                                            <div>
                                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{i.h}</h3>
                                                {/* <p class="text-sm font-semibold leading-6 text-indigo-600">Informative & Interactive Session</p> */}
                                            </div>
                                    </div>
                                </li>
                                })}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4