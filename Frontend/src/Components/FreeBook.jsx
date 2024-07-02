import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  const [stonex, setStonex] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      try {
        const response = await axios.get("http://localhost:4001/Stonex");
        
        const data = response.data.filter((data) => data.category === "Free");
        console.log(data)
        setStonex(data);
      } catch (error) {
        console.log(error)
      }
    }
    getInventory();
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tempora quidem reprehenderit, quos blanditiis soluta at tempore
            dolores quo iste, minus eum! Mollitia ducimus expedita perferendis,
            facilis neque illo aliquid?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {stonex.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default FreeBook;
