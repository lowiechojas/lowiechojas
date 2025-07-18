import { Input } from 'postcss'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-around bg-[#0c2b45] h-dvh w-screen p-4'>

        <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4' action="">
          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">Company Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='name'/>
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder='email'/>       
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Message</label>
            <textarea className='shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="4" cols="50">

            </textarea>
           </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Send
          </button>
        </form>
     </div>


   
  )
}

export default Contact