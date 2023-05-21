import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const UpdateToy = () => {
  const toy = useLoaderData();
  const {
    name,
    rating,
    price,
    category,
    quantity,
    details,
    photo,
    _id,
    subcategory,
  } = toy;

  const { user } = useContext(AuthContext);
  const sellerName = user?.displayName;
  const sellerEmail = user?.email;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedToy = {
      quantity: form.elements.quantity.value,

      price: form.elements.price.value,

      details: form.elements.details.value,
    };

    fetch(`https://toy-marketplace-server-eta.vercel.app/addatoy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#35D3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Update {name}</h2>
      <form onSubmit={handleUpdateToy} className="">
        <div className="md:flex mb-8">
          <div className="form-control md:w-full ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-full ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-full ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Toy" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateToy;
