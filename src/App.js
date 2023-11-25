import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SavedMovies from "./pages/SavedMovies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<Movie />} />
        <Route path="/saved" element={<SavedMovies />} />
      </Routes>
    </>
  );
}

export default App;
