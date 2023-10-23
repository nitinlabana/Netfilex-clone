import React from 'react'
import logo from '../netfilxphoto/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <nav>
            <img className='logo' src={logo} alt="" />
            
            <div class="right">
                    <select name="language" className="language">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    <button><Link to="/Signup">Sign up</Link> </button> 
                    
           
                </div>
            
        </nav>
    </div>
    </>
  )
}

export default Navbar