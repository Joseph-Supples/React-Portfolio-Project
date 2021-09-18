import React from "react";
import author from "../canvasprofilepic.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-6 colxm-12">
                <div className="photo-wrap mb-5">
                <img src={author} alt="" className="profile-img"/>
                </div>
            
            </div>
            <div className="col-lg-6 colxm-12">
                <h1 className="about-heading">about me</h1>
                <p>
                Hi there! My name's Joseph Supples. I'm presently a student in programming and web design at Seattle Central. This upcoming fall, I'll be a part of the 2021 cohort for North Seattle's B.A.S. in App Development program.

My goal is to be a well-rounded, full-stack software developer. At the moment, I'm learning HTML, CSS, and JS. I look forward to diving deeper into front-end development as well as studying object-oriented programming via Python, Java,and Ruby. As my studies progress, I'm sure I'll discover what areas I'm most suited to specialize in. I'm not the foremost visually-inclined artist in my social group, so I suspect that I'll find my home more in back-end and server-side work. That said, I'm certainly leaving the possibility of UI/UX open if I discover a knack for it.

Programming, web design, and software development are ever-changing fields and I'm stoked to join in the fervor and find my place in them
                </p>
            </div>
            </div>

        </div>
    )
}

export default AboutMe
