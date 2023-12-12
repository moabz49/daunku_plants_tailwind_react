import React from 'react'
import { productsTitle, productsBtnText, products } from '../data'

import arrowIcon from "../assets/arrow-icon.svg"
import starsIcon from "../assets/stars-icon.svg"
import plusIcon from "../assets/plus-icon.svg"
import FadeIn from '../components/FadeIn'

// BTW so in xs it will flex-col the {upper <div>} and bottom <div> but also in :medium screen the {bottom <div>} products will be flex-row
//  and on xl:  screen the upper div and the bottom div will be flex -col 
 


const Products = () => {
  return (
    <section
      id="products"
      // 2xl: becomes flex-row so the {upper} <div> on the left whereas the {bottom} <div> on the right 
      // again flex-col mx-auto mx-w-[1480px]
      //When they are in 2xl: we change GAP, add JUSTIFY-BETWEEN, 
      className='flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px] mx-auto px-10 w-full '
    >
        {/* upper div */}
      <FadeIn delay={0.2} direction="right">  {/* from RIGHT Fade*/} 
        <div className='flex flex-col'>
          {/* TITLE primary header text-5xl and large text-6xl + */}
          <h1 className='text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6'>
            {productsTitle}
          </h1>
          <button
            className='group flex items-center gap-2 bg-transparent text-fontBlack border-transparent font-bold py-2 px-4 rounded-lg w-fit border hover:border-black
            outline-none focus-outline-none ease-linear transition-all duration-300 mx-auto 2xl:mx-0 mb-10 2xl:mb-0'
          >
            <h5 className='text-lg lg:text-xl text-[#4F4F4F] fot-medium '>
              {productsBtnText}
            </h5>
            <img src={arrowIcon} alt="" className='group-hover:translate-x-1 transition' />
            {/* icon translate-x-1 right affect. */}
          </button>
        </div>
      </FadeIn> 
      {/* bottom  div*/}
      <div className='w-full flex flex-col md:flex-row gap-[160px] md:gap-6'>
          {products.map((product, i) => (
            // Fade in one Product at a time from LEFT
            <FadeIn key={i} delay={(i + 1) * 0.2 } direction="left" fullWidth>
              <div className='h-[510px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]'>
                <img
                  src={product.img}
                  alt=""
                  // left-1/2 -translatex-1/2 to place image in center of <div>
                  // -top-[120px] to make the image go Cross the <div> margin.
                  className='absolute -top-[120px] left-1/2 -translate-x-1/2'
                />
                <div className='absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between'>
                  <div>
                    <h2 className='mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium'>
                        {product.title}
                    </h2>
                    <img src={starsIcon} alt="" />
                  </div>
                  <div className='flex justify-between items-center'>
                    {/* TEXT -3xl secondary header */}
                    <h3 className='text-fontBlack text-2xl lg:text-3xl font-medium'>
                      {product.price}
                    </h3>
                    <img 
                      src={plusIcon}
                      alt=""
                      className='cursor-pointer h-10 xs:h-12 w-10 xs:w-12'
                    />
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}

      </div>
    </section>
  )
}

export default Products