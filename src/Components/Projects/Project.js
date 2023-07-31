import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";
import Zoom from "react-reveal/Zoom";

const Project = () => {
  const data = [
    {
      name: "Quizyyy",
      des: "An online quiz application fueled with MERN stack.",
      projectlink: "https://quizyyy.vercel.app/",
      techused: [
        {
          techname: "Node js",
        },
        {
          techname: "React js",
        },
        {
          techname: "mongoDB",
        },
        {
          techname: "Express js",
        },
      ],
    },
    {
      name: "Acrylamide Detection Application",
      des: "A mobile application which can be used to detect presence of acrylamide in potato chips using image processing",
      projectlink: "https://duckduckgo.com/",
      techused: [
        {
          techname: "Image processing",
        },
        {
          techname: "Transfer Learning",
        },
        {
          techname: "Sk Learn",
        },
      ],
    },
  ];
  /*
  const data = [
    {
      name: "Quizyyy",
      des: "This is an online quiz applications built using MERN stack",
      projectlink: "https://quizyyy.vercel.app/",
      techused: [
        {
          techname: "React.js",
        },
        {
          techname: "Express.js",
        },
        {
          techname: "Node.js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "Redux",
        },
      ],
    },
  ];
*/
  return (
    <div className="container" id="projects">
      <div className="project-section">
        <div className="section-title">
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <span className="line"></span>
        </div>
        <div className="row">
          <Zoom>
            {data.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                {/* <ProjectList technamehere = {item.name} /> */}
                <ProjectList {...item} />
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Project;
