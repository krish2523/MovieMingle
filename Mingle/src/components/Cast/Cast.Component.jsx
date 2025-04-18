import React from "react";

const Cast = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img
          src={`https://image.tmdb.org/t/p/original${props.image}`}
          alt="cast and crew members"
          className="w-full h-full rounded-full object-center object-cover"
        />
      </div>
      <h1 className="text-xl text-gray-800 text-center">{props.castName}</h1>
      <h5 className="text-sm text-gray-500 text-center">as {props.role}</h5>
    </div>
  );
};

export default Cast;
