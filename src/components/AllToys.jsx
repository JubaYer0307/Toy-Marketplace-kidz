import React from "react";
import { useLoaderData } from "react-router-dom";
import EachToyrow from "./EachToyrow";
import Subcategory from "../Pages/Home/Category/Subcategory";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div>
      

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <EachToyrow key={toy._id} toy={toy}></EachToyrow>,
              <Subcategory key={toy._id} toy={toy}></Subcategory>

            ))}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
