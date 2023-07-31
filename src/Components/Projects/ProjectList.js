import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#48088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div
      className={show ? "project-list-opened project-list" : "project-list"}
      onClick={handleShowandCollapse}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="description">
        {show ? (
          <p>{des}</p>
        ) : (
          <p>
            {des.substring(0, 50)}...
            <p style={{ color: "steelblue" }}>Read more</p>
          </p>
        )}
      </div>

      <div className="row">
        {techused &&
          techused.map((tech, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="tech-used-in-project">
                <p style={{ backgroundColor: colors[index] }}>
                  {tech.techname}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo-btn">
        <a href={projectlink} target="_">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
