import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ responseError, movieData }) => {
  return (
    <div className="list-container d-flex flex-row flex-wrap justify-content-between align-items-center">
      {movieData.Search.map((movie, index) => {
        return (
          <Link
            to={`/movie/${movie.Title.toLowerCase()}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <div className="card mb-4">
              <img
                src={
                  movie.Poster === "N/A"
                    ? "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    : movie.Poster
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="mb-1">
                  <h5 className="card-title text-warning">{movie.Title}</h5>
                </span>
                <span>
                  <h6 className="card-title text-warning">{movie.Year}</h6>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
