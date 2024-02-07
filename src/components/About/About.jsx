import React from "react";
import about from "../About/About.module.css";
import Star from "../Star/Star";
export default function About() {
  return (
    <>
      <div className={`${about.about} text-center text-white vh-100 d-flex justify-content-center align-content-center flex-wrap `}>
        <div className="title text-uppercase">
          <h1 className="fw-bold ">About Component</h1>
          <Star bgColor="white" textColor="white" />
        </div>
        <div className="container ">
          <div className="content">
            <div className="row">
              <div className="col-md-6 pt-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
              <div className="col-md-6 pt-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
}
