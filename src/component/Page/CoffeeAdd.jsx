import { FolderIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeAdd = () => {
  const handleAddToCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const frmData = new FormData(form);
    const newCoffee = Object.fromEntries(frmData.entries());
    // console.log(newCoffee);

    //send coffeee data to db
    fetch("http://localhost:4000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added seccessfully!",
            icon: "success",
            draggable: true,
          });
         form.reset()
        }
      });
  };
  return (
   <div className="bg-[url('https://i.ibb.co/rGzMBGvx/11.png')]">
    <div className="mt-10 w-10/12 mx-auto">
    <h5 className="rancho-regular text-xl font-bold flex gap-4 mb-3">
            <Link className="floating-arrow" to="/">
              {" "}
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
            Back To Home
          </h5>
       <div className="bg-[#f4f3f0] rounded-xl mb-6">
      <div className="w-10/12 mx-auto">
        <div>
          <h4 className="footer-text rancho-regular text-center">
            Add New Coffee
          </h4>
          <p className="text-[16px] text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="mt-8 pb-">
          <form onSubmit={handleAddToCoffee}>
            <div className="grid grid-cols-2 gap-4">
              <fieldset className="mb-4">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Coffee Name"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter Coffee Name")}
                  className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Supplier
                </legend>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enert coffee supplier "
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enert coffee supplier")}
                  className="w-full px-4 py-2   rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Category
                </legend>
                <input
                  type="text"
                  name="categoty"
                  placeholder="Enter coffee category"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter coffee category")}
                  className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Price
                </legend>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter coffee price"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter coffee price")}
                  className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Taste
                </legend>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter coffee taste")}
                  className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>

              <fieldset>
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Details
                </legend>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter coffee details")}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                />
              </fieldset>
            </div>
            <fieldset>
              <legend className="text-sm font-medium text-gray-700 mb-1">
                Photo Url
              </legend>
              <input
                type="text"
                name="photo"
                placeholder="Your photo url"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Date of Birth")}
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
              />
            </fieldset>
            <button type="submit" className="btn w-full mt-3 bg-[#E3B577]">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default CoffeeAdd;
