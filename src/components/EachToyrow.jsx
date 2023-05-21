import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const EachToyrow = ({ toy }) => {
  const {
    name,
    rating,
    price,
    category,
    quantity,
    details,
    photo,
    _id,
    sellerName,
    subcategory,
  } = toy;
  const { user } = useContext(AuthContext);
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
        {user ? (
          <Link to={`/details/${_id}`} className="btn ">
            View Details
          </Link>
        ) : (
          <div>
            <Link to={`/login`} className="btn ">
              View Details
            </Link>
          </div>
        )}
      </th>
    </tr>
  );
};

export default EachToyrow;
