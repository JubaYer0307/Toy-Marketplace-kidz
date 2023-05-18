import React from "react";
import { useLoaderData } from "react-router-dom";
import EachToyrow from "./EachToyrow";
import SingleToyDetails from "./SingleToyDetails";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div>
      <h2>All ToY</h2>

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
              <EachToyrow key={toy._id} toy={toy}></EachToyrow>
              
            ))}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
