"use Client";
import Link from "next/link";
import { servicesData } from "@/app/service/ServiceCards";
import { usePathname } from "next/navigation";
import { useState } from "react";
const NavBar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const pathname = usePathname();
  const toggleNavBar = () => {
    setIsClick(!isClick);
  };
  const handleCloseNavbar = () => {
    setIsClick(false);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setIsRotated(!isRotated);
  };

  const isServiceActive = servicesData.some(
    (service) => pathname === `/service/${service.slug}`
  );

  return (
    <div>
      <nav className="navigation navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
              <div className="mobail-menu">
                <button
                  type="button"
                  onClick={toggleNavBar}
                  className="navbar-toggler open-btn"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar first-angle" />
                  <span className="icon-bar middle-angle" />
                  <span className="icon-bar last-angle" />
                </button>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="navbar-header">
                <Link className="navbar-brand" href="/">
                  VR Events & Entertainment
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-1 col-1">
              <div
                id="navbar"
                className={`collapse navbar-collapse navigation-holder ${
                  isClick ? "slideInn" : ""
                }`}
              >
                <button className="menu-close" onClick={handleCloseNavbar}>
                  <i className="ti-close" />
                </button>
                <ul className="nav navbar-nav mb-2 mb-lg-0">
                  <li>
                    <Link
                      href="/"
                      onClick={handleCloseNavbar}
                      className={pathname === "/" ? "active" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={handleCloseNavbar}
                      className={pathname === "/about" ? "active" : ""}
                    >
                      About
                    </Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link
                      href="/service"
                      className={`${isRotated ? "rotate" : ""} ${
                        isServiceActive ? "active" : ""
                      }`}
                      onClick={handleToggle}
                    >
                      Services
                    </Link>
                    <ul
                      className="sub-menu"
                      style={{ display: isVisible ? "block" : "none" }}
                    >
                      {servicesData.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/service/${service.slug}`}
                            onClick={handleToggle}
                          >
                            {service.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={handleCloseNavbar}
                      className={pathname === "/contact" ? "active" : ""}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* end of nav-collapse */}
            </div>
          </div>
        </div>
        {/* end of container */}
      </nav>
    </div>
  );
};

export default NavBar;
