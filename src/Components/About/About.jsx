import React from 'react'
import './About.css'
import aboutimg from '../../assets/about-img.png'
import abbtn from '../../assets/yello-btn.png'
function About() {
  return (
    <>
    <section className="about-section" id='about'>
        <div className="left-about">
            <img src={aboutimg} />
        </div>
        <div className="right-about">
            <h1 className="poppins">
            ElevateCard and Our Legacy
            </h1>
            <p className="lora">
            ElevateCard is a revolutionary product of Pinnacle Bank, a trusted financial institution with over 50 years of excellence. Founded in 1973, Pinnacle Bank has consistently been at the forefront of innovation, providing exceptional banking services to millions of customers worldwide. Our journey began with a simple mission: to offer reliable and accessible financial solutions to individuals and businesses alike.
            </p>
            <div className="about-btn">
                <button className='button'>
                    Get Started <img src={abbtn} />
                </button>
                <span className="poppins">About us</span>
            </div>
        </div>
    </section>
    </>
  )
}

export default About