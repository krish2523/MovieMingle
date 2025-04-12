import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const { posters, title, subTitle, isDark, config } = props;

  // Use state to track if the component has mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // Ensure this runs only once after the component mounts

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!mounted) {
    return null; // Render nothing before the component is mounted
  }

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subTitle}
        </p>
      </div>
      {config ? (
        <Slider {...config}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSlider;
