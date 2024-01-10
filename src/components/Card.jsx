import React from "react";
import Headphones from "../assets/headphones.jpg";

const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full h-full object-cover rounded cursor-pointer"
          src={Headphones}
          alt="/"
        />
      </div>
      <div>
        <p className="font-semibold text-xl">Apple Headphones</p>
        <p className="text-sm pb-2 font-bold text-red-600">Price: $1.298.00</p>
        <p className=" font-normal text-gray-600">
          Immerse yourself in a world of unparalleled audio quality with our premium XYZ Wireless Headphones
          Experience music like never before with our state-of-the-art XYZ Wireless Headphones. Engineered with precision and crafted for comfort, these headphones redefine your listening experience with crystal-clear sound and unparalleled comfort.
        </p>
      </div>
    </div>
  );
};

export default Card;
