import React from 'react'
import './Hero.css'
import heroimg from '../../assets/hero-img.png'
import inpbtn from '../../assets/yello-btn.png'
import card from '../../assets/CREDICT-CARD.png'
import ccard from '../../assets/hero-img2.png'
import bgimg from '../../assets/bg-img.png'
function Hero() {
  return (
    <>
    <section className="hero-section" id='home'>
      <img src={bgimg} className='bgimg'/>
        <div className="left-hero">
            <img src={heroimg} className='heroimg' />
        </div>
        <div className="mid-hero">
        <h1 className='poppins'>Elevate your financial journey</h1>
        <p className='lora'>Experience the future of credit with ElevateCard, where advanced technology meets unparalleled benefits. Say goodbye to outdated banking and hello to seamless, smart financial management.</p>
        <div className="input">
          <input type="email"  className='poppins' placeholder='Enter email'/>
          <img src={inpbtn}className='input-btn'/>
        </div>
        </div>
        <div className="right-hero">
            <img src={card} className='card'/>
            <div className="client-card">
            <img src={ccard} className='clientcard'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero