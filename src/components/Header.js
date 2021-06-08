import React from "react";
import Per from '../assets/per.png'
const Header = () => {
  return (
    <div className="flex flex-row justify-between md:py-5 py-4 md:px-40 items-center ">
      <div  className="text-orange-500 font-bold text-2xl md:text-3xl">Logo</div>
      <div className="flex items-center">
        <p className="mr-1 md:mx-6 flex items-center">
          <img className="h-5 md:h-6" src={Per} alt="" /> Offers
        </p>
        <p className="mr-1 md:mx-6 text-orange-500">Become A Professional</p>
        <p className="mr-2 md:mx-6">Login/Sign Up</p>
      </div>
    </div>
  );
};

export default Header;
