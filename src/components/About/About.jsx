import React from 'react';
import "./About.css";
import Image from "../..//assets/jo.png";
import AboutBox from "./AboutBox"



const About = () =>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src ={Image} alt="" className="about__img"/>
          

                <div className="about__data grid">
                  <div className="about__info">
                    <p className="about__description"> I am Joanne J. Juanane, an inspiring 
                     web developer, a second year IT student of Dalubahasaan ng Lungsod ng Lucena.
                     I have an experience in website designing and building. I am also good at Sleeping jk.</p>
                     <a href="" className="btn">Download CV </a>
                </div>
           

                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name"> Development </h3>
                            <span className="skills__number ">50%</span>
                         </div>

                        <div className="skills__bar">
                             <span className="skills__percentage development"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                         <div className="skills__titles">
                             <h3 className="skills__name"> UI/UX Design </h3>
                             <span className="skills__number ">70%</span>
                         </div>

                         <div className="skills__bar">
                            <span className="skills__percentage ui__design"></span>
                         </div>
                    </div>

                    <div className="skills__data">
                         <div className="skills__titles">
                             <h3 className="skills__name"> Photography </h3>
                             <span className="skills__number ">90%</span>
                         </div>

                            <div className="skills__bar">
                              <span className="skills__percentage photography"></span>
                          </div>
                    </div>
                           
                    </div>
                </div>
            </div>

            <AboutBox/>


        </section>
    )
}

export default About