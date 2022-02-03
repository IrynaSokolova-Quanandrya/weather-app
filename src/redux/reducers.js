import { combineReducers, createReducer } from '@reduxjs/toolkit';
import weatherActions from './actions';

const citiesReducer = createReducer([],{
    [weatherActions.addCitySuccess]: (state, action)=>[
        ...state,
        action.payload
    ],
    [weatherActions.deleteCity]: (state, action)=>
    state.filter(({id})=>id !== action.payload),
    [weatherActions.updateCitySuccess]: (state, action) =>
    state.map((name) => {
      if (name.id === action.payload.id) {
        return action.payload;
      }
      return name;
    }),
});

const cityIdReduces = createReducer("", {
    [weatherActions.cityId]: (_, action) => action.payload,
  });
  
const hourlyWeatherReducer = createReducer([], {
    [weatherActions.getHourlyWeatherSuccess]: (_, action) =>
      action.payload.hourly,
  });
  
const loadingReducer = createReducer(false, {
    [weatherActions.addCityRequest]: () => true,
    [weatherActions.addCitySuccess]: () => false,
    [weatherActions.addCityError]: () => false,
    [weatherActions.updateCityRequest]: () => true,
    [weatherActions.updateCitySuccess]: () => false,
    [weatherActions.updateCityError]: () => false,
    [weatherActions.getHourlyWeatherRequest]: () => true,
    [weatherActions.getHourlyWeatherSuccess]: () => false,
    [weatherActions.getHourlyWeatherError]: () => false,
  });
  
const errorReducer = createReducer(
    { error: false },
    {
      [weatherActions.addCityError]: (_, action) => ({
        error: true,
        message: action.payload.message,
      }),
      [weatherActions.addCitySuccess]: () => ({
        error: false,
      }),
  
      [weatherActions.updateCityError]: (_, action) => ({
        error: true,
        message: action.payload.message,
      }),
      [weatherActions.updateCitySuccess]: () => ({
        error: false,
      }),
      [weatherActions.getHourlyWeatherError]: (_, action) => ({
        error: true,
        message: action.payload.message,
      }),
      [weatherActions.getHourlyWeatherSuccess]: () => ({
        error: false,
      }),
      [weatherActions.errorOff]: (_, action) => action.payload,
    }
  );

  export default combineReducers({
    citiesReducer,
    cityIdReduces,
    hourlyWeatherReducer,
    loadingReducer,
    errorReducer
  })
  