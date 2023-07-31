import React from "react";
import "./About.css";
import profilePic from "../../images/myphoto5.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="about-image">
              <img src={profilePic} alt="Profile" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <Fade top>
                <h5>About Me</h5>
                <span className="line"></span>
              </Fade>
            </div>
            <Fade right>
              <p>
                I am an Aspiring Web Developer practising different Development
                Skills. I have done a Full Stack Development Course covering all
                the topics of Front-End Web Development like HTML, CSS,
                Bootstrap, Javascript, Jquery and Frameworks like React.js and
                in Back-End I have explored Express.js, Node.js, MongoDB for
                Database Management
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
