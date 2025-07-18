import React from 'react'
import logo from '../assets/tagline.png'
import fb from '../assets/fb_icon.png'
import linkedin from '../assets/linkedin_icon.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      
        <div className='flex flex-wrap items-center justify-around bg-[#0c2b40] w-screen h-fit lg:pl-30 lg:pr-30'>
          <div className='grid gap-4 p-4 sm:p-0'>
            <h1 className='text-xl sm:text-7xl text-white'>
              <span className='italic font-sans font-bold text-shadow-lg/32'>YOU</span> envision it<br/>
              -I build it into <span className='italic font-sans font-extrabold text-shadow-lg/32'>REALITY.</span></h1>
            <NavLink to={'/contact'}>
            <button className='hover:bg-green-500 hover:text-white h-auto w-1/3 sm:w-auto p-2 bg-blue-200 font-bold text-green-500 rounded-full'>Let's work!</button>
            </NavLink>
          </div>

          <div className='flex overflow-auto z-5 gap-4 border-green-500 size-fit p-4'>
            <div>
              <img className='flex overflow-autodrop-shadow-md rounded-full h-auto lg:w-[25vw] md:w-1/2 object-fill' src={logo} alt="" />  
            </div>
          </div>
        </div>
      

        <div className='flex items-center justify-around bg-[#0c2b47] w-[100vw] p-4'>
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