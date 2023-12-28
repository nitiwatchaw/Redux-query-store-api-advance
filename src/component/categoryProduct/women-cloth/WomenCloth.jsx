import React from 'react'
import { useGetWomenClothShopQuery } from '../../../features/product/productSlice'
import WomenClothExcerpt from './WomenClothExcerpt';
import Layout from '../../layout/Layout';
const WomenCloth = () => {

    const { product, isLoading, isError, error } = useGetWomenClothShopQuery('getWomenClothShop', {
        selectFromResult: ({ data }) => ({
            product: data
        }),
    });

    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>

    return (
        <Layout>
            <div className='grid grid-product gap-6  '>
                {product?.ids.map(productId => <WomenClothExcerpt key={productId} productId={productId} />)}
            </div>
        </Layout>
    )
}

export default WomenCloth