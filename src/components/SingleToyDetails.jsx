import React, { useEffect, useState } from "react";

const SingleToyDetails = () => {
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/addatoy");
      const data = await response.json();
      if (data.length > 0) {
        setToy(data[0]); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h3>Toy Details</h3>
      {toy ? (
        <>
          <p>Name: {toy.name}</p>
          <p>Sub-category: {toy.category}</p>
          <p>Price: {toy.price}</p>
          <p>Available Quantity: {toy.quantity}</p>
          <p>{toy._id}</p>
        </>
      ) : (
        <p>Loading toy details...</p>
      )}
    </div>
  );
};

export default SingleToyDetails;
