import React from "react";
import img1 from "../../imgs/home.svg";
import home from "../Home/Home.module.css";
import Star from "../Star/Star";
export default function Home() {
  return (
    <>
      <div
        className={`${home.home}  vh-100 d-flex align-content-center text-white flex-wrap text-center`}
      >
        <div className="container">
          <div className={home.user_img}>
            <img src={img1} alt="avatar" />
          </div>
          <div className="title pt-5">
            <h1 className="fw-bold text-uppercase">Start Framework</h1>
          </div>
          <Star bgColor="white" textColor="white" />
          <div>
            <p>Graphic Artist - Web Designer - Illustrator </p>
          </div>
        </div>
      </div>
    </>
  );
}
