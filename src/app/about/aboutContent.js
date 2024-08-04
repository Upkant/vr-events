import React from "react";
import Link from "next/link";
import AboutSection from "../home/AboutSection";
import ClientReviews from "@/component/reviews/ClientReviews";
import { servicesData } from "../service/ServiceCards";
import FunFactGrids from "@/component/FunFactGrids";

const AboutContent = () => {
  return (
    <div>
      <section className="wpo-page-title">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>About Us</h2>
                <ol className="wpo-breadcumb-wrap">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>About</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="wpo-fun-fact-section section-padding-counter">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <FunFactGrids />
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-service-section-s2 section-padding" id="Service">
        <div className="container-fluid">
          <div className="wpo-section-title-s2">
            <span>Our Services</span>
            <h2>What We Offer For You</h2>
          </div>
          <div className="wpo-service-wrap">
            <div className="row">
              {servicesData
                .filter((service) => service.id >= 1 && service.id <= 4)
                .map((service) => (
                  <div
                    key={service.id}
                    className="col-lg-3 col-md-6 col-sm-6 col-12"
                  >
                    <div
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
      </section>

      <ClientReviews />


    </div>
  );
};

export default AboutContent;
