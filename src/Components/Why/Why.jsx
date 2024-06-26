import React from 'react'
import './Why.css'
import ybtn from '../../assets/black-btn.png'
import im1 from '../../assets/spend.png'
import im2 from '../../assets/security.png'
import im3 from '../../assets/reward.png'
import im4 from '../../assets/credit.png'

function Why() {
  return (
    <>
    <section className="why-section">
        <div className="left-why">
            <h1 className="poppins">
            Why Choose ElevateCard ?
            </h1>
            <h6 className='poppins'>The Future of Credit in Your Hands</h6>
            <p className="lora">
            ElevateCard isn't just a credit card; it's your passport to smarter financial management and unparalleled convenience. Designed for the modern consumer
            </p>
            <button className='button'>learn more <img src={ybtn} /></button>
        </div>
        <div className="right-why">
            <div>
                <img src={im1} />
                <h3 className='poppins'>Smart Spending Insights</h3>
            </div>
            <div>
                <img src={im2} />
                <h3 className='poppins'>Advanced Security</h3>
            </div>
            <div>
                <img src={im3} />
                <h3 className='poppins'>Tailored Rewards</h3>
            </div>
            <div>
                <img src={im4} />
                <h3 className='poppins'> Flexible Credit Limits</h3>
            </div>
        </div>
    </section>
    </>
  )
}

export default Why