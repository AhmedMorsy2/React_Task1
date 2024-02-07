import React from "react";
import img1 from "../../imgs/Portfolio1.png";
import img2 from "../../imgs/Portfolio2.png";
import img3 from "../../imgs/Portfolio3.png";
import layer from "../Album/Album.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Album() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <div className={`${layer.imgLayer}  position-fixed d-flex justify-content-center align-content-center flex-wrap`} onClick={closeImage}>
          <div className="model">
            <img src={selectedImage} width={"600px"} alt="Selected" className="rounded-3" />
          </div>
        </div>
      )}
      <div className="col-md-6 col-lg-4" onClick={() => openImage(img1)}>
        <div className="image position-relative overflow-hidden ">
          <img src={img1} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 " onClick={() => openImage(img2)}>
        <div className="image position-relative overflow-hidden">
          <img src={img2} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 " onClick={() => openImage(img3)}>
        <div className="image position-relative overflow-hidden">
          <img src={img3} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 " onClick={() => openImage(img1)}>
        <div className="image position-relative overflow-hidden">
          <img src={img1} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 " onClick={() => openImage(img2)}>
        <div className="image position-relative overflow-hidden">
          <img src={img2} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 " onClick={() => openImage(img3)}>
        <div className="image position-relative overflow-hidden">
          <img src={img3} className="w-100 rounded-3" alt="" />
          <div className={`${layer.layer} position-absolute rounded-3 d-flex justify-content-center align-content-center flex-wrap text-white`}>
            <FontAwesomeIcon icon={faPlus} className={`${layer.icon}`} />
          </div>
        </div>
      </div>
    </>
  );
}
