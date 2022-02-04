import axios from "axios";
import propTypes from 'prop-types';

const KEY = "40207e285e43c5b8e49ba7f2599cdd4b";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

async function fetchWeatherApi(name) {
    return axios
    .get(`weather?q=${name}&units=metric&appid=${KEY}`)
    .then((r)=>r.data)
    .catch((error) => {throw Error({message: `City ${name} not found`})})
    }
    
async function fetchHourlyWeatherApi(lat, lon){
    return axios
    .get(`onecall?lat=${lat}&lon=${lon}&appid=${KEY}`)
    .then((r)=>r.data)
    .catch((error) => {throw Error(error)})
    // try {
    //     const data = axios.get(`onecall?lat=${lat}&lon=${lon}&appid=${KEY}`)
    //     return data.data
    // } catch (error) {
    //     throw Error(error)
    // }
}
    

fetchWeatherApi.propTypes={
    name: propTypes.string.isRequired
}
fetchHourlyWeatherApi.propTypes={
    lat: propTypes.number.isRequired,
    lon: propTypes.number.isRequired
}

 const api = {
    fetchWeatherApi,
    fetchHourlyWeatherApi
}
export default api;