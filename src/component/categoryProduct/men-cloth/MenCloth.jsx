import React from 'react'
import { useGetMenClothShopQuery } from '../../../features/product/productSlice'
import MenClothExcerpt from './MenClothExcerpt';
import Layout from '../../layout/Layout';
const MenCloth = () => {

    const { product, isLoading, isError, error } = useGetMenClothShopQuery('getMenClothShop', {
        selectFromResult: ({ data }) => ({
            product: data
        }),
    });


    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>

    return (
        <Layout>
            <div className='grid grid-product gap-6 '>
                {product?.ids.map(productId => <MenClothExcerpt key={productId} productId={productId} />)}
            </div>
        </Layout>
    )
}

export default MenCloth