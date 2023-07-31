import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "React js",
    },
    {
      name: "Node js",
    },
    {
      name: "Express js",
    },
    {
      name: "Vite",
    },
    {
      name: "Vanilla js",
    },
    {
      name: "Redux",
    },
    {
      name: "Python",
    },
    {
      name: "C++",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
  ];

  const colors = [
    "#F1C40F",
    "#00FF00",
    "#0088FE",
    "#FFBB24",
    "#001CCE",
    "#00C79F",
    "#FF1042",
    "#00FF00",
    "#0088FE",
    "#FFBB24",
    "#001CCE",
    "#00C79F",
    "#FF1042",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title" id="techStackSectionTitle">
        <h2 style={{ textAlign: "center" }}>TechStack</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right cascade>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
                key={index}
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p> {item.name} </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
