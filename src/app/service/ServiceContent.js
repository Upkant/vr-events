import React from "react";
import Link from "next/link";
import { servicesData } from "./ServiceCards";

const ServiceContent = () => {
  return (
    <>
      {/* start wpo-page-title */}
      <section className="wpo-page-title">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>Service</h2>
                <ol className="wpo-breadcumb-wrap">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Service</li>
                </ol>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
      {/* end page-title */}
      {/* start wpo-service-section */}
      <section
        className="wpo-service-section-s2 section-padding pt-120 pb-4 mb-4"
        id="Service"
      >
        <div className="container-fluid">
          <div className="wpo-section-title-s2">
            <span>Our Services</span>
            <h2>What We Offer For You</h2>
          </div>
          <div className="wpo-service-wrap">
            <div className="row">
              {servicesData.map((service) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mt-4">
                  <div
                    key={service.id}
                    className="wpo-service-item wow fadeInUp"
                    data-wow-duration={service.duration}
                  >
                    <div className="wpo-service-img">
                      <img src={service.image} alt={service.text} />
                    </div>
                    <div className="wpo-service-text">
                      <Link href={`/service/${service.slug}`}>
                        {service.text}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
      {/* end Service-section */}
    </>
  );
};

export default ServiceContent;
