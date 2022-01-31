import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
    reducerPath: "cityApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.openweathermap.org/data/2.5/",
        API_KEY: '40207e285e43c5b8e49ba7f2599cdd4b'
    }),
    tagTypes: ["City"],
    endpoints: (builder)=>({
        getCityByName: builder.query({
            query: (name) => `find?q=${name}&appid=${API_KEY}`,
            providesTags: ["City"],
        }),
        getCityDitails: builder.query({
            query: (name) => `find?q=${name}&appid=${API_KEY}`,
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