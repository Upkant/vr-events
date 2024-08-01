import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="wpo-about-section-s2 section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                <div className="wpo-section-title">
                  <span>Who We Are?</span>
                  <h2>We are The World Best Wedding Agency</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div
                  className="wpo-about-text wow fadeInLeftSlow"
                  data-wow-duration="1000ms"
                >
                  <h2>Planning Your Dreamy Luxury Events</h2>
                  <p>
                    <small>W</small>elcome to VR Events & Entertainment, where
                    creativity meets excellence. With over 12 years of
                    experience, we deliver unforgettable events and seamless
                    management solutions. Our journey began with a passion for
                    memorable experiences, making us a trusted partner for
                    innovation and professionalism. Our dedicated team brings
                    your vision to life with meticulous planning, creative
                    design, and flawless execution, ensuring client satisfaction
                    and memorable events from weddings to corporate gatherings.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-img-items">
                    <div className="wpo-about-img-item">
                      <img src="/assets/events/wp-4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="wpo-about-img-topper">
                    <img src="/assets/events/wp-5.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
    </div>
  );
};

export default AboutSection;
