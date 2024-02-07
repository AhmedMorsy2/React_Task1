import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import starStyles from "../Star/Star.module.css";

export default function Star({ textColor, bgColor }) {
  const starStyleBg = {
    backgroundColor: bgColor,
  };
  const starStyleColor = {
    color: textColor,
  };
  return (
    <>
      <div  className={`line position-relative mb-3 ${starStyles.starContainer}`}>
        <div className={`${starStyles.star_left} me-3`}style={starStyleBg}></div>
        <FontAwesomeIcon icon={faStar} style={starStyleColor} />
        <div className={`${starStyles.star_right} ms-3`}style={starStyleBg}></div>
      </div>
    </>
  );
}
