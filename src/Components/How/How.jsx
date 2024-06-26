import React from 'react'
import './How.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'

function How() {
  return (
    <>
    <section className="how-section" id='hiw'>
      <h1 className="poppins">How it works</h1>
      
        <div className="how-container">
          
        <div>
            <img src={img1} />
            <h5 className="poppins">Apply Online</h5>
            <p className='lora'>Complete our quick and easy application process in just minutes.</p>
        </div>
        <hr />
        <div>
            <img src={img2} />
            <h5 className="poppins">Get Approved Instantly</h5>
            <p className='lora'>Receive instant approval with our advanced verification system.</p>
        </div>
        <div>
            <img src={img3} />
            <h5 className="poppins">Start Spending Smartly</h5>
            <p className='lora'>Use your ElevateCard immediately for purchases online and in-store, and manage everything from our intuitive mobile app.</p>
        </div>
        </div>
    </section>
    </>
  )
}

export default How