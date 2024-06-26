import React from 'react'
import './Cta.css'
import credit from '../../assets/CREDICT-CARD.png'
import ybtn from '../../assets/yello-btn.png'
import call from '../../assets/call.png'

function cta() {
  return (
    <>
    <section className="cta-section">
        <div className="cta-container">
            <div className="left-cta">
                <h1 className='poppins'>
                Ready to Elevate Your Financial Future?
                </h1>
                <p className="lora">
                Don't wait – apply online in minutes and start enjoying the benefits of ElevateCard today!
                </p>
                <div className="cta-btn">
                    <button className='button'>
                        Get Started <img src={ybtn} />
                    </button>
                    <span className="poppins">
                        Call now <img src={call} />
                    </span>
                </div>
            </div>
            <div className="right-cta">
               <div className="image-cta">
               <img src={credit} />
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default cta