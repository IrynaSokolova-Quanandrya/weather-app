import { createAction } from "@reduxjs/toolkit";

 const addCityRequest = createAction("city/addCityRequest");
 const addCitySuccess = createAction("city/addCitySuccess");
 const addCityError = createAction("city/addCityError");

 const updateCityRequest = createAction("city/updateCityRequest");
 const updateCitySuccess = createAction("city/updateCitySuccess");
 const updateCityError = createAction("city/updateCityError");

 const getHourlyWeatherRequest = createAction("city/getHourlyRequest");
 const getHourlyWeatherSuccess = createAction("city/getHourlySuccess");
 const getHourlyWeatherError = createAction("city/getHourlyError");

 const cityId = createAction("city/cityId");

 const deleteCity = createAction("city/deleteCity");

 const errorOff = createAction("error/off");

 const weatherActions = {
    addCityRequest,
    addCitySuccess,
    addCityError,
    updateCityRequest,
    updateCitySuccess,
    updateCityError,
    getHourlyWeatherRequest,
    getHourlyWeatherSuccess,
    getHourlyWeatherError,
    cityId,
    deleteCity,
    errorOff,
 }
 export default weatherActions;