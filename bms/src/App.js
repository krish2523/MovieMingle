import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
//React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
// import PlayPage from "./pages/Play.Page";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "c096ce9a4c058f633dea0bdc4a5aed0f";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      {/* <Route path="/plays" element={<PlayPage />}  */}
    </Routes>
  );
}

export default App;
