import React from 'react'
import style from "./Page9Style.module.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import "./Page9Style.css"

const Page9 = () => {
    return (
        <div className={style.div9Div}>

            <div className={style.div9DivNext}>
                <div className={style.div9HDiv}><h1>Join Us</h1></div>

                <div className={style.div9CardsDiv}>
                    <Tabs defaultValue="1" className={`w-[700px] ${style.tabPage9}`}>
                        <TabsList>
                            <TabsTrigger value="1">Speaker</TabsTrigger>
                            <TabsTrigger value="2">Mentor</TabsTrigger>
                            <TabsTrigger value="3">Campus Champs</TabsTrigger>
                        </TabsList>
                        <TabsContent value="1"><div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md page9Card">
                            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 speakerTabPg9">

                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Be an I2C2 Speaker
                                </h5>
                                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    Want to share your knowledge and expertise in technology? Join us as a speaker and impart your wisdom to the next generation of tech innovators.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Join Now
                                </button>
                            </div>
                        </div></TabsContent>
                        <TabsContent value="2">
                            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md page9Card">
                                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 speakerTabPg9_2">

                                </div>
                                <div class="p-6">
                                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Join I2C2 as a Mentor
                                    </h5>
                                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        Use your expertise to shape the future of technology by mentoring young coders at I2C2. Help guide and support the next generation of hackers to reach their full potential.
                                    </p>
                                </div>
                                <div class="p-6 pt-0">
                                    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="3">
                            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md page9Card">
                                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 speakerTabPg9_3">

                                </div>
                                <div class="p-6">
                                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Campus Champ
                                    </h5>
                                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        Represent I2C2 as a campus ambassador and become the face of the hackathon by promoting it in your campus and encouraging students to participate and win goodies.
                                    </p>
                                </div>
                                <div class="p-6 pt-0">
                                    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default Page9