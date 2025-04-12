import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// HOC and Context
import MovieLayoutHoc from "../layout/Movie.layout";
import { MovieContext } from "../context/Movie.context";

// Components
import MovieHero from "../components/MovieHero/MovieHero.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import Cast from "../components/Cast/Cast.Component";

// Icons
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// External
import Slider from "react-slick";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch Movie Details
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const { data } = await axios.get(`/movie/${id}`);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data", error);
      }
    };
    fetchMovieData();
  }, [id]);

  // Fetch Cast
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await axios.get(`/movie/${id}/credits`);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast", error);
      }
    };
    fetchCast();
  }, [id]);

  // Fetch Similar Movies
  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const { data } = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(data.results);
      } catch (error) {
        console.error("Error fetching similar movies", error);
      }
    };
    fetchSimilar();
  }, [id]);

  // Fetch Recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(`/movie/${id}/recommendations`);
        setRecommendedMovies(data.results);
      } catch (error) {
        console.error("Error fetching recommendations", error);
      }
    };
    fetchRecommendations();
  }, [id]);

  // Set loading state to false once all data is fetched
  useEffect(() => {
    if (
      movie &&
      cast.length > 0 &&
      similarMovies.length > 0 &&
      recommendedMovies.length > 0
    ) {
      setLoading(false);
    }
  }, [movie, cast, similarMovies, recommendedMovies]);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
    ],
  };

  const castSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 5, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show a loading indicator while the data is being fetched
  }

  return (
    <>
      <MovieHero />

      <div className="container px-4 lg:ml-20 lg:w-full my-12">
        {/* About the movie */}
        <section className="flex flex-col gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </section>

        <hr className="my-8" />

        {/* Offers */}
        <section className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            {[
              {
                icon: <FaCcVisa className="w-full h-full" />,
                title: "Visa Stream Offer",
                desc: "Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.",
              },
              {
                icon: <FaCcApplePay className="w-full h-full" />,
                title: "Film Pass",
                desc: "Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md"
              >
                <div className="w-8 h-8">{offer.icon}</div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-8" />

        {/* Cast and Crew */}
        <section className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...castSettings}>
            {cast.map((castMember) => (
              <Cast
                key={castMember.cast_id}
                image={castMember.profile_path}
                castName={castMember.original_name}
                role={castMember.character}
              />
            ))}
          </Slider>
        </section>

        <hr className="my-8" />

        {/* Recommended Movies */}
        <PosterSlider
          config={sliderSettings}
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />

        <hr className="my-8" />

        {/* BMS Exclusive */}
        <PosterSlider
          config={sliderSettings}
          title="BMS XCLUSIVE"
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
