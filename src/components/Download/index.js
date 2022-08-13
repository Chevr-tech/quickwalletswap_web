import React from "react";
import "../Download/style.css";
import iosbtn from "../../assets/images/iosstore.png";
import andriodbtn from "../../assets/images/playstore.png";
import downloadimg from "../../assets/images/phonetop.png";

function Download() {
  return (
    <>
      <div className="download" id="download-section">
        <div className="download-image">
          <img src={downloadimg} alt="dwonload image" />
        </div>
        <div className="download-content">
          <div className="download-title">
            Avaliable on both{" "}
            <span style={{ color: "#736af1" }}>Play Store</span> and{" "}
            <span style={{ color: "#736af1" }}>App store</span>
          </div>
          <div className="download-caption">
            Built to accommodate all users on Andriod and IOS. Download now!!
          </div>
          <div className="download-btn__cover">
            <a href="/" className="download-btn">
              <img src={iosbtn} alt={"iphone img"} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.chevrtech.ewalletplug"
              className="download-btn"
            >
              <img
                src={andriodbtn}
                style={{
                  transform: "scale(1.1)",
                }}
                alt={"andriod img"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
