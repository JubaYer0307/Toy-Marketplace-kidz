import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/mytoys?sellerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMyToys(data); 
      })
      .catch(error => console.log(error));
  }, [url]);

  return (
    <div>
      <h2>My toys</h2>
      {/* Render the myToys state data */}
      {myToys.map(toy => (
        <div key={toy.id}>{toy.name}</div>
      ))}
    </div>
  );
};

export default MyToys;
