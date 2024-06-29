import React from "react";
import PropTypes from "prop-types";
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-pink-300 dark:text-black">
          <figure>
            <img className="cursor-pointer"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200
               hover:py-3 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  item: PropTypes.any.isRequired, // Change 'any' to the expected type of 'item'
};

export default Cards;
