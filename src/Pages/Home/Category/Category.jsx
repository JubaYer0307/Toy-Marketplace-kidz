import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Categorycard from "./Categorycard";

const Category = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addatoy")
      .then((res) => res.json())
      .then((data) => setSubcategories(data));
  }, []);

  const filterBySubcategory = (subcategoryName) => {
    return subcategories.filter((subcategory) => subcategory.subcategory === subcategoryName);
  };

  return (
    <div>
      <div className="text-center">
        <h3 className="text-5xl font-bold">Features</h3>
      </div>
      <Tabs>
        <TabList>
          <Tab>Police Car</Tab>
          <Tab>Fire Car</Tab>
          <Tab>Racing Car</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory("Police Car").map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory("Fire Car").map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory("Racing Car").map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
