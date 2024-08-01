"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const partnerTestimonial = () => {
  return (
    <div>
      <section className="wpo-partners-section section-padding pt-0">
        <h2 className="hidden">Partners</h2>
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="myPartnerTestimonial"
              >
                <SwiperSlide>
                  {" "}
                  <div className="grid">
                    <img src="/assets/images/partners/1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
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
        </div>{" "}
        {/* end container */}
      </section>
    </div>
  );
};

export default partnerTestimonial;
