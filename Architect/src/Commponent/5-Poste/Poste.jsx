// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./poste.css";
// import required modules
import { Pagination } from "swiper/modules";

export default function Poste() {
  return (
    <>
      <div className="PosteParen">
        <h1 className="text-center fw-bold">Recent Posts</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mx-4 py-5 mt-5 d-flex flex-row gap-2 row"
        >
          <SwiperSlide>
            <div className="w-100  py-5 flex-grow-1 col-lg-3 col-md-10">
              <img
                style={{ height: "310px" }}
                className="w-100 "
                src="/Courtyards.jpg"
                alt="Courtyards"
              />
              <div>
                <h3>Courtyards</h3>
                <h6>29 January 2024</h6>
                <p>
                  Courtyards are a design intervention that have been around for
                  centuries, and are typically an open, outdoor space surrounded
                  by walls. Traditional houses don’t usually
                </p>
              </div>
              <h6 className="fw-bold">Read More »</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100 py-5 flex-grow-1 col-lg-3 col-md-10">
              <img
                className="w-100 h-75  "
                src="/Cladding.webp"
                alt="Cladding"
              />
              <div>
                <h3>Courtyards</h3>
                <h6>29 January 2024</h6>
                <p>
                  Courtyards are a design intervention that have been around for
                  centuries, and are typically an open, outdoor space surrounded
                  by walls. Traditional houses don’t usually
                </p>
              </div>
              <h6 className="fw-bold">Read More »</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-100   flex-grow-1 py-5 col-lg-3 col-md-10 w-100">
              <img
                className="w-100   "
                src="/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1).jpg"
                alt="SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1)"
              />
              <div>
                <h3>Courtyards</h3>
                <h6>29 January 2024</h6>
                <p>
                  Courtyards are a design intervention that have been around for
                  centuries, and are typically an open, outdoor space surrounded
                  by walls. Traditional houses don’t usually
                </p>
                <h6 className="fw-bold">Read More »</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100   py-5 flex-grow-1 col-lg-3 col-md-10">
              <img
                style={{ height: "310px" }}
                className="w-100   "
                src="/featured-1-1024x576.jpg"
                alt="featured-1-1024x576"
              />
              <div>
                <h3>Courtyards</h3>
                <h6>29 January 2024</h6>
                <p>
                  Courtyards are a design intervention that have been around for
                  centuries, and are typically an open, outdoor space surrounded
                  by walls. Traditional houses don’t usually
                </p>
                <h6 className="fw-bold">Read More »</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100 py-5 flex-grow-1 col-lg-3 col-md-10">
              <img
                style={{ height: "310px" }}
                className="w-100  "
                src="/smpl-design-2030-project-hero-1024x631.webp"
                alt="smpl-design-2030-project-hero-1024x631"
              />
              <div>
                <h3>Courtyards</h3>
                <h6>29 January 2024</h6>
                <p>
                  Courtyards are a design intervention that have been around for
                  centuries, and are typically an open, outdoor space surrounded
                  by walls. Traditional houses don’t usually
                </p>
                <h6 className="fw-bold">Read More »</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="d-flex justify-content-end align-items-center  All-progect">
          <h2> View All Posts</h2>
          <div className="  icon-arrow-right2" />
        </div>
      </div>
    </>
  );
}
