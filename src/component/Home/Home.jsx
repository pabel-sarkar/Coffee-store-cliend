import React, { useState } from "react";
import HomeCoffee from "./HomeCoffee";
import { Link, useLoaderData } from "react-router";
import CoffeeImg from "./CoffeeImg";

const Home = () => {
 
  const newCoffee = useLoaderData();
   const [coffees,setCoffees] = useState(newCoffee)
  return (
    <div>
     
      {/* hero */}
      <div className="min-h-screen bg-[url('https://i.ibb.co/fYQtbXp7/3.png')] bg-cover  flex items-center md:justify-end px-6">
        <div className="mr-10">
          <div className=" md:w-[724px] ">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Would you like a of Delicious
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-6">
              It’s coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <Link to='/learn'>
            <button className=" bg-[#e09c50] text-white  py-2 px-6 rounded  ">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Aweesome */}

      <div className="bg-[rgb(236,234,227)]">
        <div className="w-10/12 mx-auto py-6 pt-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:w-">
            <img
              className="w-14 mb-2"
              src="https://i.ibb.co/wr38gRCP/1.png"
              alt=""
            />
            <h4 className="rancho-regular mb-2 text-3xl">Awesome Aroma</h4>
            <p className="w- text-[16px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="w-">
            <img
              className="w-14 mb-2"
              src="https://i.ibb.co/wr38gRCP/1.pnghttps://i.ibb.co/tp2zGB2r/2.png"
              alt=""
            />
            <h4 className="rancho-regular mb-2 text-3xl">Awesome Aroma</h4>
            <p className="w- text-[16px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="w-">
            <img
              className="w-14 mb-2"
              src="https://i.ibb.co/bjB4rKGb/3.png"
              alt=""
            />
            <h4 className="rancho-regular mb-2 text-3xl">Awesome Aroma</h4>
            <p className="w- text-[16px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="w-">
            <img
              className="w-14 mb-2"
              src="https://i.ibb.co/23kqXtTN/5.png"
              alt=""
            />
            <h4 className="rancho-regular mb-2 text-3xl">Awesome Aroma</h4>
            <p className="w- text-[16px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-[url('https://i.ibb.co/CppS6L3p/1.png')] mb-4">
        <div className="my-5">
          <p className="text-center">---Sip & Savor---</p>
        <h2 className="text-center footer-text rancho-regular">
          Our Popular Product
        </h2>
        <Link  className="flex justify-center" to="/CoffeeAdd">
          <button className="btn rancho-regular bordr-2  text-white  bg-[#E3B577]">
            Add Coffee
          </button>
        </Link>
        </div>
      <div className="w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 md:gap-4 ">
          {
          coffees.map(coffee=><HomeCoffee coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></HomeCoffee>)
        }
        </div>
      </div>
    </div>


 {/* ////// */}

      <div className="w-10/12 mx-auto my-10">
      <div className="my-5">
        <p className="text-center">Follow Us Now</p>
        <h5 className="footer-text rancho-regular text-center">Flow on Instagram</h5>
      </div>
        <CoffeeImg></CoffeeImg>
      </div>

    </div>
  );
};

export default Home;
