import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div>
        <h2>404 | Page Not Found</h2><br/>
        <button  onClick={()=>navigate('/')}>Go to Home Page</button>
    </div>
  )
}

export default NotFound