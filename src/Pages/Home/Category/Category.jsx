import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Category.css";
import Categorycard from "./Categorycard";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-eta.vercel.app/addatoy")
      .then((res) => res.json())
      .then((data) => setSubcategories(data));
  }, []);

  const filterBySubcategory = (subcategoryName) => {
    return subcategories.filter(
      (subcategory) => subcategory.subcategory === subcategoryName
    );
  };

  return (
    <div data-aos="fade-up-right" className="mt-5 mb-5">
      <Tabs>
        <h3
          className="text-center text-3xl font-bold pb-1"
          style={{ fontFamily: "cursive" }}
        >
          Select Car Type
        </h3>
        <TabList className="tab-list font-medium">
          <Tab className="tab">Police Car</Tab>
          <Tab className="tab">Fire Car</Tab>
          <Tab className="tab">Racing Car</Tab>
        </TabList>
        <TabPanel className="mt-5">
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
