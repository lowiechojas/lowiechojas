import React from 'react'
import logo from '../assets/LH.png'

import { Outlet } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { NavLink, useNavigate }  from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div className='z-50 p-2 bg-[#0c2b40] flex flex-row justify-around items-center sticky top-0'>
     
        <NavLink to="/">
        <img className='h-1/2 w-1/3' src={logo} alt=""/>
        </NavLink>       
        
        <ul className='text-white flex gap-4 p-3 cursor-pointer'>
            <NavLink to='/'><li className='text-white active:text-red-500'>Home</li></NavLink>
            <NavLink to='/products'><li className='active:text-red-500'>Projects</li></NavLink>
            <NavLink to='/about'><li className='active:text-red-500'>About</li></NavLink>
            <NavLink to='/contact'><li className='active:text-red-500'>Contact</li></NavLink>
        </ul>

     <button className='hover:bg-green-500 hover:text-white
                        h-auto lg:w-1/6 md:1/12 sm: 1/18 p-2 cursor-pointer
                         bg-blue-200 font-bold text-green-500
                         lg:text-lg md:text-sm rounded-full' onClick={()=> navigate('/contact',{replace:true})}>Let's work!</button>

    </div>
  )
}

export default Navbar