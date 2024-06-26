import React, { useState } from 'react'
import './Faq.css'
import data from './Faq.json'
import Singlefaq from './Singlefaq'

function faq() {
    const[cards]=useState(data)
  return (
    <>
      <section className="faq-section">
        <h1 className="poppins faq-title">
          Get Question ? <br />
          We have Answer
        </h1>

        <section className="faq-items">
          {cards['faq-data'].map((card, index) => (
            <Singlefaq {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  )
}

export default faq