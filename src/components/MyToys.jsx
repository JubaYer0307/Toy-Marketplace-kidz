import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);

  const url = `http://localhost:5000/addatoy`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMytoys(data); // Update the mytoys state with the fetched data
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>My toys</h2>
      {/* Render the mytoys state data */}
      {mytoys.map(toy => (
        <div key={toy.id}>{toy.name}</div>
      ))}
    </div>
  );
};

export default MyToys;
