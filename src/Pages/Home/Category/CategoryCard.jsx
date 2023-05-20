// Categorycard.js
import React from "react";
import { Link } from "react-router-dom";

const Categorycard = ({ subcategory }) => {
  const { name, photo, price, rating, _id } = subcategory;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="car" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>

        <div className="card-actions">
          <Link to={`/details/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
