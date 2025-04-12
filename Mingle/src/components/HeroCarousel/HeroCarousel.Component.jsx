import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [Images] = useState([
    {
      backdrop_path: "/zD5v1E4joAzFvmAEytt7fM3ivyT.jpg",
      title: "Dragon Ball Super: Super Hero",
    },
    {
      backdrop_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      title: "Fall",
    },
    {
      backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
      title: "Fall",
    },
    {
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      title: "Fall",
    },
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Mobile + Tablet */}
      <div className="block lg:hidden">
        <HeroSlider {...settingsLG}>
          {Images.map((image, index) => (
            <div key={index} className="w-full h-56 sm:h-72 md:h-80 py-3 px-2">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* Large screens */}
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {Images.map((image, index) => (
            <div key={index} className="w-full h-96 py-3 px-2">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
