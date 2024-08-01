"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { carouselData } from "./carouselData";

const ClientCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {carouselData.map((clientReview) => (
          <SwiperSlide className="swiperSlide" key={clientReview.id}>
            <div className="wpo-testimonial-item">
              <div className="wpo-testimonial-text">
                <p>{clientReview.text}</p>
                <div className="wpo-testimonial-text-btm">
                  <div className="tsm-img">
                    <img
                      src={clientReview.clientImage}
                      alt={clientReview.clientName}
                    />
                  </div>
                  <h3>{clientReview.clientName}</h3>
                  <span>{clientReview.function}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientCarousel;
