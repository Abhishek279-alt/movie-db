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

{
  /* <p className="card-text text-white d-flex justify-content-between">
<span>{movieData.Year}</span>
<span className="d-flex align-items-center">
  {movieData.imdbRating > 5 ? (
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
  {movieData.imdbRating}
</span>
</p> */
}

export default Movies;
