import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView}  from 'framer-motion';


const FadeIn = ({ children, delay, direction, fullWidth, padding  }) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, {once: true});
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls]);

  return (
    <div 
      ref={ref}
      // fullWidth is used to ensure the styles are displaying appropriately on different screen sizes same for padding
      className={`${fullWidth ? 'w-full' : 'w-auto'} ${ padding ? "px-10" : "px-0"} flex items-center justify-center`}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          },
          visible: {
            opacity: 1, 
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1.25,
          // no spring
          type: "tween",
          delay,
          ease: [0.25, 0.25, 0.25, 0.25],
        }}
        className='w-full flex items-center justify-center'
      >
        {children}
      </motion.div>

    </div>
  )
}
 
export default FadeIn