import React from "react";
import { useLoaderData } from "react-router-dom";
import EachToyrow from "./EachToyrow";
import SingleToyDetails from "./SingleToyDetails";
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
              <React.Fragment key={toy._id}>
                <EachToyrow toy={toy} />
                <Subcategory toy={toy} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
