import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Experience.css";

import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={theme.expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
              description1={exp.description1}
              description2={exp.description2}
              description3={exp.description3}
              description4={exp.description4}
              description5={exp.description5}
              description6={exp.description6}
              description7={exp.description7}
              description8={exp.description8}
              description9={exp.description9}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
