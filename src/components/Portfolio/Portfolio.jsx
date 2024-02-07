import React from "react";
import Album from "../Album/Album";
import Star from "../Star/Star";
import css from "../Portfolio/Portfolio.module.css";
export default function Portfolio() {
  return (
    <>
      <div className={`${css.album}`}>
        <div className={`${css.title} text-center`}>
          <h1 className="text-uppercase fw-bold">Portfolio</h1>
          <Star bgColor="#2C3E50" textColor="#2C3E50" />
        </div>
        <div className="container ">
          <div className="row g-5 py-4">
            <Album />
          </div>
        </div>
      </div>
    </>
  );
}
