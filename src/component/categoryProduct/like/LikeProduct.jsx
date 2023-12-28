import React, { useEffect } from 'react'
import { useGetLikedProductQuery } from '../../../features/product/productSlice'
import LikeExerpt from './LikeExerpt';
import Layout from '../../layout/Layout';
const LikeProduct = () => {



    const { product, isLoading, isError, error } = useGetLikedProductQuery('getLikedProduct', {
        selectFromResult: ({ data }) => ({
            product: data
        }),
    });



    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>





    return (
        <Layout>
            <div className='grid grid-product gap-6 '>
                {product?.ids.map(productId => <LikeExerpt key={productId} productId={productId} />)}
            </div>
        </Layout>
    )
}

export default LikeProduct