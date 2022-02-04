import { combineReducers, createReducer } from '@reduxjs/toolkit';
import weatherActions from './actions';

const citiesReducer = createReducer([],{
    [weatherActions.addCitySuccess]: (state, {payload})=>[
        ...state,
        payload
    ],
    [weatherActions.deleteCity]: (state, {payload})=>
    state.filter(({id})=>id !== payload),

    [weatherActions.updateCitySuccess]: (state, {payload}) =>
    state.map((city) => {
      if (city.id === payload.id) {
        return payload;
      }
      return city;
    }),
});

const cityIdReducer = createReducer("", {
    [weatherActions.cityId]: (_, {payload}) => payload,
  });
  
const hourlyWeatherReducer = createReducer([], {
    [weatherActions.getHourlyWeatherSuccess]: (_, {payload}) =>
      payload.hourly,
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
      [weatherActions.addCityError]: (_, {payload}) => ({
        error: true,
        message: payload.message,
      }),
      [weatherActions.addCitySuccess]: () => ({
        error: false,
      }),
  
      [weatherActions.updateCityError]: (_, {payload}) => ({
        error: true,
        message: payload.message,
      }),
      [weatherActions.updateCitySuccess]: () => ({
        error: false,
      }),
      [weatherActions.getHourlyWeatherError]: (_, {payload}) => ({
        error: true,
        message: payload.message,
      }),
      [weatherActions.getHourlyWeatherSuccess]: () => ({
        error: false,
      }),
      [weatherActions.errorOff]: (_, {payload}) => payload,
    }
  );

  export default combineReducers({
    citiesReducer,
    cityIdReducer,
    hourlyWeatherReducer,
    loadingReducer,
    errorReducer
  })
  