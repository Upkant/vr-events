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

      {/* <section className="wpo-team-section-s2 section-padding">
        <div className="container">
          <div className="wpo-section-title">
            <span>Our Organizer</span>
            <h2>Awesome Team Members</h2>
          </div>
          <div className="wpo-team-wrap">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                <div
                  className="wpo-team-item wow fadeInUp"
                  data-wow-duration="1000ms"
                >
                  <div className="wpo-team-img-wrap">
                    <div className="wpo-team-img">
                      <div className="wpo-team-img-inner">
                        <img src="/assets/images/team/img-5.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>
                      <a href="team-single.html">Jenny Wilson</a>
                    </h3>
                    <span>Wedding Planner</span>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                <div
                  className="wpo-team-item wow fadeInUp"
                  data-wow-duration="1200ms"
                >
                  <div className="wpo-team-img-wrap">
                    <div className="wpo-team-img">
                      <div className="wpo-team-img-inner">
                        <img src="/assets/images/team/img-6.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>
                      <a href="team-single.html">Robert Fox</a>
                    </h3>
                    <span>Dress Designer</span>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                <div
                  className="wpo-team-item wow fadeInUp"
                  data-wow-duration="1400ms"
                >
                  <div className="wpo-team-img-wrap">
                    <div className="wpo-team-img">
                      <div className="wpo-team-img-inner">
                        <img src="/assets/images/team/img-7.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>
                      <a href="team-single.html">Annette Black</a>
                    </h3>
                    <span>Makeup Artist</span>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                <div
                  className="wpo-team-item wow fadeInUp"
                  data-wow-duration="1600ms"
                >
                  <div className="wpo-team-img-wrap">
                    <div className="wpo-team-img">
                      <div className="wpo-team-img-inner">
                        <img src="/assets/images/team/img-8.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>
                      <a href="team-single.html">Jenefer Abram</a>
                    </h3>
                    <span>CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="wpo-partners-section section-padding pt-0">
        <h2 className="hidden">Partners</h2>
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="partner-grids partners-slider owl-carousel">
                <div className="grid">
                  <img src="/assets/images/partners/1.png" alt="" />
                </div>
                <div className="grid">
                  <img src="/assets/images/partners/2.png" alt="" />
                </div>
                <div className="grid">
                  <img src="/assets/images/partners/3.png" alt="" />
                </div>
                <div className="grid">
                  <img src="/assets/images/partners/4.png" alt="" />
                </div>
                <div className="grid">
                  <img src="/assets/images/partners/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
