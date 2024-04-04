import React from 'react'
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
        pDiagList:["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."]
    },
    {
        priceHead: "Gold",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy.1ae0614f.png&w=256&q=75",
        price: "₹ 10,000",
        pDiagList:["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        pDiagList:["Cash Prize: ₹10k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."]

    },
    {
        priceHead: "Bronze",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy3.78b9282c.png&w=256&q=75",
        price: "₹ 2,000",
        pDiagList:["Cash Prize: ₹2k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."]
    }
]

const Page6 = () => {
    return (
        <div className={style.page6Height}>
            <div className={style.page6HeightInsideDiv}>
                <div className={style.page6HDiv}><h1>Rewards</h1></div>
                <div className={style.page6BottomDiv}>
                    {priceArr.map((i) => {
                        return <div class="cardPg6">
                            <div class="iconPg6">
                                {/* <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
                            </svg> */}
                                <img src={i.pImgLink} alt="" />
                            </div>
                            <strong> {i.priceHead}
                            </strong>
                            <div class="card__bodyPg6">
                                {i.price}
                            </div>
                            <Dialog>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Prizes for {i.priceHead} Medallist</DialogTitle>
                                        <DialogDescription>
                                            <table>
                                                {i.pDiagList.map((j)=>{
                                                    return <tr>{j}</tr>
                                                })}
                                            </table>
                                        </DialogDescription>
                                        {/* <DialogFooter>Challenged By <a href={i.challLink} target='_blank'>{i.challBy}</a></DialogFooter> */}
                                    </DialogHeader>
                                </DialogContent>
                                <DialogTrigger>
                                    <span style={{ cursor: "pointer" }}>More Prices</span>
                                </DialogTrigger>
                            </Dialog>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Page6