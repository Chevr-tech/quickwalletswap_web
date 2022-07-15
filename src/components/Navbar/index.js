import React, { useEffect } from "react";
import "../Navbar/style.css";
import { FaStream } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/weblogo.png";

function Navbar() {
  useEffect(() => {}, []);
  return (
    <>
      <nav>
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
            Service
          </a>
          <a href="/#download-section" className="nav-link">
            Download
          </a>
          <a href="/" className="nav-link">
            Support
          </a>
          <Link to="/termsandcondition" className="nav-link">
            T & C
          </Link>
        </div>
        {/* <div className="nav-brand__menu">
          <FaStream color="dodgerblue" fontSize={"1.2rem"} />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
