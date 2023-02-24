import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                {/* <img src={light} alt="" /> */}
                <h2 style={{ color: "#fff" }}>Bits Junction</h2>
              </a>
              <p>
                <strong>Where You achieve your Vision</strong>
                <br />
                Welcome to our web design agency. Our vision is to be the leading software house, providing businesses with the technology solutions they need to stay ahead of the curve. We strive to be the trusted technology partner for businesses and organizations of all sizes, delivering cutting-edge technology solutions and best practices to help them succeed.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
              National Sciences and Technology Park (NSTP),
                <br />
                UH12, Islamabad
              </p>
              <p>
                E:{" "}
                <a href="mailto:info@bitsjunction.com">info@bitsjunction.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/bitsjunction">
                    <i className="fab fa-linkedin"></i>Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/bitsjunction">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="/">bitsjunction.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
