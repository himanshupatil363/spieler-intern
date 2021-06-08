import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Spa from "../../assets/r1.jpg";
import Cut from "../../assets/r2.jpg";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);
const Reviews = () => {
  return (
    <div className="">
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          grabCursor={true}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="px-10 py-3 flex justify-between flex-col border">
            <div className="flex items-center justify-center">
              <img className="h-20 w-20 object-cover  p-3 rounded-full" src={Spa} alt="" />
              <p className="font-semibold text-lg">John Doe</p>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt odit animi, ullam
              totam tempore quibusdam.
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3  flex  justify-between flex-col border">
            <div className="flex items-center justify-center">
              <img className="h-20 p-3 rounded-full object-cover" src={Cut} alt="" />
              <p className="font-semibold text-lg">John Doe</p>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus a aliquam
              assumenda dolore, obcaecati doloribus!
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3 flex  justify-between flex-col border">
            <div className="flex items-center justify-center">
              <img className="h-20 w-20 object-cover  p-3 rounded-full" src={Spa} alt="" />
              <p className="font-semibold text-lg">John Doe</p>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt odit animi, ullam
              totam tempore quibusdam.
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-10 py-3  flex  justify-between flex-col border">
            <div className="flex items-center justify-center">
              <img className="h-20 p-3 rounded-full object-cover" src={Cut} alt="" />
              <p className="font-semibold text-lg">John Doe</p>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus a aliquam
              assumenda dolore, obcaecati doloribus!
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
