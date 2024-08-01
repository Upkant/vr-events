import React from "react";
import ClientCarousel from "./ClientCarousel";

const ClientReviews = () => {
  return (
    <div>
      <section className="wpo-testimonial-section-s3">
        <div className="container">
          <div className="wpo-testimonial-wrap">
            <div className="row">
              <div className="col col-lg-12">
                <div className="wpo-testimonial-items">
                  <div className="wpo-section-title">
                    <span>Testimonials</span>
                    <h2>What Our Client Says</h2>
                  </div>
                  <ClientCarousel />
                  <div className="shape-1">
                    <img src="/assets/images/testimonial/svg-1.svg" alt="" />
                  </div>
                  <div className="shape-2">
                    <img src="/assets/images/testimonial/svg-2.svg" alt="" />
                  </div>
                  <div className="shape-3">
                    <img src="/assets/images/testimonial/svg-3.svg" alt="" />
                  </div>
                  <div className="shape-4">
                    <img src="/assets/images/testimonial/svg-4.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientReviews;
