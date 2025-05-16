import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeVew = () => {
  const coffee = useLoaderData();

  const { _id, name, categoty, taste, supplier, price, details, photo } =
    coffee;

  return (
    <div className="bg-[url('https://i.ibb.co/rGzMBGvx/11.png')]">
      <div className="my-16 w-8/12 mx-auto">
        <h5 className="my-3 rancho-regular flex gap-4">
          <Link className="floating-arrow" to="/">
            <svg
    className="w-6 h-6 text-gray-700 floating-arrow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
          </Link>{" "}
          Go to home
        </h5>
        <div className="rounded-2xl md:flex justify-center items-cente md:gap-44 bg-[#F4F3F0]  ">
          <div className="flex items-center justify-center">
            <img className="" src={photo} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <div className=" py-20">
              <h5></h5>
              <p>
                Name:<span className="text-[16px] text-gray-500">{name}</span>
              </p>
              <p>
                Price:<span className="text-[16px] text-gray-500">{price}</span>
              </p>
              <p>
                Supplier:
                <span className="text-[16px] text-gray-500">{supplier}</span>
              </p>
              <p>
                Taste:{" "}
                <span className="text-[16px] text-gray-500">{taste}</span>
              </p>
              <p>
                Category:{" "}
                <span className="text-[16px] text-gray-500">{categoty}</span>
              </p>
              <p>
                Details:{" "}
                <span className="text-[16px] text-gray-500">{details}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeVew;
