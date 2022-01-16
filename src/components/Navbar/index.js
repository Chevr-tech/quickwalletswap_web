import React from "react";
import "../Navbar/style.css";
import { FaStream } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-brand">
          <div className="nav-brand__imgcover">
            <img src="" alt="" />
          </div>
          <div className="nav-brand__title">QWswap</div>
        </div>
        <div className="nav-link__cover">
          <a href="#service-section" className="nav-link">
            Service
          </a>
          <a href="#download-section" className="nav-link">
            Download
          </a>
          <a href="#footer-section" className="nav-link">
            Support
          </a>
        </div>
        {/* <div className="nav-brand__menu">
          <FaStream color="dodgerblue" fontSize={"1.2rem"} />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
