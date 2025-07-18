import React from 'react'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
  return (
    <div>
        <h1>Job Openings</h1>
        <p>List of current job opening in our company.</p>
        <Outlet />
    </div>
  )
}

export default JobLayout