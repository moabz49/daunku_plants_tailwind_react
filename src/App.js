import React from 'react'
import Hero from './views/Hero';
import Services from './views/Services';
import Products from './views/Products';
import Reference from './views/Reference';
import Care from './views/Care';
import Footer from './views/Footer';


const App = () => {
    return (
      <>
      {/* ON the App() page we dont specify the height of the page we specify the height and width etc on all 
      the pages individually to prevent confusion. */}
      <Hero />
      <Services />
      <Products /> 
      <Reference /> 
      <Care/>
      <Footer />
      </>
    )
}

export default App;