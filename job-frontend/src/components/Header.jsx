import React from 'react'

function Header({onPostJobClick}) {
  return (
    <header className='header'>
        <div className='logo'>JobBoard</div>

        <nav className='nav'>
        <a href="#home">Home</a>
        <a href="#jobs">Jobs</a>
        <a href="#contact">Contact</a>
        </nav>

        <button className='post-job-btn' onClick={onPostJobClick}>Post a JOb</button>
    </header>
  )
}

export default Header
