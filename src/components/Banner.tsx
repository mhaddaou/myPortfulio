import React, {useEffect, useState} from "react";
import HeaderImg from '../assets/img/header-img.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import anim from '../assets/143602-pzs-logo.json'
export default function Banner (){
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: Infinity,
      });
    
    
    return (
       <div className=" w-full h-[30%]">
        {/* <Lottie animationData={anim} /> */}

       </div>
    );
}