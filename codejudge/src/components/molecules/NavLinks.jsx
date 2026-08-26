import React from 'react';
import './NavLinks.css';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';
const NavLinks = () => {
    return (
       <div className="navlinks ">
      <span><NavLink>Problem</NavLink></span>
       <span><NavLink>Contest</NavLink></span>
       </div>
    )
}
export default NavLinks;