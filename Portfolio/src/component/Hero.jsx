import React from 'react';
import { github, linkedin } from '../assets';

function Hero() {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-10 h-screen max-sm:flex-col">
      <div className="flex flex-col justify-center items-center gap-4 max-sm:w-full">
        <p className="text-emerald-300 text-xl max-sm:text-base">Hey, my name is</p>
        <h1 className="text-blue-300 max-sm:text-blue-200 text-center font-bold text-6xl textShadow max-sm:text-4xl">Omkar Ganesh Mahangare</h1>
        <p className="text-blue-300 text-center text-4xl max-sm:text-xl">Full-Stack Developer<br/>I build things for the web.</p>
        <p className="text-textprimary text-center  px-40 text-xl max-sm:text-base max-sm:px-4">I am pursuing B.E. in Computer Engineering from Savitribai Phule Pune University. Recognized as a practical and effective developer, good in working in team and handling time-pressured setting to complete projects on schedule. Currently, I'm focused on entering the world of WEB 3.0</p>
        <div className="flex flex-row justify-center items-center gap-2">
          <a href="https://github.com/mahangareomkar" className="text-white"><img src={github} className="w-8 h-8" /></a>
          <a href="https://www.linkedin.com/in/mahangareomkar" className="text-white"><img src={linkedin} className="w-8 h-8" /></a>
        </div>
        <div className="py-2">
          <a href="mailto: omkarmahangare.computertcoer@kjei.edu.in" className="relative z-[1] border-solid border-emerald-600 bg-none border-2 rounded-none text-white text-md p-1 px-2 my-2 mr-2 w-fit button-effect">Contact Me</a>
          <span className="border-solid border-emerald-600 bg-emerald-600 border-2 rounded-none text-white text-md p-1 px-2 my-2 mr-2 w-fit hover:bg-emerald-900 hover:cursor-pointer">Download CV</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;