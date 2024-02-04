// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./meun.css";

export default function Meun() {
  return (
    <>
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
        <SwiperSlide>
          <div className=" image w-100">
            <div className="djk">
              <h1>Hotel </h1>
              <h1>Uk</h1>
            </div>
            <img src="/452-Winnett-03-c.jpg" alt="architecture-2256489_640" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" image w-100">
            <div className="djk">
              <h1>Hotel </h1>
              <h1>Uk</h1>
            </div>
            <img
              src="/Hero2023.02.15-1024-Lake-Dr._2-1024x576.jpg"
              alt="Hero2023.02.15-1024-Lake-Dr._2-1024x576"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" image w-100">
            <div className="djk">
              <h1>Hotel </h1>
              <h1>Uk</h1>
            </div>
            <img src="/building-102840_640.jpg" alt="building-102840_640" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" image w-100">
            <div className="djk">
              <h1>Scool </h1>
              <h1>Uk</h1>
            </div>
            <img
              src="/SMPL_Deyncourt-Low-Res-15-1024x712.jpg"
              alt="SMPL_Deyncourt-Low-Res-15-1024x712"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" image w-100">
            <div className="djk">
              <h1>Building </h1>
              <h1>Uk</h1>
            </div>
            <img
              src="/hero22023.04.20-85-high-res_9-1024x576.jpg"
              alt="hero22023.04.20-85-high-res_9-1024x576"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
