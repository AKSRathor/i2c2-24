// Import statements
import React, { useCallback, useEffect } from 'react';
import style from './Lander.module.css';
import { Parallax } from 'react-scroll-parallax';
// import ParticlesBg from 'particles-bg'
import Page2 from '../Page2/Page2';

const Lander = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  };


  return (
    <div className={`${style.heroPageLander}`}>
      {/* Render particles */}

      <div className={`${style.ic2cLander}`}>
            <div className={`${style.writtenTextPara}`}>
              <p className='homeIICCP'>Ideate Innovate Code Compete</p>
            </div>
        {/* Parallax effect */}
        <Parallax speed={-10}>
          <p className={`${style.ic2cPara}`}>I2C2</p>
          <div className={`${style.ic2cLanderBottomPara} writtenTextPage2`}>
            <p>Go from Idea to Prototype with I2C2 Hackathon!</p>
          </div>
        </Parallax>
      </div>
      <Page2 />

    </div>
  );
};

export default Lander;
