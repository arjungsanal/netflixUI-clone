import React, {useEffect,useState} from 'react';
import YouTube from 'react-youtube';
import './Rowpost.css';
import axios from '../../axios';
import {imgBaseUrl, API_KEY} from '../../Constants/constants'
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlid, setUrlid] = useState('');

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    useEffect(()=>{
        axios.get(props.source).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        }) 
    },[]);

    const handleMovie =(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setUrlid(response.data.results[0])
        }
    })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
               {
                   movies.map((obj)=>

                       <img onClick={()=>{
                         handleMovie(obj.id);
                       }} loading='lazy' className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgBaseUrl+obj.backdrop_path}`} />
                   )
               }
        </div>

      { urlid && <YouTube videoId={urlid.key} opts={opts}  />}
        </div>
    )
}

export default RowPost