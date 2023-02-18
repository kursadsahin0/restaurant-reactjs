import React from 'react'
import { useState } from "react";
import { BsSearch, BsCartFill } from 'react-icons/bs';
function Navbar() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
  
    if (!isMenuClicked) {
       
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    
    }
    setIsMenuClicked(!isMenuClicked);
    
  };
  return (
    <div className='container'>
      <div >
        <img src="/logo.png" width="100%" height="100px" className='logo'/>
      </div>
      <div className='links'>
        <ul className='li'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Review</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Blogs</a></li>
        </ul>
      </div>
      <div className='btn'>
        <button className='searchBtn'><BsSearch /></button>
        <button className='cartBtn'><BsCartFill /></button>
      </div>
     
    </div>
  )
}

export default Navbar
