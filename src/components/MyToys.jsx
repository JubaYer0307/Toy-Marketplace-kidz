import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/mytoys?sellerEmail=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.log(error));
    }
  }, [user]);

  return (
    
    <div>
      
      <div className="grid grid-cols-2 gap-3">
      
      {/* Render the myToys state data */}
      {myToys.map((toy) =>
        toy.sellerEmail === user.email ? (
          <div
            className="card card-side bg-base-100 shadow-xl mb-5 max-h-64 max-w-screen-sm"
            key={toy._id}
          >
            <figure>
              <img src={toy.photo} style={{ width: "350px" }} />
            </figure>
            <div className="card-body text-center justify-center items-center">
              <h2 className="card-title ">{toy.name}</h2>
              <p>Quantity: {toy.quantity}</p>
              <p>Rating: {toy.rating}</p>
              <p>Price: {toy.price}</p>
              <p>Subcategory: {toy.subcategory}</p>
              <p>Details: {toy.details}</p>

              <div className="card-actions justify-end ">
                <button className="btn">Update</button>
                <button className="btn ">Delete</button>
                
              </div>
            </div>
          </div>
        ) : (
          <div ></div>
        )
      )}
    </div>
    </div>
  );
};

export default MyToys;
