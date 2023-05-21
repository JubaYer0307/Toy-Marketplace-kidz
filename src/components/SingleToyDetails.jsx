
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const SingleToyDetails = () => {
  useTitle('Details')
  const [toy, setToy] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://toy-marketplace-server-eta.vercel.app/addatoy/${id}`);
      const data = await response.json();
      if (data) {
        setToy(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      
      {toy ? (
        <>
        <div className="flex gap-12 justify-center items-center ">
        
        
          
          <div>
            <p><img src={toy.photo} alt="" style={{width:'400px'}}/></p>

        </div>
        <div >
          <p className="text-4xl font-bold text-cyan-800 mb-4 " style={{fontFamily: 'cursive'}}>Toy Details</p>
          


          <div>
          {toy.name? <p>Name: {toy.name}</p> : <>Name: Not Added</>}
          {toy.subCategory? <p>SubCategory: {toy.price}</p> : <>SubCategory: Not Added</>}
          {toy.price? <p>Price: {toy.price}</p> : <>Price: Not Added</>}
          {toy.rating? <p>Rating: {toy.rating}</p> : <>Rating: Not Added</>}
          {toy.quantity? <p>Quantity: {toy.quantity}</p> : <>Quantity: Not Added</>}
          {toy.sellerName? <p>Seller Name: {toy.sellerName}</p> : <></>}
          {toy.sellerEmail? <p>Seller Email: {toy.sellerEmail}</p> : <></>}
          {toy.details? <p>Description: {toy.details}</p> : <>Description: Not Added</>}
          </div>
          
          
          </div>
          
        </div>
        </>
      ) : (
        <p>Loading toy details...</p>
      )}
    </div>
   
  );
};

export default SingleToyDetails;
