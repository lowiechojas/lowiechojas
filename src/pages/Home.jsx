import React from 'react'
import logo from '../assets/tagline.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='grid'>
        <div className='flex items-center justify-around bg-[#0c2b40] w-screen h-fit pl-30 pr-30'>
          <div className='grid gap-4'>
            <h1 className='lg:text-7xl md:text-4xl sm:text-sm text-white'>
              <span className='italic font-sans font-bold text-shadow-lg/32'>YOU</span> envision it<br/>
              -I build it into <span className='italic font-sans font-extrabold text-shadow-lg/32'>REALITY.</span></h1>
            <NavLink to={'/contact'}>
            <button className='hover:bg-green-500 hover:text-white h-auto lg:w-1/3 md:1/6 sm: 1/12 p-2 bg-blue-200 font-bold text-green-500 rounded-full'>Let's work!</button>
            </NavLink>
          </div>

          <div className='z-5 border-green-500 size-fit p-4'>
            <img className='drop-shadow-md rounded-full h-auto lg:w-150 md:w-1/2 object-fill' src={logo} alt="" />  
          </div>
        </div>


        <div className='flex items-center justify-around bg-[#0c2b47] p-4'>
          <div>
            <h1>School Attended</h1>
          </div>

          <div>
            <h1>Experience</h1>
          </div>
        </div>

    </div>
  )
}

export default Home