import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const randomMovie = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomMovie]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+ "...":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_bt">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="banner_dsc">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fade_btn"></div>
    </header>
  );
};

export default Banner;
