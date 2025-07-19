import React from 'react'
import logo from '../assets/LH.png'
import { useEffect,useState,useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { NavLink, useNavigate }  from 'react-router-dom'


const Navbar = () => {


  //added for touch
  const menuRef = useRef(null)
  

  const navigate = useNavigate();
  const navlink = document.querySelector('.navlink');
  //function to close and open the menu


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

    // 🔻 Close menu on outside click/tap
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  //bg-[#0c2b40]
  return (
    <div className='z-50 p-2 bg-white flex flex-row justify-evenly items-center sticky top-0'>
        <div>
          <NavLink to="/">
          <img className='h-1/2 w-1/3' src={logo} alt=""/>
          </NavLink>       
        </div>

        <div
        ref={menuRef}
        className={`duration-500 md:static absolute bg-white rounded-2xl md:min-h-[5vh] min-h-[60vh] left-0
          ${isMenuOpen ? 'top-0' : 'top-[-1500%]'}
        md:w-auto w-full flex items-center px-5`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-4 cursor-pointer'>
              <NavLink to='/'><li className=' active:text-red-500 '>Home</li></NavLink>
              <NavLink to='/products'><li className=' active:text-red-500'>Projects</li></NavLink>
              <NavLink to='/about'><li className=' active:text-red-500'>About</li></NavLink>
              <NavLink to='/contact'><li className=' active:text-red-500'>Contact</li></NavLink>
          </ul>
        </div>

        <div className='flex items-center gap-5'>
          <button className='hover:bg-green-500 hover:text-white
                        h-auto lg:w-[20vh] w-auto text-[10px] sm:p-2 p-0 cursor-pointer
                        bg-blue-200 font-bold text-green-500
                        sm:text-lg rounded-full hidden sm:block'
                        onClick={()=> navigate('/contact',{replace:true})}>Let's work!</button>
         <ion-icon  onClick={toggleMenu}
          className="text-3xl cursor-pointer md:hidden z-50 text-black"
          name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
        </div>
    </div>
  )
}

export default Navbar
