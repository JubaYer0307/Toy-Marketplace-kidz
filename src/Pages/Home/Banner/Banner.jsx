import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div
      className="carousel w-full h-[600px]"
      style={{ fontFamily: "cursive" }}
      data-aos="fade-up-left"
    >
      <div className="carousel-item relative w-full">
        <img src="https://i.ibb.co/PxZHrGZ/gif1.gif" className="w-full" />
        <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
          <div className="text-slate-600 font-bold">
            <h2 className="text-6xl">Best Car Toys For Kids</h2>

            <p>We have many variations of car toys.</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
