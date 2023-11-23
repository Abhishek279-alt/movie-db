import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import { URL } from "../url";
import { useLocation } from "react-router-dom";
const Home = () => {
  const Address = URL;
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [responseError, setResponseError] = useState({ errorMsg: "" });
  const location = useLocation();
  const query = location.state;
  console.log("Query: ", query);
  const API = `${Address}${process.env.REACT_APP_API_KEY}`;
  const getMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovieData(data);
      } else {
        setResponseError({ errorMsg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      getMovies(`${API}&s=${query}`);
    }, [800]);
    return () => clearTimeout(timeout);
  }, [query]);
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Movies responseError={responseError} movieData={movieData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
