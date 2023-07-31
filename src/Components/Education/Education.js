import React from "react";
import "./Education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const data = [
    {
      name: "Shri Ramdeobaba College of Engineering and Technology",
      degree: "B.Tech",
      year: "2020-2024",
      des: "Currently pursuing my Bachelor of Technology degree. My academic curriculum include subjects like Computer Networks,Operating Systems, Database Management, Data Structures and Algorithms",
    },
    {
      name: "Hislop Junior College",
      degree: "12th Board",
      year: "2018-2020",
      des: " Completed my HSC from this college in the year 2020",
    },
    {
      name: "Mount Carmel Convent School",
      degree: "School Graduation",
      year: "till 2018",
      des: "Had best years of my life in this school. Completed my SSC from this school in 2018",
    },
  ];

  const colors = ["#001CCE", "#00C79F", "#FFBB24"];

  return (
    <div
      className="container education-section"
      id="education"
      style={{ maxWidth: "1000px" }}
    >
      <div className="timeline-section">
        <div className="section-title">
          <h2 style={{ textAlign: "center" }}>Education</h2>
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
              key={index}
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaUserGraduate />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {item.degree}
              </h5>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
