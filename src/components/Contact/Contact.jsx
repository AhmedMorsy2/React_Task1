import React from "react";
import styles from "../Contact/Contact.module.css";
import Star from "../Star/Star";
// import "../Contact/Contact.module.css ";
export default function Contact() {
  return (
    <>
      <div className="contact vh-100 d-flex justify-content-center align-content-center flex-wrap">
        <div className="container ">
          <div className={`${styles.title} text-center text-uppercase`}>
            <h1 className="fw-bold">Contact Section</h1>
            <Star bgColor="#2C3E50" textColor="#2C3E50" />
          </div>
          <div className="form w-75 m-auto">
            <div className="uname">
              <div className="my-4 position-relative">
                <input
                  id="firstname"
                  type="text"
                  className="form-control border-0 border-bottom p-2"
                  placeholder=""
                />
                <label htmlFor="firstname" className={styles.placeholder}>
                  userName:
                </label>
              </div>
            </div>
            <div className="uage">
              <div className="my-4 position-relative">
                <input
                  id="firstname"
                  type="number"
                  className="form-control  border-0 border-bottom p-2"
                  placeholder=""
                />
                <label htmlFor="firstname" className={styles.placeholder}>
                  userAge:
                </label>
              </div>
            </div>
            <div className="uemail ">
              <div className="my-4 position-relative">
                <input
                  id="firstname"
                  type="email"
                  className="form-control  border-0 border-bottom p-2"
                  placeholder=""
                />
                <label htmlFor="firstname" className={styles.placeholder}>
                  userEmail:
                </label>
              </div>
            </div>
            <div className="upassword">
              <div className="mt-4 position-relative">
                <input
                  id="firstname"
                  type="password"
                  className="form-control  border-0 border-bottom p-2"
                  placeholder=""
                />
                <label htmlFor="firstname" className={styles.placeholder}>
                  userPassword:
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-info text-white my-3">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
