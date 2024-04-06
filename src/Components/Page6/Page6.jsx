'use client'
import React, { useState } from 'react'
import style from "./Page6.module.css"
import "./Page6.css"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"

const priceArr = [
    {
        priceHead: "Silver",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy2.6fb80587.png&w=256&q=75",
        price: "₹ 5,000",
        pDiagList: ["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "silverPricePg6"
    },
    {
        priceHead: "Gold",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy.1ae0614f.png&w=256&q=75",
        price: "₹ 10,000",
        pDiagList: ["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        pDiagList: ["Cash Prize: ₹10k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "goldPricePg6"

    },
    {
        priceHead: "Bronze",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy3.78b9282c.png&w=256&q=75",
        price: "₹ 2,000",
        pDiagList: ["Cash Prize: ₹2k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "bronzePricePg6"
    }
]

const Page6 = () => {
    const [dialogText, setDialogText] = useState([])
    const [myPriceHead, setMyPriceHead] = useState("")
    const [pImgLink, setPImgLink] = useState("")

    const handleOnShowPrices = (dialist, phead, pimlink)=>{
        setDialogText(dialist)
        setPImgLink(pimlink)
        setMyPriceHead(phead)
        document.getElementById('my_modal_5').showModal()
    }

    return (
        <div className={style.page6Height}>
            <dialog style={{color:"white"}}  id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div><img style={{width:"42%", padding:"4%"}} src={pImgLink} alt="" /></div>
                    <h3 className="font-bold text-lg">Prizes for {myPriceHead} Medallist</h3>
                    {dialogText.map((i) => {
                        return <p className="py-4">{i}</p>
                    })}

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className={style.page6HeightInsideDiv}>
                <div className={style.page6HDiv}><h1>Rewards</h1></div>
                <div className={style.page6BottomDiv}>
                    {priceArr.map((i) => {
                        return <div class={`cardPg6 ${i.cName}`}>
                            <div class="iconPg6">
                                <img src={i.pImgLink} alt="" />
                            </div>
                            <strong> {i.priceHead}
                            </strong>
                            <div class="card__bodyPg6">
                                {i.price}
                            </div>
                            <span onClick={()=>handleOnShowPrices(i.pDiagList, i.priceHead, i.pImgLink)} style={{ cursor: "pointer" }}>More Prices</span>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Page6