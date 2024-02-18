import React from 'react'
import { Link } from 'react-router-dom';



const EmptyCart = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="max-w-sm w-96 space-y-3 text-center ">
            { <img 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"} 
              
              alt="empty-cart" 
              className='mix-blend-multiply w-full h-full '/> }
            <h1 className='text-base text-slate-700 font-semibold'>Your cart is empty</h1>
            
            <p className='text-sm text-slate-400 font-bold'>You can go to homepage to view more restaurants</p>
            <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
            
        </div>
        

    </div>
  )
}

export default EmptyCart;