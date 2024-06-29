import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="justify-center items-center text-center ">
          <h1 className="text-2xl md:text-4xl pt-28">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti, explicabo, natus minima, veniam provident ipsum molestiae voluptas quo quasi ad reprehenderit. Voluptatum consequuntur minus voluptas fugit possimus porro provident quidem harum incidunt, quo corrupti asperiores adipisci natus. Nam, architecto quas. Itaque, nemo totam dicta veniam amet at ducimus praesentium id culpa laboriosam sit voluptates architecto incidunt magnam pariatur debitis obcaecati exercitationem necessitatibus perferendis.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Course;