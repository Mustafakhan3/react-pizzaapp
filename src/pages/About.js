import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Pizza, where every slice is crafted with passion and a love for authentic, mouth-watering flavors. We believe that pizza is more than just a meal—it’s a way to bring people together, 
        to share laughter, stories, and great food. Our pizzas are made from the freshest ingredients,
         handpicked daily, and combined with a perfect blend of spices to create a taste that’s both comforting and unforgettable.
          Whether you’re craving the classic taste of a Margherita or an adventurous twist on a new favorite, we have something for everyone. 
          Join us and experience the joy of pizza as it was meant to be—fresh, delicious, and made with heart. Welcome to the family, and let us serve you the perfect slice!
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;