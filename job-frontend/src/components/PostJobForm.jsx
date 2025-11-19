import React from 'react'
import { useState } from 'react'
import API from '../api/api'

function PostJobForm({onJobPosted,onClose}) {
    const [formData,setFormData] = useState({
        title:"",
        company:"",
        category:"",
        location:"",
        description:""
    })

    const handleChange = (e)=>{
     setFormData({
        ...formData,
        [e.target.name]:e.target.value
     })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

     try{
        await API.post('/jobs',formData);
        alert("Job posted successfully");
        onJobPosted();
        onClose()
     }catch(err){
        console.error(err)
        alert("Something went wrong")
     }

    }


  return (
    <div className='post-form-container'>
        <h2>Post a Job</h2>

        <form onSubmit={handleSubmit} className='post-form'>
         <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
         <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>

         <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

     <button type='submit'>Submit Job</button>


        </form>
      
    </div>
  )
}

export default PostJobForm
