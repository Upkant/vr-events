import React from "react";
import Link from "next/link";
import HiroSection from "./HiroSection";
import ClientReviews from "@/component/reviews/ClientReviews";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
// import FunFactGrids from "@/component/FunFactGrids";

const Home = () => {
  return (
    <div>
      {/* start of hero */}
      <HiroSection />
      {/* end of hero slider */}

      {/* start wpo-about-section */}
      <AboutSection />
      {/* end about-section */}
      {/* start wpo-video-section */}
      <section className="wpo-video-section-s2 section-padding">
        <h2 className="hidden">some</h2>
        <div className="container-fluid">
          <div className="video-wrap">
            <img
              src="/assets/events/wp-40.png"
              alt=""
              className="home-video-service"
            />
            <Link href="/" className="video-btn" data-type="iframe">
              <i className="fi flaticon-play" />
            </Link>
          </div>
        </div>
      </section>
      {/* end wpo-video-section*/}
      {/* start wpo-service-section */}
      <ServiceSection />
      {/* end Service-section */}
      {/*Start wpo-testimonial-section*/}
      <ClientReviews />
      {/*End wpo-testimonial-section*/}
      {/* start wpo-offer-section */}
      <section className="wpo-offer-section section-padding pb-0">
        <div className="container-fluid">
          <div className="wpo-offer-wrap">
            <div
              className="left-img"
              style={{
                background:
                  "url(/assets/events/haldi.png) no-repeat center center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="wpo-offer-item">
              <div className="wpo-offer-inner">
                <h2>Entertainment as your event partner?</h2>
                <p className="text-left">
                  Experience unparalleled entertainment with VR Events &
                  Entertainment as your event partner. From mesmerizing
                  performances to captivating themes, we ensure every moment of
                  your event is unforgettable. Our professional team handles
                  everything from artist management to breathtaking decor,
                  making your celebrations truly extraordinary. Trust us to
                  bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </section>
      {/* end wpo-offer-section */}

      {/* start wpo-fun-fact-section */}
      <section className="wpo-fun-fact-section section-padding-counter">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">{/* <FunFactGrids /> */}</div>
          </div>
        </div>
      </section>
      {/* end wpo-fun-fact-section */}
      {/* start of wpo-contact-section */}
      <section
        className="wpo-contact-section-s8 section-padding"
        style={{
          background: "url(/assets/events/contact.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col col-lg-12 col-md-12 col-12">
              <div className="wpo-contact-section-wrapper">
                <div className="wpo-contact-section-inner">
                  <div className="wpo-contact-form-area">
                    <div className="wpo-section-title">
                      <h2>Make an Inquiry</h2>
                    </div>
                    <form
                      method="post"
                      className="contact-validation-active"
                      id="contact-form-main"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="date col-lg-6 col-md-6 col-12">
                          <input
                            className="form-control"
                            name="date"
                            autoComplete="off"
                            type="text"
                            id="datepicker"
                            placeholder="Wedding Date"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <select name="guest" className="form-control">
                            <option disabled="disabled" selected="">
                              Number Of Guests
                            </option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <select name="meal" className="form-control last">
                            <option disabled="disabled" selected="">
                              Meal Preferences
                            </option>
                            <option>Chicken Soup</option>
                            <option>Motton Kabab</option>
                            <option>Chicken BBQ</option>
                            <option>Mix Salad</option>
                            <option>Beef Ribs </option>
                          </select>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="fullwidth">
                            <textarea
                              className="form-control"
                              name="note"
                              id="note"
                              placeholder="Message..."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="submit-area">
                        <button type="submit" className="theme-btn">
                          Send An Inquiry
                        </button>
                        <div id="c-loader">
                          <i className="ti-reload" />
                        </div>
                      </div>
                      <div className="clearfix error-handling-messages">
                        <div id="success">Thank you</div>
                        <div id="error">
                          {" "}
                          Error occurred while sending email. Please try again
                          later.
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of wpo-contact-section */}
      {/* start wpo-blog-section */}
      <section className="wpo-blog-section bg-white section-padding">
        <div className="container">
          <div className="row">
            <div className="wpo-section-title">
              <span>Our Blog</span>
              <h2>Our Latest Wedding News</h2>
            </div>
          </div>
          <div className="wpo-blog-items">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-12">
                <div
                  className="wpo-blog-item wow fadeInUp"
                  data-wow-duration="1000ms"
                >
                  <div className="wpo-blog-img">
                    <img src="/assets/images/blog/img-1.jpg" alt="" />
                  </div>
                  <div className="wpo-blog-content">
                    <ul>
                      <li>
                        By <a href="/">Robertson Doe</a>
                      </li>
                      <li>25 Sep 2023</li>
                    </ul>
                    <h2>
                      <Link href="/">
                        Top 10 wedding bouquet arranging idea
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-12">
                <div
                  className="wpo-blog-item wow fadeInUp"
                  data-wow-duration="1200ms"
                >
                  <div className="wpo-blog-img">
                    <img src="/assets/images/blog/img-2.jpg" alt="" />
                  </div>
                  <div className="wpo-blog-content">
                    <ul>
                      <li>
                        By <a href="/">David Luis</a>
                      </li>
                      <li>23 Sep 2023</li>
                    </ul>
                    <h2>
                      <Link href="/">You must need a great photographer.</Link>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-12">
                <div
                  className="wpo-blog-item wow fadeInUp"
                  data-wow-duration="1400ms"
                >
                  <div className="wpo-blog-img">
                    <img src="/assets/images/blog/img-3.jpg" alt="" />
                  </div>
                  <div className="wpo-blog-content">
                    <ul>
                      <li>
                        By <Link href="/">Aliana de</Link>
                      </li>
                      <li>21 Sep 2023</li>
                    </ul>
                    <h2>
                      <Link href="/">
                        Make sure your wedding gown is the best one.
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </section>
      {/* end wpo-blog-section */}
      {/* start wpo-partners-section */}
      <partnerTestimonial />
      {/* end wpo-partners-section*/}
    </div>
  );
};

export default Home;
