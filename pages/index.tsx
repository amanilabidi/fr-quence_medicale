//import Image from 'next/image'
import Section1 from '@/components/sections/Section1'
import Section2 from '@/components/sections/Section2'
import Section3 from '@/components/sections/Section3'
import { Inter } from 'next/font/google'
import React, { useState } from "react";


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [bgChanged, setBgChanged] = useState(false);

  const handleConnectClick = () => {
    setBgChanged(!bgChanged);
  };
  return (
    <>
    
    <div className="main">
      <Section1/>
      <Section2 /> 
      <Section3 />
    </div>
    
     
    </>
  )
}
