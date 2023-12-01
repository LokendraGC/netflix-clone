import React, { useEffect, useState } from 'react'
import axios from './axios.js'
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const baseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies,setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("");

    
    // if [], run once when the row loads, and don't run again
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    
    
    const opts= {
        height:"390",
        width:"100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        }
    }
    
    const handleClick= (movie)=>{
        if(trailerUrl){
            settrailerUrl("");
        }else{
            movieTrailer(movie?.title || movie?.original_name || movie?.name)
              .then((url) => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get("v"));
              })
              .catch((err) => 
              console.log(err)
              );
              settrailerUrl("");
        }
    }

    
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
        {/* severl row poster */}
        {movies.map((movie) => (
          <img
            onClick={()=>handleClick(movie)}
            key={movie.id}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className="img"
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row