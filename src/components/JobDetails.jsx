import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {
    
    const {id} = useParams();

    const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
       <p><b>Job Title:</b>{jobDetails.title}</p>
       <p><b>Salary:</b>{jobDetails.salary}</p>
       <p><b>Location:</b>{jobDetails.location}</p>
       <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos expedita dolore, animi quo, facere eum quia culpa quasi ducimus ab debitis repellat incidunt ipsum! Mollitia ex quisquam cum animi!</p>
       <button>Apply Now!</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async({params})=>
{

    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if(!res.ok){
        throw Error("Could not found job details")
    }


    return res.json();
}