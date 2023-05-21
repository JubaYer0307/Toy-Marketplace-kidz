import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopNow = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div data-aos="fade-right">
      <img
        style={{ height: "200px", width: "600px" }}
        className="mx-auto"
        src="https://i.ibb.co/cFS0jFb/Shop-Now.gif"
        alt=""
      />
    </div>
  );
};

export default ShopNow;
