import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';

const App =() =>{
  return(
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonial/>
        <Blog/>
        <Contact/>
       


      </main>
    </>
  )
}

export default App;
