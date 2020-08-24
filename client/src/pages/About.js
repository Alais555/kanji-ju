import React from "react";
import "./About.css";


const About = () => (
  <div className="container">
    <h1>About Us</h1>
    <div className="card-user-container" />
    <div className="card-user-avatar" />
    
    <div classname="row" />
    <div classname="col-md-6" />
    <div className="card-user-bio">
      <h4>Aaron Nelson</h4>
      <p>Fullstack developer, UX/UI, Foundation interested. </p>
      <span className="location"><span className="location-icon fa fa-map-marker" /><span className="location-text">"I LOOK FORWARD TO THE GREATNESS I AM YET TO ACHIEVE!"</span></span>
    </div>
    <div className="card-user-button">
      <a href="https://github.com/axnelly55" className="hollow-button">FOLLOW ON GITHUB</a>
    </div>
    <div className="card-user-container" />
    <div className="card-user-avatar" />
    
    <div className="card-user-social">
      <ul className="menu">
        <li className="mail">EMAIL: axnelly55@gmail.com </li>
        <li className="link-linked"><a href="https://www.linkedin.com/in/aaron-nelson-33bb9a127/"> LINKEDIN: https://www.linkedin.com/in/aaron-nelson-33bb9a127/ </a></li>
      </ul>
    </div>
    <div classname="row" />
    <div classname="col-md-6" />
    <div className="card-user-bio">
      <h4>Michael Giovanni</h4>
      <p>Fullstack developer, UX/UI, Foundation interested. </p>
      <span className="location"><span className="location-icon fa fa-map-marker" /><span className="location-text">"Making history."</span></span>
    </div>
    <div className="card-user-button">
      <a href="https://github.com/Alais555" className="hollow-button">FOLLOW ON GITHUB</a>
    </div>
    <div className="card-user-social">
      <ul className="menu">
        <li className="mail">EMAIL: michaelgct555@gmail.com </li>
        <li className="link-linked"><a href="https://www.linkedin.com/in/michael-giovanni-contreras-207b961aa"> LINKEDIN: https://www.linkedin.com/in/michael-giovanni-contreras-207b961aa</a></li>
      </ul>
    </div>
  </div>

);


export default About;