import React from 'react'
import { useGetJeweryShopQuery } from '../../../features/product/productSlice'
import Layout from '../../layout/Layout'
import JeweleryExcerpt from './JeweleryExcerpt'
const Jewelery = () => {

    const { product, isLoading, isError, error } = useGetJeweryShopQuery('getJeweryShop', {
        selectFromResult: ({ data }) => ({
            product: data
        }),
    });



    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>


    return (
        <Layout>

            <div className='grid grid-product gap-6 '>
                {product?.ids.map(productId => <JeweleryExcerpt key={productId} productId={productId} />)}
            </div>

        </Layout>
    )
}

export default Jewelery