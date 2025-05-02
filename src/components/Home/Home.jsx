import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Me from "../../assets/jo.png"

const Home = () =>{
    return(
       <selection className="home container" id="home">
        <div className='intro'>
            <img src={Me} alt ="" className="home__img"/>
            <h1 className="home__name">Joanne Juanane</h1>
            <span className="home__education">I'am an insipiring Front End Developer</span>

            <HeaderSocials/>

            <a href="#contact" className="btn">Hire Me</a>

            <ScrollDown/>
        </div>
       </selection>
    )
}

export default Home