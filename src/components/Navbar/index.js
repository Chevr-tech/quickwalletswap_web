import React, { useEffect } from "react";
import "../Navbar/style.css";
import { FaStream } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {}, []);
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
          <Link to="/#service-section" className="nav-link">
            Service
          </Link>
          <Link to="/#download-section" className="nav-link">
            Download
          </Link>
          <Link to="/" className="nav-link">
            Support
          </Link>
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
