import React ,{useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';
import './Banner.css'


function Banner() {

    const [movie,setMovie]=useState([]);
    useEffect(()=> {
       async function fetchData(){
        const request =await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                
            Math.floor(Math.random() * 20)
        ]
        
        );
        return request;
        }
       fetchData();
     
      
    },[]);
  

    function truncate(str,n){
        return str?.lenght>n ? str.substr(0,n-1)+"...": str;
    }
    return (
        <div>
            <header className="banner"
            
                style ={{
                    
                    backgrounSize:"cover",
                    backgroundImage:`url(
                        "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                    )`,
                    backgroundPosition:"",
                }}
                >

                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title||movie?.name||movie?.original_name}</h1>
                    <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                    </div>



            <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
                </div>
                <div className="banner__fadeBottom"></div>
              

            </header>
            
        </div>
    )
}

export default Banner;
