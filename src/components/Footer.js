import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share"

const Footer =
    () => {
      return (
          <div className = "footer"><div className = "container">
          <div className = "row"><div className = "col-lg-4 col-md-6 col-sm-6">
          <div className = "d-flex"><p>city Moscow Main St 2020 office #2 <
          /p>
                        </div >
          <div className = "d-flex"><a href = "tel:555-555-5555">(555) 555 -
              5555 <
          /a>
                        </div >
          <div className = "d-flex"><p>fakeemail
          @aol.com</p>
                        </div>
          </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="" className="footer-nav">Home</a>
          <br /><a href = "" className = "footer-nav">About
              Me</a>
                                <br />
          <a href = "" className = "footer-nav">
              Services</a>
                            </div>
          <div className = "col"><a href = "" className = "footer-nav">
              Experience</a>
                                <br />
          <a href = "" className = "footer-nav">
              Portfolio</a>
                                <br />
          <a href = "" className = "footer-nav">Contact
              Me</a>
                            </div>
          </div>
                    </div>
          <div className = "col-lg-5 col-md-5 col-sm-6 align-items-center">
          <div className = "d-flex justify-content-center">
          <FacebookShareButton url =
               {"https://www.youtube.com/8020coding"} quote =
                   {"FullStack Developer"} hashtag = "#javascript">
          <FacebookIcon className = "mx-3" size =
           { 36 } />
                            </FacebookShareButton>
          <TwitterShareButton url =
               {"https://www.youtube.com/8020coding"} quote =
                   {"FullStack Developer"} hashtag = "#javascript">
          <TwitterIcon className = "mx-3" size =
           { 36 } />
                            </TwitterShareButton>
          <RedditShareButton url =
               {"https://www.youtube.com/8020coding"} quote =
                   {"FullStack Developer"} hashtag = "#javascript">
          <RedditIcon className = "mx-3" size =
           { 36 } />
                            </RedditShareButton>
          <LinkedinShareButton url =
               {"https://www.youtube.com/8020coding"} quote =
                   {"FullStack Developer"} hashtag = "#javascript">
          <LinkedinIcon className = "mx-3" size =
           { 36 } />
                            </LinkedinShareButton>
          </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
          </div>
                </div></div>
        </div>)
    }

export default Footer
