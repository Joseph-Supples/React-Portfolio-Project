import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>web design and development</h1>
                <Typed
                className="typed-text"
                strings ={["Web design","Web Development", "Social Media Marketing"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>

                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
