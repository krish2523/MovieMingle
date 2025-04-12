import React from "react";
import { Link } from "react-router-dom";

const Poster = ({ id, poster_path, original_title, isDark }) => {
  return (
    <Link to={`/movie/${id}`} className="w-full">
      <div className="flex flex-col items-start gap-2 w-full px-1 md:px-3">
        <div className="w-full aspect-[2/3]">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />
        </div>
        <h3
          className={`text-sm md:text-base lg:text-lg font-semibold truncate ${
            isDark ? "text-white" : "text-gray-800"
          }`}
          title={original_title}
        >
          {original_title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
