import React from 'react';
import "./Services.css";
import Image1 from "../../assets/ui.png";
import Image2 from "../../assets/develop.png";
import Image3 from "../../assets/photo.png";

const data =[
    {
        id:1,
        image: Image1,
        title:"UI/UX design",
        description:
        "I'm passionate about crafting clean, intuitive interfaces that not only look great but feel effortless to use. My focus in UI/UX design is to create experiences that are user-centered, visually engaging, and easy to navigate."
    },
    {
        id:2,
        image: Image2,
        title:"Development",
        description:
        "I enjoy turning ideas into reality through code. Whether it's building responsive websites or interactive features, I focus on writing clean, efficient code that delivers smooth, functional user experiences."
    },
    {
        id:3,
        image: Image3,
        title:"Photography",
        description:
      "Photography is my creative outlet — I love capturing moments, moods, and stories through the lens. Whether it's portraits, landscapes, or everyday details, I aim to bring emotion and perspective to every shot."
    },
]



const Services = () => {
    return (
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
  
        <div className="services__container">
          {data.map(({ id, image, title, description }) => {
            return (
              <div className="services__card" key={id}>
                <img src={image} alt="" className="services__img" />
                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Services;
  