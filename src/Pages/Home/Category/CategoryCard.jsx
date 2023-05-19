import React from "react";

const Categorycard = ({subcategory}) => {

    const {name, photo, price, rating} = subcategory;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="car"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
