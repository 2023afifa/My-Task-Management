import baseApi from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["Users"],
        }),
        addUsers: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Users"],
        }),
    })
});


export const { useGetUsersQuery, useAddUsersMutation } = userApi;