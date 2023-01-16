import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className="experience-details">
          <h5
            style={{
              color: theme.primary,
              fontSize: "0.85rem",
              marginBottom: "0.45rem",
              fontWeight: "bold",
            }}
          >
            {startYear}-{endYear}
          </h5>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
      </div>
      <div></div>
    </Fade>
  );
}

export default ExperienceCard;
