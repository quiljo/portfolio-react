import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/basic.jpg";
import Image2 from "../../assets/prem.jpg";
import Image3 from "../../assets/ult.jpg";

const Pricing = () =>{
    return(
        <section className="pricing__container section">
            <h2 className="section__title">Pricing Plans</h2>

            <div className="pricing__container grid">
                
                <div className="pricing__item">
                    <img src={Image1} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Basic</h3>
                    <p className="pricing__title">A simple chat buddy through
                        night and day 
            
                    </p>
                    <p className="pricing__support">Messenger Support</p>
                    <h3 className="price">
                        <em>₱</em> 1,000 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>

                </div>
                <div className="pricing__item best">
                    <span className="badge">Recommended</span>
                    <img src={Image2} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Premium</h3>
                    <p className="pricing__title">Unlimited Chat on every social media that you have. 
                        Can also be your personal human diary.
                    </p>
                    <p className="pricing__support">All Social support</p>
                    <h3 className="price">
                        <em>₱</em> 10,000 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>

                </div>
                <div className="pricing__item">
                    <img src={Image3} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Ultimate</h3>
                    <p className="pricing__title"> A wise option if you are on the verge
                        of your lowest point of your life. If you dont have anyone, you can
                        always have me, charot
                    </p>
                    <p className="pricing__support">24/7 support</p>
                    <h3 className="price">
                        <em>₱</em> 100,000 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>

                </div>



            </div>
        
        
        
        
        </section>

       
        


    )
}

export default Pricing