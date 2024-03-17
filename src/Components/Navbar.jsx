import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../Assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {cart = []} =useSelector((state)=> state);
  return (
    <div className=' flex justify-between items-center h-20 max-w-5xl mx-auto  '>
      
        <NavLink to="/">
          <div>
            <img src={Logo} alt="Logo" width="120" />
            </div>
          </NavLink>
          <div  className='flex gap-4 text-lg font-semibold items-center'>
            <NavLink to="/">
          <p >Home</p>
        </NavLink>
        <NavLink to="/Cart">
          <div className='flex gap-1'>
          <FaShoppingCart  size={28}/>
            <p> ({cart.length})</p>
          </div>
        </NavLink>
          </div>
        
         
      
      

        </div>
    
  )
}

export default Navbar
