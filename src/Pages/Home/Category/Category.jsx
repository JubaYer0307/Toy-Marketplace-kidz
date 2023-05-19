import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Category.css'
import Categorycard from './Categorycard';

const Category = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addatoy')
      .then((res) => res.json())
      .then((data) => setSubcategories(data));
  }, []);

  const filterBySubcategory = (subcategoryName) => {
    return subcategories.filter((subcategory) => subcategory.subcategory === subcategoryName);
  };

  return (
    <div>
      
      <Tabs>
      <h3 className="text-center text-3xl font-bold pb-1">Sub-Category</h3>
        <TabList className="tab-list">
          <Tab className="tab">Police Car</Tab>
          <Tab className="tab">Fire Car</Tab>
          <Tab className="tab">Racing Car</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory('Police Car').map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory('Fire Car').map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBySubcategory('Racing Car').map((subcategory) => (
              <Categorycard key={subcategory._id} subcategory={subcategory} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
