import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.openweathermap.org/data/2.5/",
    }),
    tagTypes: ["Weather"],
    endpoints: (builder)=>({
        getWeatherByCityName: builder.query({
            query: (name) => `weather?q=${name}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`,
            providesTags: ["Weather"],
        }),
        getHourlyWeather: builder.query({
            query: ({lat, lon}) => `onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`,
            providesTags: ["Weather"],
    }),
    
    }),
})


export const {
    useGetWeatherByCityNameQuery,
    useGetHourlyWeatherQuery
} = weatherApi;
