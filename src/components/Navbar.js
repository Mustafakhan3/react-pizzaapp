import React from 'react'
import logo from "../assets/pizzaLogo.png"
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import reorder from "../assets/reorder (1).png";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <img src={logo}></img>
    </div>
    <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        
        <img src = {reorder} />


    </div>
    </div>
  )
}

export default Navbar