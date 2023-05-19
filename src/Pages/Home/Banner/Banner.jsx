import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div className="carousel-item relative w-full">
        <img 
          src="https://i.ibb.co/PxZHrGZ/gif1.gif"
          className="w-full"
        />
        <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
          <div className="text-white font-bold">
            <h2 className="text-6xl">Best Car Toys For Kids</h2>
          
          <p>We have many variation of car toy.</p>
          <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
        
      </div>
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/phNxYkG/car2.jpg
          "
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/Yh5QJBC/car3.jpg
          "
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/kMjQQmM/car4.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
