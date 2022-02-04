import axios from 'axios';
import api from '../services/fetchApi';
import weatherActions from './actions';

export const addCity = (cityName, citiesList) => async (dispatch) => {
    dispatch(weatherActions.addCityRequest());
    try {
      const data = await api.fetchWeatherApi(cityName);
      const city = citiesList.find(({ id }) => id === data.id);
      if(!city){
        dispatch(weatherActions.addCitySuccess(data)
        )}        
        dispatch(
            weatherActions.addCityError({
              message: `City ${cityName} already exist`,
            })
          );
    } catch (error) {
      dispatch(weatherActions.addCityError(error));
    }
  }; 

  export const updateCity = (cityName) => async (dispatch) => {
    dispatch(weatherActions.updateCityRequest());
    try {
      const data = await api.fetchWeatherApi(cityName);
      dispatch(weatherActions.updateCitySuccess(data));
    } catch (error) {
      dispatch(weatherActions.updateCityError(error));
    }
  };
  
  export const getHourlyWeather = (lat, lon) => async (dispatch) => {
    dispatch(weatherActions.getHourlyWeatherRequest());
    try {
      const data = await api.fetchHourlyWeatherApi(lat, lon);
  
      dispatch(weatherActions.getHourlyWeatherSuccess(data));
    } catch (error) {
      dispatch(weatherActions.getHourlyWeatherError(error));
    }
  };