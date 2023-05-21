import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const sellerName = user?.displayName;
  const sellerEmail = user?.email;

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const subcategory = document.querySelector(".select").value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newToy = {
      name,
      quantity,
      rating,
      price,
      subcategory,
      details,
      photo,
      sellerName,
      sellerEmail,
    };

    fetch("https://toy-marketplace-server-eta.vercel.app/addatoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#35D3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Add a Toy</h2>
      <form onSubmit={handleAddToy}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered" defaultValue="">
              <option disabled value="">
                Pick Category
              </option>
              <option value="police">Police Car</option>
              <option value="racing">Racing Car</option>
              <option value="fire">Fire Car</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Toy" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddToy;
