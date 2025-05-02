import React from 'react';
import "./blog.css";
import Image1 from "../../assets/hml.jpg";
import Image2 from "../../assets/code1.jpg";
import Image3 from "../../assets/git.jpg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Post</h2>

      <div className="blog__container grid">

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Reviews</span></a>
            <a href="https://quiljo.github.io/juanane-website-portfolio/"><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">My First Portfolio</h3>
            <div className="blog__meta">
              <span>
                <span>01 January, 2025</span>
                <span className="blog__dot">.</span>
                <span>Joanne</span>
              </span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Tutorial</span></a>
            <a href="https://github.com/quiljo/juanane-website-portfolio.git"><img src={Image2} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">View Code</h3>
            <div className="blog__meta">
              <span>
                <span>01 January, 2025</span>
                <span className="blog__dot">.</span>
                <span>Joanne</span>
              </span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Github</span></a>
            <a href="https://github.com/quiljo"><img src={Image3} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Visit My Github for More</h3>
            <div className="blog__meta">
              <span>
                <span>01 January, 2025</span>
                <span className="blog__dot">.</span>
                <span>Joanne</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
