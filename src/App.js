import React from 'react';
import About from './Component/About';
import Developers from './Component/Developers';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Subscribe from './Component/Subscribe';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero></Hero>
      <About></About>
      <Developers></Developers>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default App;