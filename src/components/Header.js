import React from 'react';
import {NavLink} from 'react-router-dom'

function Header() {
    return(
        <div className='header'>
           {/* <h1>Sweezy Project Manager</h1> */}
           <div>
           <NavLink className='links' to="/">Home</NavLink>
           </div>

           <nav className='navbar'>
             <ul>
                <NavLink className='links' to="/login">Login</NavLink>
                <NavLink className='links' to="/signup">Sign Up</NavLink>
             </ul>
           </nav>
        </div>
    )
}

export default Header