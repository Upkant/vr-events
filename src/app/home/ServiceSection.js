import React from "react";
import Link from "next/link";
import { servicesData } from "../service/ServiceCards";

const ServiceSection = () => {
  return (
    <div>
      <section className="wpo-service-section-s3 section-padding">
        <h2 className="hidden">Service</h2>
        <div className="container">
          <div className="wpo-service-wrap">
            <div className="row">
              {servicesData
                .filter((service) => service.id >= 1 && service.id <= 6)
                .map((service) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
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
          <div className="text-center">
            <Link href="/service" className="theme-btn">
              Know More
            </Link>
          </div>
        </div>{" "}
        {/* end container */}
      </section>
    </div>
  );
};

export default ServiceSection;
