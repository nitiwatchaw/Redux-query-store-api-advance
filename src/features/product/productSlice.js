import { apiSlice } from '../api/apiSlice';
import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';


const productsAdapter = createEntityAdapter({})

const initialState = productsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllItemsShop: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });
                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        getJeweryShop: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.filter((product) => product?.category === 'jewelery').map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });

                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        getElectronicsShop: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.filter((product) => product?.category === 'electronics').map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });

                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        getMenClothShop: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.filter((product) => product?.category === "men's clothing").map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });

                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        getWomenClothShop: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.filter((product) => product?.category === "women's clothing").map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });

                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        getLikedProduct: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const loadedProducts = res.filter((product) => product?.like === true).map((product) => {
                    if (!product?.like) product.like = false;
                    return product;
                });

                return productsAdapter.setAll(initialState, loadedProducts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: "LIST" },
                ...result?.ids.map(id => ({ type: 'Product', id }))
            ],
        }),
        getProductByProductId: builder.query({
            query: id => `/product/${id}`,
            providesTags: (result, error, arg) => [
                ...result.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
        addNewProduct: builder.mutation({
            query: initialProduct => ({
                url: '/products',
                method: 'POST',
                body: {
                    ...initialProduct,
                    like: false
                }
            }),
            invalidatesTags: [{ type: 'Product' }]
        }),
        deleteProduct: builder.mutation({
            query: ({ id }) => ({
                url: `products/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Product', id: arg.id }
            ]
        }),
        updateProduct: builder.mutation({
            query: initialProduct => ({
                url: `/products/${initialProduct.id}`,
                method: 'PUT',
                body: {
                    ...initialProduct,
                    like: false
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Product', id: arg.id }
            ]
        }),
        addLike: builder.mutation({
            query: ({ productId, like }) => ({
                url: `products/${productId}`,
                method: 'PATCH',
                body: { like }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Product', id: arg.id }
            ],
            // ใช้ในการอัพเดทค่าทันที ไม่ต้องรอ refresh data
            async onQueryStarted({ productId, like }, { dispatch }) {
                dispatch(
                    extendedApiSlice.util.updateQueryData('getAllItemsShop', 'getAllItemsShop', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
                dispatch(
                    extendedApiSlice.util.updateQueryData('getJeweryShop', 'getJeweryShop', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
                dispatch(
                    extendedApiSlice.util.updateQueryData('getElectronicsShop', 'getElectronicsShop', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
                dispatch(
                    extendedApiSlice.util.updateQueryData('getMenClothShop', 'getMenClothShop', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
                dispatch(
                    extendedApiSlice.util.updateQueryData('getWomenClothShop', 'getWomenClothShop', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
                dispatch(
                    extendedApiSlice.util.updateQueryData('getLikedProduct', 'getLikedProduct', draft => {
                        const product = draft.entities[productId];
                        if (product) product.like = like;
                    }),
                );
            },
        }),
    })
});

export const {
    useGetAllItemsShopQuery,
    useGetJeweryShopQuery,
    useGetElectronicsShopQuery,
    useGetMenClothShopQuery,
    useGetWomenClothShopQuery,
    useGetLikedProductQuery,
    useGetProductByProductIdQuery,
    useAddNewProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useAddLikeMutation
} = extendedApiSlice;


export const selectProductsResult = extendedApiSlice.endpoints.getAllItemsShop.select()

const selectProductsData = createSelector(
    selectProductsResult,
    productResult => productResult.data
)

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
    selectIds: selectProductIds
    // Pass in a selector that returns the posts slice of state
} = productsAdapter.getSelectors(state => selectProductsData(state) ?? initialState)