import React from "react";

const SingleToyDetails = ({ toy }) => {
  return (
    <div>
      <h3>Toy Details</h3>
      <p>Name: {toy.name}</p>
      <p>Sub-category: {toy.subcategory}</p>
      <p>Price: {toy.price}</p>
      <p>Available Quantity: {toy.availableQuantity}</p>
      
    </div>
  );
};

export default SingleToyDetails;
