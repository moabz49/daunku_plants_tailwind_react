import React from 'react'
import { services } from "../data";
import FadeIn from '../components/FadeIn';


const Services = () => {
  return (
    // w-full mx-auto max-w-[1490p] again 
    <section
      // This {id} passed to react-scroll again  
      id="services"
      className= 'mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full'
    >
      {services.map((services, i ) => (
        // Because we are.map over the indexes here the { delay } applies to each individual {i} 
        <FadeIn key={i} delay={0.2} direction="down">
          <div className='flex flex-col lg:flex-row gap-4 w-full items-center'>
            <img
              src={services.icon}
              // For icons max height so they stay one size.
              className='max-h-[84px] max-w-[84px]'
              alt=""
            />
            <div className='flex flex-col gap-1.5'>
              <h3 className='text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium'>
                {services.title}
              </h3>
              {/* less important text we use a gray or smaller text-size*/}
              <h6 className='text-center lg:text-start text-base lg:text-lg text-fontGray font-medium'>
                {services.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    
    </section>
  )
}

export default Services