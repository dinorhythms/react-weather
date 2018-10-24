import axios from 'axios';

const API_KEY = 'c1a05c82ae15f18802e2ef432f6292c4';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?&appid='

export const GET_WEATHER = 'GET_WEATHER'

export default function cityWeather(city){

    const url = `${ROOT_URL}${API_KEY}&q=${city},us`;
    const request = axios.get(url);
        
    return {
        type: GET_WEATHER,
        payload: request
    };
}