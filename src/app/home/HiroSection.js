"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { carouselHeroData } from "./carouselHeroData";

const HiroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div>
      <section className="wpo-hero-slider wpo-hero-slider-s2">
        <h2 className="hidden">some</h2>
        <div className="swiper-container">
          <Swiper
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {carouselHeroData.map((slide) => (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                <div
                  className="slide-inner slide-bg-image"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                  <div className="container-fluid">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-8 col-12">
                        <div
                          className="wpo-static-hero-wrap"
                          data-swiper-parallax={200}
                        >
                          <div className="wpo-static-hero-inner">
                            <div
                              className="slide-title-sub wow fadeInUp"
                              data-wow-duration="1400ms"
                            >
                              <h3>{slide.titleSub}</h3>
                            </div>
                            <div
                              className="slide-title wow fadeInUp"
                              data-wow-duration="1500ms"
                            >
                              <h2>{slide.title}</h2>
                            </div>
                            <div
                              className="slide-text wow fadeInUp"
                              data-wow-duration="1600ms"
                            >
                              <p>{slide.text}</p>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="shape-1">
                            <img
                              src="/assets/images/slider/shape11.svg"
                              alt=""
                            />
                          </div>
                          <div className="shape-2">
                            <img
                              src="/assets/images/slider/shape12.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
      </section>
    </div>
  );
};

export default HiroSection;
