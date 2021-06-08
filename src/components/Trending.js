import React from "react";
import Tcard from "./Tcard";
const Trending = () => {
  const data = [
    {
      "img": require("../assets/spa.png"),
      "title":"Total Relief Massage Center",
      "desc":"Unisex Massage Center",
      "location":"Kothrud, Pune",
      "rating":"3.4",
      "time":"21",
      "discount":"30"
    },
    {
      "img": require("../assets/spa2.jpg"),
      "title":"Total Relief Massage Center",
      "desc":"Unisex Massage Center",
      "location":"Kothrud, Pune",
      "rating":"3.4",
      "time":"21",
      "discount":"30"
    },
    {
      "img": require("../assets/spa3.jpg"),
      "title":"Total Relief Massage Center",
      "desc":"Unisex Massage Center",
      "location":"Kothrud, Pune",
      "rating":"3.4",
      "time":"21",
      "discount":"30"
    },
    {
      "img": require("../assets/spa.png"),
      "title":"Total Relief Massage Center",
      "desc":"Unisex Massage Center",
      "location":"Kothrud, Pune",
      "rating":"3.4",
      "time":"21",
      "discount":"30"
    },
  ];
  return (
    <div className="mx-20 mt-10">
      <p className="ml-4 font-semibold text-2xl">Trending</p>
      <div className="flex md:flex-row flex-col justify-center">
        
        {data.map((card,index)=>(
            <Tcard data={card} key={index} />
            ))}
      </div>
    </div>
  );
};

export default Trending;
