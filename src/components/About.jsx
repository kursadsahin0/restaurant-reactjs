import React from 'react'

function About() {
  return (
    <div className='aboutContainer'>
    <h1>ABOUT <span>US</span></h1>
    <div className='about'>
      <img src='/pizza.jpeg' width="50%" height="400px" alt='pizza'/>
       <div>
        <h2>What Makes Our Food Special?</h2> 
        <p className='learnAbout'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reiciendis eos, sequi excepturi quaerat repudiandae consectetur illum suscipit exercitationem eius odit mollitia minus! Similique cumque quibusdam labore error, eveniet enim.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reiciendis eos, sequi excepturi quaerat repudiandae consectetur illum suscipit exercitationem eius odit mollitia minus! </p>
       
       <button className='learnBtn'>Learn More</button>
        </div>
    </div>
   
    </div>
  )
}

export default About
