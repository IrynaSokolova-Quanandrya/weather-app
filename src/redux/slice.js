import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
    reducerPath: "cityApi",
    baseQuery: fetchBaseQuery({
        API_KEY: '40207e285e43c5b8e49ba7f2599cdd4b',
        baseUrl: "https://api.openweathermap.org/data/2.5/",
        
    }),
    tagTypes: ["City"],
    endpoints: (builder)=>({
        getCityByName: builder.query({
            query: (name) => `weather?q=${name}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`,
            providesTags: ["City"],
        }),
        getCityDitails: builder.query({
            query: (lat, lon, part) => `onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=40207e285e43c5b8e49ba7f2599cdd4b`,
            providesTags: ["City"],
        }),
        deleteCity: builder.mutation({
            query: (cityId) => ({
            url: `contacts/${cityId}`,
            method: "DELETE",
            }),
            invalidatesTags: ["City"],
        }),
        
    }),
})

export const {
    useGetCityByNameQuery,
    useGetCityDitailsQuery,
    useDeleteCityMutation
} = cityApi;