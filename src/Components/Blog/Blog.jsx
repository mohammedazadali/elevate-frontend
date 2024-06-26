import React from 'react'
import './Blog.css'
import databl from './Blog.json'
import blogim from '../../assets/blog-label.png'
import arrow from '../../assets/arrow.png'

function Blog() {
  return (
    <>
    <section className="blog-section" id='blog'>
        <h1 className="poppins blogsec-title">Blogs</h1>
        <div className="blog-container">
            {
                databl.blog.map((bldata,index)=>{
                  return(
                    <div className="blog-box">
                      <img src={bldata.image} className='mainimg'/>
                      <img src={blogim} className='label'/>
                      <h1 className="poppins">{bldata.head}</h1>
                      <p className="lora">{bldata.para}</p>
                      <button>Learn more <img src={arrow}/></button>
                    </div>
                  )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Blog