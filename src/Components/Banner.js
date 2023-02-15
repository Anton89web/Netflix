import React, {useEffect, useState} from 'react';
import './Banner.css'
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    async function fetchData(){
      try {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
          request.data.results[Math.floor(Math.random() * request.data.results.length - 1) ]
        )
        return request
      } catch {
        alert("Для работы приложения потребуется использовать VPN")
      }

    }
    fetchData()
  }, [])

  console.log(movie)

  function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }

  return (
    <header className='banner'
    style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
    }}
    >
  <div className="banner__contents">
    <h1 className="banner__title">
      {movie?.name || movie?.title || movie?.original_name}
    </h1>
    <div className="banner__buttons">
      <button className='banner__button'>Play</button>
      <button className='banner__button'>My List</button>
    </div>
    <h2 className="banner__dsc">
      {truncate(movie?.overview, 180)}
    </h2>
  </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
};

export default Banner;
