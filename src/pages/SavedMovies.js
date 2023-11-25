import React, { useState } from "react";
import { Link } from "react-router-dom";

const SavedMovies = () => {
  const movies = JSON.parse(localStorage.getItem("save_item"));
  const [unsaved, setUnsaved] = useState([]);
  console.log(movies);
  return (
    <div className="container d-flex flex-column align-items-center">
      <Link to="/" className="btn btn-warning mt-2">
        Home
      </Link>
      <div className="container mt-5 d-flex flex-wrap justify-content-around">
        {movies.length < 1 ? (
          <div>
            <h3 className="text-warning">No items to display</h3>
          </div>
        ) : (
          movies &&
          movies.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={
                    item.Poster === "N/A"
                      ? "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : item.Poster
                  }
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-row justify-content-between">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <h5 className="text-warning">{item.Title}</h5>
                  </Link>
                  <h5
                    className="text-secondary"
                    id="cross"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const removed = movies.filter((el) => el !== item);
                      setUnsaved(removed);
                      console.log(unsaved);
                      localStorage.setItem(
                        "save_item",
                        JSON.stringify([...removed])
                      );
                    }}
                  >
                    X
                  </h5>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SavedMovies;
