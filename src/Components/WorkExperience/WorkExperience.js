import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GiClockwork } from "react-icons/gi";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Google",
      position: "Front End Developer",
      year: "2018-2019",
      des: "Eos quia rerum ea quis molestiae eum beatae fugit? Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ea rerum corrupti aut accusamus",

      techskills: [
        {
          techname: "CSS",
        },
        {
          techname: "Vanilla js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Amazon",
      position: "MERN Developer",
      year: "2019-2020",
      des: "Eos quia rerum ea quis molestiae eum beatae fugit? Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ea rerum corrupti aut accusamus",

      techskills: [
        {
          techname: "React js",
        },
        {
          techname: "Node js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Mongo DB",
        },
      ],
    },

    {
      companyname: "YouTube",
      position: "Full Stack Developer",
      year: "2020-2022",
      des: "Eos quia rerum ea quis molestiae eum beatae fugit? Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ea rerum corrupti aut accusamus",

      techskills: [
        {
          techname: "Django",
        },
        {
          techname: "Vanilla js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Angular js",
        },
      ],
    },

    {
      companyname: "Goldman Sachs",
      position: "Full Stack Developer",
      year: "2022-2023",
      des: "Eos quia rerum ea quis molestiae eum beatae fugit? Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ea rerum corrupti aut accusamus",

      techskills: [
        {
          techname: "Node js",
        },
        {
          techname: "Vanilla js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Material UI",
        },
      ],
    },
  ];

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#48088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="timeline-section">
        <div className="section-title">
          <h5>Work Experience</h5>
          <span className="line"></span>
        </div>

        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              dateClassName="date-class"
              date={item.year}
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<GiClockwork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
