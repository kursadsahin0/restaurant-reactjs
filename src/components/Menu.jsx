import React from 'react'

function Menu() {
  return (
    <>
      <h1 className='menuTitle'>OUR <span>MENU</span></h1>

      <div className='menu-line'>
        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/hamburger.jpeg' alt='hamburger' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>

        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/chicken.jpg' alt='chicken' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>
        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/pastaMenu.jpg' alt='pasta' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>
        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/pizza.jpg' alt='pasta' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>
        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/hamburgerMenu.jpg' alt='pasta' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>
        <div className='menu-box'>
          <div className='menu-image'>
            <img src='/hotdog.jpg' alt='pasta' width="70%" height="250px" />
          </div>
          <div className='menu-content'>
            <h2>Tasty And Healty</h2>
            <h3>$15.99  <strike>20.99</strike></h3>
          </div>
          <div className='menuButton'>
            <button >Add To Cart</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Menu
