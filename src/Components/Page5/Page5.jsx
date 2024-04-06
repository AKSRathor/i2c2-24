'use client'
import React, { useState } from 'react'
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
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'



const myChallengeArr = [
  {
    head: "Gaming",
    prbHead: "Problem Statement for Gaming category",
    prbDesc: "Welcome to the world of Web3 gaming! Your mission, should you choose to accept it, is to create a user-friendly game distribution platform for blockchain-based games. Envision a user-friendly, entry-level gaming distribution platform based on Web3 technology, specifically tailored for new players in the blockchain gaming space. Your challenge is to create a solution that facilitates seamless game discovery, purchasing, and management using cryptocurrencies while fostering a supportive community for gamers to grow and thrive in the world of decentralized gaming Design a simple working/non working website for this problem statement.",
    prbState: "Design a simple working/non working website for this problem statement",
    challBy: "Trikon",
    challLink: 'https://trikon.io/',
    imgLink: "https://media.wired.com/photos/61f48f02d0e55ccbebd52d15/3:2/w_2400,h_1600,c_limit/Gear-Rant-Game-Family-Plans-1334436001.jpg"
  },
  {
    head: "Education",
    prbHead: "Problem Statement for Education category",
    prbDesc: "The problem in EdTech is the lack of effective and personalized learning experiences, as well as the limited accessibility to technology, particularly in low-income areas. The challenge is to develop innovative solutions that provide high-quality, affordable, and accessible education to all learners, regardless of their background or location.",
    prbState: "",
    challBy: "I2C2 Team",
    challLink: 'https://i2c2.tech/',
    imgLink: "https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg"
  },
  {
    head: "Blockchain",
    prbHead: "Problem Statement for Blockchain category",
    prbDesc: "Build a platform for the users to design their own avatar (e.g. https://avatarmaker.com) and mint them as an NFT on Tezos for a price based on the amount of personalization they’ve added to their avatar such as makeup, hair, facial hair, and accessories, etc. A generative NFT collection in short.",
    prbState: "",
    challBy: "Tezos",
    challLink: 'https://tezos.com/',
    imgLink: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Blockchain%20Technology.jpg",
  },
  {
    head: "Frontend Dev",
    prbHead: "Problem Statement for Frontend Dev category",
    prbDesc: "Redesign 5irechain's website with theme inspired from NFT, Dexas and all. You have to submit complete code for the website and not just figma Wireframing.",
    prbState: "Special Prize: 5ireChain will provide extra $1000 (If the project is selected by 5ireChain Judges).",
    challBy: "5ire",
    challLink: 'https://www.5ire.org/',
    imgLink: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png",
  },
  {
    head: "Entrepreneurship",
    prbHead: "Problem Statement for Entrepreneurships category",
    prbDesc: "Develop an MVP for a peer-to-peer platform that connects Indian college students with mentors, industry experts, and potential employers. It should include tools for students to showcase their skills and connect with potential employers. The platform should be user-friendly, accessible on web and mobile, scalable, and prioritise creative ideas to improve students education and career prospects.",
    prbState: "",
    challBy: " I2C2 Team",
    challLink: 'https://i2c2.tech/',
    imgLink: "https://www.fsm.ac.in/pdf/fdp22/img/entrepreneurship-development.png",
  },
  {
    head: "Miscellaneous",
    prbHead: "Bring your own awesome project",
    prbState: "",
    challBy: "",
    challLink: '',
    imgLink: "https://c4.wallpaperflare.com/wallpaper/383/217/191/abstract-pattern-mosaic-design-wallpaper-preview.jpg",
  },

]

const Page5 = () => {

  const [windowObj, setWindowObj] = useState({ imgLink: '', prbHead: "", prbState: "", prbDesc: "", challLink: "", challBy: "", head: "" })
  const handleOnShowWindow = (myObj) => {
    setWindowObj(
      {
        imgLink: myObj.imgLink,
        prbHead: myObj.prbHead,
        prbState: myObj.prbState,
        prbDesc: myObj.prbDesc,
        challLink: myObj.challLink,
        head: myObj.head,
        challBy: myObj.challBy
      }
    )
    console.log("my object is ", myObj)

    gsap.to(".clickWindowPg5", {
      y: 0,
      duration: 0.5
    })
  }
  const handleOnCloseWindow = ()=>{
    gsap.to(".clickWindowPg5", {
      y: "100vh",
      duration: 0.5
    })
  }
  return (
    <>
      <div className="clickWindowPg5">
        <div onClick={handleOnCloseWindow} className={`${style.closeBtnWindow}`}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div style={{ backgroundImage: `url(${windowObj.imgLink})` }} className="windowUpperDiv">
        </div>
        <div className={`${style.windowHeadDiv}`}>
          <h1 className={`${style.windowHead}`}>{windowObj.head}</h1>
        </div>

        <div className={`${style.windowPDiv1}`}>
          <h1 className={`${style.windowP1}`}>{windowObj.prbHead}</h1>
        </div>

        <div className={`${style.windowPDiv2}`}>
          <h1 className={`${style.windowP2}`}>{windowObj.prbState}</h1>
        </div>
        {windowObj.challBy.length > 0 && <div className={`${style.windowPDiv2}`}>
          <h1 className={`${style.windowP2}`}> Challenged by <a href={windowObj.challLink}>{windowObj.challBy}</a></h1>
        </div>}
      </div>
      <div className={`${style.insideDivContainedPg5Outer}`} style={{ backgroundColor: "#222B48" }}>

        <div className={`${style.insideDivContainedPg5}`} >

          <div className={`${style.hDivPg5}`}><div> <h1>Challenges</h1></div></div>



          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className={`mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-5 ${style.allChallCard}`}>
                {myChallengeArr.map((i, index) => {
                  return <div class="card w-96 bg-base-100 shadow-xl image-full imgCardChallPg5">
                    <figure><img src={i.imgLink} alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title cardTitlePg5">{i.head}</h2>
                      <p className='cardPrbHeadPg5'>{i.prbHead}</p>
                      <div class="card-actions justify-end">
                        <button onClick={() => handleOnShowWindow(i)} class="btn btn-primary">Show Problem Statement</button>
                      </div>
                    </div>
                  </div>
                })}


              </div>
            </div>
          </div>
        </div>


      </div >
    </>
  )
}

export default Page5