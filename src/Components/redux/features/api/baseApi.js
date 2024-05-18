import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
        addTasks: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task,
            })
        }),
        updateTasks: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
        })
    }),
});


export const { useGetTasksQuery, useUpdateTasksMutation, useAddTasksMutation } = baseApi;


export default baseApi;