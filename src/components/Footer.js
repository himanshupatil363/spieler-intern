import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col px-3 md:px-20 pt-10 bg-gray-200">
      <div className="flex">
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col">
            <p className="font-semibold py-5 text-lg">Company</p>
            <p className="mb-2 md:mb-4">About</p>
            <p className="mb-2 md:mb-4">Book Now</p>
            <p className="mb-2 md:mb-4">Offers</p>
            <p className="mb-2 md:mb-4">Terms & Conditions</p>
          </div>
          <div className="flex-1 flex border-r border-gray-300 flex-col">
            <p className="font-semibold py-5 text-lg">Help</p>
            <p className="mb-2 md:mb-4">FAQs</p>
            <p className="mb-2 md:mb-4">Contact</p>
            <p className="mb-2 md:mb-4">Support</p>
            <p className="mb-2 md:mb-4">Policy</p>
          </div>
        </div>

        <div className="flex-1 flex md:mx-10">
          <div className="flex-1 flex flex-col ">
            <p className="font-semibold py-5 text-lg">Follow Us On</p>
            <p className="mb-2 md:mb-4">Facebook</p>
            <p className="mb-2 md:mb-4">Twitter</p>
            <p className="mb-2 md:mb-4">LinkedIn</p>
          </div>
          <div className="flex-1 flex flex-col py-5">
              <p className="mt-10 mb-4 ">Google Plus</p>
              <p className="mb-4">Youtube</p>
          </div>
        </div>
      </div>
      <hr  className="mt-2 border-1 border-gray-300"/>
      <div className="py-3">@2018. All rights Reserved</div>
    </div>
  );
};

export default Footer;
