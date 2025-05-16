import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const CoffeeEdet = () => {
  const coffee = useLoaderData();
  const { _id, name, categoty, taste, supplier, price, details, photo } =
    coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatecoffee = Object.fromEntries(formData.entries());
    console.log(updatecoffee);
    //send updated coffee to db

    fetch(`http://localhost:4000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatecoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            title: "Coffee added seccessfully!",
            icon: "success",
            showConfirmButton: false,
            time: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/rGzMBGvx/11.png')] w-full object-cover">
      <div className="w-10/12 mx-auto mb-6">
        <div className="my-5">
          <h5 className="rancho-regular text-xl font-bold flex gap-4">
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
        </div>

        <div className="bg-[#f4f3f0] rounded-xl ">
          <div className="w-10/12 mx-auto">
            <div>
              <h4 className="footer-text rancho-regular text-center">
                Update Existing Coffee Details
              </h4>
              <p className="text-[16px] text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div className="mt-8 pb-">
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-2 gap-4">
                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Name
                    </legend>
                    <input
                      defaultValue={name}
                      type="text"
                      name="name"
                      placeholder="Enter Coffee Name"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Full Name")}
                      className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>

                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Supplier
                    </legend>
                    <input
                      defaultValue={supplier}
                      type="text"
                      name="supplier"
                      placeholder="Enert coffee supplier "
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Email")}
                      className="w-full px-4 py-2   rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>

                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Category
                    </legend>
                    <input
                      defaultValue={categoty}
                      type="text"
                      name="categoty"
                      placeholder="Enter coffee category"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Password")}
                      className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>

                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Price
                    </legend>
                    <input
                      defaultValue={price}
                      type="text"
                      name="price"
                      placeholder="Enter coffee price"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Phone Number")}
                      className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>

                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Taste
                    </legend>
                    <input
                      defaultValue={taste}
                      type="text"
                      name="taste"
                      placeholder="Enter coffee taste"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Address")}
                      className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>

                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700 mb-1">
                      Details
                    </legend>
                    <input
                      defaultValue={details}
                      type="text"
                      name="details"
                      placeholder="Enter coffee details"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Date of Birth")}
                      className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1e12] shadow-sm"
                    />
                  </fieldset>
                </div>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700 mb-1">
                    Photo Url
                  </legend>
                  <input
                    defaultValue={photo}
                    type="text"
                    name="photo"
                    placeholder="Date of Birth"
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

export default CoffeeEdet;
