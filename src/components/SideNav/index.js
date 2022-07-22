import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/weblogo.png";

const SideNav = ({ showNav }) => {
  return (
    <>
      <div className={"mobile-nav__cover"} onClick={() => showNav(false)}>
        <div className="mobile-brand__cover">
          <div className="mobile-brand__image">
            <img
              src={`${logo}`}
              className="logo"
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="logo"
            />
          </div>
          <div className="mobile-brand__name">Ewallet plug</div>
        </div>
        <div className="mobile-items">
          <a href="/#service-section" className="mobile-links">
            Services
          </a>
          <a href="/#download-section" className="mobile-links">
            Download
          </a>
          <a href="/#footer-section" className="mobile-links">
            Support
          </a>
          <Link to="/termsandcondition" className="mobile-links">
            T & C
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNav;
