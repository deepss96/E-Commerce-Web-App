import React from "react";
import img from "../assets/img-1.jpg"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-20">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to Shop something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
            font-semibold
              delectus corporis dolores?
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300 ">Get Started</button>
        </div>
        <div className="order-1 md:w-1/2 w-full md:h-1/2 h-full md:m-20">
         <img src={img} className="h-92 rounded-3xl md:pt-0 pt-16 " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
