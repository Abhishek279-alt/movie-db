import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.953)" }}
      >
        <div className="container-fluid p-3">
          <Link className="navbar-brand text-warning fw-bold" to="/">
            MovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <form className="d-flex w-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search movie..."
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  navigate("/", { state: search });
                }}
              />
              <button
                className="btn btn-outline-warning"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/", { state: search });
                  setSearch("");
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
