import React from "react";
import "../Footer/style.css";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer" id="footer-section">
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "auto",
            margin: "auto",
          }}
        >
          <div className="footer-brand">
            <img src="" alt="" />
            <h3>QWswap</h3>
            <p>Fast and Secure crypto exchange</p>
          </div>

          {/* SOCIAL */}
          <div className="social-cover">
            <div className="social-title">Connect with us </div>
            <div className="social-links__cover">
              <a href="" className="social-links">
                <AiFillInstagram fontSize={"1.5rem"} color="#3f3f3f" />
                <p className="social-link__name">Instagram</p>
              </a>
              <a
                href=""
                className="social-links"
                style={{
                  margin: "0 10px",
                }}
              >
                <RiWhatsappFill fontSize={"1.5rem"} color="#3f3f3f" />
                <p className="social-link__name">Whatsapp</p>
              </a>
              <a
                href=""
                className="social-links"
                style={{
                  margin: "0 10px",
                }}
              >
                <FaTwitter fontSize={"1.5rem"} color="#3f3f3f" />
                <p className="social-link__name">Twitter</p>
              </a>
            </div>
          </div>
          {/* SUPPPORT */}
          <div className="support">
            <div className="support-title">Reach us</div>
            <div className="support-media">
              <a href="" className="support-link">
                <HiMail color="#3f3f3f" fontSize={"1.5rem"} />
                <p className="support-link__name">qwswap@gmail.com</p>
              </a>
            </div>
          </div>
          <form action="" method="post" className="footer-form">
            <p className="newsletter-title">Newsletter</p>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="form-group">
              <input
                type="email"
                placeholder="please enter your email address"
              />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;
