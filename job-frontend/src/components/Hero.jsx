import React from 'react'

function Hero({onSearch,onCategorySelect}) {
  return (
    <div className='hero'>
        <h1>Find Your Dream Job</h1>
        <p>Search through thousands of oppurtunities and land your ideal career.</p>

        <div className='search-container'>
          <input type="text" className='search-input' placeholder='Search job titles or companies...' 
          onChange={(e)=>onSearch(e.target.value)}/>
      
    </div>

    <div className="category-filter">
        <button onClick={() => onCategorySelect("All")}>All</button>
        <button onClick={() => onCategorySelect("Development")}>Development</button>
        <button onClick={() => onCategorySelect("Design")}>Design</button>
        <button onClick={() => onCategorySelect("Marketing")}>Marketing</button>
      </div>
        </div>

    
  )
}

export default Hero
