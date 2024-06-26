import rarrow from '../../assets/rarrow.svg'
import darrow from '../../assets/darrow.svg'
import React, { useState } from 'react'

function Singlefaq({question,answer}) {
    const[showAnswer,setShowAnswer]=useState(false)
  return (
    <>
      <div className="faq-item">
        <article className={`question ${showAnswer && 'remove'}`} onClick={() => setShowAnswer(!showAnswer)}>
          <h2
            className="poppins">
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                 <img src={rarrow}/>
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                <img src={darrow}/>
                </button>
              </li>
            )}
          </ul>
        </article>

        <article className={`answer ${showAnswer && 'activefaq'}`} >
          {showAnswer && <p className='lora'>{answer}</p>}
        </article>
      </div>
    </>
  )
}

export default Singlefaq