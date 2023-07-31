import React from "react";
import "./Home.css";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import MyCV from "./myResume.pdf";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={30} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={30} />
          </p>
        )}
      </div>
      <div className="container home-content">
        <Fade left>
          <h1>Hi I'm Darshan</h1>
        </Fade>
        <Fade right>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Competitive Programmer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1600,
              }}
            />
          </h3>
        </Fade>
        <Fade bottom>
          <div className="button-for-action">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-btn">Hire Me</div>
            </Link>
            <div className="get-resume-btn">
              <a href={MyCV} download="Darshan_CV.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
