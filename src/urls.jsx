import {API_KEY} from './Constants/constants'

export const netflixOrginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actionSeries= `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedySeries =`discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horrorSeries = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romanticSeries =`discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const docSeries =`discover/movie?api_key=${API_KEY}&with_genres=99`