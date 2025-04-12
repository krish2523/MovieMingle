import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const { posters, title, subTitle, isDark, config } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!mounted || !posters || posters.length === 0) return null;

  return (
    <div className="w-full mb-4">
      <div className="sm:ml-3 ml-0 my-2">
        <h3
          className={`text-xl md:text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subTitle}
        </p>
      </div>

      <Slider {...(config || defaultSettings)}>
        {posters.map((each, index) => (
          <Poster {...each} isDark={isDark} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default PosterSlider;
