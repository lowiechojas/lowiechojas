import React from 'react'
import logo from '../assets/tagline.png'
import fb from '../assets/fb_icon.png'
import linkedin from '../assets/linkedin_icon.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      
        <div className='flex flex-wrap sm:flex-nowrap items-center justify-around bg-[#0c2b40] w-screen h-[50vh] lg:pl-30 lg:pr-30'>
          <div className='grid gap-4 p-4 sm:p-0'>
            <h1 className='text-2xl sm:text-6xl text-white'>
              <span className='italic font-sans font-bold text-shadow-lg/32 text-green-500'>YOU</span> envision it<br/>
              -I build it into <span className='italic font-sans font-extrabold text-shadow-lg/32 text-green-500'>REALITY.</span></h1>
            <NavLink to={'/contact'}>
            <button className='hover:bg-green-500 hover:text-white h-auto w-auto sm:w-[25vw] sm:text-lg text-[10px] p-2 bg-blue-200 font-bold text-green-500 rounded-full'>Let's work!</button>
            </NavLink>
          </div>

          
            <div className='flex items-center justify-around p-4 sm:pr-8'>
              <img className='flex overflow-auto drop-shadow-md shadow-green-500 rounded-full h-auto w-auto sm:h-auto sm:w-[30vw] object-fill' src={logo} alt="" />  
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