import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import API from '../api/api'

function JobList({refresh,search,category}) {

   const [jobs,setJobs] =  useState([])

    useEffect(()=>{
        fetchJobs();
    },[refresh])

const fetchJobs =  async()=>{
    try{
        const response = await API.get('/jobs')
        setJobs(response.data)
    }catch(error){
        console.log("Error fetching jobs:",error)
    }
}


const searchFiltered = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

const fullyFiltered = searchFiltered.filter((job)=>{
 return category==='All'?true : job.category === category
})

  return (
    <div className='job-list-container'>
        <h2 className='job-list-title'>Availabe Jobs</h2>
        
        {fullyFiltered.length === 0 ?(
            <p className='no-jobs-text'>No jobs available</p>
        ):(
            fullyFiltered.map((job)=>(
               <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
          </div> 
            ))

        )}
      
    </div>
  )
}

export default JobList
