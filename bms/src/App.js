import "./App.css";
import { Route, Routes } from "react-router-dom";
//React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

function App() {
  return (
    <Routes>
      <Route path='= "/" element = {<HomePage/>'></Route>
      <Route path='= "/movie/:id" element = {<MoviePage/>'></Route>
      <Route path='= "/plays" element = {<PlayPage/>'></Route>
    </Routes>
  );
}

export default App;
