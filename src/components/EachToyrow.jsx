import React from "react";
import { Link } from "react-router-dom";

const EachToyrow = ({ toy }) => {
  const { name, rating, price, category, quantity, details, photo, _id, sellerName, 
    subcategory } = toy;
  return (
    <tr>
      
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subcategory}</td>
      
      <td>{sellerName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
      <Link to={`/details/${_id}`} className="btn ">
            View Details
          </Link>
      </th>
    </tr>
  );
};

export default EachToyrow;
