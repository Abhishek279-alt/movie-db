/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { URL } from "../url";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const { title } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [saved, setSaved] = useState(
    JSON.parse(localStorage.getItem("save_item"))
      ? JSON.parse(localStorage.getItem("save_item"))
      : []
  );
  const [bookmarked, setBookMarked] = useState(false);
  const API = `${URL}${process.env.REACT_APP_API_KEY}`;
  const showMovie = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      showMovie(`${API}&t=${title}`);
    }, [500]);
    return () => clearTimeout(timeout);
  }, [API, title]);

  return (
    <div className="container mt-3">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row offset-md-3">
            <div className="col-md-3 col-sm-12">
              <div className="card movie-card">
                <img
                  src={
                    movie.Poster === "N/A"
                      ? "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : movie.Poster
                  }
                  className="card-img-top"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-around">
              <div className="mb-1">
                <span className="text-warning fs-5">Name: </span>
                <span className="text-white fs-5">{movie.Title}</span>
              </div>
              <div className="mb-1">
                <span className="text-warning fs-5">Released: </span>
                <span className="text-white fs-5">{movie.Year}</span>
              </div>
              <div className="mb-1">
                <span className="text-warning fs-5">Runtime: </span>
                <span className="text-white fs-5">{movie.Runtime}</span>
              </div>
              <div className="mb-1">
                <span className="text-warning fs-5">Country: </span>
                <span className="text-white fs-5">{movie.Country}</span>
              </div>
              <div className="mb-1 d-flex flex-row">
                <span className="text-white d-flex align-items-center">
                  {movie.imdbRating > 5 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star-filled"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star-half-filled"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-white fs-6">{movie.imdbRating}</span>
                <span className="ms-3">
                  <a
                    href="#"
                    onClick={() => {
                      if (bookmarked === false) {
                        setBookMarked(true);
                        setSaved((prev) => [...prev, movie]);
                        localStorage.setItem(
                          "save_item",
                          JSON.stringify([...saved, movie])
                        );
                      } else {
                        setBookMarked(false);
                      }
                    }}
                  >
                    {bookmarked ? (
                      <i
                        class="fa-solid fa-bookmark"
                        style={{ color: "#ebbb0f" }}
                      ></i>
                    ) : (
                      <i
                        class="fa-regular fa-bookmark"
                        style={{ color: "#ffffff" }}
                      ></i>
                    )}
                  </a>
                </span>
                <span className="ms-3">
                  <Link
                    to="/"
                    className="btn btn-sm btn-warning"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Back to Homepage
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Plot: </span>
              <span className="text-secondary fs-4">{movie.Plot}</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Genre: </span>
              <span className="text-secondary fs-4">{movie.Genre}</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Cast: </span>
              <span className="text-secondary fs-4">{movie.Actors}</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Language: </span>
              <span className="text-secondary fs-4">{movie.Language}</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Director: </span>
              <span className="text-secondary fs-4">{movie.Director}</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <span className="text-warning fs-4">Writer: </span>
              <span className="text-secondary fs-4">{movie.Writer}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
