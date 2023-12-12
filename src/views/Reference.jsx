import React from 'react'
import { referenceTitle, referenceSubtitle } from '../data'

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import imageThree from "../assets/image-three.svg";

import FadeIn from '../components/FadeIn';


const Reference = () => {
  return (
    <section 
      className='mb-[160px] px-10 max-w-[1490px] mx-auto'
      id="reference"
    >
      <FadeIn delay={0.2} direction="down">
        {/* TITLE consistent 5xl and on lg:[64px] */}
        <h1 className='text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center'>
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className='text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center'>
          {referenceSubtitle}
        </h5>
      </FadeIn>

      {/* on md:2 images on the left in a col and Image { 3 } in column taking full -h */}
      {/* otherwise on smaller screen flex-col */}
      <div className='flex flex-col md:flex-row md:justify-center gap-8'>
        <FadeIn delay={0.1} direction="right">
          <div className='flex flex-col gap-8'>
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} direction="left">
          <div>
            <img src={imageThree} alt=""/>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Reference