import React, { useEffect, useState } from "react";
import "../Navbar/style.css";
import { FaStream } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/weblogo.png";
import SideNav from "../SideNav";

function Navbar() {
  useEffect(() => {}, []);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav && (
        <div className="backdrop" onClick={() => setShowNav(false)}>
          <SideNav showNav={setShowNav} />
        </div>
      )}

      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <div className="nav-brand__imgcover">
              <img
                src={Logo}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
            <div className="nav-brand__title">Ewallet</div>
          </Link>
          <div className="nav-link__cover">
            <a href="/#service-section" className="nav-link">
              Services
            </a>
            <a href="/#download-section" className="nav-link">
              Download
            </a>
            <a href="/#footer-section" className="nav-link">
              Support
            </a>
            <Link to="/termsandcondition" className="nav-link">
              T & C
            </Link>
          </div>
          <div className="nav-brand__menu" onClick={() => setShowNav(true)}>
            <RiMenu3Line color="#000000" fontSize={"1.8rem"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
