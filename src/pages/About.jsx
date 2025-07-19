import React from 'react'
import prof from '../assets/lowieguitar.JPG';

const About = () => {
  return (
    <div className='main-div grid gap-4 w-[100vw] bg-[#0c2b45] text-white p-2'>
       <div className='flex flex-col sm:flex-row gap-4 items-center justify-evenly w-[100vw] text-lg'>
          <div className='p-2'>
            <img className='h-[30vh] w-auto rounded-full' src={prof} alt="" />
          </div>
          <div className='p-2'>
            <p>
              Hey there! I'm Lowie.
              I bike, hike, run, and play guitar in our church.
            </p>
          </div>
        </div>


        <div className='flex flex-row flex-wrap gap-4 w-[100vw] h-auto items-top justify-evenly '>
          <div className='flex flex-col gap-4 shadow-md rounded-md w-full sm:w-auto bg-white text-black'>
            <div className='flex justify-center'>
              <h1 className=''>Academic</h1>
            </div>
            <ul className='text-[10px] sm:text-xl p-2'>
              <li>
                <h1 className='head bold text-[10px] sm:text-lg'>BS Computer Engineering</h1>
                <h2 className='subhead italic text-[8px] sm:text-sm'>University of Batangas</h2>
              </li>
               <li>
                <h1 className='head bold text-[10px] sm:text-lg'>Industrial Electronics Technology</h1>
                <h2 className='subhead italic text-[8px] sm:text-sm'>Xavier University - Ateneo De Cagayan</h2>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-4 border w-full sm:w-auto bg-white text-black rounded-md'>
            <div className='flex justify-center'>
              <h1 className=''>Experience</h1>
            </div>
            <ul className='text-[10px] sm:text-xl p-2'>
            <li>
              <h1 className='head bold text-[10px] sm:text-lg'>Test Development Engineer</h1>
              <h2 className='subhead italic text-[8px] sm:text-sm'>Analog Devices Inc. - Present</h2>
            </li>
            <li>
              <h1 className='head bold text-[10px] sm:text-lg'>Test Development Technician</h1>
              <h2 className='subhead italic text-[8px] sm:text-sm'>Maxim Integrated - 2015-2022</h2>
            </li>
            <li>
              <h1 className='head bold text-[10px] sm:text-lg'>Test Development Engineer</h1>
              <h2 className='subhead italic text-[8px] sm:text-sm'>Analog Devices Inc. - Present</h2>
            </li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default About