import React, { useEffect, useState } from "react";
import Categorycard from "./Categorycard";

const Category = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addatoy")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-5xl font-bold">Features</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            categorys.map(category => <Categorycard
            key={category.id} category={category}></Categorycard>)
        }
      </div>
    </div>
  );
};

export default Category;
