import React from "react";
import phone from "../assets/images/IPhone_12_Blue.png";
import playstore from "../assets/images/playstore.png";
import apple from "../assets/images/appstore.png";

const DownloadSection = () => {
  return (
    <div className="container pb-6">
      <h2 className="fw-700 text-center" style={{ fontSize: 64 }}>
        Download the app
      </h2>
      <div className="download-content row mt-3">
        <div className="col-md-7 col-lg-7">
          <div className="row justify-content-center mx-auto mt-5 pt-7">
            <div className="col-lg-7 align-self-center download-info">
              <p>
                Access video consultation with India’s top experts on the Practo
                app.
              </p>
              <p>
                Connect with experts online, available 24/7, from the comfort of
                your home.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mx-auto mt-5">
            <div className="col-lg-4 col-md-6 col-6 text-right mb-3">
              <img src={apple} style={{ width: "90%", height: "auto" }} />
            </div>
            <div className="col-lg-4 col-md-6 col-6 text-left mb-3">
              <img src={playstore} style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 mt-3 text-center">
          <img src={phone} className="download-image"></img>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
