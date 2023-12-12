import React from 'react'
import { Link } from 'react-scroll'

const NavLink = ({ children, to, offset = -50, mobileMenu = false }) => {
  const className = mobileMenu 
    ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
    // hover:bg-clip-text: creating a neat effect where the background appears to be "inside" the text.
    : "text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent" 
    return (
        <Link
            to={to}
            // If we are scrolling pass the link section it will show it as an  :active link by applying the css styles 
            spy={true}
            smooth={true}
            // It allows you to specify an offset value (in pixels) that adjusts the scroll position. For example, if you set offset to -50, the scroll position will be adjusted upward by 50 pixels of viewport
            // similar to scroll-mt-40 in tailwind css .
            offset={offset}
            // The 1000 stand for 1000 so it will take 1 second for the scroll to complete
            duration={1000}
            className={className}

        >
            {children}
        </Link>
  )
}

export default NavLink