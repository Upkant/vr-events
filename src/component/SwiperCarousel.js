"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperCarousel = () => {
  return (
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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="swiperSlide">
        <div className="wpo-testimonial-item">
          <div className="wpo-testimonial-text">
            <p>
              Suspendisse dui a hac ultricies integer. In mollis cras
              sollicitudin orci eget. Pellentesque et urna arcu pulvinar amet.
              Pretium aliquam nam imperdiet augue magna id nec aliquet
              consequat. Amet senectus faucibus urna integer ac elementum est
              purus venenatis.
            </p>
            <div className="wpo-testimonial-text-btm">
              <div className="tsm-img">
                <img src="/assets/images/testimonial/thumb-1.jpg" alt="" />
              </div>
              <h3>Marlin &amp; Williamson</h3>
              <span>Wedding- 23.05.2022</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
