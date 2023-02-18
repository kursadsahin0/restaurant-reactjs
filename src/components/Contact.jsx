import React from 'react'

function Contact() {
  return (
    <>
    <h1 className='contact'>CONTACT <span>US</span></h1>
    <div className='form'>
    <div className='forms'>
      <input type="text" placeholder='Name' className='input'/>
      <input type="text" placeholder='Email' className='input'/>
      <input type="text" placeholder='Phone' className='input'/>
      <textarea rows="15" cols="50" placeholder='Message'/>
    </div>
    </div>
    </>
  )
}

export default Contact
