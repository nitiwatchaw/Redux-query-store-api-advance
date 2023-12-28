import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllItemsShopQuery, selectProductIds } from '../../../features/product/productSlice'
import ProductExcerpt from './ProductExcerpt'
import Layout from '../../layout/Layout';
const AllProduct = () => {

    const { isLoading, isError, error } = useGetAllItemsShopQuery()

    const orderedProductsIds = useSelector(selectProductIds)

    if (isLoading) return <p>Loading...</p>
    else if (isError) return <p>{error}</p>

    return (
        <Layout>
            <div className='grid grid-product gap-6 '>
                {orderedProductsIds.map(productId => <ProductExcerpt key={productId} productId={productId} />)}
            </div>
        </Layout>
    )
}

export default AllProduct