import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="wpo-site-footer-s2">
        <div className="wpo-upper-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>Links</h3>
                  </div>
                  <div className="link-wrap">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                    <ul>
                      {/* <li>
                        <a href="/">Gallery</a>
                      </li>
                      <li>
                        <Link href="/">Home</Link>
                      </li> */}
                      {/* <li>
                        <a href="contact.html">Contact</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="widget about-widget">
                  <div className="logo widget-title">
                    <a className="logo" href="index.html">
                      VR Events & Entertainment
                    </a>
                  </div>
                  <p>
                    We can’t wait to see all of our beloved friends and relative
                    s at our wedding.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="widget wpo-service-link-widget">
                  <div className="widget-title">
                    <h3>Contact </h3>
                  </div>
                  <div className="contact-ft">
                    <p>vrentertainment1406@gmail.com</p>
                    <p>
                      Rao Ishwar Complex, Sector 86 Gurugram, Haryana 122004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end container */}
        </div>
        <div className="wpo-lower-footer">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <p className="copyright">
                  © Copyright 2024 |
                  <a href="index.html">VR Events & Entertainment</a> | All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ft-shape-1">
          <img src="/assets/images/footer-shape-1.svg" alt="" />
        </div>
        <div className="ft-shape-2">
          <img src="/assets/images/footer-shape-2.svg" alt="" />
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
