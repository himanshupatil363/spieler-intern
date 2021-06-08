import React from 'react'
import star from '../assets/star.png'
const Tcard = ({data}) => {
    return (
        <div className="rounded-md my-4 shadow-lg mx-4 py-4 bg-white">
            <img className="rounded-t-md h-48 w-80" src={data.img.default} alt="" />
            <div className="px-4 mt-3">
            <p className="text-2xl font-bold">{data.title}</p>
            <p className="text-orange-500">{data.desc}</p>
            <p className="text-gray-400">{data.location}</p>
            <span className="flex items-center justify-around"><img src={star} alt="" /><p>{data.rating}</p><p>{data.time} min</p><p className="text-purple-600">{data.discount}% OFF</p></span>
            </div>
        </div>
    )
}
export default Tcard
