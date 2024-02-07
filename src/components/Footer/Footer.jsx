import React from "react";
import footer from "../Footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
      <div className={`${footer.top} text-white py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center pt-5">
              <h3 className="text-uppercase fw-bold">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p className="pt-3">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center pt-5">
              <h3 className="text-uppercase text-center fw-bold">
                Around the web
              </h3>
              <ul className="list-unstyled d-flex justify-content-center ">
                <li className={`${footer.listitem} d-flex justify-content-center align-content-center  me-2 `}>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li className={`${footer.listitem} d-flex justify-content-center align-content-center  me-2 `}>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className={`${footer.listitem} d-flex justify-content-center align-content-center me-2 `}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </li>
                <li className={`${footer.listitem} d-flex justify-content-center align-content-center  me-2 `}>
                  <FontAwesomeIcon icon={faGlobe} />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center pt-5">
              <h3 className="text-uppercase fw-bold">about freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${footer.bot} text-center text-white py-3 `}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
