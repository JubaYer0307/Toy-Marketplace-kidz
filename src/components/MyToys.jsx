import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Track the sorting order

  const handleToyDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-eta.vercel.app/addatoy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              window.location.reload();
              
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user) {
      const url = `https://toy-marketplace-server-eta.vercel.app/mytoys?sellerEmail=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMyToys(data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  useEffect(() => {
    const sortedToys = [...myToys].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setMyToys(sortedToys);
  }, [sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="text-center mb-4 mt-4">
        <button onClick={toggleSortOrder} className="btn">
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {myToys.map((toy) =>
          toy.sellerEmail === user.email ? (
            <div className="card w-96 bg-base-100 shadow-xl mb-5" key={toy._id}>
              <figure>
                <img src={toy.photo} alt="Toy" style={{ width: "100%" }} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
                <p>Quantity: {toy.quantity}</p>
                <p>Rating: {toy.rating}</p>
                <p>Price: {toy.price}</p>
                <p>Subcategory: {toy.subcategory}</p>
                <p>Details: {toy.details}</p>

                <div className="card-actions justify-end">
                  <Link to={`/updatetoy/${toy._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleToyDelete(toy._id);
                      
                    }}
                    className="btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MyToys;
