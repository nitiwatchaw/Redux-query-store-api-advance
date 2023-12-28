import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://product-store-api.onrender.com/' }),
    tagTypes: ['Product'],
    endpoints: builder => ({
        getAllItems: builder.query({
            query: () => '/products',
        }),
    }),
});

export const { useGetAllItemsQuery } = apiSlice
