import React from 'react'
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <footer className='footer'>
       <div className='footer-content'>
       <h3>JobBoard</h3>
       <p>Your trusted platform for job searching and posting.</p>

        <div className="footer-contact">
        <p><strong>Email:</strong> misriya@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Kochi, Kerala</p>
      </div>

       <div className='footer-links'>
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Contact</a>
       </div>
       <div className='footer-social'>
        <a href="mailto:misriy312003@gmail.com"><FaEnvelope size={24} /></a>
          <a href="#" target="_blank"><FaInstagram size={24} /></a>
          <a href="https://wa.me/9876543210" target="_blank"><FaWhatsapp size={24} /></a>
       </div>

       <p className="footer-copy">
          © {new Date().getFullYear()} JobBoard. All Rights Reserved.
        </p>
    </div>
    </footer>
    
  )
}

export default Footer
