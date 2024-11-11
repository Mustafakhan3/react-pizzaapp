import React, { useState } from 'react'
import pizzaimage from "../assets/pizza.jpeg"
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';


function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/Menu');
  };
  const handleOrderNow2 = () => {
    navigate('/Contact');
  };
  return (
    <div className='home'>
        <div className="headerContainer" >
            <h1>Pedro's Pizzeria</h1>
            <p> PIZZA TO FIT ANY TASTE</p>
            <button onClick={handleOrderNow} >Order NOW</button>
            <button onClick={handleOrderNow2} >Contact Us</button>
            </div> </div>
   )
}
export default  Home