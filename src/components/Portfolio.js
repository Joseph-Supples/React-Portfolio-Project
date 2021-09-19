import React from 'react'
import netflix from "../images/netflix.png"
import cityGuide from "../images/city-guide-app.png"
import portfolio from "../images/portfolio.png"
import taskManager from "../images/task-manager.png"

//Font Awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';

  import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

    // Netflix
    const openPopupBoxNetflix = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox"src={netflix} alt="Netflix Clone Project"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, non.</p>
        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/Joseph-Supples")}> https://github.com/Joseph-Supples</a>
        </>
        )
        PopupboxManager.open({content})
        
    }


    const popupboxConfigNetflix = {
        titleBar:{
            enable: true,
            text: "Netflix Clone Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

// City Guide
const openPopupBoxCityGuide = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox"src={cityGuide} alt="CityGuide app"/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, non.</p>
    <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/Joseph-Supples")}> https://github.com/Joseph-Supples</a>
    </>
    )
    PopupboxManager.open({content})
    
}


const popupboxConfigCityGuide = {
    titleBar:{
        enable: true,
        text: "CityGuide App Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
}


// City Guide
const openPopupBoxPortfolio = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox"src={portfolio} alt="Portfolio"/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, non.</p>
    <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/Joseph-Supples")}> https://github.com/Joseph-Supples</a>
    </>
    )
    PopupboxManager.open({content})
    
}


const popupboxConfigPortfolio = {
    titleBar:{
        enable: true,
        text: "Portfolio Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Task Manager
const openPopupBoxTaskManager = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox"src={taskManager} alt="Task Manager"/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, non.</p>
    <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/Joseph-Supples")}> https://github.com/Joseph-Supples</a>
    </>
    )
    PopupboxManager.open({content})
    
}


const popupboxConfigTaskManager = {
    titleBar:{
        enable: true,
        text: "Task Manager Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
}


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick = {openPopupBoxNetflix}>
                        <img className="portfolio-image"src={netflix} alt="Netflix Clone Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick = {openPopupBoxCityGuide}>
                        <img className="portfolio-image"src={cityGuide} alt="CityGuide Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxPortfolio}>
                        <img className="portfolio-image"src={portfolio} alt="Portfolio Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxTaskManager}>
                        <img className="portfolio-image"src={taskManager} alt="Task Manager Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigCityGuide}/>
            
            <PopupboxContainer {...popupboxConfigPortfolio}/>
            
            <PopupboxContainer {...popupboxConfigTaskManager}/>
        </div>
    )
}

export default Portfolio
