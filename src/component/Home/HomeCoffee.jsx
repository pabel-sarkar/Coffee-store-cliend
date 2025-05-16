import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const HomeCoffee = ({ coffee,setCoffees,coffees }) => {
  const { name, price, taste, _id,photo } = coffee;

  const handleDeletCoffee = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delet db
        fetch(`http://localhost:4000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const removeCoffee = coffees.filter(coffee=> coffee._id !== _id)
              setCoffees(removeCoffee);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around items-center border bg-[#F5F4F1] rounded-xl mb-3">
        <div>
          <img className="md:w-48 w-40  h-52 md:h-60" src={photo} alt="" />
        </div>
        <div>
          <p>
            name: <span className="text-gray-500">{name}</span>
          </p>
          <p>
            chef: <span className="text-gray-500">{taste}</span>
          </p>
          <p>
            Price: <span className="text-gray-500">{price}</span>
          </p>
        </div>
        <div className="grid grid-cols-1">
          <Link to={`/coffeeVew/${_id}`}>
            <button className="btn bg-[#D2B48C]">
              <EyeIcon className="h-5 w-5 text-white" />
            </button>
          </Link>
        <Link to={`/coffeeEdit/${_id}`}>
            {" "}
            <button className="btn bg-[#3C393B]">
              <PencilIcon className="h-5 w-5 text-white " />
            </button>
          </Link>
          <button
            onClick={() => handleDeletCoffee(_id)}
            className="btn bg-[#EA4744]"
          >
            <TrashIcon className="h-5 w-5 text-white " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCoffee;
