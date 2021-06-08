import React from "react";
import Cover from "../assets/cover.jpg";
import Flight from "../assets/flight.png";
import Gps from "../assets/gps.png";
import Categories from "../components/sliders/Categories";
import Reviews from "../components/sliders/Reviews";
import Trending from "../components/Trending";
import Card from "../assets/card.jpg";
import Phone from "../assets/phone.png";
import appStore from '../assets/appStore.png';
import googlePlay from '../assets/googlePlay.png';
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <div
        className="w-full bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <div className="h-full backdrop-filter py-44 backdrop-brightness-50 flex flex-col items-center justify-center">
          <p className="text-white text-2xl md:text-5xl  font-semibold">
            Treat Yourself To A Revitalising Treatment
          </p>
          <span className="flex bg-white mt-24 items-center justify-between rounded-md">
            <img src={Flight} className="h-5 flex items-center md:px-6 px-2" alt="" />
            <input
              placeholder="Thiruvanatpuram"
              className="text-white md:py-3 md:px-10"
              type="text"
              name=""
              id=""
            />
            <button className="px-6 py-3">
              <img className="h-5" src={Gps} alt="" />
            </button>
          </span>
        </div>
      </div>
      <Categories />
      <Trending />
      <div className="flex justify-center mt-20">
        <div
          className="w-4/5 md:w-3/5 h-32 bg-top bg-cover rounded-md "
          style={{ backgroundImage: `url(${Card})` }}
        >
          <div className="flex justify-around items-center rounded-md h-full w-full backdrop-filter backdrop-brightness-50">
            <p className="text-base md:text-3xl text-white">
              Grow your business with us.
              <br />
              Become a professional.
            </p>
            <button className="bg-purple-400 px-4 py-2 md:px-10 md:py-3 text-xs md:text-base rounded-md text-white">JOIN NOW</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl font-semibold my-20">Customer Reviews</div>
      <Reviews />
      <div className="flex mt-20">
      <div className="flex-1 flex justify-end items-center "><img className="w-6/7 md:w-1/2" src={Phone} alt="" /></div>
      <div className="flex-1 flex flex-col justify-center md:ml-20 ml-4 items-start">
        <p className="text-xl md:text-3xl font-semibold mb-4">Download The App</p>
        <p className="mb-4">Choose & book from available <br /> services at our platform.</p>
        <div className="flex flex-col md:flex-row items-center">
          <img className="w-24 md:w-full mb-2 md:mb-0 md:mr-3 " src={googlePlay} alt="" />
          <img className="w-24 md:w-full" src={appStore} alt="" />
        </div>
      </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
