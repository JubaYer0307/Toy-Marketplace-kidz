import React from "react";
import { useLoaderData } from "react-router-dom";
import EachToyrow from "./EachToyrow";


const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div>
      

      <div className="overflow-x-auto w-full mt-4 mb-4">
        <table className="table w-full">
          <thead>
            <tr>
              
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Seller Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
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
