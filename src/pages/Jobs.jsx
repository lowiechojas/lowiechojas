import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData();
  return (
    <div className='main-div jobs'>
        {jobsData.map((Jobs)=>{
            return <Link to={Jobs.id.toString()} key={Jobs.id} >
                <h4>{Jobs.title}</h4>
                <p>{Jobs.location}</p>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobLoader = async () => {
    
    const res = await fetch("http://localhost:5000/jobs");

    if(!res.ok){
        throw Error("Job could not be found!")
    }

    return res.json();
}