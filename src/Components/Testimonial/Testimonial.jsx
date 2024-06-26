import React, { useEffect, useRef } from 'react'
import testdats from './Testmonial.json'
import './Testimonial.css'
import lbtn from '../../assets/yellow-left.png'
import rbtn from '../../assets/black-right.png'

function Testimonial() {
    const cardRef = useRef()
    
    function handleright(event){
        event.preventDefault();
        cardRef.current.scrollRight += event.deltaX;
    }

    function handletest(event){
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY;
    }
    useEffect(()=>{
        cardRef.current.addEventListener('wheel',handletest);
        cardRef.current.addEventListener('onclick',handletest);
    },[])
  return (
    <>
    <section className="testimonials">
       <div className="heading-test">
       <h1 className='poppins'>Hear from Our Satisfied Customers</h1>
       <div className="test-navbtn">
       <button>
       <img src={lbtn} onClick={()=>{document.getElementById("container").scrollLeft -= 50}}/>
       </button>
        <button>
        <img src={rbtn} onClick={()=>{document.getElementById("container").scrollLeft += 100}}/>
        </button>
       </div>
       </div>
       <div className="test-container" id='container' ref={cardRef}>
         <div className="test-items">
         {
            testdats.test.map((data,index)=>{
                return(
                     <div className="testimonial-box"  key={index}>
                        <div className="top-test">
                            <img src={data.image} />
                            <div className="top-name">
                                <h3 className='poppins'>{data.name}</h3>
                                <p className="lora">{data['name-id']}</p>
                            </div>
                        </div>
                            <h1 className="poppins topic">{data.heading}</h1>
                            <p className="lora para">{data.para}</p>
                        
                    </div>
                )
            })
         }
         </div>
       </div>
    </section>
    </>
  )
}

export default Testimonial