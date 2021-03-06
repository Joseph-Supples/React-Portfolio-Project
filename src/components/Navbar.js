import React from 'react'
import Logo from "../jest_logo.png";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
     <div className="container">
        <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" className="logo" ></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style = {{color: "#fff"}}/>
     </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth = {true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to="about"offset={-110} className="nav-link" href="#">About me</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to="services" offset={-110}className="nav-link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to="experience"offset={-110} className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to="portfolio" offset={-110}className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to="contactme"offset={-110} className="nav-link" href="#">Contact Me</Link>
      </li>
      </ul>
  </div>
</div> 
</nav>
    )
}

export default Navbar
