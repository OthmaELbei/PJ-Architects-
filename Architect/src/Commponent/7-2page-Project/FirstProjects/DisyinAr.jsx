// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Image } from "antd";

export default function DisyinAr(p) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper py-5"
      >
        <SwiperSlide>
          <div className="py-5 w-100 h-100 d-flex gap-p">
            <Image className="w-100 h-100" src={p.Image1} alt="" />
            <Image className="w-100 h-100" src={p.Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5 my-5 w-100 h-100 d-flex gap-p">
            <Image className="w-100 h-100" src={p.Image3} alt="" />
            <img className="w-50 h-50" src={p.Image4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
