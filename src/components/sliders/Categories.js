import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Spa from "../../assets/i1.png";
import Cut from "../../assets/i2.png";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
SwiperCore.use([Navigation]);
const Categories = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-purple-300">
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          grabCursor={true}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="px-10 py-3 flex items-center justify-between  text-white flex-col">
            <div>
                <img className="h-20 p-3" src={Spa} alt="" />
                <p>Massage & Spa</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between text-white flex-col">
            <div><img className="h-20 p-3" src={Cut} alt="" />
            <p>Beauty & Salon</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between  text-white flex-col">
            <div><img className="h-20 p-3" src={Spa} alt="" />
            <p>Massage & Spa</p></div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between  text-white flex-col">
            <div><img className="h-20 p-3" src={Cut} alt="" />
            <p>Beauty & Salon</p></div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between  text-white flex-col">
            <div><img className="h-20 p-3" src={Spa} alt="" />
            <p>Massage & Spa</p></div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between text-white flex-col">
            <div><img className="h-20 p-3" src={Cut} alt="" />
            <p>Beauty & Salon</p></div>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex items-center justify-between text-white flex-col">
            <img className="h-20 p-3" src={Spa} alt="" />
            <p>Massage & Spa</p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Categories;
