import React from 'react'
import Particles from 'react-particles-js';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon  className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>I approach each project individually and always focus on the result</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>
                                    Web Development
                                </h3>
                                <p> Your website will be built with cutting edge, state of the art technology and functionality
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>
                                <h3>
                                    Social Media Marketing
                                </h3>
                                <p>Reach targeted clients likely to engage with your services via managed social media campaigns</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                                <h3>
                                    Google Ads / SEO  
                                </h3>
                                <p>Your services or products will appear at the top of Google searches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
