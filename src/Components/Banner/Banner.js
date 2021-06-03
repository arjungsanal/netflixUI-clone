import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios';
import {API_KEY,imgBaseUrl} from '../../Constants/constants'

function Banner() {
    
    function getRandomArbitrary() {
        let randomIndex= Math.random() * (0 - 20) + 20;
        console.log(''+randomIndex);
        return Math.floor(randomIndex)
    }
    const [movie, setMovie] = useState();
    useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          setMovie(response.data.results[getRandomArbitrary()])
          console.log(response.data.results[19]);
      })
    },[])
    
    return (
        <div >
            <div className="banner" style ={{backgroundImage :`url(${movie ? imgBaseUrl+movie.backdrop_path : ""})`}}>
                <div className="content">
                    <h1 className='title'>{movie ? movie.title || movie.name  :  ''}</h1>
                    <div className="banner-buttons">
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className="description">{movie ? movie.overview : ''}</h1>
                    </div>
                    <div className="fade-bottom"> </div>
            </div>
        </div>
    )
}

export default Banner
