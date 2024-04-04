import React from 'react'
import style from "./Page5style.module.css"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"



const myChallengeArr = [
  {
    head: "Gaming",
    prbHead: "Problem Statement for Gaming category",
    prbDesc: "Welcome to the world of Web3 gaming! Your mission, should you choose to accept it, is to create a user-friendly game distribution platform for blockchain-based games. Envision a user-friendly, entry-level gaming distribution platform based on Web3 technology, specifically tailored for new players in the blockchain gaming space. Your challenge is to create a solution that facilitates seamless game discovery, purchasing, and management using cryptocurrencies while fostering a supportive community for gamers to grow and thrive in the world of decentralized gaming Design a simple working/non working website for this problem statement.",
    prbState: "Design a simple working/non working website for this problem statement",
    challBy: "Trikon",
    challLink: 'https://trikon.io/'
  },
  {
    head: "Education",
    prbHead: "Problem Statement for Education category",
    prbDesc: "The problem in EdTech is the lack of effective and personalized learning experiences, as well as the limited accessibility to technology, particularly in low-income areas. The challenge is to develop innovative solutions that provide high-quality, affordable, and accessible education to all learners, regardless of their background or location.",
    prbState: "",
    challBy: "I2C2 Team",
    challLink: 'https://i2c2.tech/'
  },
  {
    head: "Blockchain",
    prbHead: "Problem Statement for Blockchain category",
    prbDesc: "Build a platform for the users to design their own avatar (e.g. https://avatarmaker.com) and mint them as an NFT on Tezos for a price based on the amount of personalization they’ve added to their avatar such as makeup, hair, facial hair, and accessories, etc. A generative NFT collection in short.",
    prbState: "",
    challBy: "Tezos",
    challLink: 'https://tezos.com/'
  },
  {
    head: "Frontend Dev",
    prbHead: "Problem Statement for Frontend Dev category",
    prbDesc: "Redesign 5irechain's website with theme inspired from NFT, Dexas and all. You have to submit complete code for the website and not just figma Wireframing.",
    prbState: "Special Prize: 5ireChain will provide extra $1000 (If the project is selected by 5ireChain Judges).",
    challBy: "5ire",
    challLink: 'https://www.5ire.org/'
  },
  {
    head: "Entrepreneurship",
    prbHead: "Problem Statement for Entrepreneurships category",
    prbDesc: "Develop an MVP for a peer-to-peer platform that connects Indian college students with mentors, industry experts, and potential employers. It should include tools for students to showcase their skills and connect with potential employers. The platform should be user-friendly, accessible on web and mobile, scalable, and prioritise creative ideas to improve students education and career prospects.",
    prbState: "",
    challBy: " I2C2 Team",
    challLink: 'https://i2c2.tech/'
  },
  {
    head: "Miscellaneous",
    prbHead: "Bring your own awesome project",
    prbState: "",
    challBy: "",
    challLink: ''
  },

]

const Page5 = () => {
  return (
    <div className={`${style.insideDivContainedPg5Outer}`} style={{ backgroundColor: "#222B48" }}>

      <div className={`${style.insideDivContainedPg5}`} >

        <div className={`${style.hDivPg5}`}><div> <h1>Challenges</h1></div></div>

        <div class=" py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class={`mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ${style.allChallCard}`}>
              {myChallengeArr.map((i, index) => {
                return <div key={index} class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {i.head}
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {i.prbState}
                    </p>
                  </div>
                  <div class="p-6 pt-0">
                    <Dialog>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{i.prbHead}</DialogTitle>
                          <DialogDescription>
                            {i.prbDesc}
                          </DialogDescription>
                          <DialogFooter>Challenged By <a href={i.challLink} target='_blank'>{i.challBy}</a></DialogFooter>
                        </DialogHeader>
                      </DialogContent>
                        <DialogTrigger><button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                          View Problem Statement
                        </button></DialogTrigger>
                    </Dialog>
                  </div>
                </div>
              })}


            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Page5