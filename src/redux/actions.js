import { createAction } from "@reduxjs/toolkit";

export const addCityRequest = createAction("city/addCityRequest")
export const addCitySuccess = createAction("city/addCitySuccess")
export const addCityError = createAction("city/addCityError")

export const fetchCityRequest = createAction("city/fetchCityRequest")
export const fetchCitySuccess = createAction("city/fetchCitySuccess")
export const fetchCityError = createAction("city/fetchCityError")

export const deleteCityRequest = createAction("city/deleteCityRequest")
export const deleteCitySuccess = createAction("city/deleteCitySuccess")
export const deleteCityError = createAction("city/deleteCityError")
