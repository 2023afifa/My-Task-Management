import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://mytaskserver.vercel.app" }),
    tagTypes: ["Tasks", "Users"],
    endpoints: () => ({}),
});


export default baseApi;