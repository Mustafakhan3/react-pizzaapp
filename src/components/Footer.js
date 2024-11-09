import React from 'react'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '..//assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <img src={instagram} alt='instagram'></img>
          <img src={twitter} alt='twitter'></img>
          <img src={facebook} alt='twitter'></img>
          <img src={linkedin} alt='twitter'></img>



        </div>
        <p> &copy; 2024 pedrotech pizza.com</p>
        </div>
  )
}
export default Footer 
