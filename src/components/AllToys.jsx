import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachToyrow from "./EachToyrow";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const toys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const limitedToys = filteredToys.slice(0, limit);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setLimit(20);
  };

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 20);
  };

  return (
    <div>
      <div className="text-center mt-5">
        <input
          className="text-center"
          style={{
            borderRadius: "10px",
            fontSize: "20px",
            fontFamily: "cursive",
          }}
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>

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
            {limitedToys.map((toy) => (
              <EachToyrow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>

      {filteredToys.length > limit && (
        <div className="text-center mb-4">
          <button className="btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
