import React from 'react'
import { BsCartFill,BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
function Products() {
    return (
        <div>
            <h1 className='productsTitle'>OUR <span>PRODUCTS</span></h1>
            <div className='menu-line'>
                <div className='menu-box'>
                    <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/cupcakes.jpg' alt='hamburger' width="70%" height="250px" />
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
                <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/cupcake.jpg' alt='chicken' width="70%" height="250px" />
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
                <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/cake.jpg' alt='pasta' width="70%" height="250px" />
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
                <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/waffle.jpg' alt='pasta' width="70%" height="250px" />
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
                <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/breakfast.jpg' alt='pasta' width="70%" height="250px" />
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
                <div className='btns'>
                        <button><BsCartFill /></button>
                        <button><BsFillHeartFill/></button>
                        <button><AiOutlineEye/></button>
                    </div>
                    <div className='menu-image'>
                        <img src='/sandwich.jpg' alt='pasta' width="70%" height="250px" />
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




        </div>
    )
}

export default Products
