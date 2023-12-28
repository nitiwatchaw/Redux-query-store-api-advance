import React from 'react'
import { useGetElectronicsShopQuery } from '../../../features/product/productSlice'
import ElectronicsExcerpt from './ElectronicsExcerpt';
import Layout from '../../layout/Layout';
const Electronics = () => {


    const { product, isLoading, isError, error } = useGetElectronicsShopQuery('getElectronicsShop', {
        selectFromResult: ({ data }) => ({
            product: data
        }),
    });

    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>


    return (
        <Layout>
            <div className='grid grid-product gap-6'>
                {product?.ids.map(productId => <ElectronicsExcerpt key={productId} productId={productId} />)}
            </div>
        </Layout>
    )
}

export default Electronics