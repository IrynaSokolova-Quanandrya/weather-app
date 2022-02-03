// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createSlice } from "@reduxjs/toolkit";
// // console.log(createSlice());
// export const cityApi = createApi({
//     reducerPath: "cityApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "/",
//     }),
//     tagTypes: ["City"],
//     endpoints: (builder)=>({
//         getAllCities: builder.query({
//             // query: (name) => `weather?q=${name}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`,
//             providesTags: ["City"],
//         }),
//         createCity: builder.mutation({
//             query: (newCity) => ({
//                url: "/cities",
//                method: "POST",
//                data: newCity 
//             }),
//             providesTags: ["City"],
//         }),
//         deleteCity: builder.mutation({
//             query: (cityId) => ({
//             url: `contacts/${cityId}`,
//             method: "DELETE",
//             }),
//             invalidatesTags: ["City"],
//         }),
        
//     }),
// })