import React from 'react'
import './Footer.css'
import flogo from '../../assets/whitelogo.png'
import fbtn from '../../assets/black-btn.png'
import darrow from '../../assets/darrow.svg'

function Footer() {
  return (
   <>
   <footer>
   
        <div className="footer-section">
        <div className="left-footer">
                <img src={flogo} className='flogo' />
                <div className="newsletter">
                    <h3 className='poppins'>Subscribe to our newsletter</h3>
                    <div className="finput">
                    <input type="email" placeholder='example@gmail.com' />
                    <img src={fbtn} className='fbtn'/>
                    </div>
                </div>
            </div>
            <div className="mid-footer">
                  <div>
                    <h3 className='poppins'>Quick links</h3>
                    <ul>
                    <li className='lora'>Blog</li>
                    <li className='lora'>About us</li>
                    <li className='lora'>Contact us</li>
                  </ul>
                  </div>
                  <div>
                    <h3 className='poppins'>Resources</h3>
                    <ul>
                    <li className='lora'>Privacy Policy</li>
                    <li className='lora'>Terms and Condition</li>
                    <li className='lora'>resource</li>
                  </ul>
                  </div>
            </div>
            <div className="right-footer">
              <h1 className='poppins'>English</h1>
              <img src={darrow}/>
            </div>
        </div>
        <hr className='fline'/>
        <br />
        <span className='textf'>All rights reserved | made by brickwebdesign</span>
   </footer>
   </>
  )
}

export default Footer