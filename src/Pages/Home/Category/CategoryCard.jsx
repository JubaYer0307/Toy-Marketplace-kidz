import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Categorycard = ({ subcategory }) => {
  const { name, photo, price, rating, _id } = subcategory;
  const { user } = useContext(AuthContext);

  const notify = () => toast("You Need To Login First");

  return (
    <div className="card w-96 bg-base-100 shadow-xl" style={{ background: "#E1D6C2" }}>
      <figure className="px-10 pt-10">
        <img style={{ height: "200px" }} src={photo} alt="car" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>

        <div className="card-actions">
          {user ? (
            <Link
              to={`/details/${_id}`}
              className="btn"
              style={{ backgroundColor: "#ABE0F2", color: "black" }}
            >
              Details
            </Link>
          ) : (
            <>
              <button onClick={notify} className="btn" style={{ backgroundColor: "#ABE0F2", color: "black" }}>
                 <Link to="/login">Details</Link>
              </button>
              
            </> || <ToastContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
