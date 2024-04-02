import React from 'react'
import style from "./Lander.module.css"

const Lander = () => {
  return (
    <div className={`${style.heroPageLander}`}>
        <div className={`${style.ic2cLander}`}>
            <p className={`${style.ic2cPara}`}>IC2C</p>
            <div className={`${style.ic2cLanderBottomPara}`}>
                <p>Go from Idea to Prototype with I2C2 Hackathon!</p>
            </div>
        </div>
    </div>
  )
}

export default Lander